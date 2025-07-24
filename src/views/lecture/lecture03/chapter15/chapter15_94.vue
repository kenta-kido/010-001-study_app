<template>
  <div class="container my-4">
    <h3 class="mb-4">9(d) Wachstumsverhalten von AIMD und CUBIC</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Beschreiben Sie die Wachstumsfunktionen von AIMD und CUBIC.<br />
        Wie verläuft das Wachstum der Congestion Window (cwnd) in beiden Ansätzen (linear vs. kubisch)?<br />
        Was bedeutet das für die Performance in Netzwerken mit hoher Bandbreite und Latenz? (4P)
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        AIMD と CUBIC の成長関数を比較せよ。<br />
        各方式における輻輳ウィンドウ（cwnd）の増加はどのような形か（線形 vs. 三次関数）？<br />
        それは高帯域・高遅延ネットワークにおいて性能にどのような影響を与えるか？（4点）
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p><strong>AIMD:</strong></p>
        <ul>
          <li>cwnd wächst linear pro RTT (Additive Increase)</li>
          <li>Verlust führt zu Multiplicative Decrease (z.B. Halbierung)</li>
          <li>Effizient bei kleinen bis mittleren Netzen</li>
        </ul>
        <p><strong>CUBIC:</strong></p>
        <ul>
          <li>cwnd wächst gemäß kubischer Funktion: <span>W(t) = C(t−K)³ + W<sub>max</sub></span></li>
          <li>Wachstum unabhängig von RTT → besser in Hochlatenznetzen</li>
          <li>Schnellere Erholung und bessere Auslastung bei großer Bandbreite</li>
        </ul>
        <p><strong>Fazit:</strong> CUBIC skaliert besser in Hochgeschwindigkeitsnetzen mit hoher Latenz als AIMD.</p>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p><strong>AIMD：</strong></p>
        <ul>
          <li>cwnd は RTT ごとに線形に増加（加算的増加）</li>
          <li>損失時に乗算的に減少（例：半分）</li>
          <li>中小規模のネットワークでは適している</li>
        </ul>
        <p><strong>CUBIC：</strong></p>
        <ul>
          <li>cwnd は三次関数に基づいて増加：<span>W(t) = C(t−K)³ + W<sub>max</sub></span></li>
          <li>RTT に依存せず、遅延の大きい環境でも効率よく増加</li>
          <li>高帯域のネットワークでの利用率が高く、回復も早い</li>
        </ul>
        <p><strong>結論：</strong> CUBIC は高帯域・高遅延ネットワークにおいて AIMD よりもスケーラビリティに優れている。</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Keine Logik nötig
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
