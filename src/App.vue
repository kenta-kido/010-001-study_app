<template>
  <div>
    <LectureSidebar />
    <div class="container mt-5 pt-3">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import LectureSidebar from './components/LectureSidebar.vue';
</script>

<style>
body {
  background-color: #f8f9fa;
  font-family: "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

h1, h2 {
  color: #0d6efd;
}
</style>
