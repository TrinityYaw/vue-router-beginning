

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'

import about from './views/about.vue'
import contact from './views/contact.vue'
import home from './views/home.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: home },
        { path: '/about', component: about },
        { path: '/contact', component: contact },
    ],
  });





const app = createApp(App)

app.use(router)

app.mount('#app')
