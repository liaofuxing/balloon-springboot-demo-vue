import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/role/getRoleList',
    method: 'get',
    params
  })
}

export function editRole(params) {
  return request({
    url: '/role/editRole',
    method: 'post',
    data: params
  })
}

export function addRole(params) {
  return request({
    url: '/role/addRole',
    method: 'post',
    data: params
  })
}

// 获取用户的角色菜单关系
export function getRoleMenu(params) {
  return request({
    url: '/role/getRoleMenu',
    method: 'get',
    params
  })
}

// 校验角色名重复
export function validateRoleNameRepeat(params) {
  return request({
    url: '/role/validateRoleNameRepeat',
    method: 'get',
    params
  })
}
