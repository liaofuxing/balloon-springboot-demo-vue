import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/department/getDepartmentList',
    method: 'get',
    params
  })
}

export function editDepartment(params) {
  return request({
    url: '/department/editDepartment',
    method: 'post',
    data: params
  })
}

export function addDepartment(params) {
  return request({
    url: '/department/addDepartment',
    method: 'post',
    data: params
  })
}

// 校验部门名重复
export function validateDepartmentNameRepeat(params) {
  return request({
    url: '/department/validateDepartmentNameRepeat',
    method: 'get',
    params
  })
}

