<script setup lang="ts">
import rwView from '@/components/common/rw.vue'
import rwHeader from '@/components/common/rwHeader.vue'
import myTask from '@/components/task/myTask.vue'
import { getCurrentDateInfo } from '@/utils/time.js'

const timeInfo = computed(() => {
  const info = getCurrentDateInfo()
  return `${info.month}月${info.day}日, 星期${info.weekday}`
})
</script>

<template>
  <rw-view>
    <div class="mydayView">
      <header class="header">
        <rw-header :title="'My Day'"></rw-header>
        <div>{{ timeInfo }}</div>
      </header>
      <div class="todolist-content">
        <my-task></my-task>
      </div>
    </div>
  </rw-view>
</template>

<style lang="scss" scoped>
.mydayView {
  width: 100%;
  height: 100%;
  background-color: var(--color-green);
  border-radius: 10px 0 0 0;
  padding: 50px;
  color: #fff;
  .header {
    cursor: default;
  }
  .todolist-content {
    margin-top: 30px;
    width: 100%;
    height: 75vh;
    // background-color: pink;
  }
}
</style>
