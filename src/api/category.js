import { get,post } from 'src/utils/request'

export default {
  getCategoryGoodList:({
    cid
  })=>{
    return get('routine/auth_api/get_product_list',{
      cid
    })
  }
}