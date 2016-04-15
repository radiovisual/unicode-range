'use strict';
var ranges = require('unicode-range-json')();

module.exports = function (unicodestr) {
	if (typeof unicodestr !== 'string') {
		throw new TypeError('Expected a string');
	}

	var category = 'unused';

	// find the unicode value
	var value = parseInt(unicodestr.replace(/^U\+/i, ''), 16);
	var len = ranges.length;

	for (var i = 0; i < len; i++) {
		var range = ranges[i];

		if (value >= range.range[0] && value <= range.range[1]) {
			category = range.category;
			break;
		}
	}
	return category;
};
