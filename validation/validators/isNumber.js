import { isNil, isFinite } from 'lodash';
import { formatMessage } from '..';
export function isNumber(errorMessage = '%field% is not a number') {
  return (value, item, field) => {
    if (isNil(value)) return true;
    return isFinite(value) || formatMessage(errorMessage, field);
  }
}
