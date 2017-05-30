<template>
  <div class="classfied">
    <div class="manage">
      <router-link to="/addBlog" >添加博客   
      </router-link>
    </div>
    <div class="container" v-for="item in items" :class="{selected:item.type==selected}" >
      <router-link :to="item.url" >
        <div class='type' @click='selectType' :item='item.type'>{{item.type}}    
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      selected: null,
      items: [
        {
          type: 'Javascript',
          url: '/blog/Javascript'
        },
        {
          type: 'Css',
          url: '/blog/css'
        },
        {
          type: 'Html',
          url: '/blog/html'
        },
        {
          type: 'Vue',
          url: '/blog/vue'
        },
        {
          type: 'React',
          url: '/blog/react'
        },
        {
          type: 'Node',
          url: '/blog/node'
        },
        {
          type: 'Others',
          url: '/blog/Others'
        }
      ]
    }
  },
  methods: {
    selectType: function (e) {
      this.selected = e.target.getAttribute('item')
      // console.dir(e.target)
      // alert(e.target.getAttribute('code'))
    }
  },
  watch: {
    $route () {
      // this.fetchData()
    }
  }
}
</script>

<style lang="less" scoped>
.manage{
  margin:20px 0 30px 0px;
  padding:10px;
  border-radius: 10px;
  border: solid 1px gray;
  a{
    text-decoration: none;
    font-weight: bold;
    font-size: 26px;
  }
  a:before{
    content:url('../../assets/add.png')
  }
}
.container:last-child{
  // border: solid 1px;
}
.classfied{
  width: 200px;
  min-height: 200px;
  padding-top: 10px;
  // border:solid 2px;
  border-right: none;
  border-radius: 20px 10px;
  .container{
    width: 100%;
    // border: solid 1px;
    box-shadow: -2px -2px rgba(11,1,32,3);
    height: 25px;
    font-size: 18px;
    padding: 5px 0 0 5px;
    border-radius: 5px;
    transition: all .3s ease-in-out;
    background: url('../../assets/bookbg.jpg') center black;
    a{
      text-decoration: none;
    }
  }
  .container:hover, .selected{
    box-shadow: -5px -5px gray;
    position: relative;
    transform:translate(6px);
    // left: 30px;
    // top: 5px;
  }
  .selected{
    // background: rgba(23, 255, 226, 0.5);
    background: url('../../assets/bookbg-open.jpg') center black;
  }
  // .selected:before{
  //   content: '>>>'
  // }
}
</style>
