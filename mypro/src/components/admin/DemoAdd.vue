<template>
  <div class="container">
    <h1>添加Demo</h1>
    <fieldset>
      <legend>标&nbsp;&nbsp;&nbsp;&nbsp;题</legend>
      <div class="title">
        <input type="text" ref="title" v-model="title" required>
      </div>
    </fieldset>
    <fieldset>
      <legend>CodePen IFrame 地址</legend>
      <div class="content">
        <textarea v-model="content" cols="80" rows="15"></textarea>
      </div>
    </fieldset>
    <button @click="adddemo">发布</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      content: ''
    }
  },
  created: function () {
    var token = window.sessionStorage.getItem('token')
    // console.log(token)
    if (token === null) {
      window.sessionStorage.clear()
      alert('您没有该权限，请先登录！')
      // window.location = '#/login/addDemo'
      window.location = '/admin/#/login/addDemo'
    }
  },
  methods: {
    adddemo: function () {
      // console.log('#############################################')
      if (this.title === '') {
        this.$refs.title.focus()
        alert('请填写标题')
        return
      } else if (this.content === '') {
        alert('无法发表空Demo哦')
        return
      }
      let demo = {
        title: this.title,
        content: this.content
      }
      // let info = 'title=' + this.title + '&date=' + this.date + '&content=' + this.content + '&type=' + this.type
      if (confirm('是否马上发布')) {
        var token = window.sessionStorage.getItem('token')
        fetch('/api/demo/insert', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'x-access-token': token
          },
          body: JSON.stringify(demo)
        })
        .then(function (response) {
          return response.json()
        }).then(function (json) {
          // console.log('parsed json', json)
          if (json.success) {
            alert('发布成功！')
            window.location = '/#/demo'
            // window.location = '/#/blog/All'
          } else {
            window.sessionStorage.clear()
            alert('您没有该权限，请先登录！')
            window.location = '#/addDemo'
          }
        }).catch(function (ex) {
          console.log('博客发布失败：', ex)
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
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
input{
  width: 100%;
  /* height: 30px; */
  font-size: 22px;
  display: block;
}
fieldset{
  background: rgba(255,255,255,.3);
  border-color: rgba(255,255,255,.6);
  border-style: solid;
  border-width: 2px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  -khtml-border-radius: 5px;
  border-radius: 5px;
  line-height: 30px;
  list-style: none;
  padding: 5px 10px;
  margin-bottom: 2px;
  legend{
    color:#302A2A;
    font: bold 22px Verdana, Geneva, sans-serif;
    font-weight: bold;
    text-align: left;
    text-shadow: 2px 2px 2px rgb(88, 126, 156);
  }
}
</style>
