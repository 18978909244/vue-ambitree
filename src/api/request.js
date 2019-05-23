import axios from 'axios'
const host = ''
const uid = 9

const PRE = process.env.NODE_ENV === 'production'
  ? `${location.protocol}//${location.hostname}`
  : '';


export function post(url, data = {}) {
  let split = url.indexOf('?') > -1 ? '&' : '?'
  url = url + split + 'uid=' + uid
  console.log('post request:', url)
  return axios.post(url, data).then(res => res.data)
}