import { isNil } from 'lodash';
import { formatMessage } from '..';
export function minLength(lng, errorMessage = '%field% is too small') {
  return (value, item, field) => {
    if (isNil(value)) return true;
    const isValid = (value.length > lng);
    return isValid || formatMessage(errorMessage, field);
  }
}