import { getEnvBool, getEnvString } from 'tz-utils';

const defaultLangs = 'en,ru,de,it,es,fr,zh-hant,zh-hans,ko,ja,vi,th,sr,hr';

export const ENV = {
	API_URL: getEnvString('<[[TZSTATS_API_URL]]>', 'https://api.staging.tzstats.com'),
	GA_KEY: getEnvString('<[[GOOGLE_ANALYTICS_API_KEY]]>'),
	APP_VERSION: getEnvString('<[[APP_VERSION]]>'),
};
