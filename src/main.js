// TailwindCSS
import './assets/css/style.css';

// Notification
import "vue-toastification/dist/index.css";

import { createApp } from 'vue';

import Toast from "vue-toastification";

import App from './App.vue';

const app = createApp(App);
app.use(Toast);
app.mount('#app');
