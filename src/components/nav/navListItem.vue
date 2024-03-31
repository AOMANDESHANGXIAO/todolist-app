<script lang="ts" setup>
import myIcon from '@/components/common/icon.vue'
const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: 'default'
  },
  active: {
    type: Boolean,
    default: false
  },
  count: {
    type: [Number, String],
    default: 0
  }
})
</script>

<template>
  <section class="nav-list-item" :class="{ 'active-item': active }">
    <!-- pointer -->
    <div :class="[{ 'active-note': active }]"></div>
    <!-- icon -->
    <div class="icon">
      <my-icon :name="icon"></my-icon>
    </div>
    <!-- 文本 -->
    <section class="text">{{ props.text }}</section>
    <!-- 小圆点 -->
    <div class="dot" v-if="count !== 0">{{ count }}</div>
  </section>
</template>

<style lang="scss" scoped>
$dot-color: #e63946;
@mixin notExceed {
  overflow: hidden; /* 隐藏超出部分的内容 */
  text-overflow: ellipsis; /* 文本超出时用省略号代替 */
  white-space: nowrap; /* 禁止文本换行 */
  // background-color: pink;
}

.nav-list-item {
  height: 40px;
  width: 100%;
  // background-color: pink;
  display: flex;
  align-items: center;
  // gap: 20px;
  cursor: default;
  border-radius: 5px;
  position: relative;
  transition: all 0.3s;
  .icon {
    margin-left: 10px;
    font-weight: 300;
    font-size: 10px;
  }
  .text {
    margin-left: 20px;
    font-weight: 300;
  }
  &:hover {
    background-color: var(--color-gray);
  }
  .active-note {
    position: absolute;
    left: 0;
    width: 3px;
    height: 25px;
    border-radius: 2px;
    background-color: var(--color-purple);
  }
  .dot {
    position: absolute;
    right: 0;
    width: 13px;
    height: 13px;
    // padding: 3px;
    border-radius: 50%;
    color: #fff;
    background-color: $dot-color;
    font-size: 10px;
    text-align: center;
    line-height: 13px;
    margin-right: 10px;
    font-weight: 300;
    @include notExceed;
  }
}
.active-item {
  background-color: var(--color-gray);
}
</style>
