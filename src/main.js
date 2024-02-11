import { createApp } from 'vue'
import App from './App.vue'
// Rutas
import router from './routes/index';
// Estilos Aplicacion
import style from './assets/css/styles.css';
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })

createApp(App)
.use(router)
.use(style)
.use(vuetify)
.mount('#app')
