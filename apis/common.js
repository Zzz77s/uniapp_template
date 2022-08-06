import request from '@/utils/request'

// 热门城市
export function hotCitys() {
  return new Promise((resolve, reject) => {
    uni.request({
      url: 'https://cdn.bgwiki.cn/car/hot-region.json',
      method: 'get',
      success: ({ data }) => resolve(data),
      fail: reject,
    })
  })
}

// 全部城市
export function allCitys() {
  return new Promise((resolve, reject) => {
    uni.request({
      url: 'https://cdn.bgwiki.cn/car/city-region.json',
      method: 'get',
      success: ({ data }) => resolve(data),
      fail: reject,
    })
  })
}
