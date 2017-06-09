<template>
  <div class="container">
    <div class="toolbar">
      <div class="title">
        标&nbsp;&nbsp;&nbsp;&nbsp;题：<input type="text" ref="title" v-model="title" required>
      </div>
      <div class="date">
        时&nbsp;&nbsp;&nbsp;&nbsp;间：<input type="date" v-model="date">
      </div>
      <div class="type">          
        分&nbsp;&nbsp;&nbsp;&nbsp;类：
        <select v-model="type" lazy required>
          <option v-for="p in blogclass" :value="p._id">{{p.title}}</option>
        </select>
      </div>
      <!-- <button @click="addblog">发布</button> -->
    </div>
    <div class="save">
      <!-- <button> -->
        <a href="javascript:;" class="a-upload">
          <input type="file" @change="changeMethod">导入本地博文
        </a>
      <!-- </button> -->
      <button><a href="javascript:void(0)" ref="down" @focus='localSave'>本地保存</a></button>
      <button @click="addblog">发布</button>
      <div style="clear:both"></div>
    </div>  
    <markdown-editor v-model="content" ref="markdownEditor" preview-class="markdown-body" :configs="configs"></markdown-editor>
   
  </div>
</template>

<script>
  import 'github-markdown-css'
  import { markdownEditor } from 'vue-simplemde'
  var dateFormat = require('dateformat')
  export default {
    data () {
      return {
        content: '',
        title: '',
        blogclass: [],
        date: dateFormat(new Date(), 'yyyy-mm-dd'),
        type: 'Others',
        configs: {
          status: false, // 禁用底部状态栏
          initialValue: '', // 设置初始值
          promptURLs: true,
          renderingConfig: {
            codeSyntaxHighlighting: true // 开启代码高亮
            // highlightingTheme: 'github-markdown-css' // 自定义代码高亮主题
          }
        }
      }
    },
    computed: {
      simplemde () {
        return this.$refs.markdownEditor.simplemde
      }
    },
    components: {
      markdownEditor
    },
    created: function () {
      var token = window.sessionStorage.getItem('token')
      // console.log(token)
      if (token === null) {
        window.sessionStorage.clear()
        alert('您没有该权限，请先登录！')
        // window.location = '#/login/addBlog'
        window.location = '/admin/#/login/addBlog'
      }
      this.getBlogClass()
      if (this.$route.query.id) {
        this.fetchBlogData(this.$route.query.id)
      }
    },
    methods: {
      localSave: function () {
        if (this.content) {
          var blob = new Blob([this.content])
          this.$refs.down.href = window.URL.createObjectURL(blob)
          this.$refs.down.download = this.title + this.date + '.md'
        }
      },
      fetchBlogData: function (id) {
        var self = this
        var url = '/api/blog/getBlogContent/' + id
        fetch(url).then(function (res) {
          if (res.info === 'fail') {
            alert('失败')
          } else {
            return res.json()
          }
        }).then(function (data) {
          self.content = data.md
          self.title = data.title
          // self.date = new Date()
          self.type = data.type
        })
      },
      getBlogClass: function () {
        var self = this
        var url = '/api/blogclass/getClass'
        fetch(url)
        .then(function (response) {
          return response.json()
        }).then(function (json) {
          json.push({
            title: 'Others',
            _id: 'Others'
          })
          self.blogclass = json
        }).catch(function (ex) {
          console.log('parsing failed', ex)
        })
      },
      addblog: function () {
        // console.log('#############################################')
        if (this.title === '') {
          this.$refs.title.focus()
          alert('请填写博客标题')
          return
        } else if (this.type === '') {
          alert('请填写博客类型')
          return
        } else if (this.content === '') {
          alert('无法发表空博客哦')
          return
        }
        // console.log(this.simplemde.markdown(this.content))
        let blog = {
          title: this.title,
          date: this.date,
          md: this.content,
          content: this.simplemde.markdown(this.content),
          type: this.type
        }
        if (this.$route.query.id) {
          blog._id = this.$route.query.id
        }
        console.dir(blog)
        // let info = 'title=' + this.title + '&date=' + this.date + '&content=' + this.content + '&type=' + this.type
        if (confirm('是否马上发布')) {
          var token = window.sessionStorage.getItem('token')
          fetch('/api/blog/insert', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // 'Content-Type': 'application/x-www-form-urlencoded',
              'x-access-token': token
            },
            body: JSON.stringify(blog)
          })
          .then(function (response) {
            return response.json()
          }).then(function (json) {
            // console.log('parsed json', json)
            if (json.success) {
              alert('发布成功！')
              window.location = '/#/blog/All'
            } else {
              window.sessionStorage.clear()
              alert('您没有该权限，请先登录！')
              window.location = '/admin/#/login/addBlog'
            }
          }).catch(function (ex) {
            console.log('博客发布失败：', ex)
          })
        }
      },
      changeMethod: function (e) {
        let file = e.target.files[0]
        var reader = new FileReader()
        let self = this
        if (file.name.split('.')[1] === 'md') {
          reader.onload = function () {
            // console.log(this.result)
            self.content = this.result
            self.title = file.name.split('.')[0]
          }
          reader.readAsText(file)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.a-upload {
  float:left;
    padding: 4px 10px;
    height: 20px;
    line-height: 20px;
    position: relative;
    cursor: pointer;
    color: #888;
    background: #fafafa;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
    display: inline-block;
    *display: inline;
    *zoom: 1
}
.a-upload  input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: pointer
}

.a-upload:hover {
    color: #444;
    background: #eee;
    border-color: #ccc;
    text-decoration: none
}
button{
  width: 100px;
  height:35px;
  text-align:center;
  float:right;
  margin-left:20px;
  border:solid 2px gray;
  font-size:20px;
  font-weight:bold;
}
botton:hover{
  background-color:#c1ccc5;
}
input, select{
  height:1.6em;
  width:60%;
}
a{
  text-decoration:none;
  color:buttontext;
  font-size:20px;
}
.toolbar{
  font-size: 22px;
  font-weight: bold;
  margin:20px 0 20px 20px;


  .title{
    
  }

}
.editor{
  min-height:600px;
  max-height:800px;
  display: flex;
  align-items: strech;
  textarea{
    flex:1;

  } 
  .displayer {
    flex : 1;
    overflow:auto;
  }
}
</style>
