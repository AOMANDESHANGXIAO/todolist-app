<script setup lang="ts">
const props = defineProps({
  showColor: {
    type: String,
    default: '#ff7d00'
  },
  isSelected: {
    type: Boolean,
    default: false
  },
  index: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['selectColor'])
const handleSelected = () => {
  if (props.isSelected) return
  emit('selectColor', {
    color: props.showColor,
    index: props.index
  })
}
</script>

<template>
  <section class="color-cup" :class="[{ 'is-selected': props.isSelected }]" @click="handleSelected">
    <div :style="{ backgroundColor: props.showColor }" class="content"></div>
  </section>
</template>

<style lang="scss" scoped>
$selected-border-color: #e19d00;
.color-cup {
  width: 50px;
  height: 50px;
  padding: 2px;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: all 0.1s;
  display: flex;
  justify-content: center;
  align-items: center;
  //   box-sizing: content-box;
  &:hover {
    border-color: var(--color-gray);
  }
  .content {
    // transition: all 0.1s;
    width: 38px;
    height: 38px;
  }
}
.color-cup.is-selected {
  border: 3px solid $selected-border-color;
}
</style>
