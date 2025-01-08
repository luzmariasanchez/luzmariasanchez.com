import { isNil } from 'lodash';
import { formatMessage } from '..';
export function gteo(otherField, errorMessage = '%field% is not greater than or equal to %otherField%') {
  return (value, item, field) => {
    if (isNil(value)) return true;
    return (value >= item[otherField]) || formatMessage(errorMessage, field, {
      '%otherField%': otherField
    });
  }
}
