<template>
  <p v-if="detail" class="tip">{{detail}}</p>
  <p class="loading" v-else>讀取中...<i class='bx bx-loader bx-spin' ></i></p>
</template>

<script>
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const route = useRoute()
    const store = useStore()
    const router = useRouter()
    const detail = ref('')
    axios({
      baseURL: import.meta.env.VITE_API_URL,
      url: '/google/login',
      params: {
        code: route.query.code
      }
    }).then(res => {
      if (res.data.data) {
        store.dispatch('setUser', res.data)
          .then(() => {
            router.push({
              path: '/'
            })
          })
      } else {
        detail.value = res.data.err.detail
      }
    })
    return {
      detail
    }
  }
}
</script>

<style lang="scss" scoped>
.tip, .loading{
  margin-top: 30px;
  font-size: 18px;
}
.tip{
  font-weight: bold;
}
</style>