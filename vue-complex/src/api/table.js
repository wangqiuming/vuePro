import request from '@/utils/request'

export function getList(params) {
  console.log(params);
  return request({
    url: '/document/list.json',
    method: 'post',
    data: params
  })
}
