<template>
  <div class="login-view">
    <form>
      <div class="field">
        <label for="username">用户名:</label>
        <input type="text" v-model="username" required>
      </div>
      <div class="field">
        <label for="password">密&nbsp;&nbsp;&nbsp;码:</label>
        <input type="password" v-model="password"  @keyup.enter="auth" required>
      </div>
      <div class="op">
        <input type="button" class="submit" @click='auth' value="登录">
        <input type="reset" value="清除">
        <div style="clear:both"></div>
      </div>
      
    </form>
    <div class="tips"><h4>{{tips}}</h4></div>
  </div>
</template>

<script>
export default {
  props: ['topath'],
  data () {
    return {
      username: '',
      password: '',
      tips: ''
    }
  },
  methods: {
    auth: function () {
      if (!this.username) {
        this.tips = '请填写用户名'
        return
      } else if (!this.password) {
        this.tips = '请填写密码'
        return
      }
      const user = {
        username: this.username,
        password: this.password
      }
      // console.log(user)
      let self = this
      fetch('/api/blog/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(function (response) {
        return response.json()
      }).then(function (json) {
        console.log('parsed json', json)
        console.log(self.$route.params.op)
        if (json.success) {
          window.sessionStorage.setItem('token', json.token)
          // window.location = '#/home'
          console.log(self.$route)
          window.location = '#/' + self.$route.params[0]
        } else {
          self.tips = json.message
        }
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
    }
  }
}
</script>

<style lang="less" scoped>


.login-view{
  width: 300px;
  margin:0 auto;
  margin-top: 100px;
  font-size: 18px;
  font-weight: bold;
  height: 200px;
  border: solid 2px gray;
  border-radius: 15px;
  background: url('/static/timg.jpg') center black;

  -webkit-background-size: cover;
       -moz-background-size: cover;
            background-size: cover;
  .field{
    padding:10px 0 20px 20px;
    label{
      width: 80px;
    }
    input{
      width: 200px;
      border: 1px solid #ccc; 
      background-color: rgba(255, 255, 255,0.5);
      border-radius: 3px;
      height: 2em;
      padding-left:5px;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
      -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
      -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
      transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s
    }
    input:focus{
      border-color: #66afe9;
      outline: 0;
      -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
    }
  }
  .op{
    input{
      font-size: 18px;
      font-weight: bold;
      width: 80px;
      height: 50px;
      margin: 10px 20px 10px 0;
      border-radius: 10px;
      float:right;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
      -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
      -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
      transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s
    }
    input:focus{
      border-color: #66afe9;
      outline: 0;
      -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
    }
  }
}
</style>
