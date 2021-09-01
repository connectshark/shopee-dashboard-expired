import { createStore } from 'vuex'

const store = createStore({
  state: {
    list: [],
    email: '',
    user: '',
    avatar: ''
  },
  mutations: {
    prodList: (state, list) => state.list = list,
    user: (state, data) => {
      state.email = data.email,
      state.user = data.name,
      state.avatar = data.avatar
    }
  },
  actions: {
    setUser ({ commit }, data) {
      commit('user', data.data)
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
            status: item.fraudStatus,
            amount: item.actualAmount,
            price: item.itemPrice
          }
        })
        return {
          purchaseTime: order.purchaseTime,
          orderId: order.checkoutId,
          estimatedTotalCommission: order.estimatedTotalCommission,
          list: list,
          orderCount: order.orders[0].items.length,
          device: order.device,
          utm: order.utmContent
        }
      })
    }
  }
})

export default store