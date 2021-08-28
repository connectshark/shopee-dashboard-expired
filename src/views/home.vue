<template>
  <h2 @click="show = true" class="bg-gray-200">
    <span class="text-xl">{{formatReadContent}}</span>
  </h2>
  <div class="text-2xl py-3 bg-gray-300" @click="submit">送出</div>
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
  <List/>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import List from '../components/list.vue'
import Time from '../lib/time'

export default {
  components: {
    List
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

    const formatReadContent = computed(() => Time.formatReadDate(startTime.value) + '~' + Time.formatReadDate(endTime.value))


    onMounted(submit)
    return {
      show,
      onConfirm,
      minData: new Date(2021, 0, 1),
      maxDate: new Date(),
      defaultDate: [new Date(2021, 7, 1), new Date()],
      submit,
      startTime,
      endTime,
      formatReadContent
    }
  },
};
</script>

<style lang="scss" scoped>
</style>