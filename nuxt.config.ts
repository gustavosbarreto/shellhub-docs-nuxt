import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  //...
    build: {
	transpile: ['vuetify'],
    },
    modules: [
	(_options, nuxt) => {
	    nuxt.hooks.hook('vite:extendConfig', (config) => {
		// @ts-expect-error
		config.plugins.push(vuetify({ autoImport: true }))
	    })
	},
	'@nuxt/content',
    ],
    content: {
	highlight: {
	    theme: {
		dark: 'github-dark',
		default: 'github-light'
	    },
	    preload: ['json', 'shell', 'markdown', 'yaml', 'bash', 'go']
	},
    },
    vite: {
	vue: {
	    template: {
		transformAssetUrls,
	    },
	},
    },
})
