import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import FreeJokes from './pages/FreeJokes.vue'
import AboutPage from './pages/AboutPage.vue'
import TodoApp from './pages/TodoApp.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/todo-app', component: TodoApp },
    { path: '/about-us', component: AboutPage },
    { path: '/free-jokes', component: FreeJokes }
  ]
})

const app = createApp(App);
app.use(router);
app.mount('#app')
