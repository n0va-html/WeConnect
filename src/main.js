import { createApp } from 'vue';
import App from './views/app.vue';
import router from './router/index.js'; // Import du router

const app = createApp(App);
app.use(router);
app.mount('#app');
