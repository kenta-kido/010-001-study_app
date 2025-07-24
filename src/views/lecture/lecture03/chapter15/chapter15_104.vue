<template>
  <div class="container my-4">
    <h3 class="mb-4">10(d) TCP BBR – Verhalten bei zu niedrigem Durchsatz</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Was macht BBR, wenn der aktuelle Durchsatz deutlich unter der berechneten Bandbreite liegt?<br />
        Beschreiben Sie die Aktion, die BBR in diesem Fall ausführt. (3P)
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        現在のスループットが推定された帯域幅よりも著しく低いと判断された場合、<br />
        BBR はどのような動作を行うか説明せよ。（3点）
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p>
          Wenn der aktuelle Durchsatz deutlich unter der geschätzten Bottleneck-Bandbreite liegt,
          interpretiert BBR dies als Unterauslastung.
        </p>
        <p>
          In diesem Fall erhöht BBR aggressiv die Congestion Window (cwnd) und die Pacing Rate,
          um die verfügbare Bandbreite besser zu nutzen.
        </p>
        <p>
          Ziel ist es, durch schnelles Hochskalieren die Leitungsauslastung zu verbessern und
          Engpässe (z.B. zu niedrige Sendeleistung) zu kompensieren.
        </p>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p>
          現在のスループットが推定されたボトルネック帯域幅を大きく下回っているとき、<br />
          BBR はそれを「帯域未利用（低利用）」と判断します。
        </p>
        <p>
          この場合、BBR は輻輳ウィンドウ（cwnd）と送信レート（Pacing Rate）を積極的に増加させ、<br />
          利用可能な帯域を最大限に活用しようとします。
        </p>
        <p>
          目的は、送信不足による非効率を補い、リンクの使用率を向上させることです。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Keine Logik erforderlich
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
