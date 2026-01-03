import {
  isBoolean,
  isColor,
  isNumber,
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
  color: {
    required: required(),
    isColor: isColor(),
  },
  order: {
    required: required(),
    isNumber: isNumber(),
  },
}