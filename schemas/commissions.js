import {
  isBoolean,
  isDates,
  isUrl,
  isImage,
  isString,
  required,
  isArray,
  hasRelations,
} from '../validation'

export default {
  title: {
    required: required(),
    isString: isString(),
  },
  offline: {
    isBoolean: isBoolean(),
  },
  start: {
    isString: isString(),
    isDate: isDates(['YYYY', 'YYYY/MM', 'YYYY/MM/DD']),
  },
  end: {
    isString: isString(),
    isDate: isDates(['YYYY', 'YYYY/MM', 'YYYY/MM/DD']),
  },
  address: {
    isString: isString(),
  },
  juryLabel: {
    isString: isString(),
  },
  jury: {
    isString: isString(),
  },
  url: {
    isUrl: isUrl(),
  },
  urlLabel: {
    isString: isString(),
  },
  image: {
    isUrl: isUrl(),
    isImage: isImage(),
  },
  collections: {
    isArray: isArray(),
    hasRelations: hasRelations('collections'),
  },
  commissions: {
    isArray: isArray(),
    hasRelations: hasRelations('commissions'),
  },
  grants: {
    isArray: isArray(),
    hasRelations: hasRelations('grants'),
  },
  prizes: {
    isArray: isArray(),
    hasRelations: hasRelations('prizes'),
  },
  residencys: {
    isArray: isArray(),
    hasRelations: hasRelations('residencys'),
  },
  collectionsLabel: {
    isString: isString(),
  },
  commissionsLabel: {
    isString: isString(),
  },
  grantsLabel: {
    isString: isString(),
  },
  prizesLabel: {
    isString: isString(),
  },
  residencysLabel: {
    isString: isString(),
  },
}