import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '../views/Movie.vue'
import Cinema from '../views/Cinema.vue'
import Mine from '../views/Mine.vue'
import City from '../components/City'
import Detail from '../components/Detail'
import NowPlaying from '../components/NowPlaying'
import ComingSoon from '../components/ComingSoon'
import Search from '../components/Search'
import login from '../components/Login'
import reg from '../components/Reg'
import center from '../components/PersonCenter'
import findPassword from '../components/FindPassword'



Vue.use(VueRouter)

const routes = [
  {
    path: '/movie',
    name: 'Movie',
    component: Movie,
    children: [
      {
        path: 'city',
        component: City
      },
      {
        path: 'nowPlaying',
        component: NowPlaying
      },
      {
        path: 'comingSoon',
        component: ComingSoon
      },
      {
        path: 'search',
        component: Search
      },
      {
        path: '/movie',
        redirect: '/movie/nowPlaying'
      }


    ]
  },
  {
    path: '/cinema',
    name: 'Cinema',
    component: Cinema
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine,
    children: [
      {
        path: 'login',
        component: login
      },
      {
        path: 'reg',
        component: reg
      },
      {
        path: 'findPassword',
        component: findPassword
      },
      {
        path: 'center',
        component: center
      },
      {
        path: '/mine',
        redirect: 'login'
      }
    ]
  },
  {
    path: '/',
    redirect: '/movie'
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
]

const router = new VueRouter({
  routes
})

export default router
