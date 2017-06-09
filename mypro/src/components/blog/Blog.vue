<template>
  <div class="container">
  <link rel="stylesheet" href="../../../static/github-markdown.css">
    <div class="time"><a href="javascript:void(0)">{{formedData}}</a></div>
    <div class="content">
      <div class="mainTitle" @click="change">
        {{title}}
      </div>
      <transition name="expand">
        <div v-show="show">
          <div class="md markdown-body" v-html='content'>
          </div>
          <div class="footer"></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { markdownEditor } from 'vue-simplemde'
var dateFormat = require('dateformat')
import 'github-markdown-css'
export default {
  props: ['date', 'title', 'id', 'along'],
  data () {
    return {
      show: false,
      // date: '2017-05-03',
      // title: '主标题',
      content: ''
    }
  },
  mounted () {
  },
  components: {
    markdownEditor
  },
  created () {
    if (this.along !== 'false') {
      this.fetchData(this.$route.params.id)
      this.show = true
    }
  },
  computed: {
    simplemde () {
      return this.$refs.markdownEditor.simplemde
    },
    formedData () {
      return dateFormat(this.date, 'yyyy-mm-dd')
    }
  },
  methods: {
    change: function () {
      if (this.along === 'false') {
        this.show = !this.show
        if (this.show && this.content === '') {
          // console.log(this.$props.id)
          this.fetchData(this.$props.id)
        }
      }
    },
    fetchData: function (id) {
      // var id = this.$route.params.id
      var self = this
      var url = '/api/blog/getBlogContent/' + id
      fetch(url).then(function (res) {
        if (res.info === 'fail') {
          alert('失败')
        } else {
          // console.log(res.text())
          return res.json()
        }
      }).then(function (data) {
        // console.log(data)
        // var converter = new window.showdown.Converter()
        // var htm = converter.makeHtml(data)
        self.content = data.content
        // console.log(htm)
      })
    }
  }

}
</script>

<style lang="less" scoped>
.mainTitle:before{
  content: url('../../assets/BlogTitle.png')
}
.mainTitle:after{
  content: url('../../assets/openblog.png')
}
.time{
  a:before{
    content: url('../../assets/blog-time.png')
  }
}
.expand-enter-active, .expand-leave-active {
  transition: all .3s
}
.expand-enter, .expand-leave-active {
  opacity: 0;
  // height: 0;
}
.container{
  margin: 0 auto;
  padding: 10px 0px 0px 0px;
  .time{
    width: 175px;
    color: gray;
    box-shadow: 2px -2px gray;
    padding: 5px 0 0 12px;
    text-indent: 1em;
    border-radius: 15px 15px 0 0;
    height: 1.8em;
    color: #2d2d2d;
    font-size: 16px;
    letter-spacing: 4px;
    background: rgba(255, 255, 244, 0.5);
    a{
      text-decoration: none;
      color: gray;
    }
  }
  .content{
    background: rgba(255, 255, 244, 0.5);
    border-radius: 0 10px 10px 10px;
    // box-shadow: 2px -2px gray;
    // min-height: 200px;
    padding-top: 1em;
    padding-bottom: 45px;
    position: relative;
    .mainTitle{
      color: rgba(25, 55, 25, 0.9);
      font-size: 22px;
      letter-spacing: 2px;
      text-decoration: none;
      text-indent: 2em;
      border-bottom: solid 2px;
    }
    .mainTitle:hover{
      cursor: pointer;
    }
    .md{
      background: rgba(255, 255, 225, 0.5);
      padding-left: 2em;
      min-height: 150px;
      // border-radius: 0 0px 10px 10px;
      // padding-bottom: 45px;
    }
    .footer{
      position: absolute;
      border-radius: 0 0 10px 10px;
      background: rgba(255, 255, 255, 0.5);
      bottom: 0px;
      height: 45px;
      border-top: solid 1px;
      box-shadow: 2px 2px gray;
    }
  }
}
</style>
