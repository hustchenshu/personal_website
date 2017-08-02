<template>
  <div class="header-out">   
    <div class="top-nav">
      <div class="left-nav">
        <img src="../../assets/logo1.png" alt="">
        <br>
        <nav v-for="nav in LeftNavs" class="main-nav" :class="{selected:nav.title==selected}" @click='selectType'>
          <router-link :to=nav.url class="nav-link" :title=nav.title >{{nav.title}}</router-link>
        </nav>
      </div>
      <div class="left-nav-sm">
        <nav class="main-nav">
          <router-link to="javascript:void(0)" class="nav-link">sm</router-link>
        </nav>
      </div>
    </div>
    <div class="title">
      <h1 class="main-title">{{mainTitle}}</h1>
      <h4 class="sub-title">{{subTitle}}</h4>
    </div>
  </div>
</template>

<script>
export default{
  props: ['LeftNavs', 'mainTitle', 'subTitle'],
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    toggleSmNav: function () {
      this.smNavDis = !this.smNavDis
      // console.log(this.smNavDis)
    },
    selectType: function (e) {
      this.selected = e.target.getAttribute('title')
      // console.dir(e.target)
      // alert(e.target.getAttribute('code'))
    }
  }
}
</script>

<style lang="less" scoped>

.nav-link{
  text-decoration: none;
  display: inline-block;
  padding: 5px 10px;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.5)
}
.nav-link:hover{
  color: rgba(255, 255, 255, 0.9)
}
.selected{
  border-bottom: solid 2px gray;
  a{
    // color: rgba(255, 130, 230, 0.8);
  }
}

.header-out{
  max-width: 1220px;
  margin: 0 auto;
  // padding: 0 20px;
  width: 100%;
  height: 300px;
  // background: rgba(255, 255, 255, 0.5);
  color:white;
  .top-nav{
    width: 100%;
    position: relative;
    height: 40px;
    .left-nav{
      float: left;
      padding: 10px 20px 0 10px;
      .main-nav{
        display: inline-block;
      }
    }
    .left-nav-sm{
      display: none;
      float: left;
      padding: 10px 20px 0 10px;
    }
    // @media screen and (max-width:478px){
    //   .left-nav{
    //     display: none;
    //   }
    //   .left-nav-sm{
    //     display: inline-block;
    //   }
    // }
    .right-nav{
      float: right;
      padding: 10px 20px 0 10px;
      .search-ico:before{
        // content: '\f002';
      }
    }
  }
  .title{
    position: absolute;
    // top: 50%;
    bottom: 90px;
    left: 0;
    width: 100%;

    height: 40px;
    margin: 0 auto;
    margin-top: -20px;

    text-align: center;

    .main-title{
      font-size: 30px;
      letter-spacing: 5px;
    }
    .sub-title{
      font-size: 22px;
      letter-spacing: 3px;
      color: rgba(228, 225, 222, 0.9)
    }

  }
}
</style>
