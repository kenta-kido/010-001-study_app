<template>
  <div class="container my-4">
    <h3 class="mb-4">2(b) Keine Kollisionen bei Switch</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Warum gibt es bei Switches keine Kollisionen?
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        なぜスイッチでは衝突（コリジョン）が発生しないのか？
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p>
          In einem geswitchten Netzwerk besitzt jeder Host eine eigene Punkt-zu-Punkt-Verbindung
          zum Switch. Dadurch entstehen keine geteilten Medien wie bei einem Hub, wo mehrere Hosts
          dieselbe Leitung benutzen.
        </p>
        <p>
          Zusätzlich arbeiten moderne Switches im Vollduplex-Modus, was bedeutet, dass Daten gleichzeitig
          gesendet und empfangen werden können – ohne Risiko einer Kollision.
        </p>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p>
          スイッチを使ったネットワークでは、各ホストがスイッチと1対1で接続されており、通信路を共有することはありません。
          これにより、ハブのように複数のホストが同じ媒体を使用する状況がなくなり、衝突が発生しません。
        </p>
        <p>
          また、スイッチはフルデュプレックスモードで動作するため、送信と受信が同時に可能となり、
          衝突のリスクがさらに排除されます。
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
