<template>
  <div id="admin">
    <div class="leftNavs">
      <div class="tab">
      <h1>后台管理系统</h1>
        <img src="./assets/collapse.svg" >
      </div>
      <div class="logo">
        <h1>后台管理系统</h1>
        <img src="./assets/photo.png" width="180px" height="180px">
      </div>
      <div class="navs">
        <div v-for="nav in navs">
          <router-link :to="nav.url">{{nav.title}}</router-link>
          <div v-for="child in nav.children">
            <router-link :to="child.url">{{child.title}}</router-link>
          </div >
        </div>
      </div>
    </div>
    <div class="view">
      <div class="nav-view">
        <router-view name='navView'></router-view>
      </div>
      <div class="content-view">
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import 'whatwg-fetch'
export default {
  name: 'admin',
  data () {
    return {
      navs: [
        {
          title: '博客管理',
          url: '/manage/blog',
          children: [
            {
              title: '管理博客',
              url: '/manage/blog'
            },
            {
              title: '博客分类管理',
              url: '/manage/blogclass'
            },
            {
              title: '新博客',
              url: '/addBlog'
            }
          ]
        },
        {
          title: 'Demo管理',
          url: '/manage/demo',
          children: [
            {
              title: '管理Demo',
              url: '/manage/demo'
            },
            {
              title: '新Demo',
              url: '/addDemo'
            }
          ]
        }
      ]
    }
  },
  created: function () {
    console.log('created')
    var token = window.sessionStorage.getItem('token')
      // console.log(token)
    if (token === null) {
      window.sessionStorage.clear()
      window.location = '/admin/#/login/addBlog'
    }
  }
}
</script>

<style lang="less" scoped>

.slide-fade-enter-active{
  transition: all .5s ease;
}
.slide-fade-leave-active{
  transition: all .5s cubic-bezier(1.0,0.5,0.8,1.0);
}
.slide-fade-enter,.slide-fade-leave-active{
  transform:translateX(-100%);
  opacity: 0;
}

#admin {
  // min-height: 500px;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  position: fixed;
  .leftNavs{
    position: absolute;
    left: 0;
    margin: 0;
    height: 100%;
    background-color: #222222;
    width: 32px;
    overflow: hidden;

    transition:all .3s;
    -moz-transition:all .3s; /* Firefox 4 */
    -webkit-transition:all .3s; /* Safari and Chrome */
    -o-transition:all .3s; /* Opera */
    .tab{
      display: inline-block;
      height: 100%;
      color: white;
      left: 0;
      position: relative;
      img{
        position: absolute;
        top: 50%;
      }
    }
    .logo{
      display: none;
      margin: o auto;
      h1{
        color:white;
        text-align: center;
      }
      img{
        border-radius: 50%;
      }
    }
    .navs{
      padding-top: 20px;
      display: none;
      text-align: center;
      div{
        padding-top: 15px;
        width: 100%;
        text-align: left;
        // height: 30px;
        a{
          text-decoration: none;
          font-size: 16px;
          font-weight: bold;
          color: white;
        }
        div{
          text-indent: 2em;
          font-weight: bolder;
          font-size: 14px;
        }
      }
    }
  }
  .navs div:hover{
    color: gray;
  }
  .leftNavs:hover{
    width: 200px;
    // background-color: #f38956;
    padding-left: 0;
    .tab{
      display: none;
    }
    .logo,.navs{
      display: block;
    }
    &+.view{
      margin-left: 200px;
    }

  }
  .view{
    // padding: 10px 15px 10px 32px;
    overflow-y: auto;
    position: absolute;
    height: 100%;
    width: 100%; 
    margin-left: 32px;
    // margin-left: 220px;
    // border: solid 2px red;

    transition:all .3s;
    -moz-transition:all .3s; /* Firefox 4 */
    -webkit-transition:all .3s; /* Safari and Chrome */
    -o-transition:all .3s; /* Opera */
  }
  .view>div{
    padding: 0 35px 0 10px;
  }
}
</style>
