<script setup lang="ts">
import rwView from '@/components/common/rw.vue'
import rwHeader from '@/components/common/rwHeader.vue'
import myTask from '@/components/task/myTask.vue'
import addTask from '@/components/task/addTask.vue'
import { getCurrentDateInfo } from '@/utils/time.js'
import { useTaskStore } from '@/stores/task.ts'

const taskStore = useTaskStore()
const timeInfo = computed(() => {
  const info = getCurrentDateInfo()
  return `${info.month}月${info.day}日, 星期${info.weekday}`
})

const newTask = ref('')

const handleAddNewTask = () => {
  if (newTask.value.trim() === '') return
  let task = {
    id: taskStore.allTask.length + 1,
    name: newTask.value.trim(),
    time: new Date().toLocaleString(),
    isFinished: false,
    isDelete: false,
    isImportant: false,
    isOutdate: false,
    isMyday: true
  }
  taskStore.addTask(task)
  newTask.value = ''
}

provide('handleAddNewTask', handleAddNewTask)

const hanleFinishTask = (id: number) => {
  console.log('finished task', id)
  taskStore.finishTask(id)
}

const isShowFinished = ref(false)

const handleClickComplete = () => {
  isShowFinished.value = !isShowFinished.value
}

const bgc = ref('#358f89')
</script>

<template>
  <rw-view>
    <div class="mydayView" :style="{ 'background-color': bgc }">
      <!-- My Day信息 -->
      <header class="header">
        <rw-header :title="'My Day'"></rw-header>
        <div>{{ timeInfo }}</div>
      </header>
      <!-- 未完成的任务 -->
      <div class="todolist-content">
        <my-task
          v-for="item in taskStore.isworking_myday"
          :task="item"
          :key="item.id"
          @finishTask="hanleFinishTask"
        ></my-task>
        <div class="completed-todolist" v-if="taskStore.finished_myday.length">
          <complete-button
            :com_num="taskStore.finished_myday.length"
            @click="handleClickComplete"
          ></complete-button>
          <section class="finished" v-show="isShowFinished">
            <my-task
              v-for="item in taskStore.finished_myday"
              :task="item"
              :key="item.id"
              :dot-color="bgc"
            ></my-task>
          </section>
        </div>
      </div>
      <!-- 已完成的任务 -->
      <!-- 添加任务 -->
      <div class="add-task-button">
        <add-task v-model="newTask"></add-task>
      </div>
    </div>
  </rw-view>
</template>

<style lang="scss" scoped>
.mydayView {
  width: 100%;
  height: 100%;
  // background-color: var(--color-green);
  border-radius: 10px 0 0 0;
  padding: 50px;
  color: #fff;
  .header {
    cursor: default;
  }
  .todolist-content {
    margin-top: 30px;
    width: 100%;
    height: 65vh;
    overflow: auto;
    // background-color: pink;
    /* 隐藏滚动条，但保持内容可滚动（仅限Webkit内核浏览器） */
    scrollbar-width: none; /* 对于Firefox浏览器 */
    -ms-overflow-style: none; /* 对于IE和Edge浏览器 */
    &::-webkit-scrollbar {
      display: none; /* 隐藏Webkit内核浏览器的滚动条 */
    }
  }
  .todolist-content::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5); /* 滚动条拖动部分的颜色 */
    border-radius: 10px; /* 圆角 */
  }

  .todolist-content::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1); /* 滚动条轨道颜色 */
    border-radius: 10px; /* 圆角 */
  }
  .add-task-button {
    margin-top: 20px;
  }
}
</style>
