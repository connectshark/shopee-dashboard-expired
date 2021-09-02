import api from '../lib/api'

const request = {
  getList (startTime, endTime, email) {
    return new Promise((resolve, reject) => {
      api.post('/shopeeOfferList', {
        purchase_time_s: startTime,
        purchase_time_e: endTime,
        email
      }).then(res => {
        resolve(res.data)
      })
    })
    
  }
}

export default request