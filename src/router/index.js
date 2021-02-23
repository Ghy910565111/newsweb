import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import coment from '@/components/coment'
import phoneme from '@/components/phoneme'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/coment',
      name: 'coment',
      component: coment
    },
    {
      path: '/phoneme',
      name: 'phoneme',
      component: phoneme
    }
  ]
})
