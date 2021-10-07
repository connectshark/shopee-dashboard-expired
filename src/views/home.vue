<template>
  <Bar
    v-model:show="show"
    :loading="loading"
    :startTime="startTime"
    :endTime="endTime"
    :submit="submit"
  />
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
    <transition-group name="flip-list" tag="ul">
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
      :totalAmount="order.totalAmount"
    />
    </transition-group>
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
import Bar from '../components/bar.vue'
import Time from '../lib/time'
import request from '../hook/request'
import { useRouter } from 'vue-router'

export default {
  components: {
    Order,
    Bar
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    /**
     * 是否正等待回應
     */
    const loading = ref(false)

    const email = computed(() => store.state.email)
    if (email.value === '') {
      router.push('/login')
    }

    /**
     * 控制跳窗開關
     */
    const modal = ref(false)
    const startTime = ref(Time.getStartTime())
    const endTime = ref(Time.getNow())
    const scrollId = ref('')
    /**
     * 控制月曆開關
     */
    const show = ref(false)

    const onConfirm = (values) => {
      const [start, end] = values
      show.value = false
      startTime.value = Time.formatTime(start)
      endTime.value = Time.formatTime(end)
    }

    const submit = () => {
      if (loading.value) return
      loading.value = true
      request.getList(startTime.value, endTime.value, email.value)
        .then(res => {
          if (res.data) {
            store.commit('prodList', res.data.conversionReport.nodes)
          } else {
            modal.value = true
          }
          loading.value = false
        })
    }

    watch(modal, value => {
      if (value) {
        setTimeout(() => {
          modal.value = false
        }, 3000)
      }
    })

    onMounted(submit)
    const list = computed(() => store.getters.listFilter)
    return {
      show,
      startTime,
      endTime,
      onConfirm,
      minData: new Date(2021, 0, 1),
      maxDate: new Date(),
      defaultDate: [new Date(2021, 7, 1), new Date()],
      submit,
      list,
      modal,
      loading
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/transition.scss';
.home{
  background-color: #FB5430;
}
.list{
  padding: 20px 0 20px;
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