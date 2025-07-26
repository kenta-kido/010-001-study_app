<template>
  <div class="container my-4">
    <h3 class="mb-4">1(b) Medienzugriff – Kollisionen bei Ethernet</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        A und B wollen gleichzeitig IP Datagramme über Ethernet senden. Wie werden Kollisionen vermieden bzw was passiert?
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        A と B が同時に Ethernet 上で IP データグラムを送信しようとする場合、衝突はどのように回避されるのか？または、何が起こるのか？
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p>
          In klassischen (halbduplexen) Ethernet-Netzen wird das CSMA/CD-Verfahren (Carrier Sense Multiple Access with Collision Detection) verwendet:
        </p>
        <ul>
          <li>Jeder Host „lauscht“ zunächst auf das Medium, ob es frei ist.</li>
          <li>Wenn es frei ist, beginnt der Host mit der Übertragung.</li>
          <li>Kommt es dennoch zu einer Kollision, erkennen die Sender das und senden ein sogenanntes „Jamming Signal“.</li>
          <li>Danach warten sie eine zufällige Zeit (Backoff) und versuchen es erneut.</li>
        </ul>
        <p>
          Bei modernen Switched-Ethernet-Netzen mit Vollduplexbetrieb gibt es keine Kollisionen mehr, da jeder Host eine direkte Verbindung zum Switch hat.
        </p>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p>
          古典的な（半二重の）Ethernet では、CSMA/CD（搬送波感知多重アクセス／衝突検出）方式が使用されます：
        </p>
        <ul>
          <li>各ホストは、まず通信媒体が空いているかを確認します。</li>
          <li>空いていれば送信を開始します。</li>
          <li>もし衝突が発生した場合、送信者はそれを検出して「ジャミング信号」を送信します。</li>
          <li>その後、一定のランダムな時間（バックオフ）を待って再送信を試みます。</li>
        </ul>
        <p>
          一方、現代のスイッチを用いたフルデュプレックス Ethernet では、ホストはスイッチと直接接続されているため、衝突は発生しません。
        </p>
      </div>
    </div>

    <!-- 中タイトル -->
<div class="row mb-4">
  <div class="col-12">
    <p class="fw-bold fs-5" style="color: #004085;">
      Ethernetにおける衝突の仕組みとCSMA/CDの背景 〜バストポロジーからハブ接続まで
    </p>
  </div>
</div>

<!-- 解説ブロック -->
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      In der Anfangszeit von Ethernet (z.B. 10BASE5, 10BASE2) wurde häufig eine sogenannte <strong>Bus-Topologie</strong> verwendet:
      Alle Geräte waren direkt an ein einziges Koaxialkabel angeschlossen – also an ein <strong>gemeinsam genutztes Übertragungsmedium</strong>.
    </p>
    <p>
      Später wurden <strong>Hubs</strong> verwendet, um eine sternförmige physische Verkabelung zu ermöglichen.
      Logisch gesehen verhielten sich Hubs jedoch wie ein Bus: <strong>Alle Ports teilen sich denselben Übertragungsweg</strong>.
      Auch bei Hubs konnte es daher zu <strong>Kollisionen</strong> kommen.
    </p>
    <p>
      Um diese zu erkennen und zu steuern, wurde in gemeinsam genutzten Medien das Verfahren <strong>CSMA/CD</strong> (Carrier Sense Multiple Access with Collision Detection) eingesetzt.
      Es besteht aus:
    </p>
      <ul>
        <li><strong>Carrier Sense:</strong> Erst prüfen, ob das Medium frei ist.</li>
        <li><strong>Multiple Access:</strong> Jeder darf senden.</li>
        <li><strong>Collision Detection:</strong> Prüfen, ob eine Kollision auftritt – und wenn ja: Abbruch, Jamming, Backoff.</li>
      </ul>
    <p>
      Heute verwendet man Switches, bei denen jedes Gerät einen eigenen dedizierten Kanal besitzt – <strong>CSMA/CD ist hier nicht mehr notwendig</strong>.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      初期のEthernet（例：10BASE5、10BASE2）では、<strong>バストポロジー</strong>（1本の同軸ケーブルを複数機器で共有する方式）が主流でした。
      全機器が<strong>1つの通信路を共用</strong>するため、2台が同時に送信すると<strong>衝突（コリジョン）</strong>が発生しました。
    </p>
    <p>
      後に登場した<strong>ハブ</strong>は、物理的にはスター型配線を可能にしましたが、<strong>論理的にはバスと同様</strong>で、
      全ポートが1つの共有信号線を使うため、やはり<strong>衝突が起こり得る構成</strong>でした。
    </p>
    <p>
      これらの共有型Ethernetでは、衝突の検出と制御のために<strong>CSMA/CD方式</strong>が用いられていました：
    </p>
      <ul>
        <li><strong>搬送波感知（Carrier Sense）：</strong> 通信前に回線が空いているか確認</li>
        <li><strong>多重アクセス（Multiple Access）：</strong> 誰でも送信可能</li>
        <li><strong>衝突検出（Collision Detection）：</strong> 衝突が起きたら送信中止、ジャム信号を出し、ランダムに待って再送（指数的バックオフ）</li>
      </ul>
    <p>
      現在は各機器が<strong>スイッチ</strong>で直接接続され、ポートごとに独立した通信路が確保されているため、<strong>CSMA/CDは不要</strong>です。
    </p>
  </div>
</div>


<!-- 中タイトル -->
<div class="row mb-4">
  <div class="col-12">
    <p class="fw-bold fs-5" style="color: #004085;">
      衝突後の待機処理と指数的バックオフ（Wartezeit nach Kollision und Exponential Backoff）
    </p>
  </div>
</div>

<!-- 解説ブロック -->
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Nach einer <strong>Kollision</strong> im Ethernet-Netzwerk beobachten die betroffenen Geräte zunächst, ob der Kanal wieder frei ist.
      Ist dies der Fall, wird nicht sofort erneut gesendet, sondern:
    </p>
    <ul>
      <li>Jedes beteiligte Gerät wählt eine <strong>zufällige Wartezeit</strong> aus einem Intervall [0,d].</li>
      <li>Während dieser Zeit bleibt das Gerät still und wartet.</li>
      <li>Ist der Kanal währenddessen frei geblieben, startet das Gerät nach Ablauf der Zeit erneut die Übertragung.</li>
      <li>Kommt es erneut zu einer Kollision, <strong>wird das Intervall verdoppelt</strong>: [0,2d], [0,4d], [0,8d] usw.</li>
      <li>Dadurch sinkt die Wahrscheinlichkeit weiterer Kollisionen mit jedem Versuch.</li>
      <li>Der Wert <strong>d</strong> (minimale Zeiteinheit) ist im Ethernet-Standard definiert.</li>
    </ul>
    <p>
      Dieses Verfahren wird als <strong>Exponential Backoff</strong> bezeichnet und ist ein Kernelement von CSMA/CD.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      Ethernetで<strong>衝突</strong>が発生した後、衝突した機器はまず<strong>通信路が空いているか</strong>を監視します。
      空いていればすぐには再送信せず、以下の処理が行われます：
    </p>
    <ul>
      <li>各機器は<strong>[0, d]の範囲でランダムな待機時間</strong>を選びます。</li>
      <li>その間、再送信を控え、他機器とタイミングが重ならないようにします。</li>
      <li>待機中に通信路が再び使用されていなければ、<strong>待機時間終了後に再送信</strong>を行います。</li>
      <li>もし再び衝突が発生した場合、<strong>次の待機範囲が倍に拡大</strong>されます： [0, 2d] → [0, 4d] → [0, 8d] …</li>
      <li>このようにして再送タイミングが徐々にずらされ、<strong>衝突の再発を防ぐ仕組み</strong>になっています。</li>
      <li>この「d」は標準規格で定義されており、Ethernetの仕様に従って管理されます。</li>
    </ul>
    <p>
      この方式は<strong>指数的バックオフ（Exponential Backoff）</strong>と呼ばれ、CSMA/CDの中核を成す機能です。
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
