import { isNil } from 'lodash';
import { formatMessage } from '..';
export function lt(than, errorMessage = '%field% is not less than %than%') {
  return (value, item, field) => {
    if (isNil(value)) return true;
    return (value < than) || formatMessage(errorMessage, field, {
      '%than%': than
    });
  }
}
