import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import Signin from './components/Signin.vue';

const routes = [
    { path: '/', component: Login },
    { path: '/signin', component: Signin },
    // 可能需要增加其他頁面的路由
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);

app.component('Login', Login);  // 註冊 Login 組件
app.component('Signin', Signin); // 註冊 Signin 組件

app.use(router);

app.mount('#app');
