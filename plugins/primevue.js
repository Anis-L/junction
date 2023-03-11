import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Password from 'primevue/password';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Calendar from 'primevue/calendar';
import Menubar from 'primevue/menubar';
import Textarea from 'primevue/textarea';


export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true })
    nuxtApp.vueApp.use(ToastService)
    nuxtApp.vueApp.component('Button', Button)
    nuxtApp.vueApp.component('InputText', InputText)
    nuxtApp.vueApp.component('Toast', Toast)
    nuxtApp.vueApp.component('Password', Password)
    nuxtApp.vueApp.component('TabView', TabView)
    nuxtApp.vueApp.component('TabPanel', TabPanel)
    nuxtApp.vueApp.component('Calendar', Calendar)
    nuxtApp.vueApp.component('Menubar', Menubar)
    nuxtApp.vueApp.component('Textarea', Textarea)

})