import { get,post } from 'src/utils/request'

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
  },
  getCoupon(){
    return post('routine/auth_api/get_issue_coupon_list')
  }
}