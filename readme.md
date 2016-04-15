# unicode-range

> Get the unicode category range of any unicode value. `U+3071` ➝ `Hiragana`

[![Build Status](https://travis-ci.org/radiovisual/unicode-range.svg?branch=master)](https://travis-ci.org/radiovisual/unicode-range)

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

*Required*  
Type: `string`  

The unicode string you want to lookup


## Related

- [unicode-range-json](https://github.com/radiovisual/unicode-range-json) - A list of all the Unicode Range Names and their hex/decimal range numbers.

## License

MIT © [Michael Wuergler](http://numetriclabs.com)
