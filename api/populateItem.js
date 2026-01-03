
import populateItems from '@/api/populateItems';

const defaultOptions = {
  service: '',
  fields: ['title', 'slug'],
  parentField: null,
  childField: 'slug',
  keyField: null,
  many: false,
  relations: null
}

async function assignRelations(context, item, options = {}) {

  const { service, fields, parentField, childField, keyField, relations } = {
    ...defaultOptions,
    ...options
  }

  const parentKey = parentField || service;

  const relatedIds = item[parentKey];
  if (!relatedIds || !relatedIds.length) return item;

  let relatedItems = await context.$content(context.i18n.locale, service)
    .where({ offline: { $ne: true }, [childField]: { $in: relatedIds } })
    .only(fields)
    .fetch();

  if (relations && relations.length) {
    for (let index = 0; index < relations.length; index++) {
      relatedItems = await populateItems(context, [...relatedItems], relations[index]);
    }
  }

  const relatedsById = relatedItems.reduce((previousValue, currentValue) => {
    return {
      ...previousValue,
      [currentValue[childField]]: currentValue
    };
  }, {})

  const fieldKey = keyField || parentKey;

  const relateds = (item[parentKey] || [])
    .map(parentValue => relatedsById[parentValue])
    .filter(relation => relation)

  return {
    ...item,
    [fieldKey]: relateds
  };

}

async function assignRelation(context, item, options = {}) {

  const { service, fields, parentField, childField, keyField, relations } = {
    ...defaultOptions,
    ...options
  }

  const parentKey = parentField || service;

  const relatedId = item[parentKey];
  if (!relatedId) return item;

  const relateds = await context.$content(context.i18n.locale, service)
    .where({ offline: { $ne: true }, [childField]: relatedId })
    .only(fields)
    .fetch();

  let related = relateds[0];

  if (relations && relations.length) {
    for (let index = 0; index < relations.length; index++) {
      related = await populateItem(context, related, relations[index]);
    }
  }

  const fieldKey = keyField || parentKey;

  return {
    ...item,
    [fieldKey]: related
  };

}


export default async function populateItem(context, item, options = {}) {

  if (options.many) {
    return assignRelations(context, item, options);
  } else {
    return assignRelation(context, item, options);
  }

}

