import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './index.css'
import Calendar from 'vant/es/calendar'
import 'vant/es/calendar/style'

createApp(App)
  .use(router)
  .use(store)
  .use(Calendar)
  .mount('#app')
