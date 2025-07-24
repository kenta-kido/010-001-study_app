<template>
  <div class="container my-4">
    <h3 class="mb-4">10(b) TCP BBR – RTT-Berechnung: RTT<sub>t</sub> = RT<sub>prop</sub> + η<sub>t</sub></h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Erklären Sie anhand der folgenden Formel, wie BBR die aktuelle Round-Trip Time (RTT) berechnet:<br />
        <code>RTT<sub>t</sub> = RT<sub>prop</sub> + η<sub>t</sub></code><br />
        Beschreiben Sie die einzelnen Komponenten der Formel. (4P)
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        次の式に基づき、BBR が RTT（往復遅延時間）をどのように算出するかを説明せよ：<br />
        <code>RTT<sub>t</sub> = RT<sub>prop</sub> + η<sub>t</sub></code><br />
        この式の各成分（RT<sub>prop</sub> と η<sub>t</sub>）の意味を説明しなさい。（4点）
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p>
          Die Formel <code>RTT<sub>t</sub> = RT<sub>prop</sub> + η<sub>t</sub></code> beschreibt die aktuelle RTT-Schätzung durch BBR:
        </p>
        <ul>
          <li><strong>RT<sub>prop</sub>:</strong> die minimale gemessene Round-Trip Propagation Time. Sie stellt die kleinstmögliche RTT dar – ohne Warteschlangenverzögerung.</li>
          <li><strong>η<sub>t</sub>:</strong> die aktuell geschätzte Warteschlangenverzögerung (queueing delay), also zusätzliche Zeit durch Staus im Netz.</li>
        </ul>
        <p>
          BBR unterscheidet klar zwischen physikalischer Latenz (<code>RT<sub>prop</sub></code>) und dynamischer Last (<code>η<sub>t</sub></code>), um die Netzwerkbedingungen präzise zu modellieren.
        </p>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p>
          式 <code>RTT<sub>t</sub> = RT<sub>prop</sub> + η<sub>t</sub></code> は、BBR における RTT（往復遅延時間）の推定方法を示します：
        </p>
        <ul>
          <li><strong>RT<sub>prop</sub>：</strong> 最小の往復伝搬遅延。これはネットワークに混雑がないときの最小RTTを示し、物理的距離に基づきます。</li>
          <li><strong>η<sub>t</sub>：</strong> 現在の待ち行列による遅延（キューイングディレイ）であり、輻輳により発生する追加時間です。</li>
        </ul>
        <p>
          BBR は伝搬遅延と混雑による遅延を分離して評価することで、ネットワーク状態をより正確に推定します。
        </p>
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
