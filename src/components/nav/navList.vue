<script lang="ts" setup>
interface listItem {
  icon: String
  text: String
  count: String | Number
}
const props = defineProps({
  list: {
    type: Array<listItem>,
    default: () => {
      return [] as listItem[]
    }
  },
  modelValue: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['update:modelValue'])
const handleClick = (index: Number) => {
  emit('update:modelValue', index)
}
</script>

<template>
  <nav-list-item
    :icon="item.icon"
    :text="item.text"
    v-for="(item, index) in props.list"
    :key="index"
    :count="item.count"
    :active="modelValue === index"
    @click="handleClick(index)"
  ></nav-list-item>
</template>

<style lang="scss" scoped></style>
