
export function extractDomain(url) {
  var domain;
  //find & remove protocol (http, ftp, etc.) and get domain
  if (url.indexOf("://") > -1) {
    domain = url.split('/')[2];
  }
  else {
    domain = url.split('/')[0];
  }

  //find & remove port number
  domain = domain.split(':')[0];

  return domain;
}

export function isYoutubeUrl(url) {
  const domain = extractDomain(url);
  return ['youtube.com', 'www.youtube.com', 'youtube.be'].includes(domain);
}
export function getYoutubeId(url) {
  let ID = '';
  url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  }
  else {
    ID = url;
  }
  return ID;
}
export function isVimeoUrl(url) {
  const domain = extractDomain(url);
  return ['vimeo.com', 'www.vimeo.com'].includes(domain);
}
export function getVimeoId(url) {
  // look for a string with 'vimeo', then whatever, then a 
  // forward slash and a group of digits.
  const match = /vimeo.*\/(\d+)/i.exec(url);

  // if the match isn't null (i.e. it matched)
  if (match) {
    // the grouped/matched digits from the regex
    return match[1];
  }
}