import { isNil } from 'lodash';
import { formatMessage } from '..';
export function isEmail(errorMessage = '%field% is not a valid color') {
  return (value, item, field) => {
    if (isNil(value)) return true;
    const isValid = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(value);
    return isValid || formatMessage(errorMessage, field);
  }
}
