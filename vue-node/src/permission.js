import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken,removeToken } from '@/utils/auth' // token

NProgress.configure({ showSpinner: false })// NProgress Configuration

// permissiom judge function
/*function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}*/

const whiteList = ['/login', '/authredirect','/hello']// 白名单

router.beforeEach((to, from, next) => {
  NProgress.start() // 开启 progress bar
  if (getToken()) {
    /* 有 token*/
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // 关闭progressbar
    } else {
      next();
    }
  } else {
    /* 无 token*/
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      console.log("path1"+to.path);
      next()
    } else {
      console.log("path2"+to.path);
      next('/login') // 否则全部重定向到登录页
      NProgress.done() // 关闭progressbar
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 关闭progressbar
});



