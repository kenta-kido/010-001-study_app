<template>
  <div class="container py-4">
    <h1 class="mb-4">Lecture 03 - Transport Layer</h1>
    
    <!-- Expand All / Collapse All buttons -->
    <div class="mb-3 d-flex gap-2">
      <button class="btn btn-success" @click="expandAll">Expand All</button>
      <button class="btn btn-secondary" @click="collapseAll">Collapse All</button>
    </div>


    <div v-for="(section, index) in sections" :key="section.id" class="mb-4">
      <!-- 本文 -->
      <div class="mb-2">
        <button
          class="btn btn-outline-primary w-100 text-start"
          @click="sectionStates[index].showMain = !sectionStates[index].showMain"
        >
          {{ sectionStates[index].showMain ? '▼' : '▶' }} {{ section.label }}
        </button>
        <div
          v-show="sectionStates[index].showMain"
          class="p-3 border border-primary rounded bg-white"
        >
          <component :is="section.component" />
        </div>
      </div>

      <!-- 解説 -->
      <div>
        <button
          class="btn btn-outline-info w-100 text-start"
          @click="sectionStates[index].showEx = !sectionStates[index].showEx"
        >
          {{ sectionStates[index].showEx ? '▼' : '▶' }} {{ section.label }} - Explanation
        </button>
        <div
          v-show="sectionStates[index].showEx"
          class="p-3 border border-info rounded"
          style="background-color: #f0faff;"
        >
          <component :is="section.exComponent" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, defineAsyncComponent } from 'vue';

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'auto' });
});

// セクション定義（ラベル + Vueファイル名の末尾番号）
const rawSections = [
  ['3.0 Introduction', 1],
  ['3.1 Introduction and Transport-Layer Services', 10],
  ['3.1.1 Relationship Between Transport and Network Layers', 11],
  ['3.1.2 Overview of the Transport Layer in the Internet', 12],
  ['3.2 Multiplexing and Demultiplexing', 20],
  ['3.3 Connectionless Transport: UDP', 30],
  ['3.3.1 UDP Segment Structure', 31],
  ['3.3.2 UDP Checksum', 32],
  ['3.4 Principles of Reliable Data Transfer', 40],
  ['3.4.1 Building a Reliable Data Transfer Protocol', 41],
  ['3.4.2 Pipelined Reliable Data Transfer Protocols', 42],
  ['3.4.3 Go-Back-N (GBN)', 43],
  ['3.4.4 Selective Repeat (SR)', 44],
  ['3.5 Connection-Oriented Transport: TCP', 50],
  ['3.5.1 The TCP Connection', 51],
  ['3.5.2 TCP Segment Structure', 52],
  ['3.5.3 Round-Trip Time Estimation and Timeout', 53],
  ['3.5.4 Reliable Data Transfer', 54],
  ['3.5.5 Flow Control', 55],
  ['3.5.6 TCP Connection Management', 56],
  ['3.6 Principles of Congestion Control', 60],
  ['3.6.1 The Causes and the Costs of Congestion', 61],
  ['3.6.2 Approaches to Congestion Control', 62],
  ['3.7 TCP Congestion Control', 70],
  ['3.7.1 Classic TCP Congestion Control', 71],
  ['3.7.2 Network-Assisted Explicit Congestion Notification and Delayed-based Congestion Control', 72],
  ['3.7.3 Fairness', 73],
  ['3.8 Evolution of Transport-Layer Functionality', 80],
  ['3.9 Summary', 90],
];

// 動的インポートとデータ構築
const sections = rawSections.map(([label, num]) => {
  const id = `chapter03_${num}`;
  return {
    id,
    label,
    component: defineAsyncComponent(() => import(`./chapter03/${id}.vue`)),
    exComponent: defineAsyncComponent(() => import(`./chapter03/${id}_ex.vue`)),
  };
});

// セクションごとの表示状態
const sectionStates = ref(
  rawSections.map(() => ({ showMain: false, showEx: false }))
);
// 全て展開
function expandAll() {
  sectionStates.value.forEach(state => {
    state.showMain = true;
    state.showEx = true;
  });
}

// 全て閉じる
function collapseAll() {
  sectionStates.value.forEach(state => {
    state.showMain = false;
    state.showEx = false;
  });
}

</script>
