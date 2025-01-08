import {
  isBoolean,
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
  collection: {
    isString: isString(),
  },
  address: {
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