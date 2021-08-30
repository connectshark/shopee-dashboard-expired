<template>
  <div class="card">
    <div class="row">
      <p class="time" @click="show = true">{{formatReadContent}}</p>
      <div class="btn" @click="submit">
        <i class='bx bx-search-alt'></i>
      </div>
    </div>
  </div>
  <van-calendar
    v-model:show="show"
    type="range"
    title="查詢區間"
    color="#A1D5D1"
    :show-confirm="false"
    :default-date="defaultDate"
    :max-date="maxDate"
    :min-date="minData"
    @confirm="onConfirm"
    teleport="#modal"
  />
  <div class="list">
    <Order
      v-for="order in list"
      :key="order.orderId"
      :orderId="order.orderId"
      :purchaseTime="order.purchaseTime"
      :estimatedTotalCommission="order.estimatedTotalCommission"
      :orderCount="order.orderCount"
      :orders="order.list"
      :device="order.device"
      :utm="order.utm"
    />
  </div>
  <teleport to="#modal" v-if="modal">
    <div class="dialog">
      <h2>請稍候再試</h2>
    </div>
  </teleport>
</template>

<script>
import { computed, onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
import Order from '../components/order.vue'
import Time from '../lib/time'
import request from '../hook/request'

export default {
  components: {
    Order
  },
  setup() {
    const store = useStore()
    const modal = ref(false)
    const startTime = ref(Time.getStartTime())
    const endTime = ref(Time.getNow())
    const show = ref(false)

    const formatDate = (date) => new Date(date).getTime() / 1000
    const onConfirm = (values) => {
      const [start, end] = values
      show.value = false
      startTime.value = formatDate(start)
      endTime.value = formatDate(end)
    }

    const submit = () => {
      request.getList(startTime.value, endTime.value)
        .then(res => {
          if (res.data) {
            store.commit('prodList', res.data.conversionReport.nodes)
          } else {
            modal.value = true
          }
        })
    }

    watch(modal, value => {
      if (value) {
        setTimeout(() => {
          modal.value = false
        }, 3000)
      }
    })

    const formatReadContent = computed(() => Time.formatReadDate(startTime.value) + ' ~ ' + Time.formatReadDate(endTime.value))


    onMounted(submit)
    const list = computed(() => store.getters.listFilter)
    return {
      show,
      onConfirm,
      minData: new Date(2021, 0, 1),
      maxDate: new Date(),
      defaultDate: [new Date(2021, 7, 1), new Date()],
      submit,
      startTime,
      endTime,
      formatReadContent,
      list,
      modal
    }
  },
};
</script>

<style lang="scss" scoped>
.card{
  width: 90%;
  margin: auto;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 20px;
  box-sizing: border-box;
  .row{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    .time{
      color: #3939AF;
      font-size: 24px;
      line-height: 1.5;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 20px;
      padding: 5px 20px;
    }
    .btn{
      font-size: 20px;
      line-height: 1.5;
      background-color: #A1D5D1;
      color: #fff;
      width: 40px;
      border-radius: 20px;
    }
  }
  
  
}
.list{
  padding: 20px 0 0;
  text-align: center;
}
.dialog{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  &::before{
    content: '';
    width: 0;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
  h2{
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    max-width: 300px;
    background-color: #22AEEA;
    border-radius: 10px;
    font-size: 24px;
    line-height: 2;
    text-align: center;
    color: #fff;
  }
}
</style>