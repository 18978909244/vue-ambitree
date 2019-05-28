import { get,post } from './request'

export default {
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
  delete:(addressId)=>get('routine/auth_api/remove_user_address',{
    addressId
  })
}