<template>
  <div class="iconfont my-icon" :class="[`icon-${props.name}`]"></div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'my-icon'
})
const props = defineProps({
  name: {
    type: String,
    default: ''
  }
})
// console.log('??')
</script>

<style scoped>
.my-icon {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-orange);
}
</style>
