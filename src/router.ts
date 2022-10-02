import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import DocDemo from './components/DocDemo.vue';
import SwitchDemo from './components/SwicthDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import {h} from 'vue';
import Markdown from './components/markdown.vue';

const md = (filename) => h(Markdown, {path: `../markdown/${filename}.md`, key: filename});

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/Doc', component: Doc, children: [
        {path: '', component: DocDemo},
        {path: 'intro', component: md('intro')},
        {path: 'install', component: md('install')},
        {path: 'get-started', component: md('get-started')},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
      ]
    }
  ]
});

