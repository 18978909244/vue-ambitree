import { get,post } from 'src/utils/request'

export default {
  getCart: () => {
    return post('routine/auth_api/get_cart_list')
  },
  changeCartNumber: ({
    cartNum,
    cartId
  }) => {
    return post('routine/auth_api/change_cart_num', {
      cartNum,
      cartId
    })
  },
  confirmOrder: ({
    cartId
  }) => {
    return post('routine/auth_api/confirm_order', {
      cartId
    })
  },
  remove_cart:(ids)=>{
    return post('routine/auth_api/remove_cart',{
      ids
    })
  },
  editUserAddress: ({
    address,
    detail,
    id,
    is_default,
    phone,
    post_code = '',
    real_name
  }) => {
    return post('routine/auth_api/edit_user_address', {
      address,
      detail,
      id,
      is_default,
      phone,
      post_code,
      real_name
    })
  },
  getAddress: () => {
    return post('routine/auth_api/user_address_list')
  },
  createOrder: ({
    orderKey,
    addressId,
    payType
  }) => {
    return post('routine/auth_api/create_order?key='+orderKey, {
      addressId,
      payType
    })
  }
}