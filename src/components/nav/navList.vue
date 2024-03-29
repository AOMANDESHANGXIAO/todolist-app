<script lang="ts" setup>
interface list_item {
  icon: String
  text: String
  count: String
}
const list: list_item[] = ref([{ icon: 'shuiguo', text: 'my Day', count: 5 }])

const active_index = ref(0)
</script>

<template>
  <nav-list-item
    :icon="item.icon"
    :text="item.text"
    v-for="(item, index) in list"
    :key="index"
    :count="item.count"
    :active="active_index === index"
  ></nav-list-item>
</template>

<style lang="scss" scoped></style>
