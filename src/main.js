import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import './assets/app.scss'
import './assets/main.css'
import jQuery from  'jquery'
window.$= window.jQuery = jQuery
import 'popper.js'
import router from './router'

createApp(App).use(router).mount('#app')
