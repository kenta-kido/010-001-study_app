<template>
  <div class="container my-4">
    <h3 class="mb-4">7. Vergleich von Überlastkontroll-Strategien</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Vergleichen Sie die Überlastkontrolle in Peer-to-Peer-Systemen mit netzgestützter Überlastkontrolle.
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        P2P型の輻輳制御と、ネットワーク側が支援する輻輳制御を比較せよ。
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p><strong>Peer-to-Peer (Ende-zu-Ende):</strong></p>
        <ul>
          <li>Kontrolle erfolgt durch die Endsysteme (z.B. TCP).</li>
          <li>Erkennung durch Paketverlust, RTT oder Verzögerung.</li>
          <li>Keine Unterstützung durch das Netzwerk selbst.</li>
          <li>Beispiel: klassische TCP-Algorithmen wie AIMD.</li>
        </ul>
        <p><strong>Netzgestützte Kontrolle:</strong></p>
        <ul>
          <li>Netzwerkkomponenten (z.B. Router) erkennen und melden Überlastung.</li>
          <li>Verwendung von Mechanismen wie ECN oder explizite Rückmeldungen.</li>
          <li>Reaktionszeit schneller, aber Infrastrukturabhängig.</li>
          <li>Kann eine genauere Steuerung ermöglichen.</li>
        </ul>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p><strong>P2P（エンドツーエンド）型:</strong></p>
        <ul>
          <li>輻輳制御はエンドシステム（例：TCP）側で行う。</li>
          <li>パケット損失やRTT、遅延によって輻輳を検出。</li>
          <li>ネットワーク機器からのサポートなし。</li>
          <li>例：AIMDなどの古典的TCP。</li>
        </ul>
        <p><strong>ネットワーク支援型:</strong></p>
        <ul>
          <li>ルーターなどのネットワーク機器が輻輳を検出・通知。</li>
          <li>ECNなどの仕組みを通じて明示的なフィードバックが可能。</li>
          <li>応答が速く、制御の精度が高い。</li>
          <li>ただし、専用のネットワーク機能が必要。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// Keine zusätzliche Logik erforderlich
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
