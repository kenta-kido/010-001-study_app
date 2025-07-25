<template>
  <div class="container my-4">
    <h3 class="mb-4">3(a) Dijkstra – Start und Initialisierung</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Wie startet der Algorithmus und wie wird das Basiskantengewicht berechnet?<br />
        (Hinweis: Der Begriff „Basiskantengewicht“ war vermutlich nicht korrekt formuliert.)
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        Dijkstraアルゴリズムはどのように開始され、初期の重み（基準エッジの重み？）はどのように決定されるか？<br />
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
          als vorläufige Distanzen gesetzt. Diese stammen direkt aus der gegebenen Topologie – es ist keine spezielle Berechnung notwendig.
        </p>
        <p>
          Danach wird iterativ der Knoten mit der kleinsten bekannten Distanz ausgewählt
          und alle seine Nachbarn werden mithilfe der Formel<br />
          <code>D(v) = min(D(v), D(w) + c(w,v))</code><br />
          aktualisiert („Relaxierung“).
        </p>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p>
          Dijkstra アルゴリズムは、出発ノード（例：A）から開始し、そのノードの距離を 0 に設定します。
          他のすべてのノードの距離は初期状態として無限大（∞）とされます。
        </p>
        <p>
          次に、開始ノードに直接接続された隣接ノードを確認し、そのリンクのコストを初期距離として設定します。
          この時点でのコストは既知のもので、計算というよりも与えられた値の代入です。
        </p>
        <p>
          その後、未確定ノードの中から最小距離のノードを選び、そのノードの隣接ノードに対して
          <br />
          <code>D(v) = min(D(v), D(w) + c(w,v))</code><br />
          を用いて距離を更新します（これを「緩和処理」またはリラクゼーションと呼びます）。
        </p>
      </div>
    </div>

    <!-- 図の挿入 -->
    <div class="text-center my-4">
      <img
        src="@/assets/lecture/lecture03/Figure_0303.png"
        alt="Dijkstra Beispielgraph"
        class="img-fluid rounded border"
      />
      <p class="text-muted mt-2">図 3.3 — Dijkstraアルゴリズムの初期ステップ</p>
    </div>

    <!-- 解説 -->
    <div class="row mt-4">
      <div class="col-md-6">
        <h5>Erklärung (Deutsch)</h5>
        <p>
          In Zeile 2–6 wird die Initialisierung vorgenommen: Nur der Startknoten ist im Set <code>N′</code>, alle anderen
          bekommen initiale Distanzwerte. In der ersten Runde werden nur direkte Nachbarn betrachtet. Die sogenannten „Kantengewichte“
          sind hier einfach die gegebenen Verbindungskosten.
        </p>
      </div>
      <div class="col-md-6">
        <h5>解説（日本語）</h5>
        <p>
          アルゴリズムの2〜6行目では初期化を行い、スタートノードのみが探索済み集合に追加されます。
          初期コストは、直接接続されているノードとのリンクコストに基づいて設定されます。
          これが「初期エッジ重み」の意味で、特に式で導くのではなく、図から与えられる値です。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
