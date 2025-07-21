<template>
  <div class="container py-4">
    <div class="text-center mb-5">
      <h1 class="display-5 fw-bold text-primary">{{ lectureTitle }}</h1>
      <p class="fs-5 text-muted">
        Lecture {{ lectureNumber }}: <span class="text-dark">{{ lectureSubtitle }}</span>
      </p>
      <hr class="w-25 mx-auto border-primary" />
    </div>

    <!-- 🔁 各セクションの .vue を自動読み込み -->
    <DynamicVueChapterBlock
      v-for="entry in chapterEntries"
      :key="entry.number"
      :lectureNumber="entry.number"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import DynamicVueChapterBlock from '@/components/DynamicVueChapterBlock.vue';
import lectureMeta from '@/data/lectureMeta.json';

const route = useRoute();
const lectureTitle = ref('');
const lectureSubtitle = ref('');
const lectureNumber = ref('');
const chapterEntries = ref([]);

onMounted(async () => {
  const group = 'lecture04';
  const number = parseInt(route.name.split('_')[1]); // Lecture04_03 → 3
  lectureNumber.value = number.toString().padStart(2, '0');

  const meta = lectureMeta[group];
  lectureTitle.value = meta.title;

  const lectureEntry = meta.lectures.find(l => l.number === number);
  lectureSubtitle.value = lectureEntry ? lectureEntry.title : '';

  try {
    const res = await fetch('./lecture/lecture04/chapter03/index.json');
    if (res.ok) {
      chapterEntries.value = await res.json();
    } else {
      console.warn('index.json not found');
    }
  } catch (err) {
    console.error('Failed to load index.json', err);
  }
});
</script>
