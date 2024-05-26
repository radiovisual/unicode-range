import fs from 'node:fs';
import ranges from 'unicode-range-json';

const sortedRanges = ranges
	.map(range => ({
		start: range.range[0],
		end: range.range[1],
		category: range.category,
	}))
	.sort((a, b) => a.start - b.start);

const fileOutput = `
// This file is auto-generated. Do not edit manually. Run \`npm run update\` to update this file.
// Sort the ranges for faster lookups, e.g., we can use binary search instead of linear search, etc.
const sortedRanges = ${JSON.stringify(sortedRanges, null, 2)};

export {sortedRanges};

`;

fs.writeFileSync('sorted-unicode-ranges.js', fileOutput);
