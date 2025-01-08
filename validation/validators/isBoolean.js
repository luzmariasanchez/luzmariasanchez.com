import { isNil, isBoolean as _isBoolean } from 'lodash';
import { formatMessage } from '..';
export function isBoolean(errorMessage = '%field% is not a boolean') {
  return (value, item, field) => {
    if (isNil(value)) return true;
    return _isBoolean(value) || formatMessage(errorMessage, field);
  }
}
