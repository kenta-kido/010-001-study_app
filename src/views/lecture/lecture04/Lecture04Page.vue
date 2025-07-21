<template>
  <div class="container py-4">
    <h1 class="mb-4">Lecture 01 - Chapter Overview</h1>

    <!-- 折りたたみトグルボタン -->
    <button class="btn btn-outline-primary mb-3" @click="visible = !visible">
      {{ visible ? '▼ Hide Section' : '▶ Show Section' }}
    </button>

    <!-- 折りたたみ表示内容 -->
    <div v-show="visible" class="p-3 border rounded bg-white">
      <h2>Chapter 3: Transport Layer</h2>

      <p>
        Residing between the application and network layers, the transport layer is a central
        piece of the layered network architecture. It provides communication services directly
        to application processes running on different hosts.
      </p>

      <p>
        We’ll begin by discussing the relationship between the transport and network layers,
        then move to connectionless transport (UDP), reliable communication (TCP), and congestion control.
      </p>

      <img
        :src="imgUrl"
        alt="Transport Layer"
        class="img-fluid my-3 rounded border"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import imgUrl from '@/assets/lecture/lecture04/00.png';

const visible = ref(false);
</script>
