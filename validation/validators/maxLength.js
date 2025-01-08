import { isNil } from 'lodash';
import { formatMessage } from '..';
export function maxLength(lng, errorMessage = '%field% is too large (max: %max%)') {
  return (value, item, field) => {
    if (isNil(value)) return true;
    const isValid = value ? (value.length < lng) : true;
    return isValid || formatMessage(errorMessage, field, {
      '%max%': lng
    });
  }
}