import { writable } from 'svelte/store';

/**
 * Defines global site settings.
 * @typedef {Object} siteConfig
 * @property {string} [url] - URL of site.
 * @property {string} [title] - Title of site.
 * @property {string} [description] - Description of site.
 * @property {string} [defaultOGImage] - Default Open Graph image of site.
 * @property {string} [twitterHandle] - Twitter handle associated with site.
 * @property {string} [repoURL] - Repo URL associated with site.
 */

/**
 * @type {siteConfig} siteConfig
 */
 const siteConfig = {
	url: 'https://numberthink.com',
	title: 'NumberThink',
	description: 'My personal site',
	defaultOGImage: '',
	twitterHandle: 'https://twitter.com/bkmetaverse',
	repoURL: 'https://github.com/numberthink/svelte-template'
};

export const SiteConfig = writable(siteConfig);

/**
 * @typedef {Object} menuItem
 * @property {string} name - Item display name.
 * @property {'route' | 'link'} type - Item type.
 * @property {string} href - Item href.
 * @property {boolean} [hidden] - Whether item is currently hidden
 */

/**
 * @typedef {Object} mainMenuConfig
 * @property {Array.<menuItem>} options - Array of options.
 */

/**
 * Defines the layout of the main menu.
 * @type {mainMenuConfig} mainMenuConfig
 */
const mainMenuConfig = {
	options: [
		{ name: 'Home', type: 'route', href: '/' },
		{ name: 'About', type: 'route', href: '/about' },
	]
};

export const MainMenuConfig = writable(mainMenuConfig);




/**
 * @typedef {object} footerMenuConfig
 * @property {Array.<{title: ?string, items: Array.<menuItem>}>} columns - Array of footer columns.
 */

/**
 * Defines the layout of the footer menu.
 * @type {footerMenuConfig} footerMenuConfig
 */
 export const footerMenuConfig = {
	columns: [
		{
			title: null,
			items: [
				{ name: 'Home', type: 'route', href: '/' },
				{ name: 'About', type: 'route', href: '/about' },
                { name: 'Github', type: 'link', href: 'https://github.com/numberthink/starter' },
				// { name: 'Blog', type: 'route', href: '/blog'},
			]
		},
	]
};

export const FooterMenuConfig = writable(footerMenuConfig);