import Mock from 'mockjs'
const OK=20000
const ERROR=20001
export default {
  /**
   * 获取token  get token
   * @param username password code
   * @return {token}}
   */
  getToken: params => {
    const { username} = JSON.parse(params.body)
    console.log(username,"????")
    if(username==='admin'){
        return{
            code:OK,
            token:Mock.Random.paragraph(1,3)
        }
    }else{
        return{
            code:ERROR,
            message:'用户名错误'
        }
    }
  },
  
}

