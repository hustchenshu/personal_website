<template>
  <div class="container">
    <div class="mytable">
      <div class="add">
        <router-link :to='"/add"+dir'>添加</router-link>
      </div>
      <table>
        <thead>
          <tr>
            <th v-for="head in headers">{{head.title}}</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in items">
            <th v-for="head in headers">{{item[head.key]}}</th>
            <th>
              <div class="op">
                <!-- <input type="button" @click="edit" :id="item._id" value="修改"> -->
                <router-link v-if="dir!='demo'" :to="'/'+dir+'/edit?id='+item._id">
                  <input type="button" value="修改">
                </router-link>
                <input type="button" @click="del" :id="item._id" :index="index" value="删除">
              </div>
            </th>
          </tr>

        </tbody>
<!--         <tfoot>
          <tr>                 
              <td><a href="#" class="more">上一页</a></td>
              <td colspan="1"><a href="#" class="more">下一页</a></td>
              <td colspan="2"></td>
          </tr>
        </tfoot>   -->
      </table>
    </div>
  </div>
</template>

<script>
  var dateFormat = require('dateformat')
  export default {
    data () {
      return {
        dir: 'blog',
        items: [],
        headers: [
          {
            title: '标题',
            key: 'title'
          },
          {
            title: '修改时间',
            key: 'date'
          }
        ]
      }
    },
    created () {
      var token = window.sessionStorage.getItem('token')
      // console.log(token)
      if (token === null) {
        window.sessionStorage.clear()
        alert('您没有该权限，请先登录！')
        // window.location = '#/login/addBlog'
        console.log(this.$route)
        window.location = '/admin/#/login' + this.$route.path
      }
      this.dir = this.$route.params.dir
      this.fetchData()
    },
    watch: {
      '$route': function () {
        this.dir = this.$route.params.dir
        console.log(this.dir)
        this.fetchData()
      }
    },
    methods: {
      del: function (tar) {
        let self = this
        let url = '/api/' + this.dir + '/del?id=' + tar.target.getAttribute('id')
        if (confirm('确定要删除？')) {
          var token = window.sessionStorage.getItem('token')
          fetch(url, {
            headers: {
              'x-access-token': token
            }
          })
          .then(function (response) {
            return response.json()
          }).then(function (json) {
            if (json.success) {
              alert('删除成功！')
              let index = tar.target.getAttribute('index')
              self.items.splice(index, 1)
            } else if (json.message === 'notallow') {
              alert('无法删除！！')
            } else {
              window.sessionStorage.clear()
              alert('您没有该权限，请先登录！')

              window.location = '#/login/manage/' + self.dir
            }
          }).catch(function (ex) {
            console.log('delete failed', ex)
          })
        }
        console.log(url)
      },
      fetchData: function () {
        let curDir = this.$route.params.dir
        let url = ''
        let self = this
        if (curDir === 'blog') {
          url = '/api/blog/getBlogs/All'
        } else if (curDir === 'demo') {
          url = '/api/demo/getDemos'
        } else if (curDir === 'blogclass') {
          url = '/api/blogclass/getClass'
        }
        fetch(url)
        .then(function (response) {
          return response.json()
        }).then(function (json) {
          json.forEach(function (item) {
            item.date = dateFormat(item.date, 'yyyy-mm-dd')
          })
          self.items = json
        }).catch(function (ex) {
          console.log('parsing failed', ex)
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.add{
  float: right;
  padding: 20px 0 20px 10px;
  a{
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
  }
  a:before{
    content:url('../../assets/add.png')
  }
}
.mytable
{
    width: 800px;
    height: auto;
    margin: 0 auto;

}
.mytable table
{
    width: 100%;
    border: 1px solid #999;
    padding: 0;
    margin: 0;
    border-collapse: collapse;
}

.mytable th
{
    height: 45px;
    line-height: 45px;
    text-align: center;
    border-bottom: 1px solid #999;
    padding: 0;
    margin: 0;

}
.mytable td
{
    height: 45px;
    line-height: 45px;
    text-align: center;
    border-bottom: 1px solid #999;
    padding: 0;
    margin: 0;
}

.mytable tr:hover
{
    background-color: #f8f8f8;
}

.mytable tr:nth-child(2n)
{
    background-color: #f8f8f8;
}

.mytable tfoot
{
    width: 100%;
}

.mytable  tfoot a{
    text-decoration: none;
    color: #999;
}
</style>
