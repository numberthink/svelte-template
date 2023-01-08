# A simple Svelte-kit starter template

A Svelte project starter created with [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Features

Comes with a few built-in features including:
 - Site config for specifying key site parameters like site title and URL, as well as [open-graph metadata](https://ogp.me/) like OG image and description. 
     - All configurable in `/src/stores/config.js`
 - About page template (in `/src/routes/about/page.svelte`)
 - Nav, Footer and MobileMenu components (located in `/src/components` folder)
    - Footer and menus are configurable in site config (`/src/stores/config.js`)
 - Tailwind CSS and Tailwind typography pre-installed

## Developing

### Step 1: Clone project

Create an empty folder for your project and then clone this repo into it. You can do so by running this command from your project folder:

```bash
npx degit https://github.com/numberthink/svelte-template
```

### Step 2: Install dependencies

You can install the dependencies with `npm install` (or `pnpm install` or `yarn`):

```bash
npm install
```

### Step 3: Run the app locally

To run your project locally:

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

By default, this generates a static version of your site. If you want to use a different adapter (e.g. for sever-side rendering), you will have to install that adapter. You can read more on Svelte adapters [here](https://kit.svelte.dev/docs/adapters). 


