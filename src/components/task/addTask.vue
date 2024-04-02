<script setup lang="ts">
import { useTaskStore } from '@/stores/task.ts'

const taskStore = useTaskStore()
const props = defineProps({
  modelValue: { type: String, default: '' }
})

const emit = defineEmits(['update:modelValue'])
const handleChange = () => {
  emit('update:modelValue', newTask.value)
}
const newTask = ref<String>('')

const handleTask: Function = inject('handleAddNewTask')

const handleAddNewTask = () => {
  handleTask()
  newTask.value = ''
}
</script>

<template>
  <div class="my-task">
    <!-- left -->
    <section class="task-left">
      <icon name="zengjia" color="#616161" @click="handleAddNewTask"></icon>
      <div class="task-title">
        <input
          type="text"
          placeholder="Add a Task"
          v-model="newTask"
          @input="handleChange"
          @keyup.enter="handleAddNewTask"
        />
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
  justify-content: flex-start;
  //   justify-content: space-between;
  align-items: center;
  //   gap: 10px;
  &:hover {
    background-color: #f6f6f6;
  }
  .task-left {
    width: 100%;
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
    // background-color: pink;
    width: 100%;
    input {
      outline: none;
      border: none;
      font-size: 16px;
      width: 100%;
      background-color: transparent;
      // background-color: pink;
    }
  }
}
</style>
