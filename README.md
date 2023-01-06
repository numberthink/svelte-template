# A simple Svelte-kit starter template

A skeleton Svelte project starter created with [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Features

Comes with a few built-in features including:
 - Site config for specifying key site parameters like site title and URL, as well as [open-graph metadata] (https://ogp.me/) like OG image and description. 
     - All configurable in `/src/stores/config.js`
 - About page template (in `/src/routes/about/page.svelte`)
 - Nav, Footer and MobileMenu components (located in `/src/components` folder)
    - Footer and menus are configurable in site config (`/src/stores/config.js`)
 - Tailwind CSS and Tailwind typography pre-installed
 
## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.


