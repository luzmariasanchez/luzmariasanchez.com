import { isNil } from 'lodash';
import { formatMessage } from '..';
export function neo(otherField, errorMessage = '%field% is equal to %otherField%') {
  return (value, item, field) => {
    if (isNil(value)) return true;
    return (value !== item[otherField]) || formatMessage(errorMessage, field, {
      '%otherField%': otherField
    });
  }
}
