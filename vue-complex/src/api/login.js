import http from '@/utils/request'

export function login(username, password) {
  //return http.post('/auth/login',{username,password})
  return http({
    url: '/auth/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  //return  http.get('/user/info')
  return http({
    url: '/user/info',
    method: 'get'
  })
}

export function logout() {
  console.log("");
  return http({
    url: '/user/logout',
    method: 'post'
  })
}
