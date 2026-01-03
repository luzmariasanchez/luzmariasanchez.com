
import config from '@/config';
export default function imager(url, store) {
  if (url) {
    if (store) return url.replace('/original/', '/' + store + '/');
    else return url;
  } else {
    return config.imageDefault;
  }
}