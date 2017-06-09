import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/admin/login/Login'
import BlogEditor from '@/components/admin/BlogEditor'
import DemoAdd from '@/components/admin/DemoAdd'
// import BlogAdminNav from '@/components/admin/BlogAdminNav'
import AdminList from '@/components/admin/AdminList'
import BlogClassAdd from '@/components/admin/BlogClassAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      components: {
        default: Login
      }
    },
    {
      path: '/login/*',
      name: 'Login',
      components: {
        default: Login
      }
    },
    {
      path: '/home',
      components: {
        default: BlogEditor
      }
    },
    {
      path: '/manage/:dir',
      components: {
        default: AdminList
      }
    },
    {
      path: '/addBlog',
      components: {
        default: BlogEditor
      }
    },
    {
      path: '/addblogclass',
      components: {
        default: BlogClassAdd
      }
    },
    {
      path: '/blogclass/edit',
      components: {
        default: BlogClassAdd
      }
    },
    {
      path: '/blog/edit',
      components: {
        default: BlogEditor
      }
    },
    {
      path: '/addDemo',
      components: {
        default: DemoAdd
      }
    },
    {
      path: '/user',
      components: {
        default: Login
      }
    }
  ]
})
