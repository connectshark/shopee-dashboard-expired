<template>
  <Head/>
  <router-view></router-view>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'
import Head from './components/head.vue'
export default {
  components: {
    Head
  },
  setup () {
    const resize = () => {
      document.querySelector(':root').style.setProperty(`--vh`, window.innerHeight + 'px')
    }
    onMounted(() => {
      window.addEventListener('resize', resize)
      resize()
    })

    onUnmounted(() => {
      window.removeEventListener('resize', resize)
    })
  }
}
</script>


<style lang="scss">
:root{
  --vh: 100vh;
}

#app {
  font-family: 'openhuninn', 'Noto Sans TC', sans-serif;
  text-align: center;
	background-color: rgba(209, 250, 229, .2);
  height: var(--vh);
}
</style>
