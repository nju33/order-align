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

const result = orderAlign(data, list, 'name');
console.log(result);
