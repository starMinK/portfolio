import { createApp } from 'vue'
import App from './App.vue'
import VueTyperPlugin from 'vue-typer';

const app = createApp(App);
app.use(VueTyperPlugin);
app.mount('#app');