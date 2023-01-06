import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from 'tailwindcss';
/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(),tailwindcss()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;