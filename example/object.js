const orderAlign = require('..');

const list = ['foo', 'bar', 'baz'];
const data = [
  {
    name: 'baz'
  },
  {
    name: 'foo'
  },
  {
    name: 'bar'
  }
];

const result = orderAlign(list, data, 'name');
console.log(result);
