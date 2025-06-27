<template>
  <div class="container mt-4">
    <h2 class="mb-4">Lecture 01 - Practice Questions</h2>
    <QuestionItem
      v-for="q in questions"
      :key="q.id"
      :question="q"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import QuestionItem from '@/components/QuestionItem.vue';
import lectureData from '@/data/lecture01/lecture01.json';

const questions = ref([]);

onMounted(() => {
  questions.value = lectureData;
});
</script>
