import { isNil } from 'lodash';
import { formatMessage } from '..';
export function gte(than, errorMessage = '%field% is not greater than or equal to %than%') {
  return (value, item, field) => {
    if (isNil(value)) return true;
    return (value >= than) || formatMessage(errorMessage, field, {
      '%than%': than
    });
  }
}
