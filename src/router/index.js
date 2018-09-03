import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      mode: history,
      path: '/',
      component: () => import('./../pages/home/Home')
    }
  ]
})
