import api from '../lib/api'

const list = {
  getList () {
    return new Promise((resolve, reject) => {
      api.get('/shopeeOfferList', {
        params: {
          purchase_time_s: 1629302400,
          purchase_time_e: 1629907199
        }
      }).then(res => {
        resolve(res.data)
      })
    })
    
  }
}

export default list