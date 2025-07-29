<template>
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
          <li>Jeder Router kennt <span style="color: red;">die vollständige Netzwerktopologie und alle Link-Kosten.</span></li>
          <li>Der Algorithmus <span style="color: red;">startet am Quellknoten</span> und baut schrittweise den kürzesten Pfadbaum auf.</li>
          <li>In jedem Schritt wird der Knoten mit der derzeit geringsten bekannten Distanz gewählt (greedy-Verfahren).</li>
          <li>Alle Distanzen werden zentral im Router selbst berechnet (globales Wissen).</li>
          <li>Erfordert Konsistenz zwischen allen Routern – z.B. durch regelmäßige Link-State-Updates.</li>
        </ul>
        <p><strong>Distance-Vector:</strong></p>
        <ul>
          <li>Jeder Router kennt <span style="color: red;">nur direkte Nachbarn und deren gemeldete Distanzen.</span></li>
          <li>In regelmäßigen Intervallen <span style="color: red;">tauschen Nachbarn ihre Distanzvektoren aus</span>.</li>
          <li>Jeder Router berechnet D(y) = min(c(x, v) + Dv(y)) für alle Nachbarn v (Bellman-Ford-Prinzip).</li>
          <li>Konvergenz erfolgt schrittweise – bei Änderungen kann es lange dauern (z.B. Count-to-Infinity).</li>
        </ul>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p><strong>Dijkstra（リンク状態型）:</strong></p>
        <ul>
          <li><span style="color: red;">各ルーターはネットワーク全体の構成（トポロジー）と全リンクのコストを把握</span>しています。</li>
          <li>アルゴリズムは<span style="color: red;">出発ノード</span>から始まり、最短距離のノードを順に選んでいく貪欲法で動作します。</li>
          <li>各ステップで、既知ノードに隣接するノードの距離を更新し、最も短いノードを確定させます。</li>
          <li>計算は各ルーターが独立して実行し、自身の転送テーブルを作ります。</li>
          <li>トポロジーが変化した場合は、全ルーターにLink-State情報を再配布する必要があります。</li>
        </ul>
        <p><strong>Distance Vector（距離ベクトル型）:</strong></p>
        <ul>
          <li><span style="color: red;">各ルーターは自分の隣接ノードからのみ情報を受け取り、ネットワーク全体の構造は知りません</span>。</li>
          <li>定期的に<span style="color: red;">隣接ノードと経路情報（距離ベクトル）を交換</span>します。</li>
          <li>各ノードは Bellman-Ford の式：D(y) = min(c(x,v) + Dv(y)) を使って距離を計算します。</li>
          <li>計算はネットワーク全体に分散して行われ、収束には時間がかかることがあります。</li>
        </ul>
      </div>
    </div>

<!-- 解説 -->
<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Beim Link-State-Routing sendet jeder Router Informationen über seine direkten Verbindungen an alle anderen Router im Netz.
      So entsteht eine vollständige Karte („Topologie“) der Netzstruktur.
      Jeder Router kennt also nicht nur seine Nachbarn, sondern das gesamte Netzwerk.
      Auch die Kosten (z.B. Verzögerung, Bandbreite) aller Links sind bekannt.
      Diese globale Sicht ermöglicht die Anwendung des Dijkstra-Algorithmus.
      Jeder Router nutzt dieselbe Information, um unabhängig die besten Pfade zu berechnen.
    </p>
  </div>
  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      Link-State方式では、すべてのルーターが自分の隣接ノードとの接続情報をネットワーク全体に通知します。
      それにより、各ルーターがネットワーク全体の構造（トポロジー）を把握できます。
      さらに、すべてのリンクコスト（遅延や帯域など）も各ルーターが把握しています。
      この「全体の見取り図」があることで、Dijkstraアルゴリズムが使えるのです。
      どのルーターも同じ情報を使って、最短経路を自分で計算します。
    </p>
  </div>
</div>

<!-- 解説 -->
<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Jeder Router besitzt die vollständige Link-State-Datenbank und berechnet daraus lokal die besten Wege.
      Dabei kommt der Dijkstra-Algorithmus zum Einsatz.
      Jeder Router führt diese Berechnung unabhängig aus – ohne Absprache mit anderen.
      Das Ergebnis ist eine Tabelle, die für jedes Ziel angibt, über welchen Nachbarn gesendet werden soll („Forwarding Table“).
      So kann jeder Router eigenständig Pakete weiterleiten.
    </p>
  </div>
  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      すべてのルーターは、同じネットワーク情報（Link-Stateデータベース）をもとに、自分で経路を計算します。
      そのときにDijkstraアルゴリズムを使って、全宛先への最短経路を導き出します。
      この計算は他のルーターとは連携せず、自律的に行われます。
      そして「この宛先にはこの隣接ノードを使う」という情報をまとめた表（転送表）を作ります。
      これにより、各ルーターは独立して正しい転送を行うことができます。
    </p>
  </div>
</div>

<!-- 解説 -->
<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Wenn sich ein Link ändert (z.B. durch Ausfall oder neue Verbindung), informiert der betroffene Router sofort alle anderen.
      Dazu sendet er eine Link-State-Advertisement (LSA) aus.
      Alle Router aktualisieren daraufhin ihre Datenbank und starten die Pfadberechnung neu.
      So bleibt das Routing trotz Änderungen korrekt.
      Diese sofortige Weitergabe von Änderungen macht Link-State sehr reaktionsschnell – aber auch komplex.
    </p>
  </div>
  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      ネットワーク内のリンクに変化（故障や新規接続など）があった場合、そのルーターはLink-State Advertisement（LSA）を全体に通知します。
      通知を受け取った他のルーターは、データベースを更新し、再び最短経路を計算し直します。
      これにより、ネットワークの変化に素早く対応できます。
      ただし、全体への通知や再計算が必要になるため、処理は複雑になります。
    </p>
  </div>
</div>

<!-- 解説 -->
<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Im Distance-Vector-Routing kennt ein Router nur seine direkten Nachbarn und deren Entfernungen zu Zielen.
      Es findet kein Austausch der gesamten Netzstruktur statt.
      Jeder Router vertraut darauf, dass sein Nachbar „weiß“, wie man zu einem Ziel gelangt.
      So entsteht eine verteilte, schrittweise Annäherung an den besten Pfad.
      Das Verfahren ist einfach, benötigt aber Zeit, um sich zu stabilisieren.
    </p>
  </div>
  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      Distance Vector 方式では、ルーターは自分の隣接ノードとの接続状況しか知りません。
      ネットワーク全体の構成（トポロジー）を知ることはありません。
      各ルーターは「隣のノードが目的地に行ける」と信じて、経路を決定します。
      このように、経路情報はネットワーク中を段階的に伝わっていきます。
      シンプルですが、収束には時間がかかることがあります。
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
