import { createApp } from 'vue'
import App from '~/App.vue'
import 'uno.css'
import '~/style.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import { router } from '~/router'

createApp(App).use(router).mount('#app')
