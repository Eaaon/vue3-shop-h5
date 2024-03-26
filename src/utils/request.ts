import axios from 'axios'
import { showToast, showLoadingToast, closeToast } from 'vant'

export const request = async (options: any) => {
  if (import.meta.env.VITE_USE_MOCK) {
    let res = await axios({
      method: options.method,
      url: options.url,
      data: options.params || options.data
    });
    return res.data
  } else {
    if (options && options.method == "post") {
      showLoadingToast({
        message: '请稍等...',
        duration: 0,
        loadingType: 'spinner',
      });
    }
    let token = sessionStorage.getItem("token");
    let headers = {
      Authorization: token
    };

    try {
      const res = await axios({
        baseURL: import.meta.env.VITE_BASE_URL,
        headers: headers,
        timeout: 40000,
        ...options
      });

      if (res.status === 200) {
        if (res.data.code === "000000") {
          closeToast();
          return res.data.data;
        } else {
          closeToast();
          if (res.data.codeDesc) {
            showToast(res.data.codeDesc);
          } else {
            showToast("出错了！");
          }
        }
      } else {
        closeToast();
        showToast("出错了！");
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default request