<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light px-3">
    <a class="navbar-brand fw-bold text-primary" href="#">Study Site</a>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto flex-wrap gap-2">
        <li class="nav-item" v-for="n in lectureCount" :key="n">
          <button
            class="btn btn-outline-primary btn-sm me-2 mb-2"
            @click="goToLecture(n)"
          >
            Lecture {{ n.toString().padStart(2, '0') }}
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const lectureCount = 14;

function goToLecture(n) {
  router.push(`/lecture/${n}`);
}
</script>
