// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        "primevue/resources/themes/lara-light-blue/theme.css",
        "primevue/resources/primevue.css",
        "primeicons/primeicons.css"
    ],
	build: {
		transpile: ["primevue"]
	}
    // modules: [
    //     ['@nuxtjs/google-fonts', {
    //         families: {
    //             'Golos+Text': true,
    //             download: true,
    //             inject: true
    //         }
    //     }]
    // ]
})
