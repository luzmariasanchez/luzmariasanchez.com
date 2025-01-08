import { isNil } from 'lodash';
import { formatMessage } from '..';
export function isColor(errorMessage = '%field% is not a valid color') {
  return (value, item, field) => {
    if (isNil(value)) return true;
    const isValid = /^#([0-9a-f]{3}){1,2}$/i.test(value.toLowerCase());
    return isValid || formatMessage(errorMessage, field);
  }
}
