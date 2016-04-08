# orderAlign

[![Build Status](https://travis-ci.org/totora0155/order-align.svg?branch=master)](https://travis-ci.org/totora0155/order-align)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![npm version](https://badge.fury.io/js/order-align.svg)](https://badge.fury.io/js/order-align)

In the order specified the array

## Install

```
npm i order-align
```

## Usage

```js
const orderAlign = require('order-align');
orderAlign(orderList, dataArr, targetKey);
```

## Example

### String

```js
const orderList = ['foo', 'bar', 'baz'];
const dataArr = ['baz', 'foo', 'bar'];

const result = orderAlign(orderList, dataArr);
console.log(result);
// [ 'foo', 'bar', 'baz' ]
```

### Object
```js
const orderList = ['foo', 'bar', 'baz'];
const dataArr = [
  {name: 'baz'},
  {name: 'foo'},
  {name: 'bar'}
];

const result = orderAlign(orderList, dataArr, 'name');
console.log(result);
// [ { name: 'foo' }, { name: 'bar' }, { name: 'baz' } ]
```
