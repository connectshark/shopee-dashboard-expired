<template>
  <header class="header">
    <h1>{{title}}</h1>
  </header>
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

<style lang="scss" scoped>
.header{
  background-color: #555;
  h1{
    color: #fff;
    font-size: 30px;
    line-height: 1.9;
  }
}
</style>