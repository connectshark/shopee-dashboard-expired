<template>
  <h2 class="text-2xl">第一頁由此開始</h2>
  <div class="btn" @click="show = true">show</div>
  <p><span>{{date}}</span></p>
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

export default {
  setup() {
    const date = ref('')
    const show = ref(false)

    const formatDate = (date) => new Date(date).getTime() / 1000
    const onConfirm = (values) => {
      const [start, end] = values;
      show.value = false;
      date.value = `${formatDate(start)} - ${formatDate(end)}`;
    }


    return {
      date,
      show,
      onConfirm,
      minData: new Date(2021, 0, 1),
      maxDate: new Date(),
      defaultDate: [new Date(2021, 7, 1), new Date()]
    }
  },
};
</script>

<style lang="scss" scoped>
</style>