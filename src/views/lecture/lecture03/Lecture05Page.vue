<template>
  <div class="container py-4">
    <div class="text-center mb-5">
      <h1 class="display-5 fw-bold text-primary">{{ lectureTitle }}</h1>
      <p class="fs-5 text-muted">
        Lecture {{ lectureNumber }}: <span class="text-dark">{{ lectureSubtitle }}</span>
      </p>
      <hr class="w-25 mx-auto border-primary" />
    </div>

    <QuestionItem
      v-for="q in questions"
      :key="q.id"
      :question="q"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import QuestionItem from '@/components/QuestionItem.vue';
import lectureMeta from '@/data/lectureMeta.json';
import lectureData from '@/data/lecture03/lecture05.json';

const route = useRoute();
const lectureTitle = ref('');
const lectureSubtitle = ref('');
const lectureNumber = ref('');
const questions = ref([]);

onMounted(() => {
  const group = 'lecture03'; // 固定（このファイルは lecture01 用だから）
  const number = parseInt(route.name.split('_')[1]); // 例: Lecture01_02 → "02"

  const meta = lectureMeta[group];
  lectureTitle.value = meta.title;
  lectureNumber.value = number.toString().padStart(2, '0');

  const lectureEntry = meta.lectures.find(l => l.number === number);
  lectureSubtitle.value = lectureEntry ? lectureEntry.title : '';

  questions.value = lectureData;
});
</script>
