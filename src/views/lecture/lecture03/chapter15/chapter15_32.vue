<template>
  <div class="container my-4">
    <h3 class="mb-4">3(b) Dijkstra – Vollständige Berechnung</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Berechnen Sie den vollständigen Dijkstra-Algorithmus basierend auf dem gegebenen Netzwerkgraphen (Abbildung 5.3).
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        与えられたネットワークグラフ（図 5.3）に基づいて、Dijkstra アルゴリズムの完全な計算を行いなさい。
      </p>
    </div>

    <!-- 図：ネットワークグラフ -->
    <div class="text-center mb-4">
      <img
        :src="graphImage"
        alt="Abbildung 5.3 – Netzwerkgraph"
        class="img-fluid rounded border"
      />
      <p class="text-muted mt-2">図 5.3 – コンピュータネットワークの抽象グラフ</p>
    </div>

    <!-- 解答テーブル -->
    <div class="text-center mb-4">
      <img
        :src="tableImage"
        alt="Tabelle 5.1 – Dijkstra-Berechnung"
        class="img-fluid rounded border"
      />
      <p class="text-muted mt-2">表 5.1 – Dijkstra アルゴリズムの実行過程</p>
    </div>

    <!-- 解説 -->
    <div class="row">
      <div class="col-md-6">
        <h5>Erklärung (Deutsch)</h5>
        <p>
          Die Tabelle zeigt, wie der Algorithmus Schritt für Schritt die kürzesten Pfade von Knoten u zu allen anderen Knoten bestimmt.
          In jedem Schritt wird der Knoten mit der kleinsten bekannten Distanz zu u in die Menge N′ aufgenommen.
        </p>
        <p>
          Anschließend werden die Distanzen aller benachbarten Knoten aktualisiert, sofern ein kürzerer Pfad über den neuen Knoten gefunden wurde.
          Die Spalten zeigen die aktuellen minimalen Distanzen D und die zugehörigen Vorgänger p.
        </p>
      </div>

      <div class="col-md-6">
        <h5>解説（日本語）</h5>
        <p>
          この表は、ノード u を出発点としたときの他のすべてのノードへの最短パスを求める Dijkstra アルゴリズムの手順を示しています。
          各ステップでは、現時点で最小距離が確定しているノードを N′ に追加します。
        </p>
        <p>
          その後、新たに追加されたノードの隣接ノードに対し、「現在の距離」と「経由時の距離」を比較し、必要に応じて更新します。
          表の各列には、目的ノードまでの最短距離 D と、そのノードに至るための前のノード p が表示されています。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 画像ファイルのインポート
import graphImage from '@/assets/lecture/lecture03/Figure_0301.png'
import tableImage from '@/assets/lecture/lecture03/Figure_0302.png'
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
