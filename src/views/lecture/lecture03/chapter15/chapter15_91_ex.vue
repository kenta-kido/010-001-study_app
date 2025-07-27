<template>
  <div class="container my-4">
    <h3 class="mb-4">TCP BIC/CUBIC</h3>
<!-- Thema: Funktionsweise von TCP BIC und seiner Wachstumsstrategie -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Fensterwachstumsstrategie von TCP BIC mit Additive Increase, Binary Search und Max Probing
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    TCP BIC における輻輳ウィンドウ制御戦略：加算増加・二分探索・最大値探索
  </p>
</div>

<!-- 図の挿入 -->
<div class="text-center mt-4">
  <img src="@/assets/lecture/lecture03/Figure_0901.png" alt="TCP BIC Growth Function" class="img-fluid" style="max-width: 700px;" />
  <p class="text-muted mt-2">Abbildung: Wachstumsverlauf von TCP BIC nach einem Paketverlust</p>
</div>

<!-- 解説：Deutsch & 日本語 -->
<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      TCP BIC (Binary Increase Congestion Control) nutzt eine spezielle Wachstumsfunktion für das Congestion Window (cwnd), 
      um Stabilität und schnelle Bandbreitenausnutzung zu erreichen.
    </p>
    <ul>
      <li>Nach einem Paketverlust wird das Fenster mit einem Faktor β reduziert. Der vorherige Wert wird als <code>W<sub>max</sub></code> gespeichert.</li>
      <li>Es folgt eine additive Erhöhung bis nahe <code>W<sub>max</sub></code>, dann beginnt eine binäre Suche zwischen aktuellem Minimum und <code>W<sub>max</sub></code>.</li>
      <li>Die binäre Suche wird solange durchgeführt, bis die Differenz unterhalb eines Schwellwertes (<code>S<sub>min</sub></code>) liegt.</li>
      <li>Wird <code>W<sub>max</sub></code> überschritten, geht BIC in die <strong>Max Probing</strong>-Phase über, bei der das Fenster zunächst langsam und später wieder aggressiver wächst.</li>
    </ul>
    <p>
      Diese Methode erlaubt hohe Stabilität um <code>W<sub>max</sub></code> herum (wo Verluste wahrscheinlich sind), sowie schnelles Wachstum in neuen Regionen.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      TCP BIC（Binary Increase Congestion Control）は、輻輳ウィンドウ（cwnd）の成長戦略に独自の関数を用い、
      安定性と帯域の早期活用を両立することを目的としたアルゴリズムです。
    </p>
    <ul>
      <li>パケットロスが発生すると、ウィンドウサイズは係数βで減少し、ロス直前の値が <code>W<sub>max</sub></code> として記録されます。</li>
      <li>そこから <strong>加算増加</strong>（Additive Increase）で成長し、<code>W<sub>max</sub></code> に近づくと <strong>二分探索</strong>（Binary Search）に切り替わります。</li>
      <li>探索範囲が閾値（<code>S<sub>min</sub></code>）未満になると最大値が更新されます。</li>
      <li><code>W<sub>max</sub></code> を超えた場合、新たな最大値を探る <strong>Max Probing</strong> フェーズに入り、ウィンドウが再び加速的に増加します。</li>
    </ul>
    <p>
      このように、BIC は <code>W<sub>max</sub></code> 付近では慎重に、未踏領域では大胆に増加させることで、
      ロバストかつ効率的な帯域活用を可能にしています。
    </p>
  </div>
</div>

<!-- Thema: Warum ist ein vorsichtiger Anstieg um Wmax und aggressives Wachstum darüber hinaus wichtig für TCP BIC? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum ist ein vorsichtiger Anstieg um <code>W<sub>max</sub></code> und aggressives Wachstum darüber hinaus wichtig für TCP BIC?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    なぜ TCP BIC において <code>W<sub>max</sub></code> 付近では慎重に、それ以降では積極的にウィンドウを増加させることが重要なのか？
  </p>
</div>

<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Die Stelle um <code>W<sub>max</sub></code> ist besonders kritisch, weil dort beim letzten Mal ein Paketverlust aufgetreten ist. 
      Ein zu schneller Anstieg in diesem Bereich könnte erneut zu Verlusten führen und somit Instabilität verursachen.
    </p>
    <p>
      Deshalb steigt TCP BIC in diesem Bereich nur langsam (logarithmisch), um die Stabilität zu bewahren. 
      Sobald der Bereich um <code>W<sub>max</sub></code> durchquert ist, nimmt der Algorithmus an, dass das Netzwerk mehr Kapazität erlaubt.
    </p>
    <p>
      Dann wechselt BIC zu einer aggressiveren Wachstumsstrategie, um ungenutzte Bandbreite effizient auszunutzen.
      Diese Kombination verbessert sowohl die Fairness gegenüber anderen Flows als auch die Gesamtauslastung des Netzes.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      <code>W<sub>max</sub></code> 付近は、直前にパケットロスが発生した「危険域」であるため、  
      その周辺でウィンドウサイズを急激に増やすと再度ロスを引き起こし、不安定な挙動につながります。
    </p>
    <p>
      TCP BIC はこの領域では慎重に（対数的に）増加させ、安定性を保ちます。
      一方で <code>W<sub>max</sub></code> を超えた後は、ネットワークがより大きな負荷に耐えられると仮定し、
      積極的な増加（線形や指数的）へと切り替えます。
    </p>
    <p>
      この柔軟な戦略により、ロスの再発を避けつつ、未使用帯域を効率よく活用できるため、TCP BIC は高効率かつフェアな転送を実現しています。
    </p>
  </div>
</div>

<!-- Thema: Was bedeutet „Bandbreite“ im Kontext von TCP BIC und CUBIC konkret? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Was bedeutet „Bandbreite“ im Kontext von TCP BIC und CUBIC konkret und warum ist sie entscheidend für die Steuerung des cwnd?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    TCP BIC や CUBIC における「帯域（Bandwidth）」とは具体的に何を意味し、なぜ輻輳ウィンドウ（cwnd）の制御において決定的に重要なのか？
  </p>
</div>

<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      In TCP BIC und CUBIC bezeichnet „Bandbreite“ die maximale Datenrate, mit der ein Netzwerksegment dauerhaft Daten übertragen kann – 
      ohne dass dabei Paketverluste oder Warteschlangen entstehen.
    </p>
    <p>
      Der Congestion Window (cwnd) muss sich dynamisch an diese Bandbreite anpassen. 
      Ist das cwnd zu klein, bleibt ein Teil der Kapazität ungenutzt. 
      Ist es zu groß, kommt es zu Überlastungen, Paketverlusten und Retransmissions.
    </p>
    <p>
      TCP BIC nähert sich der optimalen Bandbreite durch eine binäre Suche zwischen minimalem und maximalem cwnd-Wert.
      TCP CUBIC nutzt hingegen eine zeitorientierte kubische Funktion, die eine sanfte und kontinuierliche Annäherung ermöglicht.
    </p>
    <p>
      Eine möglichst genaue Schätzung der verfügbaren Bandbreite ist entscheidend für eine effiziente Nutzung der Ressourcen
      und für die Fairness zwischen mehreren konkurrierenden Verbindungen.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      TCP BIC や CUBIC において「帯域（bandwidth）」とは、ネットワークセグメントが継続的に安定してデータを転送できる最大速度を意味します。
      これは、パケットロスやキューの蓄積を発生させることなく持続的に維持できるデータ転送速度です。
    </p>
    <p>
      輻輳ウィンドウ（cwnd）は、この帯域に動的に適応する必要があります。
      cwnd が小さすぎるとネットワークの容量を十分に活用できず、逆に大きすぎると過負荷となり、パケットロスや再送が発生します。
    </p>
    <p>
      TCP BIC は、最小値と最大値の間で二分探索を行うことで最適な帯域に近づこうとします。
      一方 TCP CUBIC は、時間に基づいた三次関数的な成長モデルを用いて、より滑らかで連続的な調整を行います。
    </p>
    <p>
      利用可能な帯域をできる限り正確に把握することは、リソースを効率的に使うだけでなく、
      他のフローとの公平性（フェアネス）を保つためにも非常に重要です。
    </p>
  </div>
</div>

<!-- Thema: Versucht TCP BIC ständig neue Grenzen der Netzwerkleistung zu entdecken? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Versucht TCP BIC ständig neue Grenzen der Netzwerkleistung zu entdecken, und wie funktioniert dieser Suchprozess konkret?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    TCP BIC は常にネットワークの新たな限界を探し続けているのか？その探査プロセスはどのように構成されているのか？
  </p>
</div>

<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Ja – das grundlegende Prinzip von TCP BIC besteht darin, kontinuierlich nach der maximal nutzbaren Bandbreite zu suchen.
      Dabei folgt der Algorithmus einer klaren Strategie:
    </p>
    <p>
      Zunächst nähert er sich nach einem Paketverlust dem vorherigen Maximum (<code>W<sub>max</sub></code>) schnell durch additive Zuwächse.
      In der Nähe von <code>W<sub>max</sub></code> wechselt BIC in eine vorsichtige Phase mit binärer Suche, um erneute Verluste zu vermeiden.
    </p>
    <p>
      Wird diese Schwelle ohne neue Verluste überschritten, beginnt das sogenannte <em>Max Probing</em>,
      bei dem das Fenster langsam und dann beschleunigt wächst, um das neue Leistungslimit zu identifizieren.
    </p>
    <p>
      Auf diese Weise kombiniert BIC schnelle Annäherung, vorsichtige Stabilisierung und erneutes Wachstum zu einem effektiven Regelkreis,
      der sich dynamisch an Netzwerkkapazitäten anpasst.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      はい、TCP BIC の基本方針は「ネットワークが扱える限界帯域」を常に探し続けることにあります。
      そのために次のような明確な段階的戦略を採用しています：
    </p>
    <p>
      パケットロス後、ウィンドウサイズは急激に減少しますが、直ちに前回の最大値（<code>W<sub>max</sub></code>）まで
      加算的に素早く増加させます。
    </p>
    <p>
      <code>W<sub>max</sub></code> 付近に到達すると、BIC は慎重になり、二分探索に切り替えてロスを避けながら様子を見ます。
      そのエリアを安全に通過できれば、「新しい限界がもっと先にある」と判断します。
    </p>
    <p>
      そこで <em>Max Probing</em> に入り、最初はゆっくり、次第に加速して次の限界を探索します。
      この一連の動作は、ネットワーク資源の効率的な利用と安定性の両立を目的とした設計です。
    </p>
  </div>
</div>



<!-- Thema: Was bedeutet „Fairness“ in der TCP-Staukontrolle und warum ist sie wichtig? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Was bedeutet „Fairness“ in der TCP-Staukontrolle und warum ist sie besonders relevant bei modernen Algorithmen wie BIC und CUBIC?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    TCP の輻輳制御における「フェアネス（公平性）」とは何を意味し、なぜ BIC や CUBIC のような新しいアルゴリズムにおいて特に重要なのか？
  </p>
</div>

<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      In der TCP-Staukontrolle beschreibt „Fairness“ die gerechte Verteilung der verfügbaren Netzwerkressourcen (z.B. Bandbreite) auf mehrere konkurrierende Verbindungen.
    </p>
    <p>
      Klassische TCP-Varianten wie Reno teilen die Bandbreite unter sich relativ gleichmäßig auf, da sie denselben AIMD-Mechanismus verwenden.
      Neue Algorithmen wie BIC oder CUBIC haben jedoch aggressivere Wachstumsstrategien, was die Fairness gegenüber klassischen Flows gefährden kann.
    </p>
    <p>
      Um dies zu verhindern, implementieren moderne Algorithmen explizite Mechanismen zur Wahrung der Fairness. 
      CUBIC zum Beispiel verlangsamt sein Wachstum in einem Bereich namens TCP-freundliche Region, wenn es mit Reno-Flows konkurriert.
    </p>
    <p>
      Fairness ist entscheidend für ein stabiles und kooperatives Verhalten im Netzwerk – besonders in gemeinsam genutzten Umgebungen wie dem Internet.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      TCP における「フェアネス（公平性）」とは、ネットワーク資源（特に帯域）を複数の通信フローが**平等に分け合う**ことを意味します。
    </p>
    <p>
      古典的な TCP（Reno など）は同じ AIMD 方式を使うため、帯域を自然にバランスよく共有します。
      しかし BIC や CUBIC のような新しいアルゴリズムは、より攻撃的な成長戦略を採用しているため、古典的なフローとの間で公平性を崩す可能性があります。
    </p>
    <p>
      この問題を回避するために、CUBIC では「TCPフレンドリー領域」と呼ばれる成長制限ゾーンを用意し、Reno との競合時には成長を抑えるように設計されています。
    </p>
    <p>
      フェアネスは、特に多数のユーザーが共有するネットワーク（インターネットやWi-Fiなど）において、安定性と協調性を保つ上で極めて重要な要素です。
    </p>
  </div>
</div>
<!-- Thema: Welche Probleme entstehen, wenn TCP-Algorithmen keine Fairness gewährleisten? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Welche Probleme entstehen, wenn TCP-Algorithmen keine Fairness gewährleisten? Warum ist Fairness mehr als ein „ideales Ziel“?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    TCP アルゴリズムがフェアネス（公平性）を保たないと、どのような問題が実際に発生するのか？  
    フェアネスは単なる理想ではなく、なぜ現実的に重要なのか？
  </p>
</div>

<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Wird Fairness in der TCP-Staukontrolle verletzt, führt das dazu, dass manche Verbindungen dauerhaft deutlich mehr Bandbreite erhalten als andere.
      Dies kann reale, messbare Konsequenzen haben.
    </p>
    <p>
      „Bandbreite monopolisieren“ bedeutet dabei: Eine einzelne Verbindung nutzt fast die gesamte verfügbare Übertragungskapazität eines Links aus,
      während andere Verbindungen kaum noch Daten senden können.
    </p>
    <p>
      Ein typisches Beispiel: Eine CUBIC-Verbindung teilt sich einen WLAN-Link mit einem klassischen TCP-Reno-Stream.  
      CUBIC wächst aggressiver und verdrängt Reno fast vollständig – der Reno-Flow erhält nur noch minimale Datenrate.
    </p>
    <p>
      Für Benutzer bedeutet das: Manche Anwendungen (z.&nbsp;B. Videostreaming oder große Downloads) laufen reibungslos,  
      während andere (z.&nbsp;B. Chats oder VoIP) Verzögerungen oder Verbindungsabbrüche erleben.
    </p>
    <p>
      In größeren Systemen – etwa bei ISPs oder in Rechenzentren – kann unfairer Zugriff auf Ressourcen zu  
      Leistungseinbrüchen, Kundenunzufriedenheit und sogar Instabilität des Netzwerks führen.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      TCP においてフェアネス（公平性）が守られない場合、一部の通信フローが帯域を独占し、  
      他のフローが極端に低速になるという<strong>現実的な問題</strong>が発生します。
    </p>
    <p>
      「帯域を独占する」とは、ひとつのフローがネットワークの伝送能力をほぼすべて使い切り、  
      他のフローが送れるデータ量が非常に少なくなる状態を意味します。
    </p>
    <p>
      例えば、CUBIC を使った接続と Reno を使った接続が同じ Wi-Fi を共有していると、  
      より急速に成長する CUBIC が帯域を支配し、Reno はほとんどデータを送れなくなります。
    </p>
    <p>
      その結果、動画配信や大容量ダウンロードはスムーズに進む一方で、チャットや音声通話などのアプリは  
      遅延・切断・音飛びなどの問題を抱えることになります。
    </p>
    <p>
      ISP やクラウドネットワークでは、こうした不公平な帯域使用がネットワーク全体のパフォーマンスを損ない、  
      ユーザー体験の劣化やシステムの不安定化につながるおそれがあります。
    </p>
  </div>
</div>

<!-- Thema: Ist „Bandbreite“ ein real existierender Wert oder nur eine theoretische Grenze? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Ist „Bandbreite“ im Netzwerk ein konkret messbarer physikalischer Zustand – oder nur eine theoretische Obergrenze für die Datenübertragung?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    ネットワークにおける「帯域（bandwidth）」とは、実際に存在する具体的な値なのか？  
    それとも理論的な最大速度という抽象的な概念なのか？
  </p>
</div>

<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      „Bandbreite“ beschreibt in der Netzwerktechnik in erster Linie die maximale Datenrate, die ein Übertragungskanal leisten kann –  
      also ein theoretisches Limit unter idealen Bedingungen.
    </p>
    <p>
      Dieses Limit ergibt sich aus physikalischen und technischen Faktoren: Leitungstyp, Frequenzbereich, Codierung, Protokoll-Overhead usw.
      Daher hat Bandbreite auch eine reale, messbare Grundlage.
    </p>
    <p>
      In der Praxis wird aber selten die volle Bandbreite dauerhaft erreicht. Aktuelle Auslastung, Störungen oder konkurrierende Nutzer senken den effektiven Durchsatz.
    </p>
    <p>
      TCP-Algorithmen wie BIC und CUBIC versuchen daher, sich dynamisch an die <strong>nutzbare Bandbreite</strong> heranzutasten –  
      also an die momentan ohne Paketverluste erreichbare Geschwindigkeit.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      ネットワークで使われる「帯域（bandwidth）」とは、基本的には「理論上達成できる最大データ転送速度」を指す用語で、  
      これは**抽象的な概念**であると同時に、物理的・技術的な条件から導かれる<strong>実在する上限値</strong>でもあります。
    </p>
    <p>
      この上限は、使用される回線の種類、信号の周波数範囲、エンコーディング方式、プロトコルのオーバーヘッドなどにより決まります。
    </p>
    <p>
      しかし実際の通信では、ノイズや他ユーザーとの競合などによって、常にその最大速度が出るとは限りません。
    </p>
    <p>
      そのため、TCP の制御アルゴリズム（BIC や CUBIC など）は、**実際に損失なく利用可能な帯域（≒持続可能な速度）**を動的に探しながら動作します。
    </p>
  </div>
</div>

<!-- Thema: Was wird bei TCP eigentlich „monopolisiert“ – ist Bandbreite eine konkrete Ressource? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Was wird bei TCP eigentlich „monopolisiert“ – ist Bandbreite eine konkrete Ressource oder nur ein theoretischer Maximalwert?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    TCP において「帯域を独占する」とは、実際には何を独占しているのか？  
    帯域は具体的な資源なのか、それとも理論的な最大値にすぎないのか？
  </p>
</div>

<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Bandbreite bezeichnet im Kontext von TCP die maximal mögliche Datenrate, die über einen Netzwerkpfad übertragen werden kann – z.&nbsp;B. 100 Mbit/s auf einem Ethernet-Link.
    </p>
    <p>
      Diese Bandbreite ist keine „feste Substanz“, sondern ergibt sich aus der technischen Kapazität der beteiligten Geräte, Leitungen und Pufferspeicher.
      Sie kann sich dynamisch ändern, z.&nbsp;B. durch WLAN-Interferenzen oder Lastschwankungen.
    </p>
    <p>
      In der TCP-Staukontrolle wird versucht, diese verfügbare Bandbreite möglichst gut auszunutzen – aber ohne Überlastung.
      Wer „mehr“ cwnd aufbauen kann, bekommt auch mehr Durchsatz.
    </p>
    <p>
      Eine Verbindung, die aggressiv ihr Congestion Window vergrößert (z.&nbsp;B. CUBIC), kann andere Flows verdrängen, weil sie z.&nbsp;B. bevorzugt mehr Pakete in die Warteschlangen der Router bringt.
      Diese Warteschlangen sind eine konkrete, begrenzte Ressource – sie werden faktisch monopolisiert.
    </p>
    <p>
      Die „Monopolisierung der Bandbreite“ bedeutet also oft: Kontrolle über die Warteschlange, kürzere RTTs, und am Ende höherer effektiver Durchsatz.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      TCP における「帯域（bandwidth）」とは、あるネットワーク経路が**理論上**達成できる最大のデータ転送速度のことです。
      例えば「このWi-Fiは100Mbpsまで対応する」などです。
    </p>
    <p>
      ただし帯域は物理的な「もの」ではなく、リンク・装置・バッファなど**複数要素からなる可変的な性能の上限**です。
      電波干渉や混雑状況によって変化することもあります。
    </p>
    <p>
      TCP はこの帯域を最大限に使おうとしますが、**輻輳ウィンドウ（cwnd）を多く持つ接続ほど多くのデータを送れる**ため、
      攻撃的に cwnd を拡大するフローは、他のフローよりも多くのトラフィックを送り込めるようになります。
    </p>
    <p>
      このときに実際に「独占」されるのは、ルーターや中継機器の**パケットバッファ（キュー）**です。
      これは容量に限りがある「具体的な資源」であり、ここを先に埋めることで他のフローを排除できます。
    </p>
    <p>
      よって、「帯域を独占する」という表現は、**バッファや転送順序の支配＝実効スループットの優先的取得**を意味するのです。
    </p>
  </div>
</div>


<!-- Thema: Warum entstehen bei TCP immer wieder neue Überlastungen – ist das ein Fehler oder ein Prinzip? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum entstehen bei TCP immer wieder neue Überlastungen – ist das ein Fehler oder ein Prinzip?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    なぜ TCP 通信では輻輳（オーバーロード）が繰り返し発生するのか？  
    それは誤作動ではなく、設計上の前提なのか？
  </p>
</div>

<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Ja – wiederholte Überlastungen sind bei TCP kein Fehler, sondern ein zentrales Element der Staukontrolle.
      Das Congestion Window (cwnd) wächst kontinuierlich, solange ACKs empfangen werden – unabhängig vom verwendeten Algorithmus (z.&nbsp;B. AIMD oder CUBIC).
    </p>
    <p>
      Das Ziel ist, die verfügbare Netzwerkkapazität bestmöglich auszureizen. Dabei kommt es unweigerlich zu Überlastungen,  
      sobald die Kapazität (Bandbreite + Pufferspeicher) überschritten wird.
    </p>
    <p>
      Je nach Netzwerktopologie können solche Ereignisse mehrmals pro Sekunde (z.&nbsp;B. im WLAN mit mehreren Flows) oder seltener auftreten.
      Die cwnd-Verläufe zeigen ein charakteristisches Zickzack-Muster aus Wachstum, Verlust, Reduktion und erneutem Wachstum.
    </p>
    <p>
      Schneller wachsende Protokolle wie CUBIC erreichen die Netzgrenze schneller und verdrängen dabei langsamere Flows wie TCP Reno.
      Diese Wiederholung führt oft zu unfairer Bandbreitenverteilung.
    </p>
    <p>
      Moderne Protokolle nutzen daher Mechanismen wie „TCP-freundliche Regionen“ oder Fair Queueing,  
      um ein Gleichgewicht zu wahren und Übervorteilung zu vermeiden.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      TCP 通信で輻輳（パケットロスや遅延）が繰り返し発生するのは、**設計上の前提であり、誤動作ではありません**。
      輻輳ウィンドウ（cwnd）は ACK を受信するたびに拡大し、ネットワークの限界まで成長を続けます。
    </p>
    <p>
      この限界（帯域＋バッファ容量）を超えると、必ず輻輳が発生し、cwnd が減少します。
      その後また成長し、再び輻輳が起きるというサイクルが繰り返されるのです。
    </p>
    <p>
      実際の通信ではこのサイクルが数秒〜サブ秒単位で発生しており、
      cwnd の推移は「のこぎり状」に上下を繰り返すグラフとして観測されます。
    </p>
    <p>
      特に CUBIC のような急速に成長するプロトコルは、より早くネットワークの上限に達し、
      Reno のような遅いプロトコルを圧迫しやすくなります。
    </p>
    <p>
      このため近年のプロトコルでは、TCP フレンドリー領域やフェアキューイングなどを活用し、
      輻輳の制御と公平性の両立を図っています。
    </p>
  </div>
</div>

  </div>
</template>

<script setup>
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>