import request from '@/utils/request'

// 查询【请填写功能名称】列表
export function listDatasourse(query) {
  return request({
    url: '/datasourse/datasourse/list',
    method: 'get',
    params: query
  })
}

// 查询【请填写功能名称】详细
export function getDatasourse(id) {
  return request({
    url: '/datasourse/datasourse/' + id,
    method: 'get'
  })
}

// 新增【请填写功能名称】
export function addDatasourse(data) {
  return request({
    url: '/datasourse/datasourse',
    method: 'post',
    data: data
  })
}

// 修改【请填写功能名称】
export function updateDatasourse(data) {
  return request({
    url: '/datasourse/datasourse',
    method: 'put',
    data: data
  })
}

// 删除【请填写功能名称】
export function delDatasourse(id) {
  return request({
    url: '/datasourse/datasourse/' + id,
    method: 'delete'
  })
}

// 导出【请填写功能名称】
export function exportDatasourse(query) {
  return request({
    url: '/datasourse/datasourse/export',
    method: 'get',
    params: query
  })
}
