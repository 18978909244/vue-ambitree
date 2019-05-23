import Qs from 'qs'
import axios from 'axios'
import localstorage from 'store'


// export const DEV = (process.env.NODE_ENV==='production')

const PRE = process.env.NODE_ENV === 'production'
    ? `${location.protocol}//${location.hostname}/p/public/api/`
    : 'p/public/api/';


export function _post(url, data = {}, postHeader = true) {

  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  axios.defaults.timeout = 3000;

  return axios.post(PRE + url, Qs.stringify(data), {
    headers: postHeader ? POST_HEADER : null
  }).then(res => res.data)
}

export function post(url, data = {}, postHeader = true) {
  let lancd = localstorage.get('LAN_CD') ? JSON.parse(localstorage.get('LAN_CD')) : 'CH';

  let userInfo = localstorage.get('userInfo');
  let POST_HEADER = {
    CO_CD: userInfo ? userInfo.CO_CD : '',
    USER_ID: userInfo ? userInfo.USER_ID : '',
    LAN_CD: lancd,
    TOKEN: userInfo ? userInfo.TOKEN : ''
  };
  return new Promise((resolve, reject) => {
    axios.post(PRE + url, {...data}, {
      headers: postHeader ? POST_HEADER : null
    })
        .then((res) => {
          if (res.data && (res.data.isSuccessful === 'true')) {
            resolve(res.data.returnValue)
          } else {
            reject(res.data.returnValue)
          }
        }).catch(() => {
      reject('网络出了点错误')
    })
  })
}

export default {
  post
}
