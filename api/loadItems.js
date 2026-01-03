
import populateItems from '@/api/populateItems';

export default async (context, service, options = {}) => {

  const {
    page,
    limit,
    where,
    search,
    sortField,
    sortDirection,
    relations,
    fields,
  } = {
    page: 1,
    limit: 24,
    where: {},
    search: undefined,
    sortField: 'title',
    sortDirection: 'asc',
    relations: null,
    fields: ['title', 'slug'],
    condition: undefined,
    ...options
  }

  const condition = options.condition || {
    offline: { $ne: true },
    private: { $ne: true },
    ...where
  };

  const skip = (page - 1) * limit;

  let items = await context.$content(context.i18n.locale, service)
    .search(search)
    .where(condition)
    .sortBy(sortField, sortDirection)
    .skip(skip)
    .limit(limit)
    .only(fields)
    .fetch();

  if (relations && relations.length) {
    for (let index = 0; index < relations.length; index++) {
      items = await populateItems(context, [...items], relations[index]);
    }
  }

  const totalItems = await context.$content(context.i18n.locale, service)
    .search(search)
    .where(condition)
    .only([])
    .fetch();

  const total = totalItems.length;
  const totalPage = total / limit;

  return {
    items,
    total,
    page,
    totalPage,
    limit
  }
}