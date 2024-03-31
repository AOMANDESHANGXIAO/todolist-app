<template>
  <div
    class="iconfont my-icon"
    :class="[
      `icon-${props.name}`,
      props.size === 'small' ? 'small' : '',
      { isHover: props.hoverColor }
    ]"
    :style="{ color: props.color }"
  ></div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'my-icon'
})
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: ''
  },
  hoverColor: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.my-icon {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-purple);
}
.my-icon.small {
  font-size: 12px;
}
.iconfont.isHover:hover::before {
  color: var(--color-purple);
}
</style>
