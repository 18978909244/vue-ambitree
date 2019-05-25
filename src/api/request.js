import axios from 'axios'
import Cookies from 'js-cookie';
const uid = localStorage.getItem('user_id')
const PRE = process.env.NODE_ENV === 'production'
  ? `${location.protocol}//${location.hostname}`
  : '';


export function post(url, data = {}) {
  let split = url.indexOf('?') > -1 ? '&' : '?'
  url = url + split + 'uid=' + localStorage.getItem('user_id')
  console.log('post request:', url)
  // return axios.post(url, data).then(res => res.data)
  return new Promise((resolve,reject)=>{
    axios.post(url,data).then(res=>{
      if(res.data.code===200) return resolve(res.data.data)
      reject(res.data.msg)
    }).catch(e=>{
      this.$message('网络出问题了')
    })
  })
}

export function get(url, payload = {}) {
  if (!Object.is(payload, {})) {
    let arr = []
    Object.keys(payload).forEach(item => {
      let str = item + '=' + payload[item]
      arr.push(str)
    })
    let query = arr.join('&')
    url = url.includes('?') ? url + '&' + query : url + '?' + query
  }
  let split = url.indexOf('?') > -1 ? '&' : '?'
  url = url + split + 'uid=' + localStorage.getItem('user_id')
  console.log('post request:', url)
  return new Promise((resolve,reject)=>{
    axios.get(url).then(res=>{
      if(res.data.code===200) return resolve(res.data.data)
      // this.$message(res.data.msg)
      reject(res.data.msg)
    }).catch(e=>{
      this.$message('网络出问题了')
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
  let split = url.indexOf('?') > -1 ? '&' : '?'
  url = url + split + 'uid=' + uid
  console.log('post request:', url)
  return new Promise((resolve,reject)=>{
    axios.get(url).then(res=>{
      if(res.data.code===200) return resolve(res.data.data)
      reject(res.data.msg)
    }).catch(e=>{
      this.$message('网络出问题了')
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
  return new Promise((resolve,reject)=>{
    axios.get(url).then(res=>{
      if(res.data.code===200) return resolve(res.data.data)
      reject(res.data.msg)
    }).catch(e=>{
      this.$message('网络出问题了')
    })
  })
}