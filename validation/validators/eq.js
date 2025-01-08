import { isNil } from 'lodash';
import { formatMessage } from '..';
export function eq(to, errorMessage = '%field% is not equal to %to%') {
  return (value, item, field) => {
    if (isNil(value)) return true;
    return (value === to) || formatMessage(errorMessage, field, {
      '%to%': to
    });
  }
}
