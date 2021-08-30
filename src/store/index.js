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
  },

  getters: {
    listFilter (state) {
      return state.list.map(order => {
        const list = order.orders[0].items.map(item => {
          return {
            name: item.itemName,
            id: item.itemId,
            modelId: item.modelId,
            qty: item.qty,
            img: item.imageUrl,
            status: item.displayItemStatus,
            amount: item.actualAmount,
            price: item.itemPrice
          }
        })
        return {
          purchaseTime: order.purchaseTime,
          orderId: order.checkoutId,
          estimatedTotalCommission: order.estimatedTotalCommission,
          list: list,
          orderCount: order.orders[0].items.length
        }
      })
    }
  }
})

export default store