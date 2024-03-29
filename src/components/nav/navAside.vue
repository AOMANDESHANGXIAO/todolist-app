<script setup lang="ts">
import myHr from '@/components/common/hr.vue'
defineOptions({
  name: 'nav-aside'
})
</script>

<template>
  <div class="nav-aside">
    <div class="nav-avater">
      <nav-avater></nav-avater>
    </div>
    <my-hr></my-hr>
    <!-- 写列表组件 -->
    <navList></navList>
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
