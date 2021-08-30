<template>
  <header class="header">
    <h1>{{title}}</h1>
    <ul>
      <li class="link">
        <a href="https://nosegates.com/" target="_blank">Nosegates</a>
      </li>
      <li class="link">
        <a href="https://connectshark.github.io/shopee-short-link/" target="_blank">蝦皮短網址服務</a>
      </li>
    </ul>
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
  ul{
    padding: 0 0 20px;
    .link{
      display: inline-block;
      margin: 0 10px;
      a{
        font-size: 16px;
        line-height: 1.3;
        color: #ccc;
      }
      &:hover{
        a{
          color: #fff;
        }
      }
      &:active{
        a{
          color: #fff;
        }
      }
    }
  }
}
</style>