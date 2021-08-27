import api from '../lib/api'

const list = {
  getList (startTime, endTime) {
    return new Promise((resolve, reject) => {
      api.get('/shopeeOfferList', {
        params: {
          purchase_time_s: startTime,
          purchase_time_e: endTime
        }
      }).then(res => {
        resolve(res.data)
      })
    })
    
  }
}

export default list