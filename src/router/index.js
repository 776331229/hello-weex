/**
 * Created by zc on 2017/8/29.
 */
import Router from 'vue-router'
import Login from './../views/login/index.vue'
// import Home from './../views/home.vue'
// import Me from './../views/me.vue'

Vue.use(Router);


export default new Router({
    // mode: 'abstract',
    routes: [
        { path: '/login', component: Login },
        // { path: '/home', component: Home },
        // { path: '/me', component: Me },
        { path: '/', redirect: '/login' }
    ]
})