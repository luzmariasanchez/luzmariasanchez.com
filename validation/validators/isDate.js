import { isNil } from 'lodash';
import dayjs from 'dayjs';
import { formatMessage } from '..';
export function isDate(format, errorMessage = '%field% is not a valid date (format: %format%)') {
  return (value, item, field) => {
    if (isNil(value)) return true;
    const isValid = dayjs(value.toString(), format, true).isValid();
    return isValid || formatMessage(errorMessage, field, {
      '%format%': format
    });
  }
}
