export function getCurrentDateInfo() {
  let currentDate = new Date()

  // 获取年份
  let year = currentDate.getFullYear()

  // 获取月份，注意JavaScript中月份是从0开始的，所以需要+1
  let month = currentDate.getMonth() + 1

  // 获取日期
  let day = currentDate.getDate()

  // 获取星期几，注意JavaScript中星期几也是从0开始的（0表示周日，1表示周一，以此类推...），也可以转换成中文或英文
  let weekday = ['日', '一', '二', '三', '四', '五', '六'][currentDate.getDay()]

  // 返回包含所需信息的对象或者字符串
  return {
    year: year,
    month: month,
    day: day,
    weekday: weekday
  }
}
