import { get, post, query } from 'src/utils/request'

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