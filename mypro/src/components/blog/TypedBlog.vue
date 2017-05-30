<template>
  <div class="container">
    <div class="path">
      <router-link to='/'>Home</router-link> 
      / 
      <router-link to='/blog/All'>Blog</router-link>
      / 
      <router-link :to='"/blog/"+type'>{{type}}</router-link>
    </div>
    <div v-for="item in items">
      <Blog :date='item.date' :title='item.title' :id='item._id' along='false'></Blog>
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
        // console.log('parsed json', json)
        // let blogs = []
        // json.forEach(function (blog) {
        //   let item = {
        //     date: blog.filename.split('@')[1].split('.')[0],
        //     title: blog.filename.split('~')[1].split('@')[0],
        //     id: blog.filename
        //   }
        //   blogs.push(item)
        // })
        // console.dir(blogs)
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
</style>
