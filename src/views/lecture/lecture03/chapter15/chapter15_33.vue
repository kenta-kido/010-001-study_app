<template>
  <div class="container my-4">
    <h3 class="mb-4">3(c) Kürzester Pfad von u bis z</h3>

    <!-- 問題文 -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Was ist der minimale Weg von u bis z und welche Kosten hat er?
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        u から z までの最短経路は何か？その合計コストはいくらか？
      </p>
    </div>

    <!-- 解答 -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p>
          Der minimale Weg von <strong>u</strong> nach <strong>z</strong> verläuft über die Knoten:
          <br />
          <strong>u → x → y → z</strong>
        </p>
        <p>
          Die jeweiligen Kosten der Kanten sind:
          <br />
          u → x: 1<br />
          x → y: 1<br />
          y → z: 2
        </p>
        <p>
          Die Gesamtkosten betragen somit:
          <strong>1 + 1 + 2 = 4</strong>
        </p>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p>
          <strong>u</strong> から <strong>z</strong> への最短経路は次の通りです：
          <br />
          <strong>u → x → y → z</strong>
        </p>
        <p>
          各リンクのコストは以下の通りです：
          <br />
          u → x：1<br />
          x → y：1<br />
          y → z：2
        </p>
        <p>
          よって、合計コストは：
          <strong>1 + 1 + 2 = 4</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Keine Logik notwendig
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
