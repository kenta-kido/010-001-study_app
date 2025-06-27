<template>
  <div class="selector">
    <label for="lecture-select">Select Lecture:</label>
    <select v-model="selected" @change="navigateToLecture">
      <option disabled value="">Choose...</option>
      <option v-for="n in 14" :key="n" :value="n">Lecture {{ n.toString().padStart(2, '0') }}</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const selected = ref('');
const router = useRouter();

function navigateToLecture() {
  if (selected.value) {
    router.push(`/lecture/${selected.value}`);
  }
}
</script>

<style scoped>
.selector {
  margin: 1rem 0;
}

select {
  padding: 0.4rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #aaa;
}
</style>
