import Vue from 'vue'
import Router from 'vue-router'
// 导入刚才编写的组件
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Checkin from '@/components/home/Checkin'
import Record from '@/components/home/Record'
import Admin from '@/components/home/Admin'
import ManagerIndex from '@/components/manager/ManagerIndex'
import Managerlogin from '@/components/Managerlogin'
import ManagerHome from '@/components/manager/ManagerHome'
import Allstudyrooms from '@/components/manager/Allstudyrooms'



Vue.use(Router)

export default new Router({
  base: '/ibooking-vue/',
  mode: 'history',
  routes: [
  // 下面都是固定的写法
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // home页面并不需要被访问
      redirect: '/index',
      children: [
        {
          path: '/index',
         name: 'AppIndex',
         component: AppIndex,
          meta: {
           requireAuth: true
          }
        },
        {
          path: '/checkin',
         name: 'Checkin',
         component: Checkin,
          meta: {
           requireAuth: true
          }
        },
        {
          path: '/record',
         name: 'Record',
         component: Record,
          meta: {
           requireAuth: true
          }
        },
        {
          path: '/admin',
         name: 'Admin',
         component: Admin,
          meta: {
           requireAuth: true
          }
        }
     ]
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/managerlogin',
      name: 'Managerlogin',
      component: Managerlogin
    },
    {
      path: '/managerhome',
      name: 'ManagerHome',
      component: ManagerHome,
      // home页面并不需要被访问
      redirect: '/manager',
      children: [
        {
          path: '/manager',
          name: 'ManagerIndex',
          component: ManagerIndex,
          meta: {
           requireAuth: true
          }
        },
        {
          path: '/managerooms',
          name: 'Allstudyrooms',
          component: Allstudyrooms,
          meta: {
           requireAuth: true
          }
        }
     ]
    }
    /*{
      path: '/index',
      name: 'AppIndex',
      component: AppIndex,
      meta: {
        requireAuth: true
      }
    }*/
  ]
})
