<template>
  <div>
    <!-- ハンバーガーアイコン -->
    <button
      class="btn btn-outline-primary position-fixed top-0 start-0 m-3 z-3"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#sidebarMenu"
      aria-controls="sidebarMenu"
    >
      ☰
    </button>

    <!-- サイドバー -->
    <div class="offcanvas offcanvas-start text-bg-light" tabindex="-1" id="sidebarMenu">
      <div class="offcanvas-header bg-primary text-white">
        <h5 class="offcanvas-title">Lecture Navigation</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
      </div>

      <div class="offcanvas-body">
        <div class="accordion" id="lectureAccordion">
          <div class="accordion-item" v-for="group in lectureGroups" :key="group.name">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed bg-light"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#' + group.name"
              >
                {{ group.label }}
              </button>
            </h2>
            <div
              :id="group.name"
              class="accordion-collapse collapse"
              data-bs-parent="#lectureAccordion"
            >
              <div class="accordion-body p-0">
                <ul class="list-group list-group-flush">
                  <li
                    v-for="n in group.count"
                    :key="n"
                    class="list-group-item list-group-item-action"
                    @click="navigateToLecture(group.prefix, n)"
                    style="cursor: pointer;"
                  >
                    Lecture {{ n.toString().padStart(2, '0') }}
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
import { useRouter } from 'vue-router';

const router = useRouter();

const lectureGroups = [
  {
    name: 'lecture01',
    label: 'Data Mining (IVDA) (2025So)',
    prefix: '01',
    count: 14,
  },
  {
    name: 'lecture02',
    label: 'Info Vis (IVDA) (2025So)',
    prefix: '02',
    count: 14,
  },
];

function navigateToLecture(groupPrefix, number) {
  const group = groupPrefix.padStart(2, '0');
  const num = String(number).padStart(2, '0');
  router.push(`/lecture/${group}/${num}`);
}
</script>


<style scoped>
/* ボタン hover カスタマイズ（必要なら） */
.list-group-item:hover {
  background-color: #e3f2fd;
  color: #0d6efd;
}
</style>
