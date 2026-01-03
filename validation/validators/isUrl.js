import { isNil } from 'lodash';
import { formatMessage } from '..';
export function isUrl(errorMessage = '%field% is not a valid URL') {
  return (value, item, field) => {
    if (isNil(value)) return true;
    try {
      new URL(value);
      return true;
    } catch (err) {
      return formatMessage(errorMessage, field);
    }
  }
}
