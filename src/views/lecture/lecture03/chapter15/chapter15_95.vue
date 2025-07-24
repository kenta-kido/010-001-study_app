<template>
  <div class="container my-4">
    <h3 class="mb-4">9(e) Fairness – Jain's Index und Bewertung von TCP CUBIC</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Erklären Sie den Jain's Fairness Index.<br />
        Beurteilen Sie die Fairness von CUBIC im Vergleich zu anderen Algorithmen.<br />
        Wie gut teilt CUBIC die Bandbreite mit anderen Flows?<br />
        Ist CUBIC TCP-fair gegenüber Algorithmen wie Reno? (4P)
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        Jain の公平性指数（Jain's Fairness Index）を説明せよ。<br />
        他のアルゴリズムと比較した場合、CUBIC の公平性はどの程度か？<br />
        CUBIC は他のフローと帯域をどれくらい公平に共有できるか？<br />
        Reno などのアルゴリズムに対して TCP-fair か？（4点）
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p><strong>Jain's Fairness Index:</strong></p>
        <p>
          Ein mathemisches Maß für die Gleichverteilung von Ressourcen:<br />
          <code>J(x₁, x₂, ..., xₙ) = (Σxᵢ)² / (n × Σxᵢ²)</code><br />
          Werte zwischen 0 (ungerecht) und 1 (perfekt fair).
        </p>
        <p><strong>Bewertung von CUBIC:</strong></p>
        <ul>
          <li>CUBIC ist im Allgemeinen TCP-fair gegenüber Reno, aber leicht aggressiver.</li>
          <li>In gemischten Netzen kann CUBIC mehr Bandbreite beanspruchen.</li>
          <li>Fairness ist akzeptabel, aber nicht perfekt in allen Fällen.</li>
        </ul>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p><strong>Jain の公平性指数:</strong></p>
        <p>
          資源の分配の公平性を定量的に評価する指標：<br />
          <code>J(x₁, x₂, ..., xₙ) = (Σxᵢ)² / (n × Σxᵢ²)</code><br />
          値の範囲は 0（不公平）〜1（完全に公平）
        </p>
        <p><strong>CUBIC の評価:</strong></p>
        <ul>
          <li>CUBIC は一般に Reno に対して TCP-fair とされているが、やや積極的。</li>
          <li>混在したネットワークでは、CUBIC の方が多くの帯域を使用することがある。</li>
          <li>ほとんどの状況で公平性は問題ないが、完全ではない。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// Kein Script nötig
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
