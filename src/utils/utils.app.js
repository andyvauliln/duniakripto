import storage from 'local-storage-fallback';
import { ENV } from 'tz-config';
import { isDefined } from '.';

function fromEnvOrPassthrough(key) {
	// strip replacement chars `<[[]]>`
	const match = /<\[\[(.*)]]>/.exec(key);
	if (!match) {
		return key;
	}
	return process.env['REACT_APP_' + match[1]];
}

export function getEnvString(key, defaultParam) {
	const val = fromEnvOrPassthrough(key);
	return isDefined(val) && val !== '' ? String(val) : defaultParam;
}

export function getEnvBool(key, defaultParam = false) {
	const val = fromEnvOrPassthrough(key);
	return isDefined(val) ? val === 1 || val === '1' || val === 'true' : defaultParam;
}

export function makeid(length) {
	let result = '';
	let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

export function retry(fn, retriesLeft = 5, interval = 1000) {
	return new Promise((resolve, reject) => {
		fn()
			.then(resolve)
			.catch(error => {
				setTimeout(() => {
					if (retriesLeft === 1) {
						// reject('maximum retries exceeded');
						reject(error);
						return;
					}

					// Passing on "reject" is the important part
					retry(fn, retriesLeft - 1, interval).then(resolve, reject);
				}, interval);
			});
	});
}
/* eslint-disable no-unused-expressions */
export function setGoogleAnalytics() {
	const saved = storage.getItem('settings');
	const isAnalytics = saved ? JSON.parse(saved).consent.isAnalytics : false;
	if (isAnalytics) {
		if (!window.ga) {
			(function (i, s, o, g, r, a, m) {
				i.GoogleAnalyticsObject = r;
				i[r] =
					i[r] ||
					function () {
						(i[r].q = i[r].q || []).push(arguments);
					};
				i[r].l = 1 * new Date();
				a = s.createElement(o);
				m = s.getElementsByTagName(o)[0];
				a.async = 1;
				a.src = g;
				m.parentNode.insertBefore(a, m);
			})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
		}
		window.ga('create', ENV.GA_KEY, 'auto');
		window.ga('send', 'pageview', window.location.pathname + window.location.search);
	}
}
