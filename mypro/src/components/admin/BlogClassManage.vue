<template>
  <div class="container">
    <div class="mytable">
      <table>
        <thead>
          <tr>
            <th>分类名称</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items">
            <th>{{item.title}}</th>
            <th>
              <div class="op">
                <input type="button" value="修改">
                <input type="button" value="删除">
              </div>
            </th>
          </tr>

        </tbody>
<!--         <tfoot>
          <tr>                 
              <td><a href="#" class="more">上一页</a></td>
              <td colspan="1"><a href="#" class="more">下一页</a></td>
          </tr>
        </tfoot>  --> 
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: []
    }
  }
}
</script>

<style lang="less" scoped>
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