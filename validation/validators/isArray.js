import { isNil, isArray as _isArray } from 'lodash';
import { formatMessage } from '..';
export function isArray(errorMessage = '%field% is not an array') {
  return (value, item, field) => {
    if (isNil(value)) return true;
    return _isArray(value) || formatMessage(errorMessage, field);
  }
}
