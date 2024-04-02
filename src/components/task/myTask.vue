<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Untitled'
  },
  task: {
    type: Object,
    default: () => {
      return {}
    }
  },
  dotColor: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['finishTask'])

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

const handleFinishTask = (id: number) => {
  // 完成任务
  emit('finishTask', id)
  // props.task.isFinished = !props.task.isFinished
}
</script>

<template>
  <div class="my-task" :class="{ 'is-finished': task.isFinished }">
    <!-- left -->
    <section class="task-left">
      <div
        class="task-dot"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @click="handleFinishTask(task.id)"
        :style="{ 'background-color': dotColor, 'border-color': dotColor }"
      >
        <icon
          name="biaodankongjiandanxuan"
          :color="dotColor ? '#fff' : '#616161'"
          size="small"
          v-show="isHover || task.isFinished"
        ></icon>
      </div>
      <div class="task-title">
        <span>{{ task.name }}</span>
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
  background-color: #eeeff3;
  border-radius: 5px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  &:hover {
    background-color: #f6f6f6;
  }
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
    input {
      outline: none;
      border: none;
    }
  }
}
.my-task.is-finished {
  .task-title {
    text-decoration: line-through;
  }
  // .task-dot {
  //   background-color: var(--color-theme-color);
  // }
}
</style>
