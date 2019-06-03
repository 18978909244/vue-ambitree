import { get,post } from 'src/utils/request'

export default {
  searchByWord(word){
    return get('routine/auth_api/store?value='+word)
  }
}