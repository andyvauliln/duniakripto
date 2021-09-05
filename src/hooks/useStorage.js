import { h } from 'preact';
import storage from 'local-storage-fallback';
import { useGlobal } from 'reactn';

export default function useStorage() {
	const [settings, _setSettings] = useGlobal('settings');

	if (settings && settings.version !== latestVersion) {
		const migrated = migrateStorage(settings.version, latestVersion, settings);
		_setSettings({ ...migrated });
		storage.setItem('settings', JSON.stringify(migrated));
	}

	return {
		...settings,
		setItem: (key, value) => {
			settings[key] = value;
			_setSettings({ ...settings });
			if (settings.consent.isSettings) {
				storage.setItem('settings', JSON.stringify(settings));
			}
		},
		getItem: key => settings[key],
		removeItem: key => {
			delete settings[key];
			_setSettings({ ...settings });
			if (settings.consent.isSettings) {
				storage.removeItem(key);
			}
		},
	};
}

function migrateStorage(from, to, settings) {
	for (let version = from; version < to; version++) {
		const fn = 'V' + version + '_to_V' + (version + 1);
		console.log('Migrating settings from', version, 'to', version + 1);
		settings = migrations[fn](settings);
	}
	return settings;
}

const latestVersion = 2;

const migrations = {
	V1_to_V2: settings => {
		settings.version = 2;
		settings.consent.isConfirmed = settings.consent.isAnalytics;
		return settings;
	},
};
