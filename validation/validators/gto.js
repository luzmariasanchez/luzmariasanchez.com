import { isNil } from 'lodash';
import { formatMessage } from '..';
export function gto(otherField, errorMessage = '%field% is not greater than %otherField%') {
  return (value, item, field) => {
    if (isNil(value)) return true;
    return (value > item[otherField]) || formatMessage(errorMessage, field, {
      '%otherField%': otherField
    });
  }
}
