import moment from 'moment';
import i18n from 'i18next';

export const isString = val => typeof val === 'string' || val instanceof String;
export const isArray = val => Array.isArray(val);
export const isObject = val => typeof val === 'object' && val !== null && !isArray(val);
export const isBool = val => typeof val === 'boolean';
export const isDefined = val => typeof val !== 'undefined';
export const isUndefined = val => typeof val === 'undefined';

export function convertCalendar(num, prefix, short) {
	const diff = new Date(num) - new Date();
	if (diff < 60000) {
		return 'tk_now';
	}
	if (diff > 2 * 86400000 || diff < 3600000) {
		return convertMinutes(num, prefix, short);
	}
	let res = [moment(num).calendar(!!short)];
	if (prefix) {
		res.unshift(prefix);
	}
	return res.join(' ');
}

export function convertMinutes(num, prefix, short) {
	if (new Date(num) - new Date() < 60000) {
		return 'tk_now';
	}
	let res = [moment(num).fromNow(!!short)];
	if (prefix) {
		res.unshift(prefix);
	}
	return res.join(' ');
}

export function convertCountdown(num, prefix, short) {
	let res = [moment(num).fromNow(!!short)];
	if (prefix) {
		res.unshift(prefix);
	}
	return res.join(' ');
}

const minute = 60000;
const hour = 60 * minute;
const day = 1440 * minute;
const stopper = 'smhd';

export function toDuration(num, base = 'ms', zero = false, prefix, stop, trim = 0) {
	if (isString(num)) {
		num = new Date(num) - new Date();
	} else if (isDate(num)) {
		num = num - new Date();
	} else {
		// convert to millisec (native JS time precision)
		switch (base) {
			case 's':
				num = num * 1000;
				break;
			case 'm':
				num = num * minute;
				break;
			case 'h':
				num = num * hour;
				break;
			default:
				break;
		}
	}
	num = num < 0 ? 0 : num;
	const d = Math.floor(num / day);
	const h = Math.floor((num - d * day) / hour);
	const m = Math.floor((num - d * day - h * hour) / minute);
	const s = Math.floor((num / 1000) % 60);
	const ms = Math.floor(num % 1000);
	const units = i18n.t('tk_duration_unit_map').split(' ');
	stop = stopper.indexOf(stop);
	let res = [];
	if (d > 0) {
		res.push(d + units[0]);
	}
	if (stop < 3 && (h > 0 || zero)) {
		res.push(h + units[1]);
	}
	if (stop < 2 && (m > 0 || zero)) {
		res.push(m + units[2]);
	}
	if (stop < 1 && (s > 0 || zero)) {
		res.push(s + units[3]);
	}
	if (stop < 0 && ms > 0) {
		res.push(ms + units[4]);
	}
	if (trim > 0) {
		res.splice(trim);
	}
	if (!res.length) {
		res.push('0');
	}
	prefix = prefix || '';
	return prefix + res.join(' ');
}

export function getShortHash(hash, left = 5, right = 4) {
	if (!hash) {
		return hash;
	}
	right = right || 4;
	if (left === 0 || hash.length <= left + right) {
		return hash;
	}
	return `${hash.slice(0, left)}..${hash.slice(-right)}`;
}

export function getShortName(name, length = 7) {
	const isHash = !!getHashType(name);
	if (isHash) {
		return getShortHash(name, length);
	}
	return name ? (length < name.length ? `${name.slice(0, length)}...` : name) : '';
}

export function isMidnight(ts) {
	const d = new Date(ts);
	return d.getHours() === 0 && d.getMinutes() === 0;
}
export function getDateFormatOrAgo(date) {
	const now = new Date();
	const isAgo = now.getTime() - date.getTime() < 1000 * 60 * 60 * 24;
	return isAgo ? 'ago' : now.getFullYear() === date.getFullYear() ? 'MMM DD, HH:mm:ss' : 'll, HH:mm:ss';
}

export function getDateFormat(date) {
	const now = new Date();
	date = isDate(date) ? date : new Date(date);
	return now.getFullYear() === date.getFullYear() ? 'MMM DD, HH:mm:ss' : 'll, HH:mm:ss';
}
