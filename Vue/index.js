//import Vue from 'vue/dist/vue.js';
var Vue = require('vue');
Vue.use(require('vue-moment'));
var VueRouter = require('vue-router');

Vue.use(VueRouter);

var user = require('./user.vue');
var home = require('./home.vue');

const routes = [
    { path: '/users', component: user },
    { path: '/home', component: home }
];
const router = new VueRouter({
    routes // short for `routes: routes`
});

const app = new Vue({
    router
}).$mount('#app');
