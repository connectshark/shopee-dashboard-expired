<template>
  <h2 class="text-2xl">第一頁由此開始</h2>
  <div class="btn" @click="show = true">show</div>
  <p><span>{{startTime}} - {{endTime}}</span></p>
  <div class="text-2xl" @click="submit">送出</div>
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
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const startTime = ref('')
    const endTime = ref('')
    const show = ref(false)

    const formatDate = (date) => new Date(date).getTime() / 1000
    const onConfirm = (values) => {
      const [start, end] = values;
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


    return {
      show,
      onConfirm,
      minData: new Date(2021, 0, 1),
      maxDate: new Date(),
      defaultDate: [new Date(2021, 7, 1), new Date()],
      submit,
      startTime,
      endTime
    }
  },
};
</script>

<style lang="scss" scoped>
</style>