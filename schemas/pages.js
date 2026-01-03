import {
  isEmail,
  isUrl,
  isImage,
  isString,
  required,
  iff,
  eq
} from '../validation'

export default {
  title: {
    required: required(),
    isString: isString(),
  },
  description: {
    isString: isString(),
  },
  image: {
    isUrl: isUrl(),
    isImage: isImage(),
  },
  address: {
    isString: isString(),
    requiredIf: iff({ slug: eq('contact') }, required()),
  },
  email: {
    isString: isString(),
    isEmail: isEmail(),
    requiredIf: iff({ slug: eq('contact') }, required()),
  },
  phone: {
    isString: isString(),
    requiredIf: iff({ slug: eq('contact') }, required()),
  },
}