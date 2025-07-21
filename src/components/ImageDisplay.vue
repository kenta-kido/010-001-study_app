<!-- ImageDisplay.vue -->
<template>
  <div v-if="src" class="text-center my-3">
    <img
      :src="resolvedSrc"
      :alt="alt"
      class="img-fluid rounded shadow-sm border"
    />
  </div>
</template>

<script>
export default {
  name: 'ImageDisplay',
  props: {
    src: { type: String, required: true },
    alt: { type: String, default: 'image' },
    basePath: { type: String, default: '/images/' }
  },
  computed: {
    resolvedSrc() {
      return `${this.basePath}${this.src}`;
    }
  }
};
</script>
