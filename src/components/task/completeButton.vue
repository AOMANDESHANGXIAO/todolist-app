<script setup lang="ts">
const props = defineProps({
  com_num: {
    type: Number,
    default: 0
  }
})
const isPacked = ref(false)
const emit = defineEmits(['click'])
const handlePack = () => {
  emit('click')
  isPacked.value = !isPacked.value
}
</script>

<template>
  <div class="complete-button" @click="handlePack">
    <icon
      name="arrow-right-copy-copy-copy"
      color="#484848"
      :class="[isPacked ? 'is-packed' : '']"
      class="arrow"
    ></icon>
    <span>Completed</span>
    <span>{{ com_num }}</span>
  </div>
</template>

<style lang="scss" scoped>
.complete-button {
  width: 120px;
  height: 30px;
  background-color: var(--color-bgc-gray);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-black);
  font-size: 14px;
  cursor: default;
  gap: 5px;
  margin-bottom: 6px;
  &:hover {
    background-color: #fff;
  }
  .arrow {
    transition: all 0.3s;
  }
  .is-packed {
    transform: rotate(90deg);
    // transform-origin: ;
  }
}
</style>
