<template>
  <div class="container my-4">
    <h3 class="mb-4">TCP CUBIC – Formel</h3>
<!-- Thema: Wann und warum verhält sich CUBIC wie Standard-TCP? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Wann und warum verhält sich CUBIC wie Standard-TCP? (TCP-friendly region)
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    CUBIC はどのような条件下で標準的な TCP と同じように振る舞うのか？また、その理由は何か？
  </p>
</div>

<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      CUBIC verhält sich wie Standard-TCP, wenn sein eigenes Fenster kleiner ist als das Fenster, das ein TCP-AIMD-Algorithmus (z.&nbsp;B. Reno) zur selben Zeit erreicht hätte.
      In diesem Fall tritt CUBIC in den sogenannten <strong>TCP-Modus</strong> ein, um eine faire Bandbreitennutzung zu gewährleisten.
    </p>
    <p>
      Die Entscheidung basiert auf einem Vergleich mit dem idealen Wachstum eines AIMD-Fensters über die Zeit <em>t</em>.
      Die Formel für die durchschnittliche Fenstergröße von AIMD ist unten gezeigt.
    </p>

    <!-- Abbildung: AIMD Durchschnitt -->
    <div class="text-center my-3">
      <img :src="imgUrlAimdAvg" alt="AIMD Durchschnitt Fenstergröße" class="img-fluid" style="max-width: 500px;" />
      <p class="text-muted mt-1">Abbildung: Durchschnittliches AIMD-Fenster</p>
    </div>

<ul>
  <li><strong>RTT:</strong> Round-Trip Time, also known as round-trip delay</li>
  <li><strong>α:</strong> Additive Increase factor in AIMD</li>
  <li><strong>β:</strong> Multiplicative Decrease factor in AIMD</li>
  <li><strong>p:</strong> Paketverlustrate (Verlustwahrscheinlichkeit)</li>
</ul>
    <p>
      Daraus ergibt sich die TCP-Wachstumsfunktion:
    </p>

    <div class="text-center my-3">
      <img :src="imgUrlTcpGrowth" alt="TCP Fensterwachstum Wtcp(t)" class="img-fluid" style="max-width: 480px;" />
      <p class="text-muted mt-1">Abbildung: TCP-Fensterwachstumsfunktion</p>
    </div>
<ul>
  <li><strong>W<sub>max</sub>:</strong> Maximale Fenstergröße vor dem letzten Paketverlust</li>
  <li><strong>β:</strong> Multiplikativer Reduktionsfaktor nach Paketverlust</li>
  <li><strong>t:</strong> Vergangene Zeit seit dem letzten Verlustereignis</li>
  <li><strong>RTT:</strong> Round-Trip Time</li>
</ul>
    <p>
      Wenn das aktuelle cwnd kleiner ist als <em>W<sub>tcp</sub>(t)</em>, dann wird CUBIC gezwungen, sich wie TCP zu verhalten, 
      um Koexistenz und Fairness mit klassischen Flows zu sichern.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      CUBIC は、自身のウィンドウサイズが標準的な TCP（AIMD）が同時点で到達していると予想される値よりも小さい場合、
      <strong>TCPモード</strong> に切り替わり、TCP と同様の線形成長を行います。
    </p>
    <p>
      この判定は、時間 <em>t</em> における AIMD の平均ウィンドウサイズとの比較に基づいて行われます。
      以下は、その平均ウィンドウサイズを示す数式です。
    </p>

    <!-- 図：AIMD平均ウィンドウサイズ -->
    <div class="text-center my-3">
      <img :src="imgUrlAimdAvg" alt="AIMDの平均ウィンドウサイズ" class="img-fluid" style="max-width: 500px;" />
      <p class="text-muted mt-1">図：AIMDの平均ウィンドウサイズ</p>
    </div>
<ul>
  <li><strong>RTT：</strong> 往復遅延時間（Round-Trip Time）</li>
  <li><strong>α：</strong> 加算増加の係数（Additive Increase）</li>
  <li><strong>β：</strong> 乗算減少の係数（Multiplicative Decrease）</li>
  <li><strong>p：</strong> パケットロス率（損失確率）</li>
</ul>
    <p>
      これに基づき、TCP の理想的な成長関数 <em>W<sub>tcp</sub>(t)</em> は次の式で表されます。
    </p>

    <!-- 図：TCPのウィンドウ成長関数 -->
    <div class="text-center my-3">
      <img :src="imgUrlTcpGrowth" alt="TCPの成長関数 Wtcp(t)" class="img-fluid" style="max-width: 480px;" />
      <p class="text-muted mt-1">図：TCPの成長関数 W<sub>tcp</sub>(t)</p>
    </div>
<ul>
  <li><strong>W<sub>max</sub>：</strong> パケット損失が発生する直前の最大ウィンドウサイズ</li>
  <li><strong>β：</strong> 乗算減少の係数（輻輳後のウィンドウ縮小率）</li>
  <li><strong>t：</strong> 最後の輻輳（損失）からの経過時間</li>
  <li><strong>RTT：</strong> 往復遅延時間</li>
</ul>
    <p>
      CUBIC はこの W<sub>tcp</sub>(t) よりも小さい場合、TCP と同じ成長速度に制限されるよう設計されており、
      従来の TCP フローとの公平性（フェアネス）を維持します。
    </p>
  </div>
</div>

<!-- Thema: Wann verwendet CUBIC das TCP-Modell und warum? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Wann verwendet CUBIC das TCP-Modell und warum?  
    Wie funktioniert der TCP-Modus mit W<sub>tcp</sub>(t)?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    CUBIC はどのようなときに TCP モードへ移行するのか？  
    そのときに用いられる W<sub>tcp</sub>(t) の役割とは？
  </p>
</div>

<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Wenn CUBIC ein ACK empfängt, prüft es zunächst, ob es sich in der TCP-kompatiblen Region befindet.
      Dazu vergleicht es die aktuelle Fenstergröße <code>cwnd</code> mit einem Referenzwert <code>W<sub>tcp</sub>(t)</code>, 
      der das Wachstum eines klassischen TCPs (AIMD) abbildet.
    </p>
    <p>
      Falls <code>cwnd &lt; W<sub>tcp</sub>(t)</code>, dann befindet sich CUBIC im TCP-Modus und übernimmt das TCP-Wachstumsverhalten.  
      So wird Fairness gegenüber langsameren TCP-Flows sichergestellt.
    </p>

    <div class="text-center my-3">
      <img :src="imgUrlTcpGrowth" alt="Wtcp(t) - TCP Wachstum" class="img-fluid" style="max-width: 460px;" />
      <p class="text-muted mt-1">Abbildung: TCP-Wachstumsfunktion (Figure_0904.png)</p>
    </div>

    <p>
      Diese Funktion basiert auf der AIMD-Formel: Sie wächst linear mit der Zeit t, angepasst durch β und RTT.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      CUBIC は ACK を受信するたびに、自身が「TCP領域」にいるかを判定します。
      具体的には、現在の輻輳ウィンドウ <code>cwnd</code> が、標準的な TCP（AIMD）で同時点に到達すると予想される値
      <code>W<sub>tcp</sub>(t)</code> より小さいかどうかを比較します。
    </p>
    <p>
      <code>cwnd &lt; W<sub>tcp</sub>(t)</code> の場合、CUBIC は TCP モードに入り、TCP と同様の線形成長に従って増加します。
      これは TCP Reno などとの<strong>公平性（フェアネス）を保つため</strong>の仕組みです。
    </p>

    <div class="text-center my-3">
      <img :src="imgUrlTcpGrowth" alt="Wtcp(t) - TCPの成長関数" class="img-fluid" style="max-width: 460px;" />
      <p class="text-muted mt-1">図：TCP の成長関数 W<sub>tcp</sub>(t)（Figure_0904.png）</p>
    </div>

    <p>
      この式は AIMD に基づいており、時間 <code>t</code> に対して線形に成長します。  
      成長率は乗数減衰係数 <code>β</code> と往復遅延時間 <code>RTT</code> により調整されます。
    </p>
  </div>
</div>


<!-- Thema: Warum wächst das CUBIC-Fenster im konkaven Bereich langsam? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum wächst das CUBIC-Fenster im konkaven Bereich langsam?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    なぜ CUBIC は凹型領域（W<sub>max</sub> に近づくまで）でウィンドウの増加をゆるやかにするのか？
  </p>
</div>

<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Wenn CUBIC sich nicht im TCP-Modus befindet und das aktuelle Fenster kleiner als W<sub>max</sub> ist, operiert es im sogenannten konkaven Bereich.
      In diesem Bereich nähert sich die Fenstergröße vorsichtig dem zuletzt erreichten Maximum, da dort die letzte Überlastung (Verlustereignis) aufgetreten ist.
    </p>
    <p>
      Die Steigerung des cwnd erfolgt gemäß der kubischen Wachstumsfunktion, ist aber anfangs langsam, um Stabilität zu sichern.
    </p>

    <!-- Abbildung: Differenz für cwnd-Steigerung -->
    <div class="text-center my-3">
      <img :src="imgUrlDeltaCubic" alt="CUBIC Differenz W(t+RTT) - cwnd" class="img-fluid" style="max-width: 350x;" />
      <p class="text-muted mt-1">Abbildung: Fensterzuwachs im konkaven Bereich</p>
    </div>

    <p>
      Dieses Verhalten verhindert zu aggressive Erhöhung in der Nähe von W<sub>max</sub>, wo Verluste am wahrscheinlichsten sind.
      Erst nach Erreichen von W<sub>max</sub> tritt CUBIC in den konvexen Bereich ein.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      CUBIC が TCPモードでなく、かつ現在の cwnd が W<sub>max</sub> よりも小さい場合、  
      アルゴリズムは<strong>凹型領域（Concave Region）</strong>で動作していると見なされます。
    </p>
    <p>
      この領域では、前回のパケット損失が W<sub>max</sub> で発生していた可能性が高いため、ウィンドウサイズの成長は慎重に進みます。
      成長は三次関数 W(t) に基づきますが、増加量は緩やかです。
    </p>

    <!-- 図：差分 ΔW(t+RTT) - cwnd -->
    <div class="text-center my-3">
      <img :src="imgUrlDeltaCubic" alt="CUBIC ウィンドウ差分" class="img-fluid" style="max-width: 350px;" />
      <p class="text-muted mt-1">図：凹型領域におけるウィンドウ差分</p>
    </div>

    <p>
      この設計により、W<sub>max</sub> 近辺での輻輳再発を防ぎつつ、帯域の最大活用に向けた探索が可能となります。
      W<sub>max</sub> に到達すると、CUBIC は次に凸型領域に移行します。
    </p>
  </div>
</div>


<!-- Thema: Wie sucht CUBIC nach einer neuen maximalen Fenstergröße? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Wie sucht CUBIC nach einer neuen maximalen Fenstergröße?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    CUBIC は W<sub>max</sub> を超えたあと、どのようにして新たな最大ウィンドウサイズを探すのか？
  </p>
</div>

<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Sobald CUBICs Fenstergröße W<sub>max</sub> überschreitet, verlässt der Algorithmus das Plateau und betritt den <strong>konvexen Bereich</strong> der kubischen Funktion.
    </p>
    <p>
      In dieser Phase beginnt das Fensterwachstum langsam und beschleunigt sich progressiv, um vorsichtig nach einer neuen Bandbreitengrenze zu suchen.
      Dieser Prozess wird auch als <em>Max Probing</em> bezeichnet.
    </p>

    <div class="text-center my-3">
      <img :src="imgUrlDeltaCubic" alt="CUBIC Fensterzuwachs im konvexen Bereich" class="img-fluid" style="max-width: 480px;" />
      <p class="text-muted mt-1">Abbildung: Fensterdifferenz auch im konvexen Bereich genutzt（Figure_0905.png）</p>
    </div>

    <p>
      Das Wachstum erfolgt weiterhin mit der kubischen Formel.  
      Durch langsamen Start wird verhindert, dass das Netzwerk plötzlich überlastet wird.
      Erst wenn keine Verluste auftreten, wird das Fenster aggressiver erhöht.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      CUBIC のウィンドウサイズが W<sub>max</sub> を超えると、関数の形は <strong>凸型領域（Convex Region）</strong> に入り、
      成長の加速度が徐々に上昇していきます。
    </p>
    <p>
      このフェーズは「<em>最大値探索（Max Probing）</em>」とも呼ばれ、ネットワークがより高い帯域を扱えるかを慎重に確認する段階です。
    </p>

    <div class="text-center my-3">
      <img :src="imgUrlDeltaCubic" alt="CUBIC 窓サイズ差分 凸型領域" class="img-fluid" style="max-width: 480px;" />
      <p class="text-muted mt-1">図：凸型領域におけるウィンドウ差分（Figure_0905.png）</p>
    </div>

    <p>
      成長関数自体は凹型領域と同じですが、W<sub>max</sub> より大きい領域ではウィンドウがゆっくりと、そして段階的に速く増加していきます。
      これにより、安定性を損なうことなく新しい最大帯域を発見できます。
    </p>
  </div>
</div>

<!-- Thema 8-x -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Was bedeutet "Fast Convergence" im TCP-CUBIC-Protokoll?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    TCP CUBICにおける「Fast Convergence（高速収束）」とは何か？
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Fast Convergence ist eine Heuristik im TCP-CUBIC-Protokoll, die auf eine schnellere Anpassung an sich ändernde Netzwerkbedingungen abzielt.
    </p>
    <p>
      Sobald ein Paketverlust auftritt, wird überprüft, ob das aktuelle cWnd kleiner als der vorherige W<sub>max</sub> ist.
    </p>
    <p>
      Ist das der Fall, geht CUBIC davon aus, dass ein neuer Flow dem Netzwerk beigetreten ist, und reduziert W<sub>max</sub> zusätzlich.
    </p>
    <p>
      Dadurch wird das cwnd-Wachstum verlangsamt und mehr Bandbreite für neue Verbindungen freigegeben.
      Dies verbessert die <strong>Fairness bei Zustiegsereignissen</strong>.
    </p>
    <p>
      Fast Convergence erhöht somit die Effizienz und Gerechtigkeit in hochdynamischen Netzwerken mit mehreren konkurrierenden Flows.
    </p>
    <p>
      Beispiel: Zwei CUBIC-Flows teilen sich eine Verbindung. Wenn ein neuer dritter Flow startet, verursacht dies kurzfristig Paketverluste bei den bestehenden Flows.
    </p>
    <p>    
      Fast Convergence erkennt, dass das aktuelle cwnd kleiner als das vorherige W<sub>max</sub> ist, und reduziert W<sub>max</sub>, um dem neuen Flow schneller Bandbreite zu ermöglichen.
    </p>
    <p>
      Wenn man das ursprüngliche W<sub>max</sub> beibehält, wächst das cwnd aggressiv zurück zur alten Grenze, obwohl sich die Netzwerkbedingungen geändert haben könnten.  
      Das kann zu wiederholten Paketverlusten und <strong>anhaltender Überlastung</strong> führen.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      Fast Convergence（高速収束）は、TCP CUBIC がネットワーク環境の変化に素早く適応するために導入されたヒューリスティックな手法です。
    </p>
    <p>
      パケット損失が検出されると、現在の cwnd（輻輳ウィンドウ）が以前の W<sub>max</sub> より小さいかがチェックされます。
    </p>
    <p>
      小さい場合は、新しいデータフローがネットワークに参加したと推定し、W<sub>max</sub> をさらに減少させて帯域を解放します。
    </p>
    <p>
      これにより cwnd の成長が抑えられ、新規フローが公平に帯域を利用できるようになります。
    </p>
    <p>
      Fast Convergence は、競合する複数のフローが混在するダイナミックな環境でも、公平性と安定性を保つのに有効です。
    </p>
    <p>
      例：2本のCUBICフローが同じリンクを共有しているときに、新たに3本目のフローが開始されると、一時的に既存フローでパケット損失が発生します。
    </p>
    <p>  
      Fast Convergence は現在の cwnd が以前の W<sub>max</sub> より小さいことを検知し、新規フローが参加したと判断して W<sub>max</sub> を下げ、帯域を速やかに譲る動作を行います。
    </p>
    <p>
      もし以前の W<sub>max</sub> を維持したまま cwnd を成長させると、ネットワーク状況が変化している可能性を無視して、過剰な増加が行われます。  
      その結果、<strong>再度の輻輳や連続的なパケット損失</strong>を引き起こしやすくなります。
    </p>
  </div>
</div>

<!-- Thema: Warum wählt CUBIC einen kleinen Multiplikationsfaktor β? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum wählt CUBIC einen kleinen Multiplikationsfaktor β?  
    Was sind die Vor- und Nachteile dieser Entscheidung?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    CUBIC はなぜ乗数減衰係数 β に小さい値（0.2）を選んでいるのか？  
    その利点と設計上の意味とは？
  </p>
</div>

<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Bei Paketverlusten reduziert CUBIC die Fenstergröße um einen Faktor β.  
      Standardmäßig ist <strong>β = 0.2</strong> – deutlich kleiner als bei klassischem TCP (β = 0.5).
    </p>
    <p>
      Diese Wahl ist bewusst: Ein kleiner β-Wert führt zu einer <strong>sanfteren Reduktion</strong> der Fenstergröße,  
      was zu einer höheren <strong>Stabilität</strong> führt – insbesondere bei unregelmäßigen Verlusten oder auf hochkapazitiven Pfaden.
    </p>
    <p>
      Zwar bedeutet ein kleiner β auch eine <strong>langsamere Konvergenz</strong>, wenn sich die verfügbare Bandbreite plötzlich ändert,  
      aber laut <em>Ha et al. (2008)</em> überwiegt der Stabilitätsgewinn in den meisten realen Netzwerken.
    </p>
    <p>
      Eine adaptive Einstellung von β könnte theoretisch schneller reagieren,  
      würde jedoch die mathematische Analyse erschweren und könnte die Robustheit gefährden.
      Daher bleibt β konstant – ein bewusster Kompromiss.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      パケット損失が発生したとき、CUBIC はウィンドウサイズを係数 <strong>β</strong> だけ乗算的に減少させます。
      CUBIC ではこの値を <code>β = 0.2</code> に設定しており、これは TCP Reno の <code>β = 0.5</code> よりも小さい値です。
    </p>
    <p>
      この設定は、意図的に<strong>緩やかなウィンドウ減少</strong>を実現するもので、特にパケットロスが一時的・非連続的な場合でも、  
      通信の安定性を維持しやすくなります。これは高速・大容量ネットワークにおいて特に有利です。
    </p>
    <p>
      もちろん、β を小さくすると帯域が大きく減ったときの回復はやや遅くなります（収束の遅さ）が、  
      著者 <em>Ha et al. (2008)</em> はそれを受け入れてでも<strong>安定性を重視すべき</strong>だと述べています。
    </p>
    <p>
      β を動的に変化させる方式も理論上可能ですが、プロトコルの解析が複雑化し、安定性にも悪影響を与える可能性があるため、  
      現状では固定値とする設計が最適とされています。
    </p>
  </div>
</div>
<!-- Thema: Warum folgt die CUBIC-Wachstumsfunktion einer konkav-konvexen Form? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum folgt die CUBIC-Wachstumsfunktion einer konkav-konvexen Form?  
    Welche Bedeutung hat das Verhalten um W<sub>max</sub> herum?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    なぜ CUBIC のウィンドウ成長関数は凹型から凸型へと遷移する形になっているのか？  
    特に W<sub>max</sub> 周辺での挙動にはどのような意味があるのか？
  </p>
</div>

    <div class="text-center my-3">
      <img :src="imgUrl0906" alt="CUBIC Wachstum konkav-konvex" class="img-fluid" style="max-width: 520px;" />
      <p class="text-muted mt-1">Abbildung: CUBIC-Wachstumsverlauf (Figure_0906.png)</p>
    </div>

<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Die dargestellte Funktion zeigt das typische Wachstumsmuster der CUBIC-Fenstergröße:
      <strong>zunächst langsam (konkav), dann schneller (konvex)</strong>.
    </p>
    <p>
      Dieses Verhalten ergibt sich aus der kubischen Funktion <code>W(t) = C(t−K)³ + W<sub>max</sub></code>,  
      wobei <em>K</em> der Wendepunkt ist (W<sub>max</sub>).
    </p>
    <p>
      Links vom Wendepunkt nähert sich das Fenster vorsichtig dem Maximum (Steady-State Behavior).  
    </p>
    <p>
      Rechts davon beginnt CUBIC das sogenannte <strong>Max Probing</strong> – eine beschleunigte Suche nach einer höheren möglichen Kapazität.
    </p>
    <p>
      Dadurch bleibt das Protokoll stabil um W<sub>max</sub> (weniger Verluste),  
      kann aber bei freier Bandbreite schnell wachsen.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      この図は CUBIC のウィンドウ成長関数が持つ特徴的な形状、  
      すなわち「<strong>最初はゆるやか（凹型）、その後は急速（凸型）</strong>」に成長する様子を示しています。
    </p>
    <p>
      このような成長曲線は、CUBIC の三次関数 <code>W(t) = C(t−K)³ + W<sub>max</sub></code> に由来し、  
      <strong>W<sub>max</sub> の時点を境に「成長の性質」が変化</strong>するのが特徴です。
    </p>
    <p>
      左側（凹型）の領域では、CUBIC は <strong>Steady-State Behavior（定常的な動作）</strong> として、  
      過去に輻輳が発生した最大値 W<sub>max</sub> に対し、慎重に近づこうとします。
    </p>
    <p>
      一方、W<sub>max</sub> を超えると <strong>Max Probing（最大帯域の探索）</strong> が始まり、  
      より大きな帯域を探るためにウィンドウは加速的に拡大します。
    </p>
    <p>
      このようにして CUBIC は、W<sub>max</sub> 周辺では安定性を保ちつつ、  
      帯域が空いている場合にはすばやく拡張できるよう設計されています。
    </p>

  </div>
</div>

<!-- Thema: Warum ist der TCP-Modus in CUBIC nur eine Ausnahme und kein Standardverhalten? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum ist der TCP-Modus in CUBIC nur eine Ausnahme und kein Standardverhalten?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    なぜ CUBIC における「TCPモード」は標準的な動作ではなく、例外的な補助機能とされているのか？
  </p>
</div>

<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Der sogenannte <strong>TCP-Modus</strong> in CUBIC ist kein normaler Bestandteil der kubischen Wachstumskurve,
      sondern ein <strong>Ausnahmefall</strong>, der nur dann aktiviert wird, wenn Fairness gegenüber klassischen TCP-Flows (z.&nbsp;B. Reno) erforderlich ist.
    </p>
    <p>
      Bei jedem empfangenen ACK prüft CUBIC, ob das aktuelle <code>cwnd</code> kleiner ist als die Vergleichsgröße <code>W<sub>tcp</sub>(t)</code>  
      – also das Fenster, das ein TCP-Reno-Fluss zum selben Zeitpunkt hätte.
    </p>
    <p>
      Ist das der Fall, schaltet CUBIC temporär in den TCP-Modus und übernimmt das lineare Wachstum gemäß AIMD.
    </p>
    <p>
      Sobald das eigene <code>cwnd</code> wieder über <code>W<sub>tcp</sub>(t)</code> liegt, kehrt CUBIC zurück zur normalen kubischen Funktion.
    </p>
    <p>
      Fazit: Der TCP-Modus ist ein <strong>Fairness-Mechanismus</strong>, kein integraler Bestandteil des Algorithmus.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      CUBIC における <strong>「TCPモード」</strong> は、標準の動作である三次関数による成長とは異なり、  
      あくまで <strong>例外的なフェアネス対策モード</strong> として位置付けられています。
    </p>
    <p>
      CUBIC は ACK を受け取るたびに、現在の cwnd が TCP Reno が同じ時間で達していると想定される値  
      <code>W<sub>tcp</sub>(t)</code> よりも小さいかを判定します。
    </p>
    <p>
      もし cwnd が <code>W<sub>tcp</sub>(t)</code> より小さい場合は、CUBIC は一時的に <strong>TCPモード</strong> に入り、  
      AIMD（加算増加・乗算減少）に従った線形的な成長を行います。
    </p>
    <p>
      これは、Reno などの古い TCP フローと帯域を公平に分け合うための仕組みです。
    </p>
    <p>
      自身の cwnd が W<sub>tcp</sub>(t) を再び上回ると、CUBIC は通常の成長関数（W(t)）に戻ります。
      このように、TCPモードはあくまで一時的な補助モードであり、<strong>CUBIC 本来の成長設計には含まれていません</strong>。
    </p>
  </div>
</div>


  </div>
</template>

<script setup>
import imgUrlAimdAvg from '@/assets/lecture/lecture03/Figure_0903.png';
import imgUrlTcpGrowth from '@/assets/lecture/lecture03/Figure_0904.png';
import imgUrlDeltaCubic from '@/assets/lecture/lecture03/Figure_0905.png';
import imgUrl0906 from '@/assets/lecture/lecture03/Figure_0906.png';
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
