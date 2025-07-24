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
