# swap-char

Swaps two chars in a string by indexes.

[![License][license-image]][license-url] [![Downloads][downloads-image]][downloads-url]

## Install

Install using [npm](https://www.npmjs.com/):

```sh
npm install --save swap-char
```

or using [yarn](https://yarnpkg.com/)

```sh
yarn add swap-char
```

## API

### swapChar(str: string, from: number, to: number)

Swaps chars on `from` and `to` indexes and returns a new string.

**`str: string`**

A string to perform a char swap on.

**`from: number`**

The zero-based index from where to take a char. If negative, it is treated as `str.length + from`. (For example, if `from` is `-3` it is treated as `str.length - 3`).

If `from` is greater than or equal to `str.length`, `swapChar()` returns `str` without any changes.

**`to: number`**

The zero-based index at which to put a char. If negative, it is treated as `str.length + to`. (For example, if `to` is `-3` it is treated as `str.length - 3`).

If `to` is greater than or equal to `str.length`, `swapChar()` returns `str` without any changes.

## Examples

```js
import swapChar from 'swap-char';

swapChar('abc', 0, 1); // <~ 'bac'
swapChar('abc', 2, 0); // <~ 'cba'

// with negative indexes
swapChar('abc', 0, -1); // <~ 'cba'
swapChar('abc', -2, -1); // <~ 'acb'

// with incorrect indexes - returns the same string
swapChar('abc', 50, 0); // <~ 'abc'
swapChar('abc', 2, Infinity); // <~ 'abc'

```

#### Author

**Max Kanaradze**

[GitHub Profile](https://github.com/maxk096)

#### MIT Licensed

[license-image]: http://img.shields.io/npm/l/swap-char.svg
[license-url]: LICENSE

[downloads-image]: https://img.shields.io/npm/dm/swap-char
[downloads-url]: http://npm-stat.com/charts.html?package=swap-char