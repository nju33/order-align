import orderAlign from '..';
import test from 'ava';

test.beforeEach(t => {
  t.context.list = [
    'foo',
    'bar',
    'baz'
  ];
});

test('String order', t => {
  const data = ['baz', 'foo', 'bar'];
  const result = orderAlign(data, t.context.list);
  t.deepEqual(result, t.context.list);
});

test('Object order', t => {
  const data = [
    {name: 'baz'},
    {name: 'foo'},
    {name: 'bar'}
  ];

  const result = orderAlign(data, t.context.list, 'name');
  t.deepEqual(result, [
    {name: 'foo'},
    {name: 'bar'},
    {name: 'baz'}
  ]);
});

test('Undefined key', t => {
  const data = ['baz', 'xxx', 'bar'];
  const result = orderAlign(data, t.context.list);
  t.deepEqual(result, ['bar', 'baz']);
});
