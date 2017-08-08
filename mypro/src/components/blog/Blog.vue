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
          <div class="footer">
            <div class="collapse">          
              <a href="javascript:void(0)" @click="change">
              <svg t="1502196099740" class="icon" style="width: 2em; height: 1.5em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" ><path d="M943.118018 489.30828c0 24.569524-19.923848 44.540694-44.496392 44.540694-14.193778 0-26.855108-6.649338-34.988565-17.02609L520.821649 173.560397l0 657.349042c0 1.578765-0.084577 3.114234-0.250709 4.648696-2.487964 22.377578-22.618219 39.890991-47.110214 39.890991-24.488975 0-44.61923-17.51442-47.110214-39.890991-0.043295-0.332266-0.081556-0.663524-0.081556-0.99579L426.268955 205.770014 114.338098 517.450161c-0.041281 0.043295-0.081556 0.125858-0.125858 0.169153-8.134464 9.913594-20.503802 16.22966-34.327054 16.22966-24.610805 0-44.534653-19.971171-44.534653-44.540694 0-12.332085 4.981969-23.498219 13.071124-31.545086l-0.206407-0.213455L489.73066 16.45117l0 0.038261 0.084577-0.038261 53.752504 53.796806 9.170528 9.167507 377.595582 378.134255-0.250709 0.250709C938.135042 465.853356 943.118018 477.01949 943.118018 489.30828zM426.350511 848.010037l-0.081556 0 0-0.99579C426.268955 847.346513 426.306209 847.678779 426.350511 848.010037zM520.821649 843.361341l0 4.648696-0.250709 0C520.737073 846.475575 520.821649 844.940105 520.821649 843.361341zM974.166719 972.992211c0 26.024444-19.926869 47.15351-44.537674 47.15351L52.783396 1020.14572c-1.785172 0-3.56833-0.124851-5.313227-0.331259-22.082567-2.782975-39.224446-22.709844-39.224446-46.822251 0-24.119455 17.140873-44.002022 39.224446-46.777949 1.744897-0.207414 3.528056-0.332266 5.313227-0.332266l876.845649 0C954.23985 925.881996 974.166719 946.967767 974.166719 972.992211zM426.268955 839.714475l0 7.299772c-0.127872-1.203204-0.166133-2.406408-0.166133-3.652907C426.102822 842.119876 426.140076 840.916672 426.268955 839.714475z"></path></svg>收起
              </a>
            </div>
            <div class="bshare-custom">
              <a title="分享到新浪微博" class="bshare-sinaminiblog"></a>
              <a title="分享到豆瓣" class="bshare-douban"></a>
              <a title="分享到有道笔记" class="bshare-youdaonote"></a>
              <a title="分享到搜狐微博" class="bshare-sohuminiblog"></a>
              <a title="分享到网易微博" class="bshare-neteasemb"></a>
              <a title="更多平台" class="bshare-more bshare-more-icon more-style-addthis"></a>
              <span class="BSHARE_COUNT bshare-share-count">0</span>
            </div>
            <a class="bshareDiv" onclick="javascript:return false;"></a>           
          </div>
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
    padding-bottom: 20px;
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
      width: 100%;
      position: absolute;
      border-radius: 0 0 10px 10px;
      background: rgba(255, 255, 255, 0.5);
      bottom: 0px;
      height: 45px;
      .bshare-custom{
        margin:5px 0 0 10px; 
      }
      .collapse{
        color:#707070;
        a{
          float: right;
          margin: 5px 10px 0 0;
          text-decoration: none;
          color:inherit;
        }
      }
      .collapse:hover{
        color:#809090;
      }
    }
  }
}
</style>
