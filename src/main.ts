import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';

import Tacitus from './components/Tacitus.vue';
import Ray from './components/Ray.vue';

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Tacitus},
    {path: '/ray', component: Ray}
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');