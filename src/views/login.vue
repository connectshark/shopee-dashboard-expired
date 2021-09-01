<template>
<div class="login">
  <p class="btn" @click="login"><i class='bx bxl-google'></i>登入</p>
</div>
</template>

<script>
export default {
  setup () {
    const login = () => {
      window.location = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${import.meta.env.VITE_REDIRECT_RUL}/callback&scope=openid email profile https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&response_type=code&client_id=${import.meta.env.VITE_CLIENT_ID}`
    }
    
    return {
      login
    }
  }
}
</script>

<style lang="scss" scoped>
.btn{
  margin: 20px auto;
  background-color: #4E87EC;
  color: #fff;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  width: 100px;
  cursor: pointer;
  transition: background .3s;
  &:active{
    background-color: #2b71ed;
  }
}
</style>