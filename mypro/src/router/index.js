import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import NavHeader from '@/components/frame/Navheader'
import TypedBlog from '@/components/blog/TypedBlog'
import BlogNav from '@/components/blog/BlogNav'
// import BlogUp from '@/components/blog/BlogUp'
import Blog from '@/components/blog/Blog'
import BlogEditor from '@/components/blog/BlogEditor'
import Home from '@/components/home/Home'
import About from '@/components/about/About'
import Login from '@/components/login/Login'
import Demo from '@/components/demo/Demo'
import DemoAdd from '@/components/demo/DemoAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
        default: Home
      }
    },
    {
      path: '/test',
      name: 'NavHeader',
      component: NavHeader
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/addDemo',
      component: DemoAdd
    },
    {
      path: '/login/:op',
      name: 'Login',
      component: Login
    },
    {
      path: '/About',
      component: About
    },
    {
      path: '/alongBlog/:id',
      name: 'NavHeader',
      component: Blog
    },
    // {
    //   path: '/blogup',
    //   name: 'BlogUp',
    //   component: BlogUp
    // },
    {
      path: '/addBlog',
      component: BlogEditor
    },
    // {
    //   path: '/manage',
    //   component: BlogEditor
    // },
    {
      path: '/blog/:type',
      name: 'Blog',
      components: {
        default: TypedBlog,
        leftView: BlogNav
      }
    }
  ]
})
