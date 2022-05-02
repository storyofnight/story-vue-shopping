<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="" alt="">
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="loginout" >退出</el-button>
    </el-header>
    <el-container class="home-container" >
      <el-aside :width="isCollapse ?  '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :unique-opened="true"
          :default-active="activePath"
          :collapse="isCollapse" :collapse-transition="false" :router="true">
          <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id"  >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.authName}}</span>
            </template>
            <el-menu-item :index="'/'+subitem.path"
                          @click="saveActivePath('/'+subitem.path)"
                          v-for="subitem in item.children" :key="subitem.id" >
              <template slot="title">

                <i class="el-icon-menu"></i>

                <span>{{subitem.authName}}</span>
              </template>
            </el-menu-item>

          </el-submenu>

        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menuList: [],
      isCollapse: false,
      activePath: ''
    }
  },
  created() {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    loginout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    async getMenuList() {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return console.log('请登录')
      this.menuList = res.data
      console.log(res)
    },
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    saveActivePath(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
}
</script>

<style scoped>
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    display: flex;
    justify-content: space-between;
    padding-left:0 ;
    align-content: center;
    color:#ffffff;
    font-size: 20px;
  > div{
    display: flex;
    align-items: center;
  span{
    padding-left: 15px;
  }
  }
  }
  .home-container{
    height: 100vh;
  }
  .el-aside {
    background-color: #D3DCE6;

  }
  .el-menu{
    border-right:none ;
  }
  .el-main {
    background-color: #E9EEF3;

  }
  .toggle-button{
    background-color: #4a5064;
    font-size: 10px;
    text-align: center;
    line-height: 24px;
    letter-spacing: 0.2em;
    cursor: pointer;
  }
</style>
