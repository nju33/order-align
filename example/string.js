const orderAlign = require('..');

const list = ['foo', 'bar', 'baz'];
const data = ['baz', 'foo', 'bar'];

const result = orderAlign(data, list);
console.log(result);
