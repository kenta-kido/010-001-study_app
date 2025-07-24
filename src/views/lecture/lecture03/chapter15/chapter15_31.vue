<template>
  <div class="container my-4">
    <h3 class="mb-4">3(a) Dijkstra – Start und Initialisierung</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Wie startet der Algorithmus und wie wird das Basiskantengewicht berechnet?
        <br />
        (Hinweis: Der Begriff „Basiskantengewicht“ war vermutlich nicht korrekt formuliert.)
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        Dijkstraアルゴリズムはどのように開始され、初期の重み（基準エッジの重み？）はどのように決定されるか？
        <br />
        （※「Basiskantengewicht」は誤った表現だった可能性あり）
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p>
          Der Dijkstra-Algorithmus startet bei einem gegebenen Startknoten (z.B. A) und setzt dessen Distanz auf 0.
          Alle anderen Knoten erhalten zunächst den Wert ∞ (unendlich) als vorläufige Distanz.
        </p>
        <p>
          Dann prüft man alle direkten Nachbarn des Startknotens. Die Kosten (Kanten­gewichte) zu diesen Nachbarn werden
          als vorläufige Distanzen gesetzt. Diese werden aus den in der Tabelle gegebenen Werten übernommen – es ist
          keine „Berechnung“ im Sinne von Formeln notwendig.
        </p>
        <p>
          Anschließend wird iterativ immer der Knoten mit der aktuell kleinsten bekannten Distanz gewählt
          und seine Nachbarn aktualisiert („Relaxierung“).
        </p>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p>
          Dijkstra アルゴリズムは、出発点となるノード（例：A）から開始され、そのノードの距離を 0 に設定します。
          他のすべてのノードの初期距離は ∞（無限大）に設定されます。
        </p>
        <p>
          次に、開始ノードに隣接するノードすべてを確認し、直接接続されているリンクのコストを
          それぞれの距離として初期設定します。これが「初期エッジ重み」の意味であり、
          単に与えられたコストを反映するだけで特別な計算は不要です。
        </p>
        <p>
          その後は、未確定ノードの中から最小距離のノードを選び、その隣接ノードの距離を更新する
          （リラクゼーション）という処理を繰り返します。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// No logic required
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
