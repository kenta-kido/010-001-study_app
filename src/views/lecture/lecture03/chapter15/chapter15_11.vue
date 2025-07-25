<template>
  <div class="container my-4">
    <h3 class="mb-4">1(a) Medienzugriff – Analyse MAC-Adresse & Broadcast</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Ein LAN mit Rechnern A, B und C sei gegeben. A sendet viele tausend Frames an die MAC-Adresse von B (mit eingeschlossenen IP-Paketen). Analysiert die Netzwerkkarte von C diese Frames? Wenn ja, werden sie an die Netzwerkschicht von C weitergegeben?<br />
        Was ändert sich, wenn A die Frames an die MAC Broadcastadresse sendet?
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        A、B、C のコンピュータが存在する LAN を考える。A が B の MAC アドレス宛に何千ものフレーム（IPパケットを含む）を送信した場合、C のネットワークカードはこれらのフレームを解析するか？ もし解析するなら、それらは C のネットワーク層に渡されるのか？<br />
        A がフレームを MAC ブロードキャストアドレス宛に送信した場合は何が変わるか？
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p>
          Wenn A Frames an die MAC-Adresse von B sendet, prüft die Netzwerkkarte von C
          zunächst die Zieladresse in jedem Frame. Da diese nicht der MAC-Adresse von C entspricht,
          verwirft die Netzwerkkarte diese Frames. Sie werden also nicht an die Netzwerkschicht von C
          weitergegeben.
        </p>
        <p>
          Wenn A hingegen die Frames an die MAC-Broadcast-Adresse (FF:FF:FF:FF:FF:FF) sendet,
          werden alle Netzwerkkarten im LAN diese Frames akzeptieren, einschließlich der Netzwerkkarte
          von C. Diese leitet die Frames dann an die Netzwerkschicht weiter.
        </p>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p>
          A が B の MAC アドレス宛にフレームを送信した場合、C のネットワークカードは各フレームの宛先アドレスを確認します。
          宛先が C の MAC アドレスと一致しないため、フレームは破棄され、C のネットワーク層には渡されません。
        </p>
        <p>
          一方、A がフレームを MAC ブロードキャストアドレス（FF:FF:FF:FF:FF:FF）宛に送信した場合、
          LAN 上のすべてのネットワークカードがそのフレームを受信し、C のネットワークカードもそれをネットワーク層に渡します。
        </p>
      </div>
    </div>
    <!-- 解説：Deutsch & 日本語 -->
<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Jede Netzwerkkarte überprüft die Ziel-MAC-Adresse eines eingehenden Frames. Nur wenn diese Adresse mit der eigenen übereinstimmt
      oder ein Broadcast ist, wird der Frame akzeptiert. In einem LAN mit Switches wird der Frame gezielt nur an den Zielport weitergeleitet.
      Frames für andere Hosts werden daher von der Netzwerkkarte ignoriert. Broadcasts hingegen werden an alle Ports gesendet, weil sie
      an alle Teilnehmer im Netzwerk gerichtet sind. Solche Frames verarbeitet die Netzwerkkarte und reicht sie an höhere Protokolle weiter.
      Dieses Verhalten schützt das System vor unnötiger Belastung durch fremde Daten.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      ネットワークカードは、受信したフレームの宛先MACアドレスを必ず確認し、自分宛かブロードキャストでなければ破棄します。
      スイッチ環境ではフレームは特定の宛先にだけ転送されるため、他のホストには届きません。
      つまり、A→B宛のフレームはCに届かず、Cのネットワーク層にも渡されません。
      しかし、ブロードキャストは「全ホスト宛」の特別なアドレスであるため、すべてのネットワークカードがそれを処理し、
      上位層（IP層など）に渡します。
      この仕組みによって、必要な通信だけが適切に処理され、他のホストへの影響を最小限に抑えることができます。
    </p>
  </div>
</div>

<!-- 中タイトル -->
<div class="row mb-4">
  <div class="col-12">
    <p class="fw-bold fs-5" style="color: #004085;">
      スイッチの学習前の挙動とFloodingの仕組み
    </p>
  </div>
</div>

<!-- 解説ブロック -->
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Wenn ein Switch noch keine MAC-Adresse einem Port zugeordnet hat, kennt er das Zielgerät nicht.
      In diesem Fall verhält er sich wie ein Hub und <strong>sendet den Frame an alle Ports außer dem Eingangsport</strong>.
      Dieses Verhalten nennt man <em>Flooding</em>. Sobald der Switch jedoch ein Frame empfängt, merkt er sich die Quelladresse
      und den dazugehörigen Port in seiner MAC-Tabelle. Zukünftige Frames an diese Adresse können dann gezielt weitergeleitet werden.
      So entsteht durch Lernen nach und nach ein optimierter Weiterleitungsprozess.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      スイッチは初期状態では、宛先MACアドレスがどのポートにあるかを知りません。
      そのため、最初の通信ではフレームを<strong>全ポート（受信元以外）に送信</strong>する「フラッディング」と呼ばれる動作を行います。
      これにより正しい宛先に届くまで全体に広く配信されます。
      その後、受信フレームの<strong>送信元MACアドレスとポート番号</strong>を学習し、内部のMACテーブルに記録します。
      次回以降はその情報を使い、宛先にのみフレームを転送することで、通信効率が向上していきます。
    </p>
  </div>
</div>

  </div>
</template>

<script setup>
// No JS logic needed
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
