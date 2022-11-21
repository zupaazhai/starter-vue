import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/components/HomePage.vue'
import ContactPage from '@/components/ContactPage.vue'

const routes = [
  {path: '/', component: HomePage},
  {path: '/contact', component: ContactPage},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
