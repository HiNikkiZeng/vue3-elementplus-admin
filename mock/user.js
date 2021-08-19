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
    console.log(params,"params")
    const { username} = JSON.parse(params.body)
    if(username==='admin'){
        return{
            code:OK,
            token:Mock.Random.paragraph(1,3)
        }
    }else if(username==="editor"){
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
  getRoutesByUser:params=>{
    const user = params.body
    if(user ==='admin'){
      return{
        code:OK,
        data:[
          {
            url: '/form',
            type:1,
            name:'Form',
            meta:{
              title:'列表',
              icon: 'form'
            },
            children: [
              {
                type:2,
                url: 'form.index',
                name: 'FormIndex',
                meta:{
                  title:'表单',
                  icon: 'form'
                }
              },
              {
                type:2,
                url: 'form.tree',
                name: 'FormTree',
                meta:{
                  title:'表格',
                  icon: 'form'
                }
              },
            ]
          },
          {
            url: '/test',
            type:1,
            meta:{title:'测试',icon: 'test'},
            children:[
              {
                type:2,
                url: 'test.index',
                name: 'testIndex',
                meta: { title: '测试1', icon: 'dashboard' },
              },
              {
                type:2,
                url: 'test.index1',
                name: 'testIndex1',
                meta: { title: '测试2', icon: 'dashboard' },
              },
            ]
          },
        ]
      }
    }else if(user === "editor"){

    }
  }
  
}

