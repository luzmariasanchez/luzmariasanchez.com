export function formatMessage(message, field, mapObj = {}) {
  return replaceAll(message, {
    '%field%': field,
    ...mapObj
  })
}

function replaceAll(str, mapObj) {
  var re = new RegExp(Object.keys(mapObj).join("|"), "gi");
  return str.replace(re, function (matched) {
    return mapObj[matched];
  });
}