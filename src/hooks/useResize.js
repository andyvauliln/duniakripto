import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { debounce } from 'lodash-es';

const useResize = svgRef => {
	const [sizes, setSizes] = useState({ height: 0, width: 0 });

	useEffect(() => {
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
