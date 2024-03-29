<script setup lang="ts">
defineOptions({
  name: 'nav-avater'
})
</script>

<template>
  <div class="nav-avater">
    <!-- 头像框 -->
    <div class="user-avater">
      <img src="@/assets/imgs/avater.jpg" alt="" />
    </div>
    <div class="user-info">
      <div class="user-name">Best Lover</div>
      <div class="user-intro">I am the best!YESYESYESYEYSYE</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin notExceed {
  overflow: hidden; /* 隐藏超出部分的内容 */
  text-overflow: ellipsis; /* 文本超出时用省略号代替 */
  white-space: nowrap; /* 禁止文本换行 */
  // background-color: pink;
}

.nav-avater {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  .user-avater {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: skyblue;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--color-gray);
    img {
      width: 100%;
      height: 100%;
    }
  }
  .user-info {
    width: 50%;
    cursor: default;
    .user-name {
      font-weight: 700;
      color: var(--color-black);
      @include notExceed;
    }
    .user-intro {
      font-weight: 300;
      color: var(--color-black);
      @include notExceed;
    }
  }
}
</style>
