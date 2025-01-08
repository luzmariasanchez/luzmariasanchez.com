import { isNil } from 'lodash';
import { formatMessage } from '..';
export function ne(to, errorMessage = '%field% is equal to %to%') {
  return (value, item, field) => {
    if (isNil(value)) return true;
    return (value !== to) || formatMessage(errorMessage, field, {
      '%to%': to
    });
  }
}
