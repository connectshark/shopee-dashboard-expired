import { createStore } from 'vuex'

const store = createStore({
  state: {
    list: []
  },
  mutations: {
    prodList: (state, list) => state.list = list 
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