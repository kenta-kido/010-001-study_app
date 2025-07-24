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
