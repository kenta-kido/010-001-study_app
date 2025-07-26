<template>
  <div class="container my-4">
    <h3 class="mb-4">5(b) Unterschied zwischen UDP und TCP</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Was ist der Unterschied zwischen UDP und TCP bei der Datenübertragung im Internet?<br />
        Vergleichen Sie Aspekte wie Verbindungsaufbau, Zuverlässigkeit, Geschwindigkeit und typische Einsatzbereiche.
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        UDP と TCP は、インターネットでのデータ転送においてどのように異なるか？<br />
        接続の確立、信頼性、速度、典型的な使用例などの観点から比較しなさい。
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <ul>
          <li><strong>TCP (Transmission Control Protocol):</strong> verbindungsorientiert, zuverlässig</li>
          <li>Vor dem Datentransfer wird eine Verbindung aufgebaut (3-Wege-Handshake)</li>
          <li>Daten werden in der richtigen Reihenfolge und ohne Verluste übertragen</li>
          <li>Langsamer als UDP, aber ideal für z.&nbsp;B.&nbsp;Webseiten, Dateiübertragung, E-Mail</li>
        </ul>
        <ul>
          <li><strong>UDP (User Datagram Protocol):</strong> verbindungslos, schnell, aber unzuverlässig</li>
          <li>Kein Verbindungsaufbau – Daten werden direkt gesendet</li>
          <li>Pakete können verloren gehen oder in falscher Reihenfolge ankommen</li>
          <li>Geeignet für Echtzeitanwendungen wie VoIP, Streaming, Online-Games</li>
        </ul>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <ul>
          <li><strong>TCP（Transmission Control Protocol）:</strong> コネクション型で信頼性が高い</li>
          <li>データ転送前に<strong>3ウェイ・ハンドシェイク</strong>で接続を確立する</li>
          <li>データは順序通りに届き、再送制御により欠損も防止される</li>
          <li>UDPより遅いが、Webページやファイル転送、メールなどに適している</li>
        </ul>
        <ul>
          <li><strong>UDP（User Datagram Protocol）:</strong> コネクションレスで高速だが信頼性は低い</li>
          <li>接続確立なしに直接データを送信する</li>
          <li>パケットが<strong>途中で失われたり順番が乱れたり</strong>しても保証されない</li>
          <li>リアルタイム性が重要な VoIP、ストリーミング、オンラインゲームに向いている</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// Keine Logik nötig
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
