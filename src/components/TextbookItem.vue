<template>
  <div class="card mb-4 shadow-sm">
    <div class="card-body">
      <h5 class="card-title">Q{{ question.id }}</h5>

      <!-- 問題画像 -->
      <div v-if="question.images">
        <img
          :src="`./images/${question.images}`"
          class="img-fluid rounded my-2 border"
          alt="question image"
        />
      </div>

      <!-- 原文HTML -->
      <div v-if="question.html" class="my-3">
        <p class="fw-bold mb-1">問題原文（HTML表示）:</p>
        <iframe
          :src="`./lecture/${question.html}`"
          class="w-100"
          style="height: 300px; border: 1px solid #ccc;"
        ></iframe>
      </div>

      <button class="btn btn-outline-primary mt-2" @click="show = !show">
        {{ show ? 'Hide Answer & Explanation' : 'Check Answer & Explanation' }}
      </button>

      <div v-if="show" class="mt-3">
        <!-- 解説画像 -->
        <div v-if="question.explanationImages">
          <p class="fw-bold mb-1">解説画像:</p>
          <img
            :src="`./images/${question.explanationImages}`"
            class="img-fluid rounded my-2 border"
            alt="explanation image"
          />
        </div>

        <!-- 解説HTML -->
        <div v-if="question.explanationhtml" class="mt-3">
          <p class="fw-bold mb-1">解説（HTML表示）:</p>
          <iframe
            :src="question.explanationhtml"
            class="w-100"
            style="height: 300px; border: 1px solid #ccc;"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// eslint-disable-next-line no-undef
defineProps({
  question: Object,
})
const show = ref(false)
</script>
