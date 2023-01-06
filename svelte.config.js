import adapter from '@sveltejs/adapter-auto';
import node from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: node(),
	}
};

export default config;
