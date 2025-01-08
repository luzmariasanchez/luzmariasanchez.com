import {
  isBoolean,
  isUrl,
  isImage,
  isString,
  required,
} from '../validation'

export default {
  title: {
    required: required(),
    isString: isString(),
  },
  offline: {
    isBoolean: isBoolean(),
  },
  url: {
    isUrl: isUrl(),
  },
  image: {
    isUrl: isUrl(),
    isImage: isImage(),
  },
}