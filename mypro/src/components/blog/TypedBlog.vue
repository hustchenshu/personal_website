<template>
  <div class="container">
    <div v-if="items.length>0">    
      <div v-for="item in items">
        <Blog :date='item.date' :title='item.title' :id='item._id' along='false'></Blog>
      </div>
    </div>

    <div v-else class="nocontent">
      <div>
        <img src="../../assets/nocontent.png" alt="">
        <h1>这里还没有开垦哦！！</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Blog from '@/components/blog/Blog'

export default{
  // props: ['type'],
  components: {Blog},
  data () {
    return {
      items: [],
      type: 'All',
      expandId: null
    }
  },
  created () {
    this.fetchData('All')
  },
  watch: {
    $route () {
      var et = this.$route.params.type
      this.type = et
      this.fetchData(et)
    }
  },
  methods: {
    fetchData: function (type) {
      this.type = type
      var self = this
      var url = '/api/blog/getBlogs/' + type
      fetch(url)
      .then(function (response) {
        return response.json()
      }).then(function (json) {
        self.items = json
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
    }
  }
}
</script>

<style lang='less' scoped>
.container{
  width: 100%;
  flex: 1;
  .path{
    padding: 20px 0 5px 10px;
    word-spacing: 4px;
    letter-spacing: 2px;
    a{
      text-decoration: none;
    }
  }
}
.nocontent{
  padding: 20px;
  div{
    padding: 50px;
    margin: 0 auto;
    text-align: center;
  }
}
</style>
