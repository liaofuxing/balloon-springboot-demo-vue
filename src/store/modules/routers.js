import { constantRoutes } from '@/router'

const routers = {
  state: {
    RouterList: [], // 动态路由
    routerDataFlag: false
  },

  mutations: {
    set_router: (state, routerList) => {
      state.RouterList = routerList
    },
    set_routrerDataFlag: (state, routerDataFlag) => {
      state.routerDataFlag = routerDataFlag
    }
  },

  actions: {
    // 动态设置路由 通过commit state, 参数为routerList
    setRouterList({ commit }, routerList) {
      commit('set_router', constantRoutes.concat(routerList)) // 进行路由拼接并存储
    },
    // 设置动态路由获取状态
    setRoutrerDataFlag({ commit }, routerDataFlag) {
      commit('set_routrerDataFlag', routerDataFlag)
    }
  }
}

export default routers
