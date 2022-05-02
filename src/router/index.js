import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../components/login/Login'
// import Home from '../components/home/Home'
// import Welcome from '../components/home/Welcome/welcome'
// import Users from '../components/users/Users'
// import Rights from '../components/home/power/rights/Rights'
// import Roles from '../components/home/power/roles/Roles'
// import Categories from '../components/goods/cate/Cate'
// import Params from '../components/goods/params/Params'
// import Goodlist from '../components/goods/list/LIst'
// import GoodsAdd from '../components/goods/list/children/Add'
// import Orders from '../components/home/order/Order'
// import Report from '../components/home/report/Report'
const Login = () => import(/* webpackChunkName: "login_home_welome" */ '../components/login/Login')
const Home = () => import(/* webpackChunkName: "login_home_welome" */ '../components/home/Home')
const Welcome = () => import(/* webpackChunkName: "login_home_welome" */ '../components/home/Welcome/welcome')

const Users = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/users/Users')
const Rights = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/home/power/rights/Rights')
const Roles = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/home/power/roles/Roles')

const Categories = () => import(/* webpackChunkName: "Cate_Params" */ '../components/goods/cate/Cate')
const Params = () => import(/* webpackChunkName: "Cate_Params" */ '../components/goods/params/Params')

const Goodlist = () => import(/* webpackChunkName: "GoodsList_Add" */ '../components/goods/list/LIst')
const GoodsAdd = () => import(/* webpackChunkName: "GoodsList_Add" */ '../components/goods/list/children/Add')

const Orders = () => import(/* webpackChunkName: "Order_Report" */ '../components/home/order/Order')
const Report = () => import(/* webpackChunkName: "Order_Report" */ '../components/home/report/Report')
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/users', component: Users },
        { path: '/rights', component: Rights },
        { path: '/roles', component: Roles },
        { path: '/categories', component: Categories },
        { path: '/params', component: Params },
        { path: '/goods', component: Goodlist },
        { path: '/goods/add', component: GoodsAdd },
        { path: '/orders', component: Orders },
        { path: '/reports', component: Report }
      ]
    }

  ]
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
