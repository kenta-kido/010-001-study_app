<template>
  <div class="container my-4">
    <h3 class="mb-4">3(f) Distance Vector – Beispielhafte Ausführung</h3>

    <!-- 問題文 -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Analysieren Sie die Distance-Vector-Berechnung auf Basis des gegebenen Netzwerkgraphen und der DV-Tabellen.
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        与えられたネットワークとDistance Vectorのテーブルに基づき、各ノードの経路計算がどのように進むかを分析しなさい。
      </p>
    </div>

    <!-- 図（問題） -->
    <div class="text-center mt-4">
      <img :src="figureProblem" alt="Network Topology for Distance Vector" class="img-fluid rounded" />
      <p class="text-muted mt-2">Abbildung: Netzwerkgraph mit drei Knoten</p>
    </div>

    <!-- 図（解答） -->
    <div class="text-center mt-4">
      <img :src="figureAnswer" alt="Distance Vector Table Progression" class="img-fluid rounded" />
      <p class="text-muted mt-2">Abbildung: Distance-Vector-Algorithmus in Aktion</p>
    </div>

    <!-- 解説 -->
    <div class="row mt-4">
      <div class="col-md-6">
        <h5>Erklärung (Deutsch)</h5>
        <p>
          Jeder Knoten initialisiert seine Tabelle: direkte Nachbarn mit bekannten Kosten, alle anderen mit ∞.
          Beispielsweise kennt x die Kosten zu y (2) und z (7), aber nicht die Kosten von y nach z.
        </p>
        <p>
          In der ersten Austauschphase senden sich die Knoten ihre Distanzvektoren zu. y sendet z.B. seine Werte an x,
          woraufhin x bemerkt, dass es z über y mit Kosten 2+1=3 erreichen kann – besser als direkt (7).
        </p>
        <p>
          In weiteren Runden werden Tabellen aktualisiert, bis keine Änderungen mehr auftreten. So konvergiert das System
          zu den kürzesten Pfaden.
        </p>
      </div>

      <div class="col-md-6">
        <h5>解説（日本語）</h5>
        <p>
          各ノードは初期状態で、隣接ノードへのコストのみを知っています（それ以外は∞）。たとえばxはyへ2、zへ7と設定します。
        </p>
        <p>
          最初の交換フェーズでは、各ノードが距離ベクトルを隣接ノードに送信します。たとえばyがxにベクトルを送ることで、
          xはzへ直接7ではなく、yを経由して2+1=3で到達できると学習し、テーブルを更新します。
        </p>
        <p>
          このように、情報交換とテーブル更新が繰り返され、最終的にすべてのノードが最短経路を学習して収束します。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import figureProblem from '@/assets/lecture/lecture03/Figure_0305.png'
import figureAnswer from '@/assets/lecture/lecture03/Figure_0306.png'
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
