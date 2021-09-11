import numeral from 'numeral';

//Library duplicate format fix
numeral.register = function (type, name, format) {
	name = name.toLowerCase();
	this[type + 's'][name] = format;
	return format;
};

//Localization
numeral.register('locale', 'en-EN', {
	abbreviations: {
		thousand: 'k',
		million: 'M',
		billion: 'B',
		trillion: 'T',
	},
	delimiters: {
		thousands: ',',
		decimal: '.',
	},
	ordinal(number) {
		let b = number % 10;
		return ~~((number % 100) / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
	},
	currency: {
		symbol: '$',
		name: 'USD',
		isFirst: true,
	},
});

numeral.register('locale', 'de', {
	abbreviations: {
		thousand: ' Tsd',
		million: ' Mio',
		billion: ' Mrd',
		trillion: ' Bil',
	},
	delimiters: {
		thousands: '.',
		decimal: ',',
	},
	ordinal(number) {
		return '.';
	},
	currency: {
		symbol: '€',
		name: 'EUR',
		isFirst: false,
	},
});

numeral.register('locale', 'it', {
	abbreviations: {
		thousand: 'mila',
		million: 'Mio',
		billion: 'Mrd',
		trillion: 'Bio',
	},
	delimiters: {
		thousands: '.',
		decimal: ',',
	},
	ordinal(number) {
		return 'º';
	},
	currency: {
		symbol: '€',
		name: 'EUR',
		isFirst: true,
	},
});

numeral.register('locale', 'ru', {
	abbreviations: {
		thousand: ' тыс.',
		million: ' млн.',
		billion: ' млрд.',
		trillion: ' трлн.',
	},
	delimiters: {
		thousands: ' ',
		decimal: '.',
	},
	ordinal(number) {
		return '.';
	},
	currency: {
		symbol: '$',
		name: 'USD',
		isFirst: false,
	},
});

numeral.register('locale', 'ko', {
	abbreviations: {
		thousand: '천',
		million: '백만',
		billion: '십억',
		trillion: '조',
	},
	delimiters: {
		thousands: ',',
		decimal: '.',
	},
	ordinal(number) {
		return '.';
	},
	currency: {
		symbol: '$',
		name: 'USD',
		isFirst: true,
	},
});

numeral.register('locale', 'zh-hans', {
	abbreviations: {
		thousand: '千',
		million: '百万',
		billion: '十亿',
		trillion: '兆',
	},
	delimiters: {
		thousands: ',',
		decimal: '.',
	},
	ordinal(number) {
		return '.';
	},
	currency: {
		symbol: '$',
		name: 'USD',
		isFirst: true,
	},
});

numeral.register('locale', 'zh-hant', {
	abbreviations: {
		thousand: '千',
		million: '百万',
		billion: '十亿',
		trillion: '兆',
	},
	delimiters: {
		thousands: ',',
		decimal: '.',
	},
	ordinal(number) {
		return '.';
	},
	currency: {
		symbol: '$',
		name: 'USD',
		isFirst: true,
	},
});

numeral.register('locale', 'ja', {
	abbreviations: {
		thousand: '千',
		million: '百万',
		billion: '十億',
		trillion: '兆',
	},
	delimiters: {
		thousands: ',',
		decimal: '.',
	},
	ordinal(number) {
		return '.';
	},
	currency: {
		symbol: '$',
		name: 'USD',
		isFirst: true,
	},
});

numeral.register('locale', 'es', {
	abbreviations: {
		thousand: 'k',
		million: 'mm',
		billion: 'b',
		trillion: 't',
	},
	delimiters: {
		thousands: '.',
		decimal: ',',
	},
	ordinal(number) {
		let b = number % 10;
		return b === 1 || b === 3 ? 'er' : b === 2 ? 'do' : b === 7 || b === 0 ? 'mo' : b === 8 ? 'vo' : b === 9 ? 'no' : 'to';
	},
	currency: {
		symbol: '€',
		name: 'EUR',
	},
});

numeral.register('locale', 'pt', {
	abbreviations: {
		thousand: 'k',
		million: 'm',
		billion: 'b',
		trillion: 't',
	},
	delimiters: {
		thousands: ' ',
		decimal: ',',
	},
	ordinal(number) {
		return 'º';
	},
	currency: {
		symbol: '€',
		name: 'EUR',
	},
});

numeral.register('locale', 'fr', {
	abbreviations: {
		thousand: 'k',
		million: 'm',
		billion: 'b',
		trillion: 't',
	},
	delimiters: {
		thousands: '.',
		decimal: ',',
	},
	ordinal(number) {
		return number === 1 ? 'er' : 'e';
	},
	currency: {
		symbol: '€',
		name: 'EUR',
	},
});

numeral.register('locale', 'vi', {
	delimiters: {
		thousands: '.',
		decimal: ',',
	},
	abbreviations: {
		thousand: ' nghìn',
		million: ' triệu',
		billion: ' tỷ',
		trillion: ' nghìn tỷ',
	},
	ordinal() {
		return '.';
	},
	currency: {
		symbol: '$',
		name: 'USD',
		isFirst: true,
	},
});

numeral.register('locale', 'th', {
	delimiters: {
		thousands: ',',
		decimal: '.',
	},
	abbreviations: {
		thousand: 'พัน',
		million: 'ล้าน',
		billion: 'พันล้าน',
		trillion: 'ล้านล้าน',
	},
	ordinal(number) {
		return '.';
	},
	currency: {
		symbol: '$',
		name: 'USD',
		isFirst: true,
	},
});

numeral.register('locale', 'sr', {
	abbreviations: {
		thousand: ' xиљ.',
		million: ' млн.',
		billion: ' млрд.',
		trillion: ' трлн.',
	},
	delimiters: {
		thousands: ' ',
		decimal: '.',
	},
	ordinal(number) {
		return '.';
	},
	currency: {
		symbol: '$',
		name: 'USD',
		isFirst: true,
	},
});

numeral.register('locale', 'hr', {
	delimiters: {
		thousands: '.',
		decimal: ',',
	},
	abbreviations: {
		thousand: 'tis.',
		million: 'mil.',
		billion: 'bil.',
		trillion: 'tril.',
	},
	ordinal() {
		return '.';
	},
	currency: {
		symbol: '$',
		name: 'USD',
		isFirst: true,
	},
});

//Currencies

numeral.register('format', 'currency', {
	regexps: {
		format: /(\$)/,
	},
	format(value, format, roundingFunction) {
		return currencyFormat(value, format, roundingFunction, 'USD');
	},
});

numeral.register('format', 'eur', {
	regexps: {
		format: /(€)/,
	},
	format(value, format, roundingFunction) {
		return currencyFormat(value, format, roundingFunction, 'EUR');
	},
});

function currencyFormat(value, format, roundingFunction, curr, isLast = false) {
	let locale = numeral.locales[numeral.options.currentLocale],
		output;
	value = removeExponents(value);
	const roundingFormat = format.replace(curr, '').replace('&', '').trim();
	const outputArr = numeral._.numberToFormat(value, roundingFormat, roundingFunction).split(' ');

	if (locale.delimiters.decimal === '.') {
		output = outputArr[0].replace(/(\.[0-9]*[1-9])0+$|\.0*$/, '$1');
	} else {
		output = outputArr[0].replace(/(,[0-9]*[1-9])0+$|,0*$/, '$1');
	}
	output += outputArr[1] ? ` ${outputArr[1]}` : '';
	output = output.replace('-', '');
	output += isLast || !locale.currency.isFirst ? ' ' : '';
	const isSign = value < 0 || numeral._.includes(format, '&');
	output = (isSign && value >= 0 ? '+' : value < 0 ? '-' : '') + output;
	const currIndex = locale.currency.isFirst && !isLast ? (isSign ? 1 : 0) : output.length;
	output = numeral._.insert(output, curr, currIndex);

	return output;
}

//Specific formats
numeral.register('format', 'permille', {
	regexps: {
		format: /(‰)/,
		unformat: /(‰)/,
	},
	format(value, format, roundingFunction) {
		let space = numeral._.includes(format, ' ‰') ? ' ' : '',
			output;

		value = value * 10000;

		// check for space before ‰
		format = format.replace(/\s?‰/, '');

		output = numeral._.numberToFormat(value, format, roundingFunction);

		if (numeral._.includes(output, ')')) {
			output = output.split('');

			output.splice(-1, 0, space + '‰');

			output = output.join('');
		} else {
			output = output + space + '‰';
		}

		return output;
	},
	unformat(string) {
		return numeral._.stringToNumber(string) * 0.0001;
	},
});

numeral.register('format', 'sign', {
	regexps: {
		format: /(&)/,
	},
	format(value, format, roundingFunction) {
		let output;
		const isPositive = value > 0;
		format = format.replace('&', '');

		const outputArr = numeral._.numberToFormat(value, format, roundingFunction).split(' ');
		output = outputArr[0].replace(/(\.[0-9]*[1-9])0+$|\.0*$/, '$1');
		output += outputArr[1] ? ` ${outputArr[1]}` : '';
		output = numeral._.includes(format, '-') && !value ? '-' : output;
		output = isPositive ? '+' + output : output;
		return output;
	},
});

numeral.register('format', 'percent', {
	regexps: {
		format: /(%)/,
		unformat: /(%)/,
	},
	format(value, format, roundingFunction) {
		let space = numeral._.includes(format, ' %') ? ' ' : '',
			output;

		if (numeral.options.scalePercentBy100) {
			value = value * 100;
		}

		// check for space before %
		const roundingFormat = format.replace(/\s?%/, '').replace('sign', '');

		output = numeral._.numberToFormat(value, roundingFormat, roundingFunction);

		if (numeral._.includes(output, ')')) {
			output = output.split('');

			output.splice(-1, 0, space + '%');

			output = output.join('');
		} else {
			output = output + space + '%';
		}
		const isSign = value < 0 || numeral._.includes(format, '&');
		output = (isSign && value >= 0 ? '+' : value < 0 ? '' : '') + output;
		return output;
	},
	unformat(string) {
		let number = numeral._.stringToNumber(string);
		if (numeral.options.scalePercentBy100) {
			return number * 0.01;
		}
		return number;
	},
});

function removeExponents(n) {
	let sign = +n < 0 ? '-' : '',
		toStr = n.toString();
	if (!/e/i.test(toStr)) {
		return n;
	}
	let [lead, decimal, pow] = n
		.toString()
		.replace(/^-/, '')
		.replace(/^([0-9]+)(e.*)/, '$1.$2')
		.split(/e|\./);
	return +pow < 0
		? sign + '0.' + '0'.repeat(Math.max(Math.abs(pow) - 1 || 0, 0)) + lead + decimal
		: sign + lead + (+pow >= decimal.length ? decimal + '0'.repeat(Math.max(+pow - decimal.length || 0, 0)) : decimal.slice(0, +pow) + '.' + decimal.slice(+pow));
}
