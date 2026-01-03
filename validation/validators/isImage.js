import { isNil } from 'lodash';
import { formatMessage } from '..';
async function checkImage(url) {
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => reject();
    img.src = url;
  })
}
export function isImage(errorMessage = '%field% cannot be loaded') {
  return async (value, item, field) => {
    if (isNil(value)) return true;
    let isValid;
    try {
      isValid = await checkImage(value);
    } catch (error) {
      isValid = false;
    }
    return isValid || formatMessage(errorMessage, field);
  }
}
