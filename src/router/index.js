import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import coment from '@/components/coment'
import phoneme from '@/components/phoneme'
import aboutus from '@/components/aboutus'
import wenzhang from '@/components/wenzhang'
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
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    },
    {
      path: '/wenzhang',
      name: 'wenzhang',
      component: wenzhang
    }
  ]
})
