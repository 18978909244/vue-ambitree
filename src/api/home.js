import {param, post} from './request'


export default {
  init:()=>{
    return post('routine/auth_api/index',{},false)
  }
}