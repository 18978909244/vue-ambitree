import {post} from './request'


export default {
  getCart:()=>{
    return post('routine/auth_api/get_cart_list')
  }
}