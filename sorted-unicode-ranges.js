
// This file is auto-generated. Do not edit manually. Run `npm run update` to update this file.
// Sort the ranges for faster lookups, e.g., we can use binary search instead of linear search, etc.
const sortedRanges = [
	{
		start: 0,
		end: 31,
		category: 'Control Character',
	},
	{
		start: 32,
		end: 127,
		category: 'Basic Latin',
	},
	{
		start: 128,
		end: 255,
		category: 'Latin-1 Supplement',
	},
	{
		start: 256,
		end: 383,
		category: 'Latin Extended-A',
	},
	{
		start: 384,
		end: 591,
		category: 'Latin Extended-B',
	},
	{
		start: 592,
		end: 687,
		category: 'IPA Extensions',
	},
	{
		start: 688,
		end: 767,
		category: 'Spacing Modifier Letters',
	},
	{
		start: 768,
		end: 879,
		category: 'Combining Diacritical Marks',
	},
	{
		start: 880,
		end: 1023,
		category: 'Greek and Coptic',
	},
	{
		start: 1024,
		end: 1279,
		category: 'Cyrillic',
	},
	{
		start: 1280,
		end: 1327,
		category: 'Cyrillic Supplement',
	},
	{
		start: 1328,
		end: 1423,
		category: 'Armenian',
	},
	{
		start: 1424,
		end: 1535,
		category: 'Hebrew',
	},
	{
		start: 1536,
		end: 1791,
		category: 'Arabic',
	},
	{
		start: 1792,
		end: 1871,
		category: 'Syriac',
	},
	{
		start: 1872,
		end: 1919,
		category: 'Arabic Supplement',
	},
	{
		start: 1920,
		end: 1983,
		category: 'Thaana',
	},
	{
		start: 1984,
		end: 2047,
		category: 'NKo',
	},
	{
		start: 2048,
		end: 2111,
		category: 'Samaritan',
	},
	{
		start: 2112,
		end: 2143,
		category: 'Mandaic',
	},
	{
		start: 2208,
		end: 2303,
		category: 'Arabic Extended-A',
	},
	{
		start: 2304,
		end: 2431,
		category: 'Devanagari',
	},
	{
		start: 2432,
		end: 2559,
		category: 'Bengali',
	},
	{
		start: 2560,
		end: 2687,
		category: 'Gurmukhi',
	},
	{
		start: 2688,
		end: 2815,
		category: 'Gujarati',
	},
	{
		start: 2816,
		end: 2943,
		category: 'Oriya',
	},
	{
		start: 2944,
		end: 3071,
		category: 'Tamil',
	},
	{
		start: 3072,
		end: 3199,
		category: 'Telugu',
	},
	{
		start: 3200,
		end: 3327,
		category: 'Kannada',
	},
	{
		start: 3328,
		end: 3455,
		category: 'Malayalam',
	},
	{
		start: 3456,
		end: 3583,
		category: 'Sinhala',
	},
	{
		start: 3584,
		end: 3711,
		category: 'Thai',
	},
	{
		start: 3712,
		end: 3839,
		category: 'Lao',
	},
	{
		start: 3840,
		end: 4095,
		category: 'Tibetan',
	},
	{
		start: 4096,
		end: 4255,
		category: 'Myanmar',
	},
	{
		start: 4256,
		end: 4351,
		category: 'Georgian',
	},
	{
		start: 4352,
		end: 4607,
		category: 'Hangul Jamo',
	},
	{
		start: 4608,
		end: 4991,
		category: 'Ethiopic',
	},
	{
		start: 4992,
		end: 5023,
		category: 'Ethiopic Supplement',
	},
	{
		start: 5024,
		end: 5119,
		category: 'Cherokee',
	},
	{
		start: 5120,
		end: 5759,
		category: 'Unified Canadian Aboriginal Syllabics',
	},
	{
		start: 5760,
		end: 5791,
		category: 'Ogham',
	},
	{
		start: 5792,
		end: 5887,
		category: 'Runic',
	},
	{
		start: 5888,
		end: 5919,
		category: 'Tagalog',
	},
	{
		start: 5920,
		end: 5951,
		category: 'Hanunoo',
	},
	{
		start: 5952,
		end: 5983,
		category: 'Buhid',
	},
	{
		start: 5984,
		end: 6015,
		category: 'Tagbanwa',
	},
	{
		start: 6016,
		end: 6143,
		category: 'Khmer',
	},
	{
		start: 6144,
		end: 6319,
		category: 'Mongolian',
	},
	{
		start: 6320,
		end: 6399,
		category: 'Unified Canadian Aboriginal Syllabics Extended',
	},
	{
		start: 6400,
		end: 6479,
		category: 'Limbu',
	},
	{
		start: 6480,
		end: 6527,
		category: 'Tai Le',
	},
	{
		start: 6528,
		end: 6623,
		category: 'New Tai Lue',
	},
	{
		start: 6624,
		end: 6655,
		category: 'Khmer Symbols',
	},
	{
		start: 6656,
		end: 6687,
		category: 'Buginese',
	},
	{
		start: 6688,
		end: 6831,
		category: 'Tai Tham',
	},
	{
		start: 6832,
		end: 6911,
		category: 'Combining Diacritical Marks Extended',
	},
	{
		start: 6912,
		end: 7039,
		category: 'Balinese',
	},
	{
		start: 7040,
		end: 7103,
		category: 'Sundanese',
	},
	{
		start: 7104,
		end: 7167,
		category: 'Batak',
	},
	{
		start: 7168,
		end: 7247,
		category: 'Lepcha',
	},
	{
		start: 7248,
		end: 7295,
		category: 'Ol Chiki',
	},
	{
		start: 7360,
		end: 7375,
		category: 'Sundanese Supplement',
	},
	{
		start: 7376,
		end: 7423,
		category: 'Vedic Extensions',
	},
	{
		start: 7424,
		end: 7551,
		category: 'Phonetic Extensions',
	},
	{
		start: 7552,
		end: 7615,
		category: 'Phonetic Extensions Supplement',
	},
	{
		start: 7616,
		end: 7679,
		category: 'Combining Diacritical Marks Supplement',
	},
	{
		start: 7680,
		end: 7935,
		category: 'Latin Extended Additional',
	},
	{
		start: 7936,
		end: 8191,
		category: 'Greek Extended',
	},
	{
		start: 8192,
		end: 8303,
		category: 'General Punctuation',
	},
	{
		start: 8304,
		end: 8351,
		category: 'Superscripts and Subscripts',
	},
	{
		start: 8352,
		end: 8399,
		category: 'Currency Symbols',
	},
	{
		start: 8400,
		end: 8447,
		category: 'Combining Diacritical Marks for Symbols',
	},
	{
		start: 8448,
		end: 8527,
		category: 'Letterlike Symbols',
	},
	{
		start: 8528,
		end: 8591,
		category: 'Number Forms',
	},
	{
		start: 8592,
		end: 8703,
		category: 'Arrows',
	},
	{
		start: 8704,
		end: 8959,
		category: 'Mathematical Operators',
	},
	{
		start: 8960,
		end: 9215,
		category: 'Miscellaneous Technical',
	},
	{
		start: 9216,
		end: 9279,
		category: 'Control Pictures',
	},
	{
		start: 9280,
		end: 9311,
		category: 'Optical Character Recognition',
	},
	{
		start: 9312,
		end: 9471,
		category: 'Enclosed Alphanumerics',
	},
	{
		start: 9472,
		end: 9599,
		category: 'Box Drawing',
	},
	{
		start: 9600,
		end: 9631,
		category: 'Block Elements',
	},
	{
		start: 9632,
		end: 9727,
		category: 'Geometric Shapes',
	},
	{
		start: 9728,
		end: 9983,
		category: 'Miscellaneous Symbols',
	},
	{
		start: 9984,
		end: 10_175,
		category: 'Dingbats',
	},
	{
		start: 10_176,
		end: 10_223,
		category: 'Miscellaneous Mathematical Symbols-A',
	},
	{
		start: 10_224,
		end: 10_239,
		category: 'Supplemental Arrows-A',
	},
	{
		start: 10_240,
		end: 10_495,
		category: 'Braille Patterns',
	},
	{
		start: 10_496,
		end: 10_623,
		category: 'Supplemental Arrows-B',
	},
	{
		start: 10_624,
		end: 10_751,
		category: 'Miscellaneous Mathematical Symbols-B',
	},
	{
		start: 10_752,
		end: 11_007,
		category: 'Supplemental Mathematical Operators',
	},
	{
		start: 11_008,
		end: 11_263,
		category: 'Miscellaneous Symbols and Arrows',
	},
	{
		start: 11_264,
		end: 11_359,
		category: 'Glagolitic',
	},
	{
		start: 11_360,
		end: 11_391,
		category: 'Latin Extended-C',
	},
	{
		start: 11_392,
		end: 11_519,
		category: 'Coptic',
	},
	{
		start: 11_520,
		end: 11_567,
		category: 'Georgian Supplement',
	},
	{
		start: 11_568,
		end: 11_647,
		category: 'Tifinagh',
	},
	{
		start: 11_648,
		end: 11_743,
		category: 'Ethiopic Extended',
	},
	{
		start: 11_744,
		end: 11_775,
		category: 'Cyrillic Extended-A',
	},
	{
		start: 11_776,
		end: 11_903,
		category: 'Supplemental Punctuation',
	},
	{
		start: 11_904,
		end: 12_031,
		category: 'CJK Radicals Supplement',
	},
	{
		start: 12_032,
		end: 12_255,
		category: 'Kangxi Radicals',
	},
	{
		start: 12_272,
		end: 12_287,
		category: 'Ideographic Description Characters',
	},
	{
		start: 12_288,
		end: 12_351,
		category: 'CJK Symbols and Punctuation',
	},
	{
		start: 12_352,
		end: 12_447,
		category: 'Hiragana',
	},
	{
		start: 12_448,
		end: 12_543,
		category: 'Katakana',
	},
	{
		start: 12_544,
		end: 12_591,
		category: 'Bopomofo',
	},
	{
		start: 12_592,
		end: 12_687,
		category: 'Hangul Compatibility Jamo',
	},
	{
		start: 12_688,
		end: 12_703,
		category: 'Kanbun',
	},
	{
		start: 12_704,
		end: 12_735,
		category: 'Bopomofo Extended',
	},
	{
		start: 12_736,
		end: 12_783,
		category: 'CJK Strokes',
	},
	{
		start: 12_784,
		end: 12_799,
		category: 'Katakana Phonetic Extensions',
	},
	{
		start: 12_800,
		end: 13_055,
		category: 'Enclosed CJK Letters and Months',
	},
	{
		start: 13_056,
		end: 13_311,
		category: 'CJK Compatibility',
	},
	{
		start: 13_312,
		end: 19_903,
		category: 'CJK Unified Ideographs Extension A',
	},
	{
		start: 19_904,
		end: 19_967,
		category: 'Yijing Hexagram Symbols',
	},
	{
		start: 19_968,
		end: 40_959,
		category: 'CJK Unified Ideographs',
	},
	{
		start: 40_960,
		end: 42_127,
		category: 'Yi Syllables',
	},
	{
		start: 42_128,
		end: 42_191,
		category: 'Yi Radicals',
	},
	{
		start: 42_192,
		end: 42_239,
		category: 'Lisu',
	},
	{
		start: 42_240,
		end: 42_559,
		category: 'Vai',
	},
	{
		start: 42_560,
		end: 42_655,
		category: 'Cyrillic Extended-B',
	},
	{
		start: 42_656,
		end: 42_751,
		category: 'Bamum',
	},
	{
		start: 42_752,
		end: 42_783,
		category: 'Modifier Tone Letters',
	},
	{
		start: 42_784,
		end: 43_007,
		category: 'Latin Extended-D',
	},
	{
		start: 43_008,
		end: 43_055,
		category: 'Syloti Nagri',
	},
	{
		start: 43_056,
		end: 43_071,
		category: 'Common Indic Number Forms',
	},
	{
		start: 43_072,
		end: 43_135,
		category: 'Phags-pa',
	},
	{
		start: 43_136,
		end: 43_231,
		category: 'Saurashtra',
	},
	{
		start: 43_232,
		end: 43_263,
		category: 'Devanagari Extended',
	},
	{
		start: 43_264,
		end: 43_311,
		category: 'Kayah Li',
	},
	{
		start: 43_312,
		end: 43_359,
		category: 'Rejang',
	},
	{
		start: 43_360,
		end: 43_391,
		category: 'Hangul Jamo Extended-A',
	},
	{
		start: 43_392,
		end: 43_487,
		category: 'Javanese',
	},
	{
		start: 43_488,
		end: 43_519,
		category: 'Myanmar Extended-B',
	},
	{
		start: 43_520,
		end: 43_615,
		category: 'Cham',
	},
	{
		start: 43_616,
		end: 43_647,
		category: 'Myanmar Extended-A',
	},
	{
		start: 43_648,
		end: 43_743,
		category: 'Tai Viet',
	},
	{
		start: 43_744,
		end: 43_775,
		category: 'Meetei Mayek Extensions',
	},
	{
		start: 43_776,
		end: 43_823,
		category: 'Ethiopic Extended-A',
	},
	{
		start: 43_824,
		end: 43_887,
		category: 'Latin Extended-E',
	},
	{
		start: 43_888,
		end: 43_967,
		category: 'Cherokee Supplement',
	},
	{
		start: 43_968,
		end: 44_031,
		category: 'Meetei Mayek',
	},
	{
		start: 44_032,
		end: 55_215,
		category: 'Hangul Syllables',
	},
	{
		start: 55_216,
		end: 55_295,
		category: 'Hangul Jamo Extended-B',
	},
	{
		start: 55_296,
		end: 56_191,
		category: 'High Surrogates',
	},
	{
		start: 56_192,
		end: 56_319,
		category: 'High Private Use Surrogates',
	},
	{
		start: 56_320,
		end: 57_343,
		category: 'Low Surrogates',
	},
	{
		start: 57_344,
		end: 63_743,
		category: 'Private Use Area',
	},
	{
		start: 63_744,
		end: 64_255,
		category: 'CJK Compatibility Ideographs',
	},
	{
		start: 64_256,
		end: 64_335,
		category: 'Alphabetic Presentation Forms',
	},
	{
		start: 64_336,
		end: 65_023,
		category: 'Arabic Presentation Forms-A',
	},
	{
		start: 65_024,
		end: 65_039,
		category: 'Variation Selectors',
	},
	{
		start: 65_040,
		end: 65_055,
		category: 'Vertical Forms',
	},
	{
		start: 65_056,
		end: 65_071,
		category: 'Combining Half Marks',
	},
	{
		start: 65_072,
		end: 65_103,
		category: 'CJK Compatibility Forms',
	},
	{
		start: 65_104,
		end: 65_135,
		category: 'Small Form Variants',
	},
	{
		start: 65_136,
		end: 65_279,
		category: 'Arabic Presentation Forms-B',
	},
	{
		start: 65_280,
		end: 65_519,
		category: 'Halfwidth and Fullwidth Forms',
	},
	{
		start: 65_520,
		end: 65_535,
		category: 'Specials',
	},
	{
		start: 65_536,
		end: 65_663,
		category: 'Linear B Syllabary',
	},
	{
		start: 65_664,
		end: 65_791,
		category: 'Linear B Ideograms',
	},
	{
		start: 65_792,
		end: 65_855,
		category: 'Aegean Numbers',
	},
	{
		start: 65_856,
		end: 65_935,
		category: 'Ancient Greek Numbers',
	},
	{
		start: 65_936,
		end: 65_999,
		category: 'Ancient Symbols',
	},
	{
		start: 66_000,
		end: 66_047,
		category: 'Phaistos Disc',
	},
	{
		start: 66_176,
		end: 66_207,
		category: 'Lycian',
	},
	{
		start: 66_208,
		end: 66_271,
		category: 'Carian',
	},
	{
		start: 66_272,
		end: 66_303,
		category: 'Coptic Epact Numbers',
	},
	{
		start: 66_304,
		end: 66_351,
		category: 'Old Italic',
	},
	{
		start: 66_352,
		end: 66_383,
		category: 'Gothic',
	},
	{
		start: 66_384,
		end: 66_431,
		category: 'Old Permic',
	},
	{
		start: 66_432,
		end: 66_463,
		category: 'Ugaritic',
	},
	{
		start: 66_464,
		end: 66_527,
		category: 'Old Persian',
	},
	{
		start: 66_560,
		end: 66_639,
		category: 'Deseret',
	},
	{
		start: 66_640,
		end: 66_687,
		category: 'Shavian',
	},
	{
		start: 66_688,
		end: 66_735,
		category: 'Osmanya',
	},
	{
		start: 66_816,
		end: 66_863,
		category: 'Elbasan',
	},
	{
		start: 66_864,
		end: 66_927,
		category: 'Caucasian Albanian',
	},
	{
		start: 67_072,
		end: 67_455,
		category: 'Linear A',
	},
	{
		start: 67_584,
		end: 67_647,
		category: 'Cypriot Syllabary',
	},
	{
		start: 67_648,
		end: 67_679,
		category: 'Imperial Aramaic',
	},
	{
		start: 67_680,
		end: 67_711,
		category: 'Palmyrene',
	},
	{
		start: 67_712,
		end: 67_759,
		category: 'Nabataean',
	},
	{
		start: 67_808,
		end: 67_839,
		category: 'Hatran',
	},
	{
		start: 67_840,
		end: 67_871,
		category: 'Phoenician',
	},
	{
		start: 67_872,
		end: 67_903,
		category: 'Lydian',
	},
	{
		start: 67_968,
		end: 67_999,
		category: 'Meroitic Hieroglyphs',
	},
	{
		start: 68_000,
		end: 68_095,
		category: 'Meroitic Cursive',
	},
	{
		start: 68_096,
		end: 68_191,
		category: 'Kharoshthi',
	},
	{
		start: 68_192,
		end: 68_223,
		category: 'Old South Arabian',
	},
	{
		start: 68_224,
		end: 68_255,
		category: 'Old North Arabian',
	},
	{
		start: 68_288,
		end: 68_351,
		category: 'Manichaean',
	},
	{
		start: 68_352,
		end: 68_415,
		category: 'Avestan',
	},
	{
		start: 68_416,
		end: 68_447,
		category: 'Inscriptional Parthian',
	},
	{
		start: 68_448,
		end: 68_479,
		category: 'Inscriptional Pahlavi',
	},
	{
		start: 68_480,
		end: 68_527,
		category: 'Psalter Pahlavi',
	},
	{
		start: 68_608,
		end: 68_687,
		category: 'Old Turkic',
	},
	{
		start: 68_736,
		end: 68_863,
		category: 'Old Hungarian',
	},
	{
		start: 69_216,
		end: 69_247,
		category: 'Rumi Numeral Symbols',
	},
	{
		start: 69_632,
		end: 69_759,
		category: 'Brahmi',
	},
	{
		start: 69_760,
		end: 69_839,
		category: 'Kaithi',
	},
	{
		start: 69_840,
		end: 69_887,
		category: 'Sora Sompeng',
	},
	{
		start: 69_888,
		end: 69_967,
		category: 'Chakma',
	},
	{
		start: 69_968,
		end: 70_015,
		category: 'Mahajani',
	},
	{
		start: 70_016,
		end: 70_111,
		category: 'Sharada',
	},
	{
		start: 70_112,
		end: 70_143,
		category: 'Sinhala Archaic Numbers',
	},
	{
		start: 70_144,
		end: 70_223,
		category: 'Khojki',
	},
	{
		start: 70_272,
		end: 70_319,
		category: 'Multani',
	},
	{
		start: 70_320,
		end: 70_399,
		category: 'Khudawadi',
	},
	{
		start: 70_400,
		end: 70_527,
		category: 'Grantha',
	},
	{
		start: 70_784,
		end: 70_879,
		category: 'Tirhuta',
	},
	{
		start: 71_040,
		end: 71_167,
		category: 'Siddham',
	},
	{
		start: 71_168,
		end: 71_263,
		category: 'Modi',
	},
	{
		start: 71_296,
		end: 71_375,
		category: 'Takri',
	},
	{
		start: 71_424,
		end: 71_487,
		category: 'Ahom',
	},
	{
		start: 71_840,
		end: 71_935,
		category: 'Warang Citi',
	},
	{
		start: 72_384,
		end: 72_447,
		category: 'Pau Cin Hau',
	},
	{
		start: 73_728,
		end: 74_751,
		category: 'Cuneiform',
	},
	{
		start: 74_752,
		end: 74_879,
		category: 'Cuneiform Numbers and Punctuation',
	},
	{
		start: 74_880,
		end: 75_087,
		category: 'Early Dynastic Cuneiform',
	},
	{
		start: 77_824,
		end: 78_895,
		category: 'Egyptian Hieroglyphs',
	},
	{
		start: 82_944,
		end: 83_583,
		category: 'Anatolian Hieroglyphs',
	},
	{
		start: 92_160,
		end: 92_735,
		category: 'Bamum Supplement',
	},
	{
		start: 92_736,
		end: 92_783,
		category: 'Mro',
	},
	{
		start: 92_880,
		end: 92_927,
		category: 'Bassa Vah',
	},
	{
		start: 92_928,
		end: 93_071,
		category: 'Pahawh Hmong',
	},
	{
		start: 93_952,
		end: 94_111,
		category: 'Miao',
	},
	{
		start: 110_592,
		end: 110_847,
		category: 'Kana Supplement',
	},
	{
		start: 113_664,
		end: 113_823,
		category: 'Duployan',
	},
	{
		start: 113_824,
		end: 113_839,
		category: 'Shorthand Format Controls',
	},
	{
		start: 118_784,
		end: 119_039,
		category: 'Byzantine Musical Symbols',
	},
	{
		start: 119_040,
		end: 119_295,
		category: 'Musical Symbols',
	},
	{
		start: 119_296,
		end: 119_375,
		category: 'Ancient Greek Musical Notation',
	},
	{
		start: 119_552,
		end: 119_647,
		category: 'Tai Xuan Jing Symbols',
	},
	{
		start: 119_648,
		end: 119_679,
		category: 'Counting Rod Numerals',
	},
	{
		start: 119_808,
		end: 120_831,
		category: 'Mathematical Alphanumeric Symbols',
	},
	{
		start: 120_832,
		end: 121_519,
		category: 'Sutton SignWriting',
	},
	{
		start: 124_928,
		end: 125_151,
		category: 'Mende Kikakui',
	},
	{
		start: 126_464,
		end: 126_719,
		category: 'Arabic Mathematical Alphabetic Symbols',
	},
	{
		start: 126_976,
		end: 127_023,
		category: 'Mahjong Tiles',
	},
	{
		start: 127_024,
		end: 127_135,
		category: 'Domino Tiles',
	},
	{
		start: 127_136,
		end: 127_231,
		category: 'Playing Cards',
	},
	{
		start: 127_232,
		end: 127_487,
		category: 'Enclosed Alphanumeric Supplement',
	},
	{
		start: 127_488,
		end: 127_743,
		category: 'Enclosed Ideographic Supplement',
	},
	{
		start: 127_744,
		end: 128_511,
		category: 'Miscellaneous Symbols and Pictographs',
	},
	{
		start: 128_512,
		end: 128_591,
		category: 'Emoticons (Emoji)',
	},
	{
		start: 128_592,
		end: 128_639,
		category: 'Ornamental Dingbats',
	},
	{
		start: 128_640,
		end: 128_767,
		category: 'Transport and Map Symbols',
	},
	{
		start: 128_768,
		end: 128_895,
		category: 'Alchemical Symbols',
	},
	{
		start: 128_896,
		end: 129_023,
		category: 'Geometric Shapes Extended',
	},
	{
		start: 129_024,
		end: 129_279,
		category: 'Supplemental Arrows-C',
	},
	{
		start: 129_280,
		end: 129_535,
		category: 'Supplemental Symbols and Pictographs',
	},
	{
		start: 983_040,
		end: 1_048_573,
		category: 'Supplemental Private Use Area-A',
	},
	{
		start: 1_048_576,
		end: 1_114_109,
		category: 'Supplemental Private Use Area-B',
	},
];

export {sortedRanges};

