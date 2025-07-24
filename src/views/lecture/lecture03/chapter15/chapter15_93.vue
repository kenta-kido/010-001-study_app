<template>
  <div class="container my-4">
    <h3 class="mb-4">9(c) CUBIC vs. AIMD – Wachstumsverhalten & Reaktion auf Überlastung</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Vergleichen Sie das Wachstumsverhalten und die Reaktionsgeschwindigkeit von CUBIC mit AIMD.<br />
        Wie unterscheiden sich die beiden Ansätze im Verhalten bei Netzüberlastung und in der Erholungsphase? (4P)
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        TCP CUBIC と AIMD のウィンドウサイズの増加傾向や反応速度を比較し、<br />
        輻輳時の挙動および回復フェーズにおける違いを述べよ。（4点）
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <ul>
          <li><strong>AIMD:</strong> Fenster wächst linear (langsam) und halbiert sich bei Verlust.</li>
          <li>Reagiert empfindlich auf Verluste, braucht lange zur Erholung.</li>
          <li>Gut für Fairness, aber ineffizient in Hochgeschwindigkeitsnetzen.</li>
          <li>Erholung basiert nur auf Empfangsrate.</li>
        </ul>
        <ul>
          <li><strong>CUBIC:</strong> Wachstum ist nicht linear, sondern kubisch (t³).</li>
          <li>Nach einem Verlust wächst cwnd zunächst langsam (nahe W<sub>max</sub>), dann schnell.</li>
          <li>Erholung ist schneller, da die Zeitkomponente unabhängig von RTT ist.</li>
          <li>Besser für hohe Bandbreiten und lange Latenz geeignet.</li>
        </ul>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <ul>
          <li><strong>AIMD：</strong> 輻輳ウィンドウは線形（遅い）に増加し、損失時に半減する。</li>
          <li>損失に敏感で、回復には時間がかかる。</li>
          <li>公平性は高いが、高帯域ネットワークでは非効率。</li>
          <li>回復速度はRTTに依存。</li>
        </ul>
        <ul>
          <li><strong>CUBIC：</strong> 増加は線形ではなく三次関数的（t³）である。</li>
          <li>損失直後はゆるやかに、W<sub>max</sub>から離れると急速に成長する。</li>
          <li>RTT に依存せず、回復が速い。</li>
          <li>高帯域・高遅延ネットワークに最適化されている。</li>
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
