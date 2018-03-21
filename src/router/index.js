import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainFrame from '@/components/MainFrame'
import Login from '@/components/Login'
import MainPage from '@/components/mainframe/MainPage'
import Page1 from '@/components/mainframe/model1/Page1'
import Page2 from '@/components/mainframe/model1/Page2'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', redirect: '/login'},
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mainframe',
      name: 'MainFrame',
      component: MainFrame,
      children: [
        {name: 'main', path: '/mainframe/main', component: MainPage},
        {name: 'page1', path: '/mainframe/page1', component: Page1},
        {name: 'page2', path: '/mainframe/page2', component: Page2}
      ]
    },
  ]
})
