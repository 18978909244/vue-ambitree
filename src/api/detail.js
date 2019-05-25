import {post,get} from './request'


export default {
  getDetail:(id)=>{
    return post('routine/auth_api/details',{
      id
    })
  },
  addCart:(id,num)=>{
    return get('routine/auth_api/set_cart',{
      productId:id,
      cartNum:num
    })
  }
}