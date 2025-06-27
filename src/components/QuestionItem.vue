<template>
  <div class="card mb-4 shadow-sm">
    <div class="card-body">
      <h5 class="card-title">Q{{ question.id }}: {{ question.questionJa }}</h5>
      <p class="text-muted fst-italic">({{ question.questionDe }})</p>

      <div>
        <!-- 問題画像（あれば表示） -->
        <img
            v-if="question.questionImage"
            :src="`./images/${question.questionImage}`"
            class="img-fluid rounded my-2 border"
            alt="question image"
        />
      </div>

      <button class="btn btn-outline-primary mt-2" @click="show = !show">
        {{ show ? 'Hide Answer' : 'Check Answer' }}
      </button>
     
      <div v-if="show" class="mt-3">
        <div class="alert alert-success">
          <strong>Antwort (De):</strong><br />
          {{ question.answerDe }}
        </div>

        <div class="alert alert-info mt-2">
          <strong>Übersetzung (Ja):</strong><br />
          {{ question.answerJa }}
        </div>

        <div class="mt-3">
          <p class="fw-bold mb-1">Erklärung (De):</p>
          <p>{{ question.explanationDe }}</p>

          <p class="fw-bold mb-1">解説 (Ja):</p>
          <p>{{ question.explanationJa }}</p>
          <div>
            <!-- 解説画像（あれば表示） -->
            <img
                v-if="question.explanationImage"
                :src="`./images/${question.explanationImage}`"
                class="img-fluid rounded my-2 border"
                alt="explanation image"
            />
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
