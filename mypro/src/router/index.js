import Vue from 'vue'
import Router from 'vue-router'

// 当打包构建应用时，Javascript 包会变得非常大，影响页面加载。
// 如果我们能把不同路由对应的组件分割成不同的代码块，
// 然后当路由被访问的时候才加载对应组件，这样就更加高效了。

const TypedBlog = resolve => require(['@/components/blog/TypedBlog.vue'], resolve)
const BlogNav = resolve => require(['@/components/blog/BlogNav.vue'], resolve)
const Blog = resolve => require(['@/components/blog/Blog.vue'], resolve)
const Home = resolve => require(['@/components/home/Home.vue'], resolve)
const About = resolve => require(['@/components/about/About.vue'], resolve)
const Demo = resolve => require(['@/components/demo/Demo.vue'], resolve)

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
