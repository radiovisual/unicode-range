import test from 'ava';
import fn from './';

test('should expect a string', t => {
	t.throws(() => {
		fn({});
	});
});

test('allows shorthand', t => {
	t.is(fn('3071'), 'Hiragana');
});

test('should get unicode category', t => {
	t.is(fn('U+001B'), 'Control character');
	t.is(fn('U+02A8'), 'IPA Extensions');
	t.is(fn('U+0E56'), 'Thai');
	t.is(fn('U+10E4'), 'Georgian');
	t.is(fn('U+0462'), 'Cyrillic');
	t.is(fn('U+3071'), 'Hiragana');
});
