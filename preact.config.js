const netlifyPlugin = require('preact-cli-plugin-netlify');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = (config, env) => {
	netlifyPlugin(config);
	config.resolve.modules.push(env.src);
	config.resolve.alias['tz-hooks'] = 'hooks';
	config.resolve.alias['tz-base'] = 'components/Base';
	config.resolve.alias['tz-utils'] = 'utils';
	config.resolve.alias['tz-config'] = 'config';
	config.resolve.alias['tz-hoc'] = 'hoc';
	config.resolve.alias['tz-theme'] = 'components/Theme';
	config.resolve.alias['tz-services'] = 'services';
	config.resolve.alias.react = 'preact/compat';
	config.resolve.alias['react-dom/test-utils'] = 'preact/test-utils';
	config.resolve.alias['react-dom'] = 'preact/compat';
	env.production &&
		!env.ssr &&
		config.plugins.push(
			new ImageminPlugin({
				from: './build/assets/**',
				pngquant: {
					quality: '60'
				},
				plugins: [
					imageminMozjpeg({
						quality: 50,
						progressive: true
					})
				]
			})
		);

	return config;
};
