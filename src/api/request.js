import axios from 'axios'
import Cookies from 'js-cookie';
import router from '../router'
import { Loading } from 'element-ui';
const PRE = process.env.NODE_ENV === 'production'
  ? `${location.protocol}//${location.hostname}`
  : '';


export function post(url, data = {}, needUid = true) {
  let loadingInstance = Loading.service({ fullscreen: true })
  return new Promise((resolve, reject) => {

    const uid = Cookies.get('user_id')
    if (!uid) {
      router.push({
        name: 'login'
      });
    }
    if (needUid) {
      let split = url.indexOf('?') > -1 ? '&' : '?'
      url = url + split + 'uid=' + uid
    }
    console.log('post request:', url)
    axios.post(url, data).then(res => {
      loadingInstance.close();
      if (res.data.code === 200) return resolve(res.data.data)
      reject({
        code: 402,
        msg: res.data.msg
      })
    }).catch(e => {
      loadingInstance.close();
      reject({
        code: 403
      })
    })
  })
}

export function get(url, payload = {}, needUid = true) {
  let loadingInstance = Loading.service({ fullscreen: true })
  return new Promise((resolve, reject) => {
    const uid = Cookies.get('user_id')
    if (!uid) {
      router.push({
        name: 'login'
      });
    }
    if (!Object.is(payload, {})) {
      let arr = []
      Object.keys(payload).forEach(item => {
        let str = item + '=' + payload[item]
        arr.push(str)
      })
      let query = arr.join('&')
      url = url.includes('?') ? url + '&' + query : url + '?' + query
    }
    if (needUid) {
      let split = url.indexOf('?') > -1 ? '&' : '?'
      url = url + split + 'uid=' + uid
    }
    console.log('post request:', url)
    axios.get(url).then(res => {
      loadingInstance.close();
      if (res.data.code === 200) return resolve(res.data.data)
      reject({
        code: 402,
        msg: res.data.msg
      })
    }).catch(e => {
      loadingInstance.close();
      reject({
        code: 403
      })
    })
  })
}

export function query(url, payload = {}) {
  let loadingInstance = Loading.service({ fullscreen: true })
  if (!Object.is(payload, {})) {
    let arr = []
    Object.keys(payload).forEach(item => {
      let str = item + '=' + payload[item]
      arr.push(str)
    })
    let query = arr.join('&')
    url = url.includes('?') ? url + '&' + query : url + '?' + query
  }
  console.log('post request:', url)
  return new Promise((resolve, reject) => {
    axios.get(url).then(res => {
      loadingInstance.close();
      if (res.data.code === 200) return resolve(res.data.data)
      reject({
        code: 402,
        msg: res.data.msg
      })
    }).catch(e => {
      loadingInstance.close();
      reject({
        code: 403
      })
    })
  })
}

export function param(url, payload = {}) {
  if (!Object.is(payload, {})) {
    let arr = []
    Object.keys(payload).forEach(item => {
      let str = item + '/' + payload[item]
      arr.push(str)
    })
    let params = arr.join('/')
    url = url + '/' + params
  }
  console.log('post request:', url)
  return new Promise((resolve, reject) => {
    axios.get(url).then(res => {
      if (res.data.code === 200) return resolve(res.data.data)
      reject(res.data.msg)
    }).catch(e => {
      this.$message('网络出问题了')
    })
  })
}