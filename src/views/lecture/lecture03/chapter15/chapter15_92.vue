<template>
  <div class="container my-4">
    <h3 class="mb-4">
      9(b) TCP CUBIC – Formel <span>W(<i>t</i>) = C(t−K)³ + W<sub>max</sub></span>
    </h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Geben Sie die Wachstumsfunktion von CUBIC an und erklären Sie die Bestandteile der folgenden Formel:
        <br />
        <code>W(t) = C(t−K)³ + W<sub>max</sub></code>
        <br />
        Was bedeuten die Parameter C, t, K und W<sub>max</sub>?<br />
        Welche Rolle spielt diese Funktion im Verhalten von CUBIC?<br />
        Was passiert, wenn cwnd &lt; W<sub>max</sub>?
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        CUBIC の成長関数 <code>W(t) = C(t−K)³ + W<sub>max</sub></code> を示し、各パラメータ C, t, K, W<sub>max</sub> の意味を説明せよ。
        <br />
        この関数は CUBIC の挙動にどのような影響を与えるか？
        <br />
        また、cwnd &lt; W<sub>max</sub> のとき何が起きるか？
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p><strong>Formel:</strong> <code>W(t) = C(t−K)³ + W<sub>max</sub></code></p>
        <ul>
          <li><strong>C:</strong> Skalierungsfaktor, der das Wachstum beeinflusst</li>
          <li><strong>t:</strong> Zeit seit dem letzten Paketverlust</li>
          <li><strong>K:</strong> Zeitpunkt, an dem das Fenster wieder W<sub>max</sub> erreicht</li>
          <li><strong>W<sub>max</sub>:</strong> Maximales Fenster vor dem letzten Verlust</li>
        </ul>
        <p>
          Diese Funktion beschreibt ein kubisches Wachstum des Congestion Window.
          Nahe W<sub>max</sub> ist das Wachstum langsamer, weiter entfernt wird es schneller.
        </p>
        <p>
          Wenn <strong>cwnd &lt; W<sub>max</sub></strong>, wächst das Fenster sehr schnell, um zum vorherigen Maximum zurückzukehren.
          Das verbessert die Effizienz und die Erholungszeit nach Verlust.
        </p>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p><strong>式：</strong> <code>W(t) = C(t−K)³ + W<sub>max</sub></code></p>
        <ul>
          <li><strong>C：</strong> 拡大係数（成長速度の調整）</li>
          <li><strong>t：</strong> 最後のパケット損失からの経過時間</li>
          <li><strong>K：</strong> cwnd が W<sub>max</sub> に再到達する時間</li>
          <li><strong>W<sub>max</sub>：</strong> 直前の最大輻輳ウィンドウサイズ</li>
        </ul>
        <p>
          この関数は、輻輳ウィンドウを時間に応じて三次関数的に成長させるものであり、
          W<sub>max</sub> に近づくほど成長が緩やかになり、離れると急速に拡大します。
        </p>
        <p>
          <strong>cwnd &lt; W<sub>max</sub></strong> のときは、cwnd が急速に成長し、
          以前の最大値へと早く回復するように動作します。これにより、効率よく帯域を再利用できます。
        </p>
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
