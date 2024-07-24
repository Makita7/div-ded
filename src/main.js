import './assets/main.scss';

import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';



import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/routes';

createApp(App)
.use(router)
    .use(Quasar, {
        plugins: [
        ],
    })
    .mount('#app');
