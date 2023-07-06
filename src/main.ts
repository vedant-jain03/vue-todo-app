import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import TodoApp from './Pages/TodoApp.vue'
import AboutPage from './Pages/AboutPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/todo-app', component: TodoApp },
    { path: '/about-us', component: AboutPage }
  ]
})

const app = createApp(App);
app.use(router);
app.mount('#app')
