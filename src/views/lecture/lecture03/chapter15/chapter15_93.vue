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
          <li><span style="color: red;">損失に敏感</span>で、<span style="color: red;">回復には時間</span>がかかる。</li>
          <li><span style="color: red;">公平性は高い</span>が、<span style="color: red;">高帯域ネットワークでは非効率</span>。</li>
          <li>回復速度はRTTに依存。</li>
        </ul>
        <ul>
          <li><strong>CUBIC：</strong> 増加は線形ではなく三次関数的（t³）である。</li>
          <li><span style="color: red;">損失直後はゆるやかに、W<sub>max</sub>から離れると急速に成長</span>する。</li>
          <li>RTT に依存せず、回復が速い。</li>
          <li><span style="color: red;">高帯域・高遅延ネットワークに最適化</span>されている。</li>
        </ul>
      </div>
    </div>

    <!-- 解説：Deutsch & 日本語 -->
<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Der Begriff <strong>Reaktionsgeschwindigkeit</strong> beschreibt, wie schnell ein Protokoll auf Netzwerkereignisse wie Paketverluste oder Überlastungen reagiert. <br />
      Bei <strong>AIMD</strong> erfolgt die Reaktion auf Verluste sofort, indem das Fenster halbiert wird. Das anschließende Wachstum ist jedoch langsam (linear), was die Erholung verzögert.<br />
      <strong>CUBIC</strong> hingegen nutzt eine kubische Funktion der Zeit, wodurch die Reaktion auf Verluste zunächst vorsichtig, dann aber deutlich schneller erfolgt – unabhängig von der RTT. Dies führt zu einer schnelleren Rückkehr zur maximalen Fenstergröße nach einer Überlastung.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      <strong>Reaktionsgeschwindigkeit（反応速度）</strong>とは、ネットワークの混雑やパケット損失などのイベントに対して、プロトコルがどれだけ速く反応・適応するかを示す概念です。<br />
      <strong>AIMD</strong>は、損失が発生すると即座にウィンドウを半分に減らしますが、その後の回復は線形的で遅いため、復旧には時間がかかります。<br />
      一方で、<strong>CUBIC</strong>は時間に基づいた三次関数的な成長を行い、最初はゆっくりですが、時間が経つと急速にウィンドウを拡大します。この回復はRTTに依存しないため、より迅速に最大ウィンドウサイズへと戻ることができます。
    </p>
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
