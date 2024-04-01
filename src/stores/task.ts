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
  const allTask = ref([])

  const myDayTask = ref([])

  const addTask = (newTask: task) => {
    allTask.value.push(newTask)
    if (newTask.isMyday) {
      myDayTask.value.push(newTask)
    }
  }
  return {
    allTask,
    addTask,
    myDayTask
  }
})
