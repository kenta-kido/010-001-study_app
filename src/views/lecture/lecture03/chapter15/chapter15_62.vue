<template>
  <div class="container my-4">
    <h3 class="mb-4">6(b) UDP – Prüfsumme berechnen</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Berechnen Sie die UDP-Prüfsumme für zwei gegebene 16-Bit-Werte (z.B. 0xABCD und 0x1234).
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        2つの16ビットの値（例：0xABCD と 0x1234）に対して、UDPチェックサムを計算せよ。
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p><strong>Beispiel:</strong> 0xABCD und 0x1234</p>
        <ol>
          <li>Beide Werte addieren: 0xABCD + 0x1234 = 0xBE01</li>
          <li>Kein Übertrag über 16 Bit → nichts hinzufügen</li>
          <li>1-Komplement bilden: <br /> ~0xBE01 = <strong>0x41FE</strong></li>
        </ol>
        <p><strong>Ergebnis:</strong> Prüfsumme = 0x41FE</p>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p><strong>例:</strong> 0xABCD と 0x1234</p>
        <ol>
          <li>2つの値を加算：0xABCD + 0x1234 = 0xBE01</li>
          <li>16ビットを超えるキャリーはなし → そのまま</li>
          <li>1の補数をとる：<br /> ~0xBE01 = <strong>0x41FE</strong></li>
        </ol>
        <p><strong>結果:</strong> チェックサム = 0x41FE</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Kein zusätzlicher Code erforderlich
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
