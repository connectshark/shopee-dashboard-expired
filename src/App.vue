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
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'openhuninn', 'Noto Sans TC', sans-serif;
  text-align: center;
	background-color: rgba(209, 250, 229, .2);
  min-height: 100vh;
}
</style>
