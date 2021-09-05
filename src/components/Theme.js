import theme from 'styled-theming';
import { directColors, themeColors } from './Colors';

export const getThemeColors = theme('mode', {
	light: themeColors.light,
	dark: themeColors.dark,
	solardark: themeColors.solardark,
});

export { directColors };
