<template>
  <div class="container">
    <h1>{{header}}</h1>
    <fieldset>
      <legend>名&nbsp;&nbsp;&nbsp;&nbsp;称</legend>
      <div class="title">
        <input type="text" ref="title" v-model="title" required>
      </div>
    </fieldset>
    <button @click="addclass">{{submit}}</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      header: '添加分类',
      submit: '添加',
      title: ''
    }
  },
  created: function () {
    var token = window.sessionStorage.getItem('token')
    // console.log(token)
    if (token === null) {
      window.sessionStorage.clear()
      alert('您没有该权限，请先登录！')
      // window.location = '#/login/addDemo'
      window.location = '/admin/#/login/addblogclass'
    }
    if (this.$route.query.id) {
      this.header = '新名称'
      this.submit = '更新'
    }
  },
  methods: {
    addclass: function () {
      // console.log('#############################################')
      if (this.title === '') {
        this.$refs.title.focus()
        alert('请填写分类名称')
        return
      }
      let newlclass = {
        title: this.title
      }
      if (this.$route.query.id) {
        newlclass._id = this.$route.query.id
      }
      // let info = 'title=' + this.title + '&date=' + this.date + '&content=' + this.content + '&type=' + this.type
      if (confirm('添加分类')) {
        var token = window.sessionStorage.getItem('token')
        console.log(token)
        fetch('/api/blogclass/addClass', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'x-access-token': token
          },
          body: JSON.stringify(newlclass)
        })
        .then(function (response) {
          return response.json()
        }).then(function (json) {
          // console.log('parsed json', json)
          if (json.success) {
            alert('添加成功！')
            window.location = '#/manage/blogclass'
          } else {
            window.sessionStorage.clear()
            alert('您没有该权限，请先登录！')
            window.location = '/admin/#/login/addblogclass'
          }
        }).catch(function (ex) {
          console.log('添加失败：', ex)
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
