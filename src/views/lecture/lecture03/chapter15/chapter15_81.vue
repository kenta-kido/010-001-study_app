<template>
  <div class="container my-4">
    <h3 class="mb-4">8 AIMD</h3>
<div class="container my-4">
  <h3 class="mb-4">8. AIMDと輻輳制御の基礎</h3>

  <!-- 問題文 -->
  <div class="border rounded p-3 bg-light mb-4">
    <p><strong>Aufgabe:</strong><br />
      Erklären Sie den Ablauf des AIMD-Algorithmus anhand des Diagramms unten: Wie reagiert der Algorithmus auf steigende Netzbelastung?
    </p>
    <hr />
    <p><strong>問題:</strong><br />
      下の図を参考にしながら、AIMDアルゴリズムの仕組みと、ネットワーク混雑にどのように反応するかを説明しなさい。
    </p>
  </div>

  <!-- 図の挿入 -->
  <div class="text-center mb-4">
    <img src="@/assets/lecture/lecture03/Figure_0802.png" class="img-fluid" alt="AIMD Congestion Control Graph">
    <p class="text-muted mt-2">図 8.2 — AIMDに基づく輻輳ウィンドウの変化</p>
  </div>

  <!-- 解説 -->
  <div class="row">
    <div class="col-md-6">
      <h5>Erklärung (Deutsch)</h5>
      <p>
        Der AIMD-Algorithmus (Additive Increase, Multiplicative Decrease) ist eine Methode zur Kontrolle der Netzwerküberlastung.
      </p>
      <ul>
        <li><strong>Additive Increase:</strong> Solange keine Überlastung erkannt wird, erhöht der Sender sein Congestion Window (cwnd) schrittweise – typischerweise um 1 MSS (Maximum Segment Size) pro Round Trip Time.</li>
        <li><strong>Multiplicative Decrease:</strong> Sobald ein Paketverlust erkannt wird (z.&nbsp;B. durch Timeout oder dreifaches ACK), wird das Fenster <strong>multiplikativ reduziert</strong>, z.&nbsp;B. halbiert (cwnd × 0.5).</li>
      </ul>
      <p>
        Die Abbildung zeigt diesen zyklischen Ablauf: Ein stetiger Anstieg der Fenstergröße, gefolgt von einem plötzlichen Rückgang – ein klassisches Verhalten von TCP-Kongestionskontrolle.
      </p>
    </div>

    <div class="col-md-6">
      <h5>解説（日本語）</h5>
      <p>
        AIMD（加算法増加・乗算法減少）は、TCPで使われる典型的な輻輳制御アルゴリズムです。
      </p>
      <ul>
        <li><strong>加算的増加（AI）:</strong> パケットロスが検出されない間は、送信ウィンドウ（cwnd）を1RTTごとに少しずつ増やしていきます（通常は1MSSずつ）。</li>
        <li><strong>乗算的減少（MD）:</strong> パケット損失が発生すると（タイムアウトや重複ACKなど）、cwndを<strong>一気に半分に減少</strong>させます。</li>
      </ul>
      <p>
        この図はその動きを表しています。ウィンドウサイズは徐々に上昇しますが、ロスが起こると急に落ちて再び上昇する…というサイクルが繰り返されます。
      </p>
    </div>
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
