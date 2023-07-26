import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "@renderer/assets/css/tailwind.css"
createApp(App)
.use(ElementPlus)
.mount('#app')
