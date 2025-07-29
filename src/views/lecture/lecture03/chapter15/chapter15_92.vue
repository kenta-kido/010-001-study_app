<template>
  <div class="container my-4">
    <h3 class="mb-4">
      9(b) TCP CUBIC – Formel
    </h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
    <p><strong>Aufgabe:</strong><br />
      Geben Sie die Wachstumsfunktion von CUBIC an und erklären Sie die Bestandteile der folgenden Formel:
    </p>

    <!-- 式を大きく表示 -->
    <div class="fs-5 my-2">
      <code>W(t) = C(t−K)³ + W<sub>max</sub></code>
    </div>

    <p>
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
       
    <!-- 式を大きく表示 -->
    <div class="fs-5 my-2">
      <code>W(t) = C(t−K)³ + W<sub>max</sub></code>
    </div>

        <ul>
          <li><strong>C:</strong> Skalierungsfaktor, der das Wachstum beeinflusst</li>
          <li><strong>t:</strong> Zeit seit dem letzten Paketverlust</li>
          <li><strong>K:</strong> Zeitpunkt, an dem das Fenster wieder W<sub>max</sub> erreicht</li>
          <li><strong>W<sub>max</sub>:</strong> Maximales Fenster vor dem letzten Verlust</li>
        </ul>
        <div class="text-center mt-4">
          <img src="@/assets/lecture/lecture03/Figure_0902.png" class="img-fluid" alt="time for increase" style="max-width: 400px;" />
        </div>
<ul>
  <li><strong>β:</strong> Multiplikativer Reduktionsfaktor (z.&nbsp;B. β = 0.2), der angibt, wie stark das Fenster bei einem Paketverlust verkleinert wird. 
    Er beeinflusst auch die Berechnung des Wendepunktes <code>K = &#8731;(W<sub>max</sub> · β / C)</code>.</li>
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
        
    <!-- 式を大きく表示 -->
    <div class="fs-5 my-2">
      <code>W(t) = C(t−K)³ + W<sub>max</sub></code>
    </div>

        <ul>
          <li><strong>C：</strong> 拡大係数（成長速度の調整）</li>
          <li><strong>t：</strong> 最後のパケット損失からの経過時間</li>
          <li><strong>K：</strong> cwnd が W<sub>max</sub> に再到達する時間</li>
          <li><strong>W<sub>max</sub>：</strong> 直前の最大輻輳ウィンドウサイズ</li>
        </ul>
        <div class="text-center mt-4">
          <img src="@/assets/lecture/lecture03/Figure_0902.png" class="img-fluid" alt="time for increase" style="max-width: 400px;" />
        </div>
<ul>
  <li><strong>β：</strong> パケット損失時に cwnd をどの程度減少させるかを決定する**乗算減衰係数**（例：β = 0.2）であり、K の計算にも使用されます。
    <code>K = &#8731;(W<sub>max</sub>・β / C)</code> の形で表されます。</li>
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

    <!-- 解説：Deutsch & 日本語 -->
<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Der TCP-CUBIC-Algorithmus unterscheidet drei Betriebsmodi, je nachdem, wie sich die aktuelle Fenstergröße (cwnd)
      relativ zu früheren Werten verhält:
    </p>
    <ul>
      <li><strong style="color: red;">TCP-Modus:</strong>
        <span style="color: red;">Wenn cwnd kleiner ist als das Fenster</span>, das ein Standard-TCP (z.&nbsp;B. Reno) zum selben Zeitpunkt t erreicht hätte,
        <span style="color: red;">schaltet CUBIC in den TCP-Modus</span>. Dies dient der Fairness gegenüber langsamer wachsenden TCP-Verbindungen.
      </li>
      <li><strong>Konkaver Bereich (vor K):</strong>
        Wenn cwnd kleiner ist als W<sub>max</sub>, befindet sich CUBIC im konkaven Bereich.
        Das Wachstum verläuft langsamer, da die Wahrscheinlichkeit eines Paketverlusts in der Nähe von W<sub>max</sub> hoch ist.
      </li>
      <li><strong>Konvexer Bereich (nach K):</strong>
        Wenn cwnd größer ist als W<sub>max</sub>, beschleunigt CUBIC das Wachstum wieder, um effizient nach einer neuen maximalen Bandbreite zu suchen.
      </li>
    </ul>
    <p>
      Durch diese dynamische Umschaltung zwischen drei Phasen erreicht CUBIC eine gute Balance zwischen Effizienz und Stabilität.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      CUBIC アルゴリズムには、ウィンドウサイズ（cwnd）の位置に応じて3つの動作モードがあります：
    </p>
    <ul>
      <li><strong>TCPモード：</strong>
        cwnd が同時刻における標準的な TCP（例：Reno）アルゴリズムのウィンドウサイズよりも小さい場合、CUBIC は TCP モードに切り替え、
        TCP に近い線形成長を行います。これは主に低速な TCP フローとのフェアネス確保のためです。
      </li>
      <li><strong>凹型領域（K の前）：</strong>
        cwnd が過去の最大値 W<sub>max</sub> よりも小さい場合、CUBIC は凹型領域に入り、ウィンドウの増加速度は徐々に緩やかになります。
        これは W<sub>max</sub> 付近で過去に輻輳が起きたことを意識し、慎重に帯域を探る動作です。
      </li>
      <li><strong>凸型領域（K の後）：</strong>
        cwnd が W<sub>max</sub> を超えると、CUBIC はより積極的に成長を再開します。
        このときは新たな帯域の最大限界を素早く探すため、加速度的にウィンドウが拡大します。
      </li>
    </ul>
    <p>
      このように、CUBIC は過去の最大値を中心に、3つの異なる動作フェーズを使い分けることで、効率性と安定性を両立させています。
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
