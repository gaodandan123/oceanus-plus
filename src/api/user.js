import request from '@/utils/request'
// 登录
export const login = (data) => {
  request('/auth/login', { method: 'post', body: data })
}
// 退出登录
export const loginOut = (data) => {
  request('/auth/loginOut', { method: 'post', body: data })
}
