import React from 'react';
import { debounce } from 'lodash-es';

const useResize = svgRef => {
	const [sizes, setSizes] = React.useState({ height: 0, width: 0 });

	React.useEffect(() => {
		const resize = debounce(() => {
			if (!svgRef.current) {
				return;
			}
			const sizes = {
				width: svgRef.current.parentElement.offsetWidth,
				height: svgRef.current.parentElement.offsetHeight,
			};

			if (sizes.width) {
				setSizes(sizes);
			}
		}, 200);

		resize();

		window.addEventListener('resize', resize);
		return () => {
			window.removeEventListener('resize', resize);
		};
	}, []);
	return sizes;
};

export default useResize;
