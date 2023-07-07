import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import FreeJokes from './Pages/FreeJokes.vue'
import AboutPage from './Pages/AboutPage.vue'
import TodoApp from './Pages/TodoApp.vue';
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
