<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  msg: {
    type: String,
    required: true
  }
});
</script>
<template>
  <div>
    <div class="special-text">想聽甩甩唱歌</div>
  </div>
</template>

<style scoped>
@keyframes floatAnimation {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  background-color: #f0f0f0;
}

.special-text {
  font-size: 36px;
  font-weight: bold;
  color: #ff6600; /* 想聽甩甩唱歌文字顏色 */
  animation: floatAnimation 2s ease-in-out infinite;
}
</style>
