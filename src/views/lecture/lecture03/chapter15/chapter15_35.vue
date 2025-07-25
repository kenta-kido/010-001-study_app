<template>
  <div class="container my-4">
    <h3 class="mb-4">3(e) Distance Vector – Algorithmus und Funktionsweise</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Erklären Sie den Ablauf des Distance-Vector-Algorithmus anhand der abgebildeten Pseudocode-Variante.
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        図に示された擬似コードをもとに、Distance Vector アルゴリズムの処理の流れを説明しなさい。
      </p>
    </div>

    <!-- アルゴリズム画像 -->
    <div class="text-center mt-4">
      <img :src="algorithmImage" alt="Distance Vector Algorithm" class="img-fluid rounded" />
      <p class="text-muted mt-2">Abbildung: Pseudocode des Distance-Vector-Algorithmus</p>
    </div>
    
    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p>
          Beim Distance-Vector-Algorithmus initialisiert jeder Knoten x seine Kosten zu allen Zielen y:
          direkte Nachbarn erhalten den Link-Wert, andere ∞.
        </p>
        <p>
          Dann sendet x seinen aktuellen Distanzvektor an alle Nachbarn. Jeder Knoten wartet anschließend
          auf Änderungen – entweder an den Linkkosten oder durch neue Vektoren von Nachbarn.
        </p>
        <p>
          Nach Erhalt eines Vektors berechnet x für jedes Ziel y die neue Distanz:
          min &lbrace;c(x,v) + Dv(y)&rbrace; über alle Nachbarn v.
        </p>
        <p>
          Falls sich der Vektor von x ändert, wird er erneut an alle Nachbarn gesendet. Der Vorgang läuft fortlaufend.
        </p>
        <p>
          Der Algorithmus endet praktisch erst dann, wenn sich keine Distanzvektoren mehr ändern – das heißt,
          alle Pfadkosten sind stabil. In diesem stabilen Zustand gibt es keine weiteren Aktualisierungen.
        </p>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p>
          Distance Vector アルゴリズムでは、各ノード x が他の全てのノード y への距離を初期化します。
          近隣ノードには実際のリンクコスト、それ以外には無限大（∞）を設定します。
        </p>
        <p>
          初期化後、x は自分の距離ベクトルを全隣接ノードに送信します。
          各ノードはリンクコストの変化または隣接ノードからの新しい距離ベクトルを待機します。
        </p>
        <p>
          新しいベクトルを受信した際には、各宛先 y に対して
          「c(x,v) + Dv(y)」の最小値を計算して自身の D(x)(y) を更新します。
        </p>
        <p>
          ベクトルに変更があった場合のみ、全隣接ノードに再送信します。このプロセスは繰り返し続きます。
        </p>
        <p>
          アルゴリズムは、すべてのノードの距離ベクトルが変化しなくなり、ネットワーク全体で
          距離情報が安定した時点で終了します。これは最短経路が全て確定した状態です。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import algorithmImage from '@/assets/lecture/lecture03/Figure_0304.png'
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
