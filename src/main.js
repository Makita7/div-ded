import './assets/main.scss';


// Quasar
import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';


// Firebase
import { VueFire, VueFireAuth } from 'vuefire';
import { initializeApp } from 'firebase/app';
import vuefireCredentials from '../div-ded-firebase-adminsdk-ig4u8-455d99bfca.json';

const fireBaseConfig = vuefireCredentials;
export const fireBaseApp = initializeApp(fireBaseConfig);


// General
import App from './App.vue';
import { createApp } from 'vue';
import { router } from './router/routes';


createApp(App)
.use(VueFire, {
    fireBaseApp,
    modules: [
        VueFireAuth,
    ]
})
.use(router)
.use(Quasar, {
    plugins: [
    ],
})
.mount('#app');
