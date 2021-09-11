export const defaultFont = "-apple-system,BlinkMacSystemFont,'Helvetica Neue',Helvetica,Arial,sans-serif";
export const defaultFontSizePx = 14;
export const defaultSpace = 10;

export const sizes = {
	mobileS: '0px',
	mobileM: '576px',
	mobileL: '992px',
	desktop: '1200px'
};

export const sizesAsNumbers = {
	mobileS: 0,
	mobileM: 576,
	mobileL: 992,
	desktop: 1200
};

export const maxDevices = {
	mobileS: `(max-width: ${sizes.mobileS})`,
	mobileM: `(max-width: ${sizes.mobileM})`,
	mobileL: `(max-width: ${sizes.mobileL})`,
	desktop: `(max-width: ${sizes.desktop})`
};

export const minDevices = {
	mobileS: `(min-width: ${sizes.mobileS})`,
	mobileM: `(min-width: ${sizes.mobileM})`,
	mobileL: `(min-width: ${sizes.mobileL})`,
	desktop: `(min-width: ${sizes.desktop})`
};

export const fontSizes = {
	smt: '0.8em',
	sm: '0.9em',
	md: '1em',
	lg: '1.2em',
	lgt: '1.4em',
	slg: '1.6em',
	xxs: '1.8em',
	xxm: '2em',
	xxl: '2.2em',
	x3l: '3em'
};
