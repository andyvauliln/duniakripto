import storage from 'local-storage-fallback';
import { setGlobal } from 'reactn';

const refreshCount = 0;
const isEditMode = false;
const isSiderbarOpen = false;
const appPage = '';
const headerTitle = '';
const isNotFound = false;
const hasUpgrade = false;
const defaultSettings = {
	version: 2,
	bookmarks: [],
	history: [],
	consent: { isSettings: false, isAnalytics: false, isConfirmed: false }
};

function getSettings() {
	const saved = storage.getItem('settings');
	return saved ? JSON.parse(saved) : defaultSettings;
}
console.log('yys');

const setDefaultGlobalState = () => {
	setGlobal({
		refreshCount,
		isEditMode,
		isSiderbarOpen,
		headerTitle,
		appPage,
		isNotFound,
		hasUpgrade,
		settings: getSettings()
	});
};

export default setDefaultGlobalState;
