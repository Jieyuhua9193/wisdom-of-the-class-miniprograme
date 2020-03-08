// import store from '@/common/vuex/store'
const Fly = require('flyio/dist/npm/wx')

const request = new Fly()

// 可以进行拦截器、全局config等等设置

request.config.baseURL = 'http://localhost:8088' // api-俞龙

request.interceptors.request.use((request) => {
  if (request.method === 'GET') {
    request.headers['content-type'] = 'application/json'
  }
  request.headers['category'] = 3
  request.headers['miniprogram'] = 'true'
  request.headers['X-Requested-With'] = 'XMLHttpRequest'
  // request.headers['Cookie'] = store.commonState.cookies.map(c => `${c.key}=${c.value}`).join(';')
  // request.url = request.url + '?special=' + store.commonState.special
  return request
})

request.interceptors.response.use(
  (response, promise) => {
    if (response.headers['set-cookie']) {
      // const cookiesData = response.headers['set-cookie'][0].split(',')
      // const cookies = cookiesData.map(c => decodeCookie(c))
      // store.commonState.cookies = cookies
    }
    return promise.resolve(response.data)
  },
  (err, promise) => {
    console.log(err)
    // wx.showToast({
    //   title: '系统错误，请重试',
    //   icon: 'none',
    //   duration: 1000
    // })
    return promise.reject(err)
  }
)

export default request

// function decodeCookie (data) {
//   var kv = data.split(';')[0]
//   var index = kv.indexOf('=')
//   return {
//     key: kv.substring(0, index),
//     value: kv.substring(index + 1, kv.length)
//   }
// }

export function post (url, config) {
  if (config && config.mock && config.timeout) {
    return returnMock(config)
  } else {
    return (params) => {
      return request.post(url, params)
    }
  }
}

function returnMock (config) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(config.data)
    }, config.timeout)
  })
  return () => promise
}
