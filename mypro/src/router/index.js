import Vue from 'vue'
import Router from 'vue-router'
// import NavHeader from '@/components/frame/Navheader'
import TypedBlog from '@/components/blog/TypedBlog'
import BlogNav from '@/components/blog/BlogNav'
import Blog from '@/components/blog/Blog'
import Home from '@/components/home/Home'
import About from '@/components/about/About'
import Demo from '@/components/demo/Demo'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home
      }
    },
    // {
    //   path: '/test',
    //   component: NavHeader
    // },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/alongBlog/:id',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog/:type',
      name: 'TypedBlog',
      components: {
        default: TypedBlog,
        leftView: BlogNav
      }
    }
  ]
})
