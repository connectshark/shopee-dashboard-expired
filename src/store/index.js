import { createStore } from 'vuex'
import list from '../hook/list'

const store = createStore({
  state: {
    list: []
  },
  mutations: {
    prodList: (state, list) => state.list = list 
  },
  actions: {
    async searchAction ({ commit }, timeObject) {
      const data = await list.getList(timeObject.startTime, timeObject.endTime)
      commit('prodList', data.data.conversionReport.nodes)
      console.log(data.data.conversionReport.nodes)
    }
  }
})

export default store