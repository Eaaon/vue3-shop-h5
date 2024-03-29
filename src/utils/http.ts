import axios from 'axios'
import { showToast } from 'vant'

let token = sessionStorage.getItem("token");
export const request = async (options: any) => {
  if (import.meta.env.VITE_USE_MOCK) {
    let res = await axios({
      method: options.method,
      url: options.url,
      params: options.params || options.data
    });
    return res.data
  } else {
    return new Promise((resolve, reject) => {
      const service = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL, // url = base url + request url
        timeout: 5000, // request timeout
      })

      // 请求拦截
      service.interceptors.request.use(
        (config: any) => {
          if (token) {
            config.headers.Authorization = token
          }
          return config
        },
        error => {
          return Promise.reject(error)
        }
      )

      // 响应拦截
      service.interceptors.response.use(
        (response: any) => {
          const res = response.data
          const status = response.status
          if (status !== 200) {
            const desc = res.code || "出错了!"
            showToast(desc)
            return Promise.reject(new Error(res.code || 'Error'))
          } else {
            if (res.code === "000000") {
              return res.data
            } else {
              const desc = res.code || "出错了!"
              showToast(desc)
            }
          }
        },
        error => {
          showToast('出错了!')
          return Promise.reject(error || new Error('request error!'))
        }
      )

      // 请求处理
      service(options)
        .then((res) => {
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}


export default request