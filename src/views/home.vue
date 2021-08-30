<template>
  <div class="card">
    <p class="title" @click="show = true">{{formatReadContent}}</p>
    <div class="btn" @click="submit">搜尋</div>
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
    />
  </div>
  
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import Order from '../components/order.vue'
import Time from '../lib/time'

export default {
  components: {
    Order
  },
  setup() {
    const store = useStore()
    const today = new Date()
    const startTime = ref(new Date(today.getFullYear(), today.getMonth(), 1).getTime() / 1000)
    const endTime = ref(new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime() / 1000)
    const show = ref(false)

    const formatDate = (date) => new Date(date).getTime() / 1000
    const onConfirm = (values) => {
      const [start, end] = values
      show.value = false
      startTime.value = formatDate(start)
      endTime.value = formatDate(end)
    }

    const submit = () => {
      store.dispatch('searchAction', {
        startTime: startTime.value,
        endTime: endTime.value
      })
    }

    const formatReadContent = computed(() => Time.formatReadDate(startTime.value) + ' ~ ' + Time.formatReadDate(endTime.value))


    // onMounted(submit)
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
      list
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
  .title{
    color: #3939AF;
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 10px;
  }
  .btn{
    font-size: 20px;
    line-height: 1.5;
    background-color: #A1D5D1;
    color: #fff;
    width: 80px;
    margin: auto;
    border-radius: 20px;
  }
}
.list{
  padding: 20px 0 0;
  text-align: center;
}
</style>