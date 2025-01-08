import { isNil } from 'lodash';
import { formatMessage } from '..';
export function gt(than, errorMessage = '%field% is not greater than %than%') {
  return (value, item, field) => {
    if (isNil(value)) return true;
    return (value > than) || formatMessage(errorMessage, field, {
      '%than%': than
    });
  }
}
