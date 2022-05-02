<template>
  <div class="welcome">
    <h2>
      Welcome
    </h2>
    <h3>
      欢迎登录到电商后台管理系统!
    </h3>
    <div class="info">
      <h4>以前的项目经验 :</h4>
      <ul>
        <li>
          <a href="http://1.15.157.83:9090/vuetourism/index.html#/" target="_blank"> 旅游宣传网站</a>
          <span></span>
        </li>
        <li>
          <a href="http://1.15.157.83/story/vueShoppingcart/index.html">商品购物车模板</a>
          <span></span>
        </li>
        <li>
          <a href="https://github.com/storyofnight" target="_blank">github</a>
          <span>个人github：storyofnight</span>
        </li>

      </ul>
    </div>
    <address>邮箱：1337484681@qq.com</address>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style lang="less" scoped>
  .welcome {
    margin: 30px auto 0;
    font-size: 20px;
    text-align: center;
    color: pink;
    h3 {
      margin: 50px auto 0;
      font-size: 30px;
    }
    .info {
      margin: 15px 0 10px;
      ul {
        margin: 20px 0 0 150px;
        li {
          margin: 10px 0 50px;
          text-align: left;
          margin: 10px;
          color: black;
          a {
            text-align: center;
            display: inline-block;
            padding: 5px;
            font-size: 18px;
            border: 3px solid pink;
          }
          a:hover {
            color: pink;
            background-color: green;
          }
          span {
            width: 100%;
            margin-left: 10px;
          }
        }
      }
    }
  }
</style>
