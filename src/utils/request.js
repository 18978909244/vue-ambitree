import axios from 'axios'
import Cookies from 'js-cookie';
import router from '../router'

import {
  showFullScreenLoading,
  tryHideFullScreenLoading,
} from './axiosInitHelper'
const PRE = process.env.NODE_ENV === 'production'
  ? `${location.protocol}//${location.hostname}`
  : '';


// 请求拦截器
axios.interceptors.request.use((config) => {
  showFullScreenLoading()
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use((response) => {
  tryHideFullScreenLoading()
  return response
}, (error) => {
  tryHideFullScreenLoading()
  return Promise.reject(error)
})

export function post(url, data = {}, needUid = true) {
  return new Promise((resolve, reject) => {
    const uid = Cookies.get('user_id')
    if (needUid && !uid) {
      router.push({
        name: 'login'
      });
    }
    let split = url.indexOf('?') > -1 ? '&' : '?'
    url = url + split + 'uid=' + uid
    console.log('post request:', url)
    axios.post(url, data).then(res => {
      if (res.data.code === 200) return resolve(res.data.data)
      reject({
        code: 402,
        msg: res.data.msg
      })
    }).catch(e => {
      reject({
        code: 403
      })
    })
  })
}

export function get(url, payload = {}, needUid = true) {
  return new Promise((resolve, reject) => {
    const uid = Cookies.get('user_id')
    if (needUid && !uid) {
      router.push({
        name: 'login'
      });
    }
    let split = url.indexOf('?') > -1 ? '&' : '?'
    url = url + split + 'uid=' + uid
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
      if (res.data.code === 200) return resolve(res.data.data)
      reject({
        code: 402,
        msg: res.data.msg
      })
    }).catch(e => {
      reject({
        code: 403
      })
    })
  })
}

export function query(url, payload = {}) {
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
      if (res.data.code === 200) return resolve(res.data.data)
      reject({
        code: 402,
        msg: res.data.msg
      })
    }).catch(e => {
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