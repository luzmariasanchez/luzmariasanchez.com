import { isNil, some } from 'lodash';
import dayjs from 'dayjs';
import { formatMessage } from '..';
export function isDates(formats, errorMessage = '%field% is not a valid date (formats: %formats%)') {
  return (value, item, field) => {
    if (isNil(value)) return true;
    const isValid = some(formats, format => dayjs(value.toString(), format, true).isValid());
    return isValid || formatMessage(errorMessage, field, {
      '%formats%': formats.join(' or '),
    });
  }
}
