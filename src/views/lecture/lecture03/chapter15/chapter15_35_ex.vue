<template>
  <div class="container my-4">
    <h3 class="mb-4">Distance Vector Routing – Grundkonzepte und Bedeutung</h3>

<!-- Thema 7-1 -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum funktioniert Distance Vector Routing auch ohne globale Sicht?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    なぜDistance Vectorルーティングはネットワーク全体を知らなくても機能するのか？
  </p>
</div>
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Distance Vector Routing basiert auf dem Prinzip der lokalen Information:  
      Jeder Router kennt nur seine direkten Nachbarn und die Kosten zu ihnen.  
      Diese Informationen teilt er regelmäßig mit diesen Nachbarn.  
      Jeder Knoten baut sich damit schrittweise eine Vorstellung vom gesamten Netzwerk auf,  
      indem er die empfangenen Distanzinformationen vergleicht und aktualisiert.  
      So entsteht nach mehreren Austauschrunden eine konsistente Routing-Tabelle.  
      Diese dezentrale Methode macht Distance Vector besonders geeignet für große Netze,  
      in denen eine zentrale Sicht zu komplex oder unpraktisch wäre.
    </p>
  </div>
  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      Distance Vector（距離ベクトル）ルーティングでは、  
      各ルーターは直接接続された隣接ノードとの距離（コスト）だけを知っています。  
      この情報を定期的に隣接ノードと交換することで、  
      それぞれのルーターがネットワーク全体の経路情報を段階的に学習していきます。  
      一度にすべてを知るのではなく、やりとりを重ねて正確な情報に近づくのが特徴です。  
      これにより、集中管理を行わずとも最短経路の決定が可能になります。  
      特に大規模なネットワークにおいては、分散的なこの方式が有効です。
    </p>
  </div>
</div>

<!-- Thema 7-2 -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum ist die Update-Formel D(x)(y) = min {c(x,v) + D(v)(y)} zentral?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    なぜ更新式 D(x)(y) = min{c(x,v) + D(v)(y)} がDistance Vectorの核となるのか？
  </p>
</div>
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Diese Formel erlaubt es einem Router x, für jedes Ziel y den kostengünstigsten Pfad zu bestimmen.  
      Dazu prüft er für jeden Nachbarn v, ob der Weg über v kürzer ist als bisher angenommen.  
      Die Berechnung basiert auf zwei Werten:  
      – Die direkte Verbindungskosten von x zu v (c(x,v))  
      – und die aktuell bekannte Distanz von v zu y (D(v)(y)).  
      Die Summe ergibt eine alternative Route, die mit bisherigen Optionen verglichen wird.  
      Der kleinste dieser Werte wird gespeichert.  
      So konvergiert das System zu einem Minimum, ohne globale Koordination.
    </p>
  </div>
  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      この更新式は、ノードxが目的地yまでの最短経路を見つけるために用います。  
      各隣接ノードvについて、まずxからvまでのリンクコスト（c(x,v)）と、  
      vが持っているyへの距離情報（D(v)(y)）を合計します。  
      この合計値がxの持つ既存のD(x)(y)より小さければ更新を行います。  
      すべての隣接ノードについてこの計算を繰り返し、  
      最小値を選んでテーブルを更新していくことで、  
      最短経路情報が自然に収束します。  
      この「分散的かつ局所的」な計算がDistance Vectorの中核です。
    </p>
  </div>
</div>
<!-- Thema 7-3 -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum sendet ein Router seinen Vektor nur bei Änderungen?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    なぜDistance Vectorでは、ルーターは情報が変化したときだけベクトルを送信するのか？
  </p>
</div>
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Ein Router sendet seinen Distanzvektor nur dann erneut an seine Nachbarn,  
      <span style="color: red;">wenn sich ein Eintrag in seiner Routing-Tabelle verändert hat.</span>  
      <br/>Das spart unnötige Bandbreite und Rechenaufwand im gesamten Netzwerk.  
      Diese Optimierung nennt man <span style="color: red;">„Triggered Updates“</span> – Updates bei Bedarf.  
      Sie machen das Protokoll effizienter und skalierbarer.  
      Würde jeder Router seine Vektoren ständig verschicken,  
      würde das Netz überflutet mit Informationen, auch wenn sich nichts geändert hat.  
      Deshalb ist selektive Kommunikation bei DV so wichtig.
    </p>
  </div>
  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      Distance Vectorルーティングでは、<span style="color: red;">テーブルに変更があったときのみ</span>  
      ルーターが隣接ノードへ距離ベクトルを再送します。  
      <br/>これにより、ネットワーク全体での帯域の消費や処理の負荷を大幅に減らすことができます。  
      この方式は<span style="color: red;">「トリガー付き更新（triggered updates）」</span>と呼ばれ、  
      必要なときにだけ通信を行うことで、プロトコルの効率性を高めます。  
      もし変化がないのに常に送信していた場合、  
      無駄なトラフィックが発生し、ネットワークが過負荷になる恐れがあります。  
      そのため「変化があった時のみ送る」という設計は非常に重要です。
    </p>
  </div>
</div>

<!-- Thema 7-4 -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum ist die Konvergenz im Distance-Vector-Protokoll so wichtig?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    Distance Vectorにおいて、なぜ収束性（コンバージェンス）が重要なのか？
  </p>
</div>
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Konvergenz bedeutet, dass sich alle Routing-Tabellen im Netzwerk stabilisieren –  
      keine Werte ändern sich mehr. Dies ist entscheidend für die Zuverlässigkeit:  
      Nur wenn alle Knoten korrekte Routen kennen, funktionieren Datenübertragungen sicher.  
      Langsame Konvergenz führt zu inkonsistenten Tabellen, Umwegen oder sogar Routing-Loops.  
      Je schneller das Netzwerk konvergiert, desto besser reagiert es auf Veränderungen.  
      Besonders bei Ausfällen oder Topologieänderungen ist schnelle Stabilität unerlässlich.  
      Protokolle wie RIP oder BGP setzen daher auf Mechanismen, um Konvergenz zu beschleunigen.  
    </p>
  </div>
  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      コンバージェンス（収束）とは、ネットワーク内のすべてのルーターが最適な経路を学習し、  
      それ以上テーブルが更新されなくなった安定状態を意味します。  
      この状態になって初めて、すべての通信が正しい経路を通って安定に届きます。  
      収束が遅いと、異なるルーターが矛盾した経路情報を持ち、  
      通信が遠回りになったり、ループが発生する危険があります。  
      特にトポロジの変化や障害発生時には、素早い収束がネットワークの信頼性に直結します。  
      そのため、多くのプロトコルは高速な収束を促す仕組みを持っています。
    </p>
  </div>
</div>

<!-- Thema 8-1 -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum ist das Count-to-Infinity-Problem in Distance Vector Routing kritisch?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    Distance Vectorにおける「Count-to-Infinity」問題とは何であり、なぜ深刻なのか？
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>

    <p>
      Das Count-to-Infinity-Problem tritt auf, <span style="color: red;">wenn sich ein Linkkostenwert plötzlich stark erhöht</span> – z.&nbsp;B. von 4 auf 60 –  
      und Router weiterhin annehmen, dass ein alternativer Pfad mit alten Kosten noch existiert.
    </p>

    <p>
      Beispiel: y erkennt, dass sein direkter Pfad zu x nun 60 kostet, glaubt aber, dass z weiterhin mit Kosten 5 zu x gelangt.  
      z wiederum denkt dasselbe über y. So aktualisieren beide ihre Routingtabellen auf Basis veralteter Informationen.
    </p>

    <p>
      In jeder Iteration steigt der geschätzte Pfadwert um 1: 6 → 7 → 8 → … bis zur "Unendlichkeit" (z.&nbsp;B. 50 oder 16 bei RIP).
    </p>

    <p>
      Dieses „Hochzählen“ führt zu Routing-Loops und langer Konvergenzzeit. Die schlechte Nachricht  
      (dass der Link teurer geworden ist) verbreitet sich nur sehr langsam im Netzwerk.
    </p>

    <p>
      Wäre z.&nbsp;B. c(y,x) = 10,000 und c(z,x) = 9,999, müsste das Protokoll 10,000 Schritte durchlaufen,  
      um zu erkennen, dass der alte Weg nicht mehr optimal ist – daher der Name „Count-to-Infinity“.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>

    <p>
      Count-to-Infinity（無限大までのカウント）問題は、<span style="color: red;">あるリンクの<strong>コストが急激に増加した</strong>場合に発生</span>します。  
      例えば、xとyのリンクコストが4から60に変わったとき、ルーターは古い経路情報を信じ続けてしまいます。
    </p>

    <p>
      yは「z経由でxへはまだコスト5で行ける」と考え、zも「yが知っているはずだ」と信じます。  
      こうしてお互いに古い情報を元にルーティングテーブルを更新し合い、ループが始まります。
    </p>

    <p>
      距離は「6 → 7 → 8 → …」と1ずつ増えていき、最終的にRIPなどでは16、他では50やそれ以上に達するまで続きます。
    </p>

    <p>
      このように、<strong>「悪いニュース（リンクの劣化）」がネットワーク内で非常に遅く伝播</strong>するため、  
      長時間にわたるルーティングエラーとループが発生します。
    </p>

    <p>
      たとえば c(y,x) = 10,000、c(z,x) = 9,999 という状況であれば、  
      1ずつ増加して 10,000回以上更新が必要となり、現実的に利用不能になります。  
      これが「Count-to-Infinity（無限大まで数える）問題」と呼ばれる理由です。
    </p>
  </div>
</div>


<!-- Thema: Count-to-Infinity – Beispiel mit Linkkostenänderung -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Wie entsteht das Count-to-Infinity-Problem bei einer Erhöhung der Linkkosten?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    リンクコストが増加したとき、どのようにしてCount-to-Infinity問題が発生するのか？
  </p>
</div>

<!-- アルゴリズム画像 -->
<div class="text-center mt-4">
  <img :src="algorithmImage" alt="Distance Vector Algorithm" class="img-fluid rounded" />
  <p class="text-muted mt-2">Abbildung: Figure 5.7 – Linkkostenänderung zwischen x und y von 4 auf 60</p>
</div>

<!-- Erklärung -->
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>

    <p>
      Bevor sich der Linkkost von x nach y ändert, kennt z einen Pfad zu x über y.  
      Die Kosten ergeben sich aus c(z, y) = 1 und Dy(x) = 4, also Dz(x) = 1 + 4 = 5.
    </p>

    <p>
      Diese Information ist korrekt – <strong>zum Zeitpunkt vor der Änderung</strong> – und wurde von y an z übermittelt.  
      z speichert diesen Pfad in seiner Routing-Tabelle.
    </p>

    <p>
      Nach der Erhöhung des Links c(x, y) von 4 auf 60 erkennt y diese Änderung.  
      Da y selbst keinen neuen besseren Weg kennt, prüft es stattdessen die Möglichkeit über z:  
      Dy(x) = min(60, c(y, z) + Dz(x)) = min(60, 1 + 5) = 6.
    </p>

    <p>
      Diese neue Zahl 6 basiert jedoch auf <strong>veralteten Informationen</strong> – Dz(x) = 5 stammt noch von früher.
    </p>

    <p>
      Nun informiert y den Nachbarn z über diesen neuen Pfad zu x mit Kosten 6.  
      z denkt dann: Dz(x) = min(50, 1 + 6) = 7 – und sendet dies an y zurück.
    </p>

    <p>
      So beginnt ein Ping-Pong-Spiel zwischen z und y, wobei sich die Distanz jedes Mal um 1 erhöht,  
      bis der Wert 50 erreicht (entspricht direkter Verbindung z → x).
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>

    <p>
      リンク変更前、zはxへの経路を「z → y → x」として記録しており、  
      c(z, y) = 1、Dy(x) = 4 だったため Dz(x) = 1 + 4 = 5 となっていました。
    </p>

    <p>
      この情報は、yがxとまだ直接リンク（コスト4）を持っていたころにzへ伝えたものです。  
      zはこれを信じて、ルーティングテーブルに「y経由でxへコスト5」と登録します。
    </p>

    <p>
      その後、xとyのリンクコストが60に上昇します。yはこれを検知しますが、  
      「z経由のルートがまだ有効かもしれない」と思い込み、Dy(x) = min(60, 1 + 5) = 6 と計算します。
    </p>

    <p>
      yはzに「xまでコスト6で到達できる」と伝えます。zはこれを受け取り、  
      Dz(x) = min(50, 1 + 6) = 7 と計算し、再びyへ知らせます。
    </p>

    <p>
      こうしてxへの経路コストは「6 → 7 → 8 → …」と増加していき、  
      最終的に 50（zからxの直接コスト）を超えて初めて不正が判明します。
    </p>
  </div>
</div>


<!-- Thema 8-2 -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Wie hilft Poisoned Reverse gegen das Count-to-Infinity-Problem?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    「Poisoned Reverse」はCount-to-Infinity問題にどう対応するのか？
  </p>
</div>
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      <span style="color: red;">Poisoned Reverse ist eine einfache Technik, um Count-to-Infinity zu vermeiden</span>:  
      Wenn ein Router x erkennt, dass <span style="color: red;">sein kürzester Weg zu y über Nachbar v führt</span>,  
      dann teilt er v mit, dass y aus seiner Sicht über v „nicht erreichbar“ ist (Distanz = ∞).  
      Das verhindert, dass v denkt, x habe eine alternative Route zu y.  
      So wird das fehlerhafte Rücklernen unterbrochen.  
      Diese Methode funktioniert gut in kleinen Netzen, hat aber Grenzen bei komplexeren Topologien.  
      Dennoch ist sie ein fester Bestandteil vieler Distance-Vector-Protokolle wie RIP.
    </p>
  </div>
  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      <span style="color: red;">「Poisoned Reverse（逆方向への毒）」</span>は、Count-to-Infinity問題の対策として使われる手法です。  
      あるルーターxが、宛先yへ行く最短経路が隣接ノードv経由であると認識した場合、  
      xはvに対して<span style="color: red;">「自分からyへは行けない（距離＝∞）」と通知</span>します。  
      これにより、vがxを経由してyに到達できると誤解するのを防ぎます。  
      情報の「逆流」による誤った更新を遮断するため、ルーティングループを回避できます。  
      小規模なネットワークでは効果的ですが、大規模ネットでは限界もあります。  
      それでも、RIPなど多くのDistance Vectorプロトコルで使われています。
    </p>
  </div>
</div>

<!-- Thema: Beispielhafte Erklärung von Poisoned Reverse -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Wie funktioniert Poisoned Reverse? – Erklärung anhand eines konkreten Beispiels
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    Poisoned Reverse はどのように機能するのか？具体的な例を用いた解説
  </p>
</div>

<!-- Abbildung -->
<div class="text-center mb-4">
  <img :src="image" alt="Poisoned Reverse Beispiel" class="img-fluid rounded border" />
  <p class="text-muted mt-2">Abbildung: Beispiel – Linkkostenänderung und Anwendung von Poisoned Reverse</p>
</div>

<!-- Erklärung -->
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>

    <p>
      Im dargestellten Netzwerk sind x, y und z über direkte Links verbunden.  
      Anfangs ist der Link x–y günstig (Kosten 4) und z kennt x nur über y.  
      z speichert daher: „x ist über y mit Kosten 5 erreichbar“ (1 + 4).
    </p>

    <p>
      Dann erhöht sich der Linkkostenwert c(x, y) stark – z.&nbsp;B. von 4 auf 60.  
      y erkennt die Änderung, kennt aber keinen besseren Pfad und belässt Dy(x) = 60.
    </p>

    <p>
      y informiert z über den neuen Wert. z merkt: Der bisherige Pfad über y ist jetzt teuer,  
      aber z selbst hat eine direkte Verbindung zu x mit Kosten 50 → besser als 1 + 60 = 61.
    </p>

    <p>
      z aktualisiert also seinen Pfad zu x direkt und setzt Dz(x) = 50.  
      Damit endet aber das Routing über y. Das ist entscheidend für Poisoned Reverse.
    </p>

    <p>
      Jetzt erkennt z: „Ich gehe nicht mehr über y zu x.“ Daher kann z y die Wahrheit sagen: Dz(x) = 50.  
      Und falls z stattdessen wieder über y routen würde, müsste es lügen: Dz(x) = ∞.
    </p>

    <p>
      Diese Technik verhindert, dass y z als Weg zu x auswählt, wenn z selbst über y geht –  
      so entsteht keine Routing-Schleife. Poisoned Reverse funktioniert also wie eine präventive Schutzmaßnahme.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>

    <p>
      図ではノードx・y・zが三角形に接続されています。初期状態では、xとyはコスト4、  
      yとzはコスト1で接続されており、zはxに到達するには「z → y → x（コスト1+4=5）」を選んでいます。
    </p>

    <p>
      ここでリンクx–yのコストが60に上がったとします。yはそれに気づき、自分のDy(x)を60に更新します。  
      しかしyは他の経路を知らないため、それが最良だと思い込んでいます。
    </p>

    <p>
      yがその新しい距離情報（60）をzに送ると、zは「y経由だと1+60=61」になることを知ります。  
      一方、zにはxへの直接リンク（コスト50）があるため、それに切り替えます。Dz(x)=50 です。
    </p>

    <p>
      ここでポイント：zは今や「yを通らずにxに行く」ルートを選んだので、yに正直に「Dz(x)=50」と伝えて構いません。
    </p>

    <p>
      しかしもし、zがまだ「y経由でxへ行っている」状態なら、yに「Dz(x)=∞」と嘘をつきます。  
      なぜなら、yが「zがxへの経路を知っている」と思ってzを使い始めると、ループが発生するからです。
    </p>

    <p>
      このように、Poisoned Reverseは「ループの原因となる経路を使っているときは、あえて『知らない』と報告する」ことで  
      ルーティングループを未然に防ぎます。二つの隣接ノード間においては非常に効果的な対策です。
    </p>
  </div>
</div>

<!-- Thema: Warum braucht man Next-Hop-Informationen für Poisoned Reverse? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum ist die Information über den Next Hop für Poisoned Reverse erforderlich?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    Poisoned Reverse において「経由ノード（next hop）」の情報がなぜ必要なのか？
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>

    <p>
      Das Prinzip von <strong>Poisoned Reverse</strong> lautet:  
      Wenn ein Router zum Ziel x über seinen Nachbarn A routet, dann meldet er A: „Ich kenne keinen Pfad zu x“ (d.h. Abstand = ∞).
    </p>

    <p>
      Damit dieses Verhalten funktioniert, muss der Router wissen, <strong>über welchen Nachbarn er zu x routet</strong>.  
      Diese Information nennt man „Next Hop“.
    </p>

    <p>
      Ohne diese Angabe könnte der Router nicht erkennen, ob der Pfad zu x über A oder über einen anderen Nachbarn verläuft.
    </p>

    <p>
      Nur wenn bekannt ist: „Mein Next Hop zu x ist A“, kann man A gegenüber den Pfad „vergiften“,  
      um Routing-Loops zu verhindern.
    </p>

    <p>
      Daher speichern Distance-Vector-Router nicht nur die Distanz zu jedem Ziel,  
      sondern auch den Next Hop – also denjenigen Nachbarn, über den der Pfad läuft.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>

    <p>
      <strong>Poisoned Reverse</strong> の基本的な動作は次の通りです：  
      「ある目的地xへ行くのに隣接ノードAを経由しているなら、Aには『xには行けない（∞）』と伝える」。
    </p>

    <p>
      この「毒付け」処理を行うには、<strong>自分がxに行くためにどのノードを使っているか（next hop）</strong>を  
      正確に把握していなければなりません。
    </p>

    <p>
      なぜなら、自分の最短経路がA経由なのか、それとも別のB経由なのかによって、  
      Aに通知すべき情報がまったく変わってくるからです。
    </p>

    <p>
      もしnext hopの情報がなければ、「どの相手に∞を伝えるべきか」の判断ができず、  
      Poisoned Reverse は正しく機能しません。
    </p>

    <p>
      そのため Distance Vector では、単に距離だけでなく「<strong>どの隣接ノード経由か</strong>」という情報も  
      セットで管理することが必要になるのです。
    </p>
  </div>
</div>

<!-- Thema 8-3 -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Welche Grenzen hat das Distance Vector Routing im Vergleich zu Link-State?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    Distance VectorルーティングはLink-Stateと比べてどのような限界があるのか？
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>

    <p>
      Distance Vector Protokolle wie RIP basieren darauf, dass jeder Router nur seinen Nachbarn die eigenen Distanzwerte zu allen Zielen mitteilt.  
      Jeder Knoten kennt also nur die <strong>Entfernung</strong> (z.B. Anzahl der Hops), aber nicht den vollständigen Netzwerkgraphen.
    </p>

    <p>
      Diese eingeschränkte Sicht führt zu mehreren Problemen:
    </p>  
      <ul>
      <li>Schleifen können entstehen, weil Router nur indirekte Informationen erhalten  </li>
      <li>Änderungen wie Linkausfälle verbreiten sich langsam („bad news travels slowly“)  </li>
      <li>Der Count-to-Infinity-Effekt tritt auf, weil inkorrekte Pfade schrittweise hochgezählt werden</li>
      </ul>

    <p>
      Link-State-Protokolle wie OSPF funktionieren grundlegend anders: Jeder Router sammelt Informationen über alle seine direkten Verbindungen  
      und sendet diese als Link-State Advertisements (LSAs) an alle anderen Router. Damit hat jeder eine <strong>vollständige Karte</strong> des Netzes.
    </p>

    <p>
      Das erlaubt schnellere und zuverlässigere Pfadberechnungen mit Dijkstra. Auch Loops werden vermieden, weil alle denselben Topologiestand kennen.
    </p>

    <p>
      Der Nachteil: Höherer Speicher- und Rechenaufwand, besonders bei großen Netzen.  
      Link-State-Protokolle sind komplexer zu implementieren und zu konfigurieren.
    </p>

    <p>
      Fazit: Distance Vector ist einfacher, aber weniger stabil. Link-State ist robuster, aber ressourcenintensiver.  
      Die Wahl hängt von der Netzwerktopologie, der Skalierbarkeit und den Stabilitätsanforderungen ab.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>

    <p>
      Distance Vector（例：RIP）は、各ルーターが「自分から目的地への距離（メトリック）」を隣接ルーターに伝えるだけの仕組みです。  
      つまり、自分が直接知っている情報と隣から受け取った「間接情報」のみでルーティングを行います。
    </p>

    <p>
      この仕組みは簡単ですが、以下のような限界があります：  
    </p>
      <ul>
      <li><strong>ネットワーク全体の構造（トポロジー）を把握できない</strong>  </li>
      <li><strong>リンクの変化が伝播しにくく、収束に時間がかかる</strong>（bad news travels slowly）</li>  
      <li><strong>Count-to-Infinityやルーティングループ</strong>などの問題が起きやすい</li>
      </ul>

    <p>
      一方、Link-State型プロトコル（例：OSPF）は、各ルーターが自分に接続しているリンク情報をネットワーク全体に広報します。  
      その結果、すべてのルーターが<strong>ネットワーク全体の地図</strong>を持つことになります。
    </p>

    <p>
      この情報を使って<strong>Dijkstraアルゴリズム</strong>で最適経路を計算するため、収束が速く安定しています。  
      また、トポロジー全体が共有されているため、ループもほぼ発生しません。
    </p>

    <p>
      ただし、OSPFのようなLink-Stateは、メモリ・CPU・帯域を多く消費し、大規模ネットワークでは構成も複雑になります。  
      小規模やリソース制限のある環境では過剰な場合もあります。
    </p>

    <p>
      まとめると：Distance Vectorは<strong>シンプルで軽量</strong>、Link-Stateは<strong>堅牢で高性能だが重い</strong>。  
      使い分けはネットワークの規模や要件に応じて判断すべきです。
    </p>
  </div>
</div>



<!-- Thema 8-4 -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum reicht Poisoned Reverse nicht aus, um alle Routingprobleme zu lösen?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    なぜPoisoned Reverseだけではすべてのルーティング問題を解決できないのか？
  </p>
</div>
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Poisoned Reverse funktioniert gut bei einfachen Netzen mit zwei oder drei Routern.  
      <span style="color: red;">In komplexeren Topologien jedoch, wo mehrere Pfade involviert sind, hilft es nur begrenzt. </span> 
      Es kann <span style="color: red;">nicht alle indirekten Schleifen erkennen</span> oder verhindern.  
      Außerdem erhöht es den Steuerverkehr im Netzwerk, weil mehr "∞"-Meldungen verteilt werden.  
      <br/>Deshalb setzen moderne Protokolle wie OSPF auf globales Wissen und vollständige Link-State-Datenbanken.  
      Dort können Loops und falsche Annahmen systematisch ausgeschlossen werden.  
      Poisoned Reverse ist also nur ein Teil einer größeren Lösung.
    </p>
  </div>
  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      Poisoned Reverseは、単純なネットワーク（2〜3台のルーター）では非常に効果的です。  
      しかし、<span style="color: red;">複数のルーターや経路が絡む複雑なトポロジーでは、間接的なループや誤情報までは防げません。</span>  
      さらに、「∞」の情報を頻繁に送るため、制御トラフィックの量が増えるという副作用もあります。  
      <br/>このような限界があるため、OSPFなどの現代的なプロトコルでは、より包括的なLink-State手法が採用されます。  
      結局のところ、Poisoned Reverseは単独では不十分であり、大規模ネットワークでは補助的な対策にすぎません。
    </p>
  </div>
</div>

<!-- Thema 8-5 -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Wie unterscheiden sich Distance Vector und Link-State in der Praxis?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    Distance VectorとLink-Stateは実際にはどのように使い分けられているのか？
  </p>
</div>
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Distance Vector ist einfach, ressourcensparend und gut für kleine Netze oder Zugriffsknoten geeignet.  
      Link-State bietet mehr Kontrolle, schnellere Konvergenz und robuste Fehlerbehandlung – ideal für Backbone- oder ISP-Netze.  
      Link-State erfordert aber mehr Speicher und CPU-Zeit, weil alle Link-Zustände gespeichert und berechnet werden.  
      Distance Vector ist <span style="color: red;">verteilt und reaktiv</span>, Link-State ist <span style="color: red;">global und proaktiv</span>.  
      In der Praxis nutzen Netzbetreiber oft beide Verfahren je nach Segment.  
      Beispiel: RIP im Zugriff, OSPF im Kernnetz.  
    </p>
  </div>
  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      Distance Vectorはシンプルで軽量なため、小規模なネットワークやエッジ側（アクセスネット）に適しています。  
      一方、Link-Stateは高い信頼性、迅速な収束、高度な障害対応を提供できるため、コアネットワークやISP環境に適しています。  
      ただし、Link-Stateはネットワーク全体の状態を保持・計算するため、メモリとCPU負荷が高くなります。  
      Distance Vectorは<span style="color: red;">分散的・受動的</span>、Link-Stateは<span style="color: red;">集中的・能動的</span>という違いもあります。  
      実際の運用では、アクセス部にRIP、バックボーンにOSPFというように、用途ごとに使い分けられています。
    </p>
  </div>
</div>


  </div>
</template>

<script setup>
import algorithmImage from '@/assets/lecture/lecture03/Figure_0307.png'
import image from '@/assets/lecture/lecture03/Figure_0307.png'
</script>
