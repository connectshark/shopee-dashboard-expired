<template>
  <header class="w-full py-3 bg-blue-100">
    <h1 class="sm:text-4xl text-2xl">{{title}}</h1>
  </header>
  <router-view></router-view>
</template>

<script>
export default {
  setup () {
    return {
      title: '蝦皮後台'
    }
  }
}
</script>


<style>
#app {
  font-family: 'openhuninn', 'Noto Sans TC', sans-serif;
  text-align: center;
}
</style>
