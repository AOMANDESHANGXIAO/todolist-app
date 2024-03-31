<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Untitled'
  }
})

const isHover = ref(false)
const handleHover = (val: boolean) => {
  isHover.value = val
}
const handleMouseEnter = () => {
  handleHover(true)
}
const handleMouseLeave = () => {
  handleHover(false)
}

const isEdit = ref(false)
</script>

<template>
  <div class="my-task">
    <!-- left -->
    <section class="task-left">
      <div class="task-dot" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <icon name="biaodankongjiandanxuan" color="#616161" size="small" v-show="isHover"></icon>
      </div>
      <div class="task-title">
        <span v-if="!isEdit">{{ props.title }}</span>
        <input type="text" v-if="isEdit" />
      </div>
    </section>
    <!-- right -->
    <section class="task-right">
      <div class="task-button-list">
        <icon name="shoucang" color="#616161" :hoverColor="true"></icon>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
$dot-border-color: #616161;
$dot-border-size: 20px;
.my-task {
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 5px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   gap: 10px;
  .task-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .task-dot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: $dot-border-size;
    height: $dot-border-size;
    border: 2px solid $dot-border-color;
    border-radius: 50%;
  }
  .task-title {
    color: $dot-border-color;
    cursor: default;
  }
}
</style>
