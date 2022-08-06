import request from '@/utils/request'


export function getBlogList(data) {
  return request({
    url: '/blog/list',
    method: 'get',
		data:data
  })
}

export function getDetails(data) {
  return request({
    url: '/blog/details',
    method: 'get',
    data: data,
  })
}

export function postUpdate(data) {
  return request({
    url: '/blog/details',
    method: 'post',
    data: data,
  })
}