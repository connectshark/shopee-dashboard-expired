<template>
  <Head/>
  <router-view></router-view>
</template>

<script>
import Head from './components/head.vue'
export default {
  components: {
    Head
  },
  setup () {
    return {
      title: '蝦皮後台'
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'openhuninn', 'Noto Sans TC', sans-serif;
  text-align: center;
}
</style>
