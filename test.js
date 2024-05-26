import test from 'ava';
import ranges from 'unicode-range-json';
import unicodeRange from './index.js';

test('should expect a string', t => {
	t.throws(
		() => {
			unicodeRange({});
		},
		{message: 'unicode-range expected a string'},
	);
});

test('allows shorthand', t => {
	t.is(unicodeRange('3071'), 'Hiragana');
});

for (const range of ranges) {
	const [start, end] = range.range;
	for (let i = start; i <= end; i++) {
		const hexValue = `U+${i.toString(16).toUpperCase()}`;
		test(`Category ${range.category} includes ${hexValue}`, t => {
			t.is(unicodeRange(hexValue), range.category);
		});
	}
}

test('accounts for Private-Use ranges', t => {
	t.is(unicodeRange('U+e000'), 'Private Use Area');
	t.is(unicodeRange('U+f8f7'), 'Private Use Area');
	t.is(unicodeRange('U+f8ff'), 'Private Use Area');
	t.is(unicodeRange('U+F0000'), 'Supplemental Private Use Area-A');
	t.is(unicodeRange('U+FFFFD'), 'Supplemental Private Use Area-A');
	t.is(unicodeRange('U+100000'), 'Supplemental Private Use Area-B');
	t.is(unicodeRange('U+10FFFD'), 'Supplemental Private Use Area-B');
});

test('should get unicode category', t => {
	t.is(unicodeRange('U+001B'), 'Control Character');
	t.is(unicodeRange('U+02A8'), 'IPA Extensions');
	t.is(unicodeRange('U+0E56'), 'Thai');
	t.is(unicodeRange('U+10E4'), 'Georgian');
	t.is(unicodeRange('U+0462'), 'Cyrillic');
	t.is(unicodeRange('U+3071'), 'Hiragana');
	t.is(unicodeRange('U+1F600'), 'Emoticons (Emoji)');
});

test('reports Unassigned values', t => {
	t.is(unicodeRange('U+1000000000000000'), 'Unassigned');
});
