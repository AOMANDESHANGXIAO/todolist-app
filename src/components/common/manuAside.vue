<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Untitled'
  }
})
</script>

<template>
  <section class="manu-aside">
    <header class="manu-title">
      {{ props.title }}
    </header>
    <main class="manu-content">
      <slot></slot>
    </main>
  </section>
</template>

<style lang="scss" scoped>
.manu-aside {
  position: absolute;
  top: 40px;
  right: 0;
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  .manu-title {
    color: var(--color-black);
    margin-bottom: 6px;
  }
  .manu-content {
    width: 100%;
  }
}
</style>
