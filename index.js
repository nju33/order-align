const get = require('lodash.get');
const logger = require('log4js').getLogger('orderAlign');

module.exports = function orderAlign(arr, orderList, targetKey) {
  return arr
    .reduce((result, next) => {
      if (typeof next === 'string') {
        return add(result, orderList, next, next);
      } else if (typeof next === 'object') {
        if (typeof targetKey === 'undefined') {
          logger.warn('`targetKey` is required');
        }

        const key = get(next, targetKey);
        if (typeof key === 'undefined') {
          return result;
        }
        return add(result, orderList, key, next);
      }
      return result;
    }, [])
  .reduce((result, next) => {
    if (typeof next === 'undefined') {
      return result;
    }
    result.push(next);
    return result;
  }, []);
};

function add(arr, list, key, item) {
  const idx = list.indexOf(key);
  if (~idx) {
    arr[idx] = item;
    return arr;
  }

  logger.warn(`\`${key}\` isn't on the list`);
  return arr;
}
