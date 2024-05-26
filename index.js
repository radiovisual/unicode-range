import {sortedRanges} from './sorted-unicode-ranges.js';

function unicodeRange(unicodestr) {
	if (typeof unicodestr !== 'string') {
		throw new TypeError('unicode-range expected a string');
	}

	const value = Number.parseInt(unicodestr.replace(/^u\+/i, ''), 16);

	let left = 0;
	let right = sortedRanges.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		const range = sortedRanges[mid];

		if (value < range.start) {
			right = mid - 1;
		} else if (value > range.end) {
			left = mid + 1;
		} else {
			return range.category;
		}
	}

	return 'Unassigned';
}

export default unicodeRange;
