<template>
  <div class="container py-4">
    <h1 class="mb-4">Klausur</h1>
    
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
const rawSections = 
[
  ['1(a) Medienzugriff – Analyse MAC-Adresse & Broadcast', 11],
  ['1(b) Medienzugriff – Kollisionen bei Ethernet', 12],
  ['2 Kollision', 20],
  ['2(a) Unterschied Switch & Hub', 21],
  ['2(b) Keine Kollisionen bei Switch', 22],
  ['3 Routing Algorithms', 30],
  ['3(a) Dijkstra – Start & Initialisierung', 31],
  ['3(b) Dijkstra – Vollständige Berechnung', 32],
  ['3(c) Dijkstra – Kürzester Weg von u nach z', 33],
  ['3(d) Vergleich Dijkstra vs. Distance-Vector', 34],
  ['3(e) Distance-Vector - Algorithmus', 35],
  ['3(f) Distance-Vector - Vollständige Berechnung', 36],
  ['4(a) IP-Adressen Zuteilung mit CIDR', 41],
  ['5 UDP', 50],
  ['5(a) UDP – Zielport & Ziel-IP beim Senden', 51],
  ['6(a) UDP Prüfsumme – Prüfsummenbereich', 61],
  ['6(b) UDP Prüfsumme – Berechnung mit 16-Bit-Folgen', 62],
  ['7 Überlastkontrolle', 70],
  ['7(a) Überlastkontrolle – P2P vs. Netzwerk-gestützt', 71],
  ['8(a) AIMD – Erklärung des Mechanismus', 81],
  ['9(a) TCP CUBIC – Name, Motivation & Vergleich mit AIMD', 91],
  ['9(b) TCP CUBIC – Wachstumsfunktion & Parametererklärung', 92],
  ['9(c) TCP CUBIC – Vergleich Wachstum & Reaktion mit AIMD', 93],
  ['9(d) TCP CUBIC – Vergleich Wachstumsverlauf mit AIMD', 94],
  ['9(e) TCP CUBIC – Fairnessbewertung mit Jain’s Index', 95],
  ['10　TCP BBR', 100],
  ['10(a) TCP BBR – Unterschied zu CUBIC & Verlustbasierung', 101],
  ['10(b) TCP BBR – RTT-Berechnung: Formel und Komponenten', 102],
  ['10(c) TCP BBR – Verhalten bei aktuellem Durchsatz nahe der Bandbreite', 103],
  ['10(d) TCP BBR – Verhalten bei zu geringem Durchsatz', 104],
  ['10(e) TCP BBR – Die vier Phasen (States) und ihre Ziele', 105],
  ['10(f) TCP BBR – Erklärung der Kennzahlen und Betriebspunkte', 106],
];

// 動的インポートとデータ構築
const sections = rawSections.map(([label, num]) => {
  const id = `chapter15_${num}`;
  return {
    id,
    label,
    component: defineAsyncComponent(() => import(`./chapter15/${id}.vue`)),
    exComponent: defineAsyncComponent(() => import(`./chapter15/${id}_ex.vue`)),
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
