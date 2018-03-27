import Vue          from 'vue'
import Router       from 'vue-router'
import PageNotFound from '../components/page/page-not-found.vue'
import PageHome     from '../components/page/page-home.vue'
import PageMusic    from '../components/page/page-music.vue'
import PageParties  from '../components/page/page-parties.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '*',
            name: 'PageNotFound',
            component: PageNotFound
        },
        {
            path: '/',
            name: 'PageHome',
            component: PageHome
        },
        {
            path: '/music',
            name: 'PageHome',
            component: PageMusic
        },
        {
            path: '/parties',
            name: 'PageHome',
            component: PageParties
        },
    ],
    mode: 'history'
})
