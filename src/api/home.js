import {param, post} from './request'


export default {
  getIndex:()=>{
    return param('public_api/get_best_product_list',{
      first:0,
      limit:20
    })
  },
  init:()=>{
    return post('routine/auth_api/index')
  }
}