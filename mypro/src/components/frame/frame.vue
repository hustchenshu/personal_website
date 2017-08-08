<template>
  <div id="app">
    <div class="container">
      <div class="wrap">
        <div class="header">
          <NavHeader :LeftNavs=LeftNavs :mainTitle=mainTitle :subTitle=subTitle></NavHeader>
        </div>
        <div class="outer">
          <div class="left">
            <transition name="slide-fade">
            <router-view name="leftView" class="leftView"></router-view>
            </transition>
          </div>
          <div class="view">
            <transition name="slide-fade">
            <router-view></router-view>
            </transition>
          </div>

          <div class="footer">
            <div class="copyright">
              © 2017 HustChenShu, Inc. <br>Based on Vue and Express.<br>
              <a href="http://www.miitbeian.gov.cn" target='_blank'>鄂ICP备17017286号-1</a>
            </div>
            <div class="links">
              <div class="github">
              <a href="https://github.com/hustchenshu" target="_blank">
                <svg aria-hidden="true" class="mark" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
              </a>
            </div>
            <div class="csdn-svg">
              <a href="http://blog.csdn.net/dujiajiyiyi" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="mark" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="32.41" height="28.313" viewBox="0 0 32.41 28.313"><path d="M32.392,1.067 C32.118,3.080 31.876,4.863 31.571,7.111 C27.992,6.559 24.431,6.049 20.851,6.345 C17.574,6.616 14.398,7.235 12.079,9.747 C7.821,14.358 10.138,20.714 16.570,21.848 C20.574,22.555 24.627,22.174 28.643,21.624 C28.488,24.734 28.480,24.260 28.340,27.301 C28.310,27.966 28.462,27.705 23.753,28.183 C18.758,28.433 13.767,28.493 8.980,26.720 C4.444,25.041 0.872,22.370 0.148,17.436 C-0.597,12.358 1.533,8.258 5.612,5.096 C11.733,0.349 22.443,-1.321 32.392,1.067 Z" class="cls-1"/></svg>
              </a>
            </div>
            </div>
          </div>


        </div>

      </div>
    </div>
    <div class="toTop">
      <a href="javascript:scroll(0,0)">
        <img src="../../assets/top.png" alt="回到顶部">
      </a>
  </div>
  </div>
</template>

<script>
import NavHeader from '@/components/frame/Navheader'

export default {
  components: {NavHeader},
  data () {
    return {
      mainTitle: '静水流深',
      subTitle: '厚积薄发',
      LeftNavs: [
        {
          title: 'Home',
          url: '/'
        },
        {
          title: 'Blog',
          url: '/blog/All'
        },
        {
          title: 'Demo',
          url: '/demo'
        },
        {
          title: 'About',
          url: '/About'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td
{
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    font-style: inherit;

    margin: 0;
    padding: 0;

    vertical-align: baseline;

    border: 0;
    outline: 0;
}
body
{
    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;

}

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



.container{
  position: relative;
  height: 100%;
}

.wrap{
  position: absolute;;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.header{
  position: relative;
  width: 100%;
  height: 300px;

  color: black;
  background: url('/static/wallhaven.jpg') center black;

  -webkit-background-size: cover;
       -moz-background-size: cover;
            background-size: cover;

}


.outer{
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 20px;
  min-height: 500px;
  background: rgba(225,225,225,0.6);
  // display: flex;
  .left{
    // width: 200px;
    // position: fixed;
    // top: 320px;
    // left: 10px;
    // z-index: 100;
    margin-right: 10px;
    // border: dashed 1px;
    // padding: 10px;
    float: left;
    .leftNav{
      width: 100%;
      height: 200px;
      border: solid 1px;
      margin-top: 20px;
      border-radius: 40px 15px;
    }
  }
  
  .view{
    // width: 100%;
    // flex:1;

    
    overflow: hidden;
    zoom: 1;
  }
}

.footer{
  position: absolute;
  height: 120px;
  width: 100vw;

  margin: 0 auto;

  // bottom: 0;
  left: 50%;
  transform:translate(-50%);
  background: #2d2d2d;
  text-align: center;
  .links{
    // float: left;
    .github{
      padding: 10px 20px 20px 5px;
    }
    .github,.csdn-svg{
      font-size: 6px;
      margin: auto;
      display: inline-block;
      // padding-top: 20px;
      // width: 160px;
      // height: 24px;
      a{
        text-decoration: none;
        color: gray;
        text-align: center;
        vertical-align: middle;
        .mark{
          fill: #c6cbd1;
          width: 32px;
          height: 32px;
        }
        .mark:hover{
          fill: #cc9982;
        }
      }
    }
  }
  .copyright{
    position: absolute;
    // right: 10px;
    a{
      text-decoration: none;
      color:black;
    }
    left:50%;
    transform:translate(-50%); 
    bottom: 1em;
  }

}

.toTop{
  position: fixed;
  bottom: 80px;
  right: 80px;
  z-index:999;
}
@media screen and (max-width:414px){
  .toTop{
    display: none;
  }
  .leftView{
    display: none;
  }
}

#app,.container{
  min-height: 100vh;

}
</style>
