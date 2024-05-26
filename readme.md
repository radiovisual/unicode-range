# unicode-range

[![CI](https://github.com/radiovisual/unicode-range/actions/workflows/ci.yml/badge.svg)](https://github.com/radiovisual/unicode-range/actions/workflows/ci.yml)

> Get the unicode category range of any unicode value. `U+3071` ➝ `Hiragana`

## Install

```
$ npm install --save unicode-range
```

## Usage

```js
import unicodeRange from "unicode-range";

unicodeRange("U+3071");
//=> 'Hiragana'
```

## API

### unicodeRange(input)

#### input

_Required_  
Type: `string`

The unicode string you want to lookup

## Related

- [unicode-range-json](https://github.com/radiovisual/unicode-range-json) - A list of all the Unicode Range Names and their hex/decimal range numbers.

## License

MIT © [Michael Wuergler](https://github.com/radiovisual)
