import { h } from 'preact';
import { Trans, useTranslation } from 'react-i18next';
import { isString } from 'tz-utils';
import { Placeholder, Text, variantToTag } from './DataView';

const TranslateView = ({ tag = 'span', base, i18d, children, ...props }) => {
	const as = variantToTag(props.variant, tag);
	const [t] = useTranslation();
	if (isString(children) && children.startsWith('tk_')) {
		children = <Trans>{t(children, i18d)}</Trans>;
	}
	return children ? (
		<Text as={as} {...props}>
			{children}
		</Text>
	) : (
		<Placeholder variant="inactive" width="30%" />
	);
};

export default TranslateView;
