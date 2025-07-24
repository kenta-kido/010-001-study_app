v\<template>
  <div class="container my-4">
    <h3 class="mb-4">3(d) Vergleich: Dijkstra vs. Distance-Vector</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Vergleichen Sie den Dijkstra-Algorithmus mit dem Distance-Vector-Routing-Algorithmus hinsichtlich der Art der Berechnung der Distanzen.
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        Dijkstra アルゴリズムと Distance-Vector ルーティング アルゴリズムの距離計算方法の違いを比較せよ。
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p><strong>Dijkstra (Link-State):</strong></p>
        <ul>
          <li>Jeder Router hat vollständige Informationen über die Topologie.</li>
          <li>Alle Link-Kosten sind bekannt (z.B. durch OSPF gesammelt).</li>
          <li>Router berechnen den kürzesten Pfad selbstständig mit globaler Sicht.</li>
        </ul>
        <p><strong>Distance-Vector:</strong></p>
        <ul>
          <li>Router kennen nur ihre direkten Nachbarn.</li>
          <li>Jeder Router teilt seine Distanztabelle regelmäßig mit Nachbarn.</li>
          <li>Berechnung erfolgt iterativ und verteilt (z.B. Bellman-Ford).</li>
        </ul>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p><strong>Dijkstra（リンク状態型）:</strong></p>
        <ul>
          <li>各ルーターはネットワーク全体のトポロジーを知っている。</li>
          <li>すべてのリンクコストが既知（例：OSPF などで収集）。</li>
          <li>各ルーターがグローバルな情報をもとに最短経路を自律的に計算する。</li>
        </ul>
        <p><strong>Distance Vector（距離ベクトル型）:</strong></p>
        <ul>
          <li>ルーターは自分の隣接ノードのみを認識している。</li>
          <li>各ルーターは定期的に自分の経路表を隣接ノードに送る。</li>
          <li>計算は分散的・逐次的に行われる（例：ベルマンフォード法）。</li>
        </ul>
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
