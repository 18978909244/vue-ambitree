import { post } from './request'


export default {
  getCat: () => {
    return post('routine/auth_api/get_pid_cate', {}, false)
  },
  getCatId: (id) => {
    return post('routine/auth_api/get_id_cate', {
      id
    }, false)
  },
  getCartNumber:()=>post('routine/auth_api/get_cart_num')
}