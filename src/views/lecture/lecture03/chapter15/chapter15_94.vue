<template>
  <div class="container my-4">
    <h3 class="mb-4">9(d) Wachstumsverhalten von AIMD und CUBIC</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        In den folgenden Teilaufgaben (i) und (ii) wird angenommen, dass das Übertragungsfenster den Schwellenwert <i>W<sub>max</sub></i> noch nicht erreicht hat.
      </p>
      <p>
        (i) Vergleichen Sie die Reaktionsgeschwindigkeit (d.h. die Geschwindigkeit der Änderung der Übertragungsrate) zwischen TCP-CUBIC und dem klassischen AIMD-Verfahren.
      </p>
      <p>
        (ii) Vergleichen Sie die typische Entwicklung der Senderate (Fenstergröße) zwischen TCP-CUBIC und AIMD.
      </p>
      <hr />
      <p><strong>問題：</strong><br />
        以下の (i)、(ii) の各小問では、送信ウィンドウがしきい値 <i>W<sub>max</sub></i> に達していないと仮定する。
      </p>
      <p>
        (i) TCP-CUBIC と従来の AIMD 手法における反応速度（転送レートの変化速度）を比較せよ。
      </p>
      <p>
        (ii) TCP-CUBIC と AIMD の送信レート（ウィンドウサイズ）の典型的な成長の仕方を比較せよ。
      </p>
    </div>


<!-- 解説：問題設定の意図と用語の違い（Wmax未満の前提を含む） -->
<div class="row mt-4">
  <div class="col-md-6">
    <h5>Einordnung & Begriffserklärung (Deutsch)</h5>
    <p>
      In dieser Aufgabe wird ausdrücklich gesagt, dass das Übertragungsfenster <strong>W<sub>max</sub></strong> noch nicht erreicht ist.
      Das bedeutet, dass sich CUBIC in der <strong>konkaven Phase</strong> seines Wachstums befindet – das Fenster wächst eher langsam.
    </p>
    <p>
      Der Unterschied der beiden Teilaufgaben ist wie folgt:
    </p>
    <ul>
      <li><strong>(i) Reaktionsgeschwindigkeit:</strong> Wie schnell ändert sich das Wachstum <em>pro Zeiteinheit</em> in der aktuellen Phase?</li>
      <li><strong>(ii) Senderate:</strong> Wie entwickelt sich die absolute Fenstergröße im Verlauf der Zeit?</li>
    </ul>
    <p>
      Die Reaktionsgeschwindigkeit ist also die <em>Steigung</em> der Funktion W(t), während die Senderate der <em>Wert</em> von W(t) selbst ist. Beide hängen bei CUBIC vom Zeitabstand zum letzten Verlustereignis ab.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      本問では、送信ウィンドウがまだ <strong>W<sub>max</sub></strong> に到達していないと明示されています。これは、<strong>CUBIC が凹型（concave）フェーズ</strong>にあることを意味し、<strong>緩やかな増加</strong>をしている状態です。
    </p>
    <p>
      各小問の意味の違いは以下の通りです：
    </p>
    <ul>
      <li><strong>(i) 反応速度：</strong> 単位時間あたりの増加量、つまり「今どのくらいのスピードでウィンドウが増えているか」（成長率）</li>
      <li><strong>(ii) 送信レート：</strong> 時間の経過とともにウィンドウサイズ（cwnd）がどのように変化していくか（成長パターン）</li>
    </ul>
    <p>
      簡単に言えば、<strong>反応速度</strong>は「傾き」、<strong>送信レート</strong>は「値そのものの推移」を見ています。<br />
      AIMDは常に一定の傾き、CUBICは時間とともに傾きが変わるため、前者は一定速度、後者は加速的な変化をします（ただし W<sub>max</sub> に近づくまでは遅い）。
    </p>
  </div>
</div>
<!-- 解答：ドイツ語 & 日本語 横並び -->
<div class="row">
  <div class="col-md-6">
    <h5>Antwort (Deutsch)</h5>
    <p><strong>Voraussetzung:</strong> Da W<sub>max</sub> noch nicht erreicht ist, befindet sich CUBIC in der <em>konkaven Phase</em> seiner Wachstumsfunktion.</p>

    <p><strong>(i) Reaktionsgeschwindigkeit:</strong></p>
    <ul>
      <li>AIMD erhöht cwnd konstant um 1 MSS（Maximum Segment Size） pro RTT → konstante, lineare Geschwindigkeit.</li>
      <li>CUBIC verwendet <i>W(t) = C(t−K)³ + W<sub>max</sub></i>, wobei die Änderungsrate <i>dW/dt = 3C(t−K)²</i> ist.</li>
      <li>⇒ Zu Beginn (t = 0) ist die Reaktion schnell (3CK²), wird jedoch langsamer, je näher t an K liegt. Bei t = K ist die Geschwindigkeit null.</li>
    </ul>
    <div>
        <strong>Ergänzung zu AIMD (Deutsch)</strong>
        <p>
          Beim klassischen AIMD-Verfahren erfolgt die additive Erhöhung der cwnd um <strong>1 MSS pro RTT</strong>.
          Dies ergibt sich daraus, dass bei jeder empfangenen ACK cwnd um <code>1/cwnd</code> MSS erhöht wird.
          Bei cwnd ACKs pro RTT summiert sich das genau zu 1 MSS pro RTT.
        </p>
        <p>
      Beim klassischen AIMD-Verfahren erfolgt die additive Erhöhung der cwnd um <strong>1 MSS pro RTT</strong>.
      Dies ergibt sich daraus, dass TCP bei jedem empfangenen ACK die Fenstergröße um <code>1 / cwnd</code> MSS erhöht.
      Bei cwnd ACKs pro RTT ergibt sich eine Zunahme von insgesamt <strong>1 MSS pro RTT</strong>.
    </p>
        <p>
          Diese lineare Steigerung bedeutet, dass Verbindungen mit kürzerem RTT schneller wachsen,
          was zu <strong>RTT-Unfairness</strong> führen kann.
          CUBIC adressiert dieses Problem durch ein wachstumsverhalten, das unabhängig von RTT ist.
        </p>
      </div>

    <p><strong>(ii) Entwicklung der Senderate:</strong></p>
    <ul>
      <li>AIMD: cwnd wächst linear mit der Zeit, unabhängig vom vorherigen Maximum.</li>
      <li>CUBIC: cwnd wächst nicht-linear (t³), bildet ein Plateau bei W<sub>max</sub> und wächst danach erneut schneller (konvexes Wachstum).</li>
      <li>Durch die Zeit-basierte Steuerung ist CUBIC effizienter bei großen Bandbreiten und hohen RTTs.</li>
    </ul>
    
  </div>

  <div class="col-md-6">
    <h5>解答（日本語）</h5>
    <p><strong>前提：</strong> W<sub>max</sub> に達していないため、CUBIC は <em>凹型フェーズ（concave region）</em> にあります。</p>

    <p><strong>(i) 反応速度：</strong></p>
    <ul>
      <li>AIMD：RTT ごとに一定量（1セグメント）ずつ増加 → 常に一定の反応速度。</li>
      <li>CUBIC：<i>W(t) = C(t−K)³ + W<sub>max</sub></i> に従い、微分値 <i>dW/dt = 3C(t−K)²</i> が反応速度を示す。</li>
      <li>⇒ 初期（t = 0）では <i>3CK²</i> と速いが、時間が経って t → K に近づくと反応速度は減少し、t = K で 0 になる。</li>
    </ul>
    <div>
      <strong>補足：AIMD の成長挙動</strong>

          <p>
      AIMD（加算的増加）では、<strong>RTT ごとに cwnd が 1 MSS（最大セグメントサイズ）増加</strong>します。
      これは TCP が 1 ACK を受け取るたびに <code>1 / cwnd</code> MSS 分だけ cwnd を増やすためで、
      1 RTT に約 cwnd 個の ACK が返ってくることで合計 1 MSS 増加します。
    </p>
    <p>
      よって、これは時間あたりのウィンドウ増加率として次のように表せます：
    </p>
    <p class="text-center"><strong>増加速度 = 1 MSS / RTT</strong></p>
    <p>
      つまり、<strong>RTT が短いほど cwnd の成長が速くなる</strong>ため、短RTTフローが有利となり、不公平性が生じます。
      CUBIC はこの課題に対応するため、RTT に依存しない時間ベースの成長モデルを採用しています。
    </p>
      <p>
        このため、<strong>RTT が短いフローほど速く増加</strong>し、結果として「RTT による不公平さ」が生まれます。
        CUBIC はこの点を解消するため、RTT 非依存な時間ベース成長モデルを採用しています。
      </p>
    </div>

    <p><strong>(ii) 送信レートの推移：</strong></p>
    <ul>
      <li>AIMD：時間に対して直線的にウィンドウが増加し、過去の最大値に依存しない。</li>
      <li>CUBIC：三次関数的に成長し、W<sub>max</sub> に近づくと成長が鈍化（プラトー）、それを越えると再び加速的に増加（凸型）。</li>
      <li>RTT に依存せず、経過時間のみで増加するため、遅延が大きいネットワークでも高効率。</li>
    </ul>
  </div>
</div>




    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Beschreiben Sie die Wachstumsfunktionen von AIMD und CUBIC.<br />
        Wie verläuft das Wachstum der Congestion Window (cwnd) in beiden Ansätzen (linear vs. kubisch)?<br />
        Was bedeutet das für die Performance in Netzwerken mit hoher Bandbreite und Latenz? (4P)
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        AIMD と CUBIC の成長関数を比較せよ。<br />
        各方式における輻輳ウィンドウ（cwnd）の増加はどのような形か（線形 vs. 三次関数）？<br />
        それは高帯域・高遅延ネットワークにおいて性能にどのような影響を与えるか？（4点）
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p><strong>AIMD:</strong></p>
        <ul>
          <li>cwnd wächst linear pro RTT (Additive Increase)</li>
          <li>Verlust führt zu Multiplicative Decrease (z.B. Halbierung)</li>
          <li>Effizient bei kleinen bis mittleren Netzen</li>
        </ul>
        <p><strong>CUBIC:</strong></p>
        <ul>
          <li>cwnd wächst gemäß kubischer Funktion: <span>W(t) = C(t−K)³ + W<sub>max</sub></span></li>
          <li>Wachstum unabhängig von RTT → besser in Hochlatenznetzen</li>
          <li>Schnellere Erholung und bessere Auslastung bei großer Bandbreite</li>
        </ul>
        <p><strong>Fazit:</strong> CUBIC skaliert besser in Hochgeschwindigkeitsnetzen mit hoher Latenz als AIMD.</p>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p><strong>AIMD：</strong></p>
        <ul>
          <li>cwnd は RTT ごとに線形に増加（加算的増加）</li>
          <li>損失時に乗算的に減少（例：半分）</li>
          <li>中小規模のネットワークでは適している</li>
        </ul>
        <p><strong>CUBIC：</strong></p>
        <ul>
          <li>cwnd は三次関数に基づいて増加：<span>W(t) = C(t−K)³ + W<sub>max</sub></span></li>
          <li>RTT に依存せず、遅延の大きい環境でも効率よく増加</li>
          <li>高帯域のネットワークでの利用率が高く、回復も早い</li>
        </ul>
        <p><strong>結論：</strong> CUBIC は高帯域・高遅延ネットワークにおいて AIMD よりもスケーラビリティに優れている。</p>
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
