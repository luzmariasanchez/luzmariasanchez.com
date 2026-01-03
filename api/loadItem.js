
import populateItem from '@/api/populateItem';

export default async (context, service, options = {}) => {

  const {
    slug,
    relations,
    fields,
  } = {
    slug: null,
    relations: null,
    ...options
  }

  const condition = {
    offline: { $ne: true },
    slug
  };

  let item, error;
  const items = await context.$content(context.i18n.locale, service)
    .where(condition)
    .fetch();

  if (items.length) {
    item = items[0];

    if (relations && relations.length) {
      for (let index = 0; index < relations.length; index++) {
        item = await populateItem(context, item, relations[index]);
      }
    }

  } else {
    error = new Error('Not found');
  }

  return {
    item,
    error,
  }
}