<template>
<div class="about">
  <a href="mailto:bobhus394@gmail.com" class="author mail">
    <img src="../assets/img/author.jpg" alt="author">
  </a>
  <p class="row">
    <a href="mailto:bobhus394@gmail.com" class="mail"><i class='bx bx-mail-send'></i>用email聯絡我</a>
  </p>
</div>
</template>

<script>
export default {
  setup () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.about{
  .author{
    padding: 20px 0 0;
    display: block;
    img{
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
      vertical-align: middle;
    }
  }
  .mail{
    font-size: 20px;
    color: #6e6e6e;
  }
}
</style>