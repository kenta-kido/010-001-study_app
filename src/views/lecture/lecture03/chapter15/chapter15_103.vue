<template>
  <div class="container my-4">
    <h3 class="mb-4">10(c) TCP BBR – Verhalten bei Auslastung nahe der geschätzten Bandbreite</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Was macht BBR, wenn der aktuelle Durchsatz nahe an der berechneten Bandbreite liegt?<br />
        Beschreiben Sie die Aktion, die BBR in diesem Fall ausführt. (3P)
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        現在のスループットが推定された帯域幅に近いと BBR が判断した場合、どのような動作を行うか説明せよ。（3点）
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p>
          Wenn der aktuelle Durchsatz nahe an der berechneten Bottleneck-Bandbreite liegt,
          geht BBR davon aus, dass die Verbindung optimal ausgelastet ist.
        </p>
        <p>
          In diesem Fall stabilisiert BBR seine Sende­rate, d.h. es hält die Congestion Window (cwnd)
          und die Pacing Rate konstant. Dadurch wird verhindert, dass unnötige Warteschlangen entstehen.
        </p>
        <p>
          Ziel ist es, die Leitungsauslastung zu maximieren ohne Überlastung zu verursachen.
        </p>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p>
          現在のスループットが推定されたボトルネック帯域幅に近いと BBR が判断した場合、
          回線が最適に利用されていると見なします。
        </p>
        <p>
          このとき BBR は輻輳ウィンドウ（cwnd）および送信レート（Pacing Rate）を一定に保ち、
          不必要なキューや輻輳を防ぎます。
        </p>
        <p>
          目的は、輻輳を起こさずに最大限の帯域利用率を維持することです。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Kein Script notwendig
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
