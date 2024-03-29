<template>
  <div class="hr"></div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'my-hr'
})
</script>

<style scoped>
.hr {
  width: 90%;
  margin-top: 15px;
  margin-bottom: 15px;
  border-top: 1px solid var(--color-gray);
}
</style>
