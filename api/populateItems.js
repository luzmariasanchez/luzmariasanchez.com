
const defaultOptions = {
  service: '',
  fields: ['title', 'slug'],
  parentField: null,
  childField: 'slug',
  keyField: null,
  many: false,
  // relations: null
}

async function assignRelations(context, items, options = {}) {

  const { service, fields, parentField, childField, keyField } = {
    ...defaultOptions,
    ...options
  }

  const parentKey = parentField || service;

  const relatedIds = [...new Set(items.map(item => item[parentKey]).flat())];
  if (!relatedIds.length) return items;

  const relateds = await context.$content(context.i18n.locale, service)
    .where({ offline: { $ne: true }, [childField]: { $in: relatedIds } })
    .only(fields)
    .fetch();

  const relatedsById = relateds.reduce((previousValue, currentValue) => {
    return {
      ...previousValue,
      [currentValue[childField]]: currentValue
    };
  }, {})

  const fieldKey = keyField || parentKey;

  const relationedItems = items.map(item => {

    const relations = (item[parentKey] || [])
      .map(parentValue => relatedsById[parentValue])
      .filter(relation => relation)

    return {
      ...item,
      [fieldKey]: relations
    }
  })

  return relationedItems;
}

async function assignRelation(context, items, options = {}) {

  const { service, fields, parentField, childField, keyField } = {
    ...defaultOptions,
    ...options
  }

  const parentKey = parentField || service;

  const relatedIds = [...new Set(items.map(item => item[parentKey]))];
  if (!relatedIds.length) return items;

  const relateds = await context.$content(context.i18n.locale, service)
    .where({ offline: { $ne: true }, [childField]: { $in: relatedIds } })
    .only(fields)
    .fetch();

  const relatedsById = relateds.reduce((previousValue, currentValue) => {
    return {
      ...previousValue,
      [currentValue[childField]]: currentValue
    };
  }, {})

  const fieldKey = keyField || parentKey;

  const relationedItems = items.map(item => {
    return {
      ...item,
      [fieldKey]: relatedsById[item[parentKey]]
    }
  })

  return relationedItems;
}

export default async function populateItems(context, items, options = {}) {

  if (options.many) {
    return assignRelations(context, items, options);
  } else {
    return assignRelation(context, items, options);
  }

}