<template>
  <div class="classfied">
    <div class="manage">
<!--       <router-link to="/addBlog" >添加博客   
      </router-link> -->
      <a href="/admin/#/addBlog">添加博客</a>
    </div>
    <div class="container" v-for="item in items" :class="{selected:item._id==selected}" >
      <router-link :to="'/blog/'+item._id" >
        <div class='type' @click='selectType' :item='item._id'>{{item.title}}    
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      selected: 'All',
      items: [
      ]
    }
  },
  created: function () {
    this.getBlogClass()
  },
  methods: {
    getBlogClass: function () {
      var self = this
      var url = '/api/blogclass/getClass'
      fetch(url)
      .then(function (response) {
        return response.json()
      }).then(function (json) {
        json.unshift({
          title: 'All',
          _id: 'All'
        })
        json.push({
          title: 'Others',
          _id: 'Others'
        })
        self.items = json
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
    },
    selectType: function (e) {
      this.selected = e.target.getAttribute('item')
      console.dir(this.selected)
      // alert(e.target.getAttribute('code'))
    }
  },
  watch: {
    $route () {
      this.selected = this.$route.params.type
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
.classfied{
  width: 200px;
  min-height: 200px;
  padding: 10px 15px 10px 10px;
  // border:solid 2px;
  border-right: none;
  border-radius: 20px 10px;
  .container{
    width: 100%;
    box-shadow: -2px -2px rgba(11,1,32,3);
    height: 35px;
    font-size: 18px;
    padding: 5px 0 0 5px;
    border-radius: 5px;
    transition: all .3s ease-in-out;
    // background: url('../../assets/bookbg.jpg') center black;
    a{
      text-indent: 2em;
      text-decoration: none;
      div{
        display: inline-block;
        height: 100%;
      }
    }
  }
  .container:hover, .selected{
    box-shadow: -5px -5px gray;
    position: relative;
    transform:translate(6px);
    .type{
      position: absolute;
      left: 10px;
      top: 6px;
    }
  }
  .selected{
    a:before{
      content: url('../../assets/right.png')
    }
  }
}
</style>
