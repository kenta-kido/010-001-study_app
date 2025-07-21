<template>
  <component :is="component" v-if="component" />
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'DynamicVueChapterBlock',
  props: {
    lectureNumber: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const component = ref(null);

    onMounted(async () => {
      try {
        component.value = (await import(`@/components/chapters/Chapter3_${props.lectureNumber}.vue`)).default;
      } catch (err) {
        console.warn(`Chapter3_${props.lectureNumber}.vue not found`);
      }
    });

    return {
      component
    };
  }
};
</script>
