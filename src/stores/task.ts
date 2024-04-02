import { defineStore } from 'pinia'

interface task {
  id: number
  name: String
  time: String
  isFinished: Boolean
  isDelete: Boolean
  isImportant: Boolean
  isOutdate: Boolean
  isMyday: Boolean
}
export const useTaskStore = defineStore('task', () => {
  // 总任务
  const allTask = ref([])
  // 今天的任务
  const myDayTask = ref([])
  // 今天已经完成的任务
  const finished_myday = computed(() => {
    return myDayTask.value.filter((task) => task.isFinished)
  })
  // 今天未完成的任务
  const isworking_myday = computed(() => {
    return myDayTask.value.filter((task) => !task.isFinished)
  })
  // 添加任务功能
  const addTask = (newTask: task) => {
    allTask.value.unshift(newTask)
    if (newTask.isMyday) {
      myDayTask.value.unshift(newTask)
    }
  }
  // 完成任务功能
  const finishTask = (id: number) => {
    const index = myDayTask.value.findIndex((task) => task.id === id)
    if (index !== -1) {
      myDayTask.value[index].isFinished = true
    }
  }
  return {
    allTask,
    addTask,
    myDayTask,
    finished_myday,
    isworking_myday,
    finishTask
  }
})
