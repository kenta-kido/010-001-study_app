<template>
  <div class="container my-4">
    <h3 class="mb-4">2(a) Unterschied zwischen Switch und Hub</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Erkläre den Unterschied zwischen einem Switch und einem Hub.
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        スイッチとハブの違いを説明しなさい。
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p>
          Ein Hub ist ein einfaches Gerät, das alle eingehenden Signale an alle Ports weiterleitet – es arbeitet auf der Bitübertragungsschicht (Layer 1). Er unterscheidet nicht zwischen den Empfängern.
        </p>
        <p>
          Ein Switch hingegen arbeitet auf der Sicherungsschicht (Layer 2) und leitet Frames gezielt nur an den Port weiter, der zur Ziel-MAC-Adresse gehört. Dadurch wird der Datenverkehr effizienter und es entstehen weniger Kollisionen.
        </p>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p>
          ハブは、受信した信号をすべてのポートにそのまま送信する単純な装置であり、物理層（レイヤ1）で動作します。宛先の識別は行われません。
        </p>
        <p>
          一方、スイッチはデータリンク層（レイヤ2）で動作し、受信したフレームの宛先MACアドレスに基づいて、適切なポートのみに転送します。これにより通信の効率が向上し、衝突の発生も減少します。
        </p>
      </div>
    </div>

    
  </div>
</template>

<script setup>
// No JavaScript logic required
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
