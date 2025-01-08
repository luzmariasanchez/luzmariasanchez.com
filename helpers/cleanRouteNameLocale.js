export default (routeName) => {
  return routeName.slice(0, routeName.indexOf('___'));
}