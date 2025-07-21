<!-- chapter03/chapter03_00.vue -->
<template>
  <div>
    <h3>Chapter 3.0.0 - Detailed Content</h3>
    <p>This is detailed content from chapter03_00.vue</p>
  </div>
  <img
    :src="imgUrl"
    alt="Transport Layer"
    class="img-fluid my-3 rounded border"
  />
</template>

<script setup>
import imgUrl from '@/assets/lecture/lecture04/Figure_00.png';
</script>
