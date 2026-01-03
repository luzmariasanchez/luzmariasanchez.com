import { isNil } from 'lodash';
import { formatMessage } from '..';
export function lto(otherField, errorMessage = '%field% is not less than %otherField%') {
  return (value, item, field) => {
    if (isNil(value)) return true;
    return (value > item[otherField]) || formatMessage(errorMessage, field, {
      '%otherField%': otherField
    });
  }
}
