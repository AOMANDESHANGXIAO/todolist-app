<script setup lang="ts">
defineOptions({
  name: 'rw-header'
})
const props = defineProps({
  title: {
    type: String,
    default: 'Untitled'
  }
})
</script>

<template>
  <header class="rw-header">
    <div class="title">
      <span>{{ props.title }}</span>
    </div>
    <div class="icon-list">
      <div class="icon-button"><icon name="gengduo" color="#fff"></icon></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.rw-header {
  //   flex: 1;
  //   height: 100vh;
  width: 100%;
  height: 50px;
  //   background-color: pink;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    font-weight: 700;
    font-size: 30px;
    cursor: default;
  }
  .icon-list {
  }
  .icon-button {
    width: 25px;
    height: 25px;
    // background-color: pink;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background-color: var(--color-light-gray);
    }
  }
}
</style>
