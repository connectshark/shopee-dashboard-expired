<template>
<div class="bar">
  <div class="row" @click="updateShow">
    <p class="time">{{formatReadContent}}</p>
    <div class="btn" @click.stop="submit">
      <i class='bx bx-loader-circle bx-spin' v-if="loading"></i>
      <i class='bx bx-search-alt' v-else></i>
    </div>
  </div>
</div>
</template>

<script>
import { computed } from 'vue'
import Time from '../lib/time'
export default {
  props: {
    show: {
      type: Boolean,
      require: true
    },
    loading: {
      type: Boolean
    },
    startTime: {
      type: Number
    },
    endTime: {
      type: Number
    },
    submit: {
      type: Function
    }
  },
  emits: ['update:show'],
  setup (props, { emit }) {
    const formatReadContent = computed(() => {
      return Time.formatReadDate(props.startTime) + ' ~ ' + Time.formatReadDate(props.endTime)
    })
    const updateShow = () => {
      emit('update:show', true)
    }
    return {
      updateShow,
      formatReadContent
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/media.scss';
.bar{
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 10px 0;
  box-sizing: border-box;
  background-color: #6e6e6e;
  width: 100%;
  transition: width .3s;
  @include mobile {
    margin: 10px auto;
    width: 700px;
    border-radius: 20px;
  }
  .row{
    width: 80%;
    margin: auto;
    max-width: 400px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    .time{
      color: #fff;
      font-size: 20px;
      line-height: 1.5;
      border-radius: 20px;
      padding: 5px 20px;
    }
    .btn{
      font-size: 20px;
      line-height: 40px;
      background-color: #A1D5D1;
      color: #fff;
      width: 40px;
      border-radius: 20px;
      transition: width .3s;
      @include mobile {
        width: 80px;
      }
    }
  }
}
</style>