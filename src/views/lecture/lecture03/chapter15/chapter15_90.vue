<template>
  <div class="container my-4">
    <h3 class="mb-4">9(a) TCP CUBIC – Name, Motivation & AIMD-Vergleich</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Wofür steht der Name <strong>CUBIC</strong> und was ist die Motivation hinter diesem Algorithmus?  
        Gehen Sie kurz auf die Verbesserung gegenüber früheren Ansätzen wie AIMD ein. (2P)
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        <strong>CUBIC</strong> という名前の意味と、そのアルゴリズムの開発背景（目的）を説明せよ。  
        また、従来の AIMD 方式との改善点について簡潔に述べよ。（2点）
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p>
          Der Name <strong>CUBIC</strong> steht für das kubische Wachstum der Congestion Window (cwnd).
        </p>
        <p>
          Ziel des Algorithmus ist es, die Leistung in Netzwerken mit hoher Bandbreite und Latenz zu verbessern,
          in denen klassische Verfahren wie AIMD (linearer Anstieg) ineffizient sind.
        </p>
        <p>
          Im Gegensatz zu AIMD nutzt CUBIC eine Zeit-basierte Wachstumsfunktion, die aggressiver wachsen kann,
          aber gleichzeitig Stabilität nahe dem vorherigen Maximum (W<sub>max</sub>) erreicht.
        </p>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p>
          <strong>CUBIC</strong> は、「三次関数（キュービック）」の成長を意味しており、輻輳ウィンドウ（cwnd）の増加が t³ に基づいています。
        </p>
        <p>
          このアルゴリズムの目的は、高帯域かつ高遅延のネットワークにおいて、従来の AIMD（線形増加）よりも
          効率的にネットワークリソースを活用できるようにすることです。
        </p>
        <p>
          CUBIC は、時間に基づくウィンドウ成長モデルを使用し、AIMD よりも積極的に増加させつつも、
          過去の最大値付近では成長を抑制して安定性を保つ設計になっています。
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
