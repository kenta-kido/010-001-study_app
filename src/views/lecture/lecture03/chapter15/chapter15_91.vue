<template>
  <div class="container my-4">
    <h3 class="mb-4">9(a) TCP CUBIC – Name, Motivation & AIMD-Vergleich</h3>

    <!-- 🔹 問題1 -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe (1):</strong><br />
        Wofür steht der Name <strong>CUBIC</strong> und was war die Motivation zur Entwicklung dieses Algorithmus, insbesondere im Vergleich zu TCP BIC? (1P)
      </p>
      <hr />
      <p><strong>問題 (1):</strong><br />
        <strong>CUBIC</strong> という名前の意味と、そのアルゴリズムの開発背景（目的）を説明せよ。  
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p>
          Der Name <strong>CUBIC</strong> leitet sich von der kubischen (t³-)Wachstumsfunktion ab, die zur Steuerung der Congestion Window (cwnd) verwendet wird.
        </p>
        <p>
          Der Algorithmus wurde als Nachfolger von <strong>TCP BIC</strong> (Binary Increase Congestion Control) entwickelt.
          BIC war zwar stabil in Netzwerken mit hoher Bandbreite und Latenz (LFNs), jedoch schwierig zu implementieren und bei geringer Bandbreite oder niedriger RTT zu aggressiv.
        </p>
        <p>
          CUBIC vereinfachte das Wachstumsverhalten durch eine kubische Zeitfunktion, was eine bessere Fairness und Stabilität bei gleichzeitig hoher Effizienz ermöglichte.
          Es wurde deshalb zum Standard in Linux, Windows und macOS.
        </p>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p>
          <strong>CUBIC</strong> は、輻輳ウィンドウ（cwnd）の制御に t³ に基づく三次関数的な成長関数を用いることから名付けられました。
        </p>
        <p>
          本アルゴリズムは <strong>TCP BIC</strong>（Binary Increase Congestion Control）の後継として開発されました。
          BIC は高帯域・高遅延ネットワーク（Long Fat Networks）で高い安定性を示した一方、状態遷移が複雑で実装が難しく、
          さらに低RTTや低帯域ではウィンドウ成長が過剰に攻撃的になるという課題がありました。
        </p>
        <p>
          CUBIC はこれを改善し、時間に基づいたシンプルな三次成長関数で効率的かつ安定したウィンドウ制御を実現しました。
          その結果、Linux、Windows、macOS の TCP 標準として広く採用されています。
        </p>
      </div>
    </div>

    <!-- 🔹 問題2 -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Aufgabe (2):</strong><br />
    Was verbessert CUBIC im Vergleich zum klassischen AIMD-Verfahren? (1P)
  </p>
  <hr />
  <p><strong>問題 (2):</strong><br />
    CUBIC が従来の AIMD 方式と比較してどのような改善をもたらすかを述べよ。（1点）
  </p>
</div>

<!-- 解答：ドイツ語 & 日本語 -->
<div class="row">
  <div class="col-md-6">
    <h5>Antwort (Deutsch)</h5>
    <p>
      Im Vergleich zum klassischen AIMD-Algorithmus, der eine lineare Erhöhung des cwnd verwendet,
      bietet CUBIC eine kubische Wachstumsfunktion, die eine schnellere Bandbreitenausnutzung erlaubt – besonders in Netzwerken mit hoher Latenz.
    </p>
    <p>
      Gleichzeitig verlangsamt sich das Wachstum in der Nähe des vorherigen Maximums (W<sub>max</sub>), 
      um Stabilität zu gewährleisten und abrupte Schwankungen zu vermeiden.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解答（日本語）</h5>
    <p>
      従来の AIMD アルゴリズムは、ウィンドウサイズを線形に増加させる方式であるのに対し、
      CUBIC は三次関数に基づいた成長モデルを用いることで、特に高遅延ネットワークにおいて
      より迅速に帯域を活用することが可能です。
    </p>
    <p>
      また、過去の最大ウィンドウサイズ付近では成長を緩やかにし、安定性を保つ設計となっています。
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
