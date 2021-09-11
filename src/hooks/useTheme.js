import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import useStorage from './useStorage';

export default function useTheme() {
	const storage = useStorage();
	const [theme, _setTheme] = useState(getInitialTheme);

	// @media (prefers-color-scheme: no-preference) {}
	// @media (prefers-color-scheme: light) {}
	// @media (prefers-color-scheme: dark) {}
	function getDefaultTheme() {
		// default to dark
		let mode = 'dark';
		// if (!!window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
		// 	// OS theme setting detected as light
		// 	mode = 'light';
		// }
		return { mode };
	}

	function getInitialTheme() {
		const savedTheme = storage.getItem('theme');
		return savedTheme ? savedTheme : getDefaultTheme();
	}

	useEffect(() => {
		storage.setItem('theme', theme);
	}, [theme]);

	return {
		...theme,
		setTheme: ({ setTheme, ...theme }) => _setTheme(theme),
	};
}
