import {post} from './request'


export default {
  getIndex:()=>{
    return post('/auth_api/index')
  }
}