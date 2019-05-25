import {post} from './request'


export default {
  getCat:()=>{
    return post('routine/auth_api/get_pid_cate')
  }
}