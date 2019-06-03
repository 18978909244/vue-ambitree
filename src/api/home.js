import { get,post } from 'src/utils/request'

export default {
  init:()=>{
    return post('routine/auth_api/index',{},false)
  }
}