import {
  hasRelation,
  hasRelations,
  isArray,
  isBoolean,
  isDate,
  isDates,
  isImage,
  isNumber,
  isString,
  isUrl,
  isVideoUrl,
  maxLength,
  minLength,
  required,
  iff,
  eq,
  gto,
  gteo,
} from '../validation'

export default {
  offline: {
    isBoolean: isBoolean()
  },
  private: {
    isBoolean: isBoolean()
  },
  title: {
    required: required(),
    isString: isString(),
  },
  description: {
    isString: isString(),
    maxLength: maxLength(100),
  },
  image: {
    required: required(),
    isUrl: isUrl(),
    isImage: isImage(),
  },
  imageLegend: {
    isUrl: isString(),
  },
  video: {
    isUrl: isUrl(),
    isVideoUrl: isVideoUrl(),
  },
  start: {
    required: required(),
    isString: isString(),
    isDate: isDates(['YYYY', 'YYYY/MM', 'YYYY/MM/DD']),
    isDateIf: iff({ isEvent: eq(true) }, isDate('YYYY/MM/DD')),
  },
  end: {
    isString: isString(),
    isDate: isDates(['YYYY', 'YYYY/MM', 'YYYY/MM/DD']),
    requiredIf: iff({ isEvent: eq(true) }, required()),
    isDateIf: iff({ isEvent: eq(true) }, isDate('YYYY/MM/DD')),
    greaterThanStart: iff({ end: required() }, gteo('start')),
  },
  isEvent: {
    isBoolean: isBoolean()
  },
  isPermanent: {
    isBoolean: isBoolean()
  },
  info: {
    isString: isString(),
  },
  place: {
    isString: isString(),
    hasRelation: hasRelation('places'),
    requiredIfEvent: iff({ isEvent: eq(true) }, required()),
    requiredIfPermanent: iff({ isPermanent: eq(true) }, required()),
  },
  categorys: {
    isArray: isArray(),
    hasRelations: hasRelations('categorys'),
  },
  tags: {
    isArray: isArray(),
    hasRelations: hasRelations('tags'),
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
  sponsors: {
    isArray: isArray(),
    hasRelations: hasRelations('sponsors'),
  },
  sponsorsLabel: {
    isString: isString(),
  },
  guests: {
    isArray: isArray(),
    hasRelations: hasRelations('guests'),
  },
  guestsLabel: {
    isString: isString(),
  },
  works: {
    isArray: isArray(),
    hasRelations: hasRelations('works'),
  },
  pictures: {
    isArray: isArray(),
  },
}