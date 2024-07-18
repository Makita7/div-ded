import './assets/main.css';
import './assets/icons/further.css';

import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';



import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
    .use(Quasar, {
        plugins: [
        ],
    })
    .mount('#app');
