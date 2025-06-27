<template>
  <div>
    <button
      class="btn btn-outline-primary position-fixed top-0 start-0 m-3 z-3"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#sidebarMenu"
      aria-controls="sidebarMenu"
    >
      ☰
    </button>

    <div class="offcanvas offcanvas-start text-bg-light" tabindex="-1" id="sidebarMenu">
      <div class="offcanvas-header bg-primary text-white">
        <h5 class="offcanvas-title">Lecture Navigation</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
      </div>

      <div class="offcanvas-body">
        <div class="accordion" id="lectureAccordion">
          <div
            class="accordion-item"
            v-for="(group, key) in lectureData"
            :key="key"
          >
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed bg-light"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#' + key"
              >
                {{ group.title }}
              </button>
            </h2>
            <div
              :id="key"
              class="accordion-collapse collapse"
              data-bs-parent="#lectureAccordion"
            >
              <div class="accordion-body p-0">
                <ul class="list-group list-group-flush">
                  <li
                    v-for="lecture in group.lectures"
                    :key="lecture.number"
                    class="list-group-item list-group-item-action"
                    @click="navigateToLecture(key, lecture.number)"
                    style="cursor: pointer;"
                  >
                    Lecture {{ lecture.number.toString().padStart(2, '0') }}: {{ lecture.title }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import lectureMeta from '@/data/lectureMeta.json';

const router = useRouter();
const lectureData = ref({});

onMounted(() => {
  lectureData.value = lectureMeta;
});

function navigateToLecture(groupKey, number) {
  const group = groupKey.replace('lecture', '').padStart(2, '0');
  const num = String(number).padStart(2, '0');
  router.push(`/lecture/${group}/${num}`);
}
</script>

<style scoped>
.list-group-item:hover {
  background-color: #e3f2fd;
  color: #0d6efd;
}
</style>
