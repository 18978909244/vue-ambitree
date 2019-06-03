import { get,post } from 'src/utils/request'

export default {
  getOrder(uni){
    return get('routine/auth_api/get_order?uni='+uni)
  },
  getOrderList(){
    return post('routine/auth_api/get_user_order_list')
  }
}