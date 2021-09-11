import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import storage from 'local-storage-fallback';
import moment from 'moment';
import 'moment/locale/de';
import 'moment/locale/es';
import 'moment/locale/fr';
import 'moment/locale/it';
import 'moment/locale/ja';
import 'moment/locale/ko';
import 'moment/locale/hr';
// import 'moment/locale/pt';
import 'moment/locale/ru';
import 'moment/locale/zh-cn';
import 'moment/locale/zh-hk';
import 'moment/locale/vi';
import 'moment/locale/th';
import 'moment/locale/sr-cyrl';
import numeral from 'numeral';
import { initReactI18next } from 'react-i18next';
import { getHashOrBakerName, getHashType, getProposalByHash, getShortHash, isDate, isFloat, isNumber, isString, toDuration } from 'tz-utils';
import './formatters';

const toMoment = value => {
	switch (true) {
		case isString(value):
			return moment.parseZone(value);
		case isDate(value):
			return moment(value);
		default:
			return moment(new Date(value));
	}
};
const defaultLangs = 'en,ru,de,it,es,fr,zh-hant,zh-hans,ko,ja,vi,th,sr,hr';

const detectLang = () => {
	let lang = navigator.language || 'en';
	switch (lang) {
		case 'zh':
		case 'zh-CN':
			return 'zh-hans';
		case 'zh-HK':
		case 'zh-TW':
			return 'zh-hant';
		case 'sr-cyrl':
			return 'sr';
		default:
			lang = lang.split('-')[0];
			if (defaultLangs.indexOf(lang) < 0) {
				lang = 'en';
			}
	}
	return lang;
};

const initLang = () => {
	const st = storage.getItem('settings');
	const parseLang = st ? JSON.parse(st).lang : '';
	const lang = parseLang || detectLang();
	document.documentElement.lang = lang;
	return lang;
};

moment.updateLocale('de', {
	calendar: {
		sameDay: '[Heute um] LT [Uhr]',
		sameElse: 'L',
		nextDay: '[Morgen um] LT [Uhr]',
		nextWeek: 'dddd [um] LT [Uhr]',
		lastDay: '[Gestern um] LT [Uhr]',
		lastWeek: '[Letzten] dddd [um] LT [Uhr]',
	},
});

i18n
	.use(XHR)
	.use(initReactI18next)
	.init({
		backend: {
			loadPath: '/locales/{{ns}}/{{lng}}.json',
			addPath: '/locales/{{ns}}.missing.json',
			jsonIndent: 4,
		},

		debug: false,
		lng: initLang(),
		saveMissing: false,
		saveMissingTo: 'fallback',
		parseMissingKeyHandler(key) {
			key = key.startsWith('tk_') ? key.substring(3) : key;
			if (!/^[A-Z]/.test(key)) {
				console.log('Missing i18n key', key);
			}
			return key;
		},
		fallbackLng: {
			'de-CH': ['fr', 'it'],
			'zh-Hant': ['zh-hans', 'en'],
			'zh-Hans': ['zh-hans', 'en'],
			es: ['fr', 'en'],
			default: ['en'],
		},
		cleanCode: true,
		load: 'currentOnly',
		lowerCaseLng: true,
		whitelist: defaultLangs,

		keySeparator: false,

		interpolation: {
			escapeValue: false,
			format(value, format, lng) {
				switch (format) {
					case 'money':
						if (isFloat(value)) {
							return numeral(value).format('0,0[.]000000 XTZ');
						}
						return numeral(parseInt(value) / 1000000).format('0,0[.]000000 XTZ');

					case 'percent':
						return numeral(value).format(',.00 %');

					case 'percent100':
						return numeral(parseInt(value) / 10000).format(',.00 %');

					case 'date':
						return toMoment(value).format('ll');

					case 'datetime':
						return toMoment(value).format('ll HH:mm');

					case 'ago':
						return toMoment(value).fromNow();

					case 'intr':
						return toDuration(value, 's');

					case 'sign':
						return numeral(value).format('& ,.');

					case 'number':
						return numeral(value).format(',.');

					case 'short':
						if (value) {
							switch (getHashType(value)) {
								case 'account':
									return getShortHash(value, 8, 6);
								case 'operation':
									return getShortHash(value, 6, 4);
								case 'protocol':
									return getShortHash(value, 8, 4);
							}
						}
						return getShortHash(value, 8, 4);

					case 'alias':
						if (value) {
							switch (getHashType(value)) {
								case 'account':
									return getHashOrBakerName(value);
								case 'protocol':
									return getProposalByHash(value);
							}
						}
						return value;

					default:
						switch (true) {
							case isDate(value):
								return moment(value).format('ll HH:mm:ss');
							case isNumber(value):
								return numeral(value).format(',.');
							default:
								return value;
						}
				}
			},
		},
		react: {
			wait: false,
			useSuspense: true,
			transSupportBasicHtmlNodes: true,
			transKeepBasicHtmlNodesFor: ['br', 'strong', 'b', 'i', 'p'],
		},
		ns: ['common', 'fallback'],
		defaultNS: 'common',
		fallbackNS: 'fallback',
	});

i18n.on('languageChanged', lng => {
	switch (lng) {
		case 'zh-hans':
			moment.locale('zh-cn');
			break;
		case 'zh-hant':
			moment.locale('zh-hk');
			break;
		case 'sr':
			moment.locale('sr-cyrl');
			break;
		default:
			moment.locale(lng);
	}
	numeral.locale(lng === 'en' ? 'en-En' : lng);
	document.documentElement.lang = lng;
});

export default i18n;
