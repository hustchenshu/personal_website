<template>
  <div class="container">
    <form action="/api/addBlog" method="post" id="form_id" enctype="multipart/form-data">
      <div class="field">
        标&nbsp;&nbsp;&nbsp;&nbsp;题：<input type="text" name="name" v-model="blog.name" lazy>
      </div>
      <div class="field">
        时&nbsp;&nbsp;&nbsp;&nbsp;间：<input type="date" name="date" v-model="blog.date" value="2014-06-01">
      </div>
      <div class="field">
        上传码：<input type="text" name="check" v-model="blog.check" lazy required>
      </div>
       <input type="hidden" name="type" v-model="blog.type">
      <div class="field">
        md文件：<input type="file" name="md" @change="changeMethod" size='50' id="upload" lazy required>
      </div>
      <div class="field">          
        <span>分类</span>
        <select v-model="blog.type" title="分类" lazy required>
          <option value='Javascript'>Javascript</option>
          <option value='Css'>Css</option>
          <option value='Html'>Html</option>
          <option value='Vue'>Vue</option>
          <option value='React'>React</option>
          <option value='Node'>Node</option>
          <option value='Others'>Others</option>
        </select>
      </div>
     
      <input type="submit" class="submit" value="提交">
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blog: {
        name: '',
        date: '',
        md: '',
        check: '',
        type: '',
        file: null
      }
    }
  },
  methods: {
    changeMethod: function (e) {
      // console.dir(e)
      let newvalue = e.target.files[0].name
      this.blog.md = newvalue
    },
    submit: function () {
      var upload = document.getElementById('upload')
      if (upload.files[0]) {
        this.blog.file = upload.files[0]
      }
      var formD = new FormData()
      for (var p in this.blog) {
        // console.dir(this.blog[p])
        formD.append(p, this.blog[p])
      }
      // console.dir(formD)
      fetch('/api/addBlog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: formD
      }).then(function (json) {
        if (json.info === 'fail') {
          alert('失败')
        } else {
          alert('已插入')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .container{
    margin: 0 auto;
    margin-top: 50px;
    border: solid 2px;
    width: 400px;
    height: 320px;
    font-size: 16px;
    font-weight: bolder;
    .field{
      padding-top: 8px;
    }
    input{
      width: 200px;
    }
    .submit{
      position: relative;
      // bottom: -10px;
      right: -240px;
      width: 50px;
    }
  }
</style>
