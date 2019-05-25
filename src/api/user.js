import { query,post } from './request'


export default {
  Login: ({
    account,
    pwd
  }) => {
    return query('wap/login/check_v2', {
      account,
      pwd
    })
  }
}