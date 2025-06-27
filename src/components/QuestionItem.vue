<template>
  <div class="card mb-4 shadow-sm">
    <div class="card-body">
      <h5 class="card-title">Q{{ question.id }}: {{ question.questionJa }}</h5>
      <p class="text-muted fst-italic">({{ question.questionDe }})</p>

      <!-- 問題画像 -->
      <div v-if="question.questionImage">
        <img
          :src="`/images/${question.questionImage}`"
          class="img-fluid rounded my-2 border"
          alt="question image"
        />
      </div>

      <button class="btn btn-outline-primary mt-2" @click="show = !show">
        {{ show ? 'Hide Answer' : 'Check Answer' }}
      </button>

      <div v-if="show" class="mt-3">
        <!-- 回答（ドイツ語） -->
        <div class="alert alert-success">
          <strong>Antwort (De):</strong><br />
          <ul v-if="Array.isArray(question.answerDe)">
            <li v-for="(item, idx) in question.answerDe" :key="idx">{{ item }}</li>
          </ul>
          <p v-else>{{ question.answerDe }}</p>
        </div>

        <!-- 回答（日本語訳） -->
        <div class="alert alert-info mt-2">
          <strong>Übersetzung (Ja):</strong><br />
          <ul v-if="Array.isArray(question.answerJa)">
            <li v-for="(item, idx) in question.answerJa" :key="idx">{{ item }}</li>
          </ul>
          <p v-else>{{ question.answerJa }}</p>
        </div>

        <!-- 解説 -->
        <div class="mt-3">
          <p class="fw-bold mb-1">Erklärung (De):</p>
          <div v-if="Array.isArray(question.explanationDe)">
            <p v-for="(item, idx) in question.explanationDe" :key="idx">{{ item }}</p>
          </div>
          <p v-else>{{ question.explanationDe }}</p>

          <p class="fw-bold mb-1">解説 (Ja):</p>
          <div v-if="Array.isArray(question.explanationJa)">
            <p v-for="(item, idx) in question.explanationJa" :key="idx">{{ item }}</p>
          </div>
          <p v-else>{{ question.explanationJa }}</p>

          <!-- 解説画像 -->
          <div v-if="question.explanationImage">
            <img
              :src="`/images/${question.explanationImage}`"
              class="img-fluid rounded my-2 border"
              alt="explanation image"
            />
          </div>
            
          <!-- 原文スライド -->
          <div class="mt-4">
            <p class="fw-bold mb-1">📑 原文（スライド抜粋）:</p>
            <pre class="bg-light p-2 rounded border"><code>{{ question.originalSlideText }}</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// eslint-disable-next-line no-undef
defineProps({
  question: Object,
});
const show = ref(false);
</script>
