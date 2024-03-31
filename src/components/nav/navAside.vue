<script setup lang="ts">
import myHr from '@/components/common/hr.vue'
defineOptions({
  name: 'nav-aside'
})
interface listItem {
  icon: String
  text: String
  count: String | Number
}
const todoList = ref<Array<listItem>>([
  { icon: 'taiyang-copy', text: 'my Day', count: 5 },
  { icon: 'shoucang', text: 'Important', count: 0 }
  // { icon: 'shoucang', text: 'Important', count: 0 },
])
const todoIndex = ref<number>(0)

const finishList = ref<Array<listItem>>([
  { icon: 'zan', text: 'finished', count: 5 },
  { icon: 'xunuli-', text: 'unfinished', count: 0 }
])
const finishIndex = ref<number>(0)
</script>

<template>
  <div class="nav-aside">
    <div class="nav-avater">
      <nav-avater></nav-avater>
    </div>
    <my-hr></my-hr>
    <!-- 写列表组件 -->
    <navList :list="todoList" v-model="todoIndex"></navList>
    <my-hr></my-hr>
    <navList :list="finishList" v-model="finishIndex"></navList>
  </div>
</template>

<style scoped lang="scss">
.nav-aside {
  padding: 10px;
  width: 200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  // align-items: center;
  background-color: var(--color-ivory-white);
}
.nav-avater {
  width: 95%;
}
</style>
