import Mock from 'mockjs'
import userApi from './user'



Mock.mock('/vme-admin/auth', 'post', userApi.getToken)
Mock.mock('/vme-admin/auth/user', 'post', userApi.getRoutesByUser)