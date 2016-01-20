# unicode-range

> Get the unicode category range of any unicode value. `U+3071` ➝ `Hiragana`

[![Build Status](https://travis-ci.org/radiovisual/unicode-range.svg?branch=master)](https://travis-ci.org/radiovisual/unicode-range)

**Until I have exhaustive tests, this module is considered experimental. Use at your own risk, and please report any issues.**

## Install

```
$ npm install --save unicode-range
```

## Usage

```js
const unicodeRange = require('unicode-range');

unicodeRange('U+0462');
//=> 'Cyrillic'
```


## API

### unicodeRange(input)

#### input

Type: `string`

The unicode string you want to lookup

## License

MIT © [Michael Wuergler](http://numetriclabs.com)
