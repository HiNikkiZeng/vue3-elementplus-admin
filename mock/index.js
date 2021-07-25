import Mock from 'mockjs'
import userApi from './user'



Mock.mock('/vme-admin/auth/user', 'post', userApi.getToken)