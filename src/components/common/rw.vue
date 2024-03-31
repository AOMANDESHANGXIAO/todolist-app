<script setup lang="ts">
defineOptions({
  name: 'rw-view'
})
</script>

<template>
  <section class="rw">
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
.rw {
  flex: 1;
  height: 100vh;
}
</style>
