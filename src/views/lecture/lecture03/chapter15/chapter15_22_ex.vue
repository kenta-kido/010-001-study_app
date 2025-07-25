<template>
  <div class="container my-4">
    <h3 class="mb-4">2(b) Ergänzende Themen: Switching und Netzwerkentwicklung</h3>

<!-- Thema 1: Warum Repeater, Hubs und Bridges entstanden sind -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Von Repeater zu Bridge – Techniken zur Reichweiten- und Kollisionskontrolle
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    リピータからブリッジへ：距離と衝突の問題を解決するための技術の発展
  </p>
</div>
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Antwort (Deutsch)</h5>
    <ul>
      <li>In frühen Ethernet-Topologien war die Reichweite durch Signalverlust stark begrenzt.</li>
      <li><strong>Repeater</strong> wurden eingeführt, um auf Layer 1 analoge Signale zu verstärken und die Reichweite zu vergrößern.</li>
      <li>Allerdings verlängerte der Repeater nur das gemeinsame Medium – das Problem von Kollisionen blieb bestehen.</li>
      <li><strong>Hubs</strong> als Mehrport-Repeater ermöglichten die Verbindung mehrerer Geräte, verschärften aber das Kollisionsrisiko, da alle Ports simultan aktiv waren.</li>
      <li>Die Kollisiondomäne umfasste weiterhin das gesamte Netzsegment.</li>
      <li><strong>Bridges</strong> brachten erstmals auf Layer 2 Intelligenz ins Netzwerk: Sie trennten Segmente logisch und leiteten Frames nur gezielt weiter.</li>
      <li>Dank <em>MAC-Adressenlernen</em> konnten Bridges unnötigen Verkehr filtern und so die Effizienz steigern.</li>
      <li>Dies war ein entscheidender Schritt zur besseren Skalierbarkeit und Stabilität in Ethernet-Architekturen.</li>
    </ul>
  </div>
  <div class="col-md-6">
    <h5>解答（日本語）</h5>
    <ul>
      <li>初期のEthernetでは、ケーブルが長くなると信号が減衰するため、通信可能な距離に限界がありました。</li>
      <li><strong>リピータ</strong>は物理層（Layer 1）で信号をそのまま増幅し、通信距離を延長する装置として登場しました。</li>
      <li>しかし、リピータは衝突ドメインを広げるだけで、通信の効率性や衝突の問題は改善されませんでした。</li>
      <li><strong>ハブ</strong>は複数の機器を1つのネットワークにまとめる装置ですが、すべてのポートに同じ信号を送るため、同時通信時に衝突が発生しやすい構造でした。</li>
      <li>その結果、全体が1つの衝突ドメインとなり、ネットワーク全体のパフォーマンスに悪影響を与えていました。</li>
      <li>そこで導入されたのが<strong>ブリッジ</strong>です。ブリッジはデータリンク層（Layer 2）で動作し、MACアドレスに基づいてフレームを識別・転送します。</li>
      <li>各セグメントごとに衝突ドメインを分離し、宛先が明確な通信のみを転送することで、不要なトラフィックを減らしました。</li>
      <li>これにより、大規模で安定したネットワーク構築が可能になり、次世代のスイッチへの基盤となりました。</li>
    </ul>
  </div>
</div>

<!-- Thema X: Die Rolle der Bridge in der Netzwerktechnologie -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Die Funktion der Bridge – vom geteilten Medium zum segmentierten Netzwerk
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    ブリッジの役割と仕組み – 共有型ネットワークから分割型ネットワークへの進化
  </p>
</div>
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Antwort (Deutsch)</h5>
    <ul>
      <li>Ursprünglich nutzten Ethernet-Netze ein gemeinsames Übertragungsmedium, das alle Geräte miteinander verband – Kollisionen waren unvermeidlich.</li>
      <li>Repeater und Hubs verstärkten zwar Signale, trugen aber zur Ausweitung der Kollisionsdomäne bei.</li>
      <li>Die Einführung von <strong>Bridges</strong> in den 1980er Jahren brachte Intelligenz auf Layer 2 des OSI-Modells.</li>
      <li>Bridges segmentieren Netzwerke: Sie trennen den Verkehr in verschiedene <strong>Kollisiondomänen</strong>.</li>
      <li>Sie analysieren eingehende Frames, lernen die Quell-MAC-Adressen und führen eine Weiterleitungstabelle.</li>
      <li>Wenn das Ziel bekannt ist, wird der Frame gezielt an das entsprechende Segment gesendet; sonst erfolgt ein Broadcast.</li>
      <li>So wird unnötiger Verkehr reduziert, und die Netzwerkleistung steigt.</li>
      <li>Bridges legten das Fundament für moderne Switches, die dieselbe Logik in leistungsstärkerer Form übernehmen.</li>
    </ul>
  </div>
  <div class="col-md-6">
    <h5>解答（日本語）</h5>
    <ul>
      <li>初期のEthernetでは、全端末が1本のケーブルを共有する「共有型メディア」が使われており、同時通信による<strong>衝突</strong>が避けられませんでした。</li>
      <li><strong>リピータ</strong>や<strong>ハブ</strong>は信号を増幅・中継するだけで、衝突ドメインを分割できず、トラフィックが集中して効率が悪くなっていました。</li>
      <li>1980年代に登場した<strong>ブリッジ</strong>は、OSI参照モデルのデータリンク層（Layer 2）で動作する初の「インテリジェントな中継装置」でした。</li>
      <li>ブリッジはネットワークを複数のセグメントに分け、それぞれを<strong>独立した衝突ドメイン</strong>として扱います。</li>
      <li>受信したフレームの<strong>送信元MACアドレス</strong>を記録し、<strong>宛先MACアドレス</strong>に基づいて必要なセグメントのみにフレームを転送します。</li>
      <li>宛先が不明な場合のみ、全セグメントへの転送（フラッディング）を行います。</li>
      <li>この仕組みにより、ブロードキャストの量が減り、通信の効率性と信頼性が向上しました。</li>
      <li>ブリッジの仕組みは後の<strong>スイッチ</strong>に受け継がれ、より高速・高機能な形で現在のネットワークの基盤となっています。</li>
    </ul>
  </div>
</div>


<!-- Thema 2: Warum entstand der Switch? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum Switches entstanden sind – Unterschiede zu Bridges
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    なぜスイッチが必要とされたのか？ブリッジとの違いとその役割の進化
  </p>
</div>
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Antwort (Deutsch)</h5>
    <ul>
      <li>Bridges brachten eine gezielte Weiterleitung von Frames auf Layer 2, konnten aber nur eine Frame-Übertragung gleichzeitig behandeln.</li>
      <li>Bei mehreren aktiven Hosts entstanden schnell Engpässe und Verzögerungen, da der Datenverkehr nacheinander verarbeitet werden musste.</li>
      <li><strong>Switches</strong> wurden entwickelt, um diesen Flaschenhals zu beseitigen: Sie besitzen mehrere dedizierte Ports für gleichzeitige Verbindungen.</li>
      <li>Dank <strong>Vollduplex</strong> kann jeder Host gleichzeitig senden und empfangen – ohne Kollisionen.</li>
      <li>Switches verwenden <strong>MAC-Adress-Tabellen</strong>, um Frames effizient an das richtige Ziel weiterzuleiten.</li>
      <li>Anders als Bridges basieren Switches oft auf Hardware (ASIC), was sie deutlich schneller und skalierbarer macht.</li>
      <li>Sie erlauben viele parallele Übertragungen im selben Moment – ideal für moderne Netzwerke mit hohem Verkehrsaufkommen.</li>
      <li>Damit wurden Switches zur Standardlösung für Ethernet-LANs und ersetzten sowohl Hubs als auch Bridges in der Praxis.</li>
    </ul>
  </div>
  <div class="col-md-6">
    <h5>解答（日本語）</h5>
    <ul>
      <li>ブリッジは、データリンク層においてフレームをMACアドレスに基づいて中継する装置として登場し、不要なブロードキャストを削減しました。</li>
      <li>しかし、ブリッジは基本的に1つのフレームしか同時に処理できず、複数の通信が重なると待ち時間や遅延が発生しました。</li>
      <li><strong>スイッチ</strong>は、この課題を解決するために開発され、各ポートが独立して通信できる構造を持っています。</li>
      <li><strong>フルデュプレックス通信</strong>に対応しているため、送信と受信が同時に可能であり、コリジョンも発生しません。</li>
      <li>さらに、MACアドレステーブルを利用して、宛先のみにフレームを転送することでネットワーク効率を大幅に向上させました。</li>
      <li>スイッチは多くの場合、専用チップ（ASIC）によって高速に処理され、ブリッジよりも高性能・高スループットを実現します。</li>
      <li>このため、スイッチは同時に多数の通信を処理でき、大規模ネットワークにも対応可能です。</li>
      <li>今日では、スイッチはハブやブリッジを完全に置き換え、Ethernet LANの標準装置となっています。</li>
    </ul>
  </div>
</div>

<!-- Thema: Unterschiede und Gemeinsamkeiten von Bridge und Switch -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Bridge vs. Switch – Unterschiede und Gemeinsamkeiten im Verhalten und in der Funktion
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    ブリッジとスイッチの違いと共通点 – 学習方式・テーブル管理・通信特性の比較
  </p>
</div>
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Antwort (Deutsch)</h5>
    <ul>
      <li>Sowohl Bridges als auch Switches arbeiten auf Layer 2 und verwenden MAC-Adress-Tabellen zur gezielten Weiterleitung von Frames.</li>
      <li>Beide lernen MAC-Adressen dynamisch, indem sie eingehende Frames analysieren – der Lernmechanismus ist grundsätzlich gleich.</li>
      <li>Bridges speichern diese Informationen meist in Software, während Switches spezialisierte Hardware (ASICs) nutzen, was sie viel schneller macht.</li>
      <li>Ein wesentlicher Unterschied: Bridges arbeiten in der Regel <strong>halbduplex</strong> und verarbeiten nur eine Übertragung gleichzeitig.</li>
      <li>Switches unterstützen <strong>Vollduplex</strong> auf jedem Port, sodass gleichzeitiges Senden und Empfangen ohne Kollision möglich ist.</li>
      <li>Switches besitzen oft mehr Ports (multiport-fähig), während Bridges typischerweise zwei oder wenige Schnittstellen haben.</li>
      <li>Durch die vollduplexfähige Architektur entstehen bei Switches keine Kollisionen mehr – im Gegensatz zu manchen Bridge-Szenarien.</li>
      <li>Zusammenfassend: Die Logik ist ähnlich, aber die Leistungsfähigkeit, Parallelität und Medienzugriffssteuerung sind beim Switch deutlich weiterentwickelt.</li>
    </ul>
  </div>
  <div class="col-md-6">
    <h5>解答（日本語）</h5>
    <ul>
      <li>ブリッジとスイッチはどちらもOSI参照モデルの<strong>データリンク層（Layer 2）</strong>で動作し、MACアドレスに基づいてフレームを転送します。</li>
      <li>両者とも、受信したフレームの送信元MACアドレスを学習し、<strong>MACアドレステーブル</strong>を動的に構築します。学習方式そのものはほぼ共通です。</li>
      <li>ただし、ブリッジはソフトウェア処理が主流であり、スイッチは専用ハードウェア（ASIC）による高速処理を行います。</li>
      <li>通信モードにも差があり、ブリッジは基本的に<strong>半二重通信</strong>で動作するのに対し、スイッチは<strong>フルデュプレックス</strong>での同時送受信が可能です。</li>
      <li>そのため、スイッチでは衝突（コリジョン）が原理的に発生せず、ネットワークの効率が大きく向上しています。</li>
      <li>さらに、ブリッジは2〜数ポートの構成が多いのに対し、スイッチは数十ポートを持ち、大規模なネットワークを扱えるよう設計されています。</li>
      <li>両者は動作原理は似ていても、<strong>性能・スケーラビリティ・衝突制御</strong>の面で大きな違いがあります。</li>
      <li>結果として、スイッチはブリッジの発展形として、現代のネットワークインフラにおいて標準的な役割を担っています。</li>
    </ul>
  </div>
</div>

<!-- Thema: Gibt es Kollisionen bei Bridges? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Gibt es bei Bridges Kollisionen? – Funktionsweise und Einschränkungen klassischer Bridges
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    ブリッジでは衝突は起きるのか？ – クラシックなブリッジの動作と限界
  </p>
</div>
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Antwort (Deutsch)</h5>
    <ul>
      <li>Ja, bei klassischen Bridges können <strong>Kollisionen</strong> innerhalb eines einzelnen Segments auftreten.</li>
      <li>Eine Bridge trennt zwar <strong>Kollisiondomänen</strong> – jedes Segment ist eigenständig –, doch innerhalb eines Segments teilen sich die Geräte das Medium.</li>
      <li>Wenn zwei Hosts im selben Segment gleichzeitig senden, kommt es zu einer Kollision.</li>
      <li>Bridges verhindern also keine Kollisionen innerhalb eines Segments, sondern nur zwischen den Segmenten.</li>
      <li>Außerdem unterstützen viele klassische Bridges nur <strong>halbduplex</strong>, was die Kollisionen durch geteilte Leitung begünstigt.</li>
      <li>Im Gegensatz dazu erlauben moderne Switches <strong>Vollduplex</strong> pro Port – damit sind Kollisionen vollständig ausgeschlossen.</li>
      <li>Fazit: Bridges reduzieren, aber beseitigen Kollisionen nicht vollständig – Switches hingegen schon.</li>
    </ul>
  </div>
  <div class="col-md-6">
    <h5>解答（日本語）</h5>
    <ul>
      <li>はい、<strong>従来型のブリッジ</strong>では、接続された各セグメント内で<strong>衝突（コリジョン）</strong>が発生する可能性があります。</li>
      <li>ブリッジは衝突ドメインを分割しますが、<strong>1つのセグメント内は依然として共有媒体</strong>であり、複数のホストが同時に送信すると衝突が起きます。</li>
      <li>つまり、ブリッジは<strong>セグメント間の衝突は防げる</strong>が、<strong>セグメント内の衝突は防げない</strong>という制約があります。</li>
      <li>加えて、ブリッジは多くの場合<strong>半二重通信</strong>にとどまるため、送信と受信を同時に行えず、衝突の可能性が残ります。</li>
      <li>これに対し、<strong>スイッチ</strong>は各ポートが独立した通信路であり、<strong>フルデュプレックス通信</strong>に対応しているため、衝突は発生しません。</li>
      <li>したがって、ブリッジはネットワーク効率を改善する装置ではありますが、<strong>完全なコリジョン排除はできない</strong>点が注意すべき特徴です。</li>
    </ul>
  </div>
</div>


<!-- Thema 3: Lernende Bridges und Filterung -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    MAC-Lernen und Filterung – gezielte Kommunikation statt Broadcast
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    MACアドレス学習とフィルタリング – ブロードキャストの削減と効率的な通信
  </p>
</div>
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Antwort (Deutsch)</h5>
    <ul>
      <li>Switches und Bridges verfügen über sogenannte Lernfunktionen, um MAC-Adressen automatisch zu erkennen.</li>
      <li>Wenn ein Frame empfangen wird, merkt sich das Gerät die Quell-MAC-Adresse und den zugehörigen Port in einer Tabelle.</li>
      <li>So kann es zukünftige Frames mit derselben Zieladresse gezielt an diesen Port weiterleiten.</li>
      <li>Dieses Verhalten wird als <strong>Filterung</strong> bezeichnet und reduziert unnötigen Verkehr auf anderen Ports.</li>
      <li>Unicast-Frames werden also nur an den gewünschten Empfänger gesendet – das spart Bandbreite und erhöht die Effizienz.</li>
      <li>Nur wenn eine Zieladresse unbekannt ist, wird ein Broadcast an alle Ports gesendet (Flooding).</li>
      <li>Durch kontinuierliches Lernen und Aktualisieren der MAC-Tabelle passt sich das Gerät dynamisch an Netzveränderungen an.</li>
      <li>Diese Lernfähigkeit ist ein zentrales Merkmal von Layer-2-Switches und lernenden Bridges.</li>
    </ul>
  </div>
  <div class="col-md-6">
    <h5>解答（日本語）</h5>
    <ul>
      <li>スイッチやブリッジは<strong>MACアドレス学習機能</strong>を持ち、受信したフレームの送信元MACアドレスとポートを記録します。</li>
      <li>これにより、次に同じ宛先へのフレームが来たときに、そのポートにのみフレームを送ることができます。</li>
      <li>このような仕組みを<strong>フィルタリング</strong>と呼び、全体への無駄な転送を避けることができます。</li>
      <li>ユニキャスト通信は宛先ホストにのみ届くため、ネットワークの帯域が有効活用され、通信効率が向上します。</li>
      <li>一方で、宛先MACがまだ登録されていない場合は、<strong>フラッディング（全ポート送信）</strong>が行われます。</li>
      <li>MACテーブルは動的に更新され、ネットワークの構成変更にも柔軟に対応可能です。</li>
      <li>このMAC学習とフィルタリングの仕組みは、スイッチや学習型ブリッジの基本的な機能の一つです。</li>
    </ul>
  </div>
</div>

<!-- Thema 4: Spanning Tree -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Spanning Tree Protocol – Schleifenvermeidung in redundanten Netzen
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    スパニングツリープロトコル – 冗長構成におけるループ防止
  </p>
</div>
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Antwort (Deutsch)</h5>
    <ul>
      <li>In Netzen mit redundanten Verbindungen kann es zu Layer-2-Schleifen kommen, wenn mehrere Switches miteinander verbunden sind.</li>
      <li>Solche Loops führen dazu, dass Broadcast-Frames unendlich im Netzwerk zirkulieren – man spricht von einem <strong>Broadcast-Sturm</strong>.</li>
      <li>Da Layer 2 keine TTL (Time to Live) wie IP hat, werden die Frames niemals automatisch verworfen.</li>
      <li>Das <strong>Spanning Tree Protocol (STP)</strong> analysiert die Netzstruktur und berechnet einen Schleifen-freien Baum (Spanning Tree).</li>
      <li>Dazu werden bestimmte Ports als <em>Blocking</em> markiert, sodass nur ein logischer Pfad aktiv bleibt.</li>
      <li>Wenn eine aktive Verbindung ausfällt, kann STP automatisch einen zuvor blockierten Pfad reaktivieren – Redundanz bleibt erhalten.</li>
      <li>STP wurde standardisiert als IEEE 802.1D und ist ein wesentlicher Bestandteil für stabile Switch-Netzwerke.</li>
      <li>Moderne Varianten wie RSTP (Rapid STP) bieten kürzere Umschaltzeiten für schnellere Reaktionen im Fehlerfall.</li>
    </ul>
  </div>
  <div class="col-md-6">
    <h5>解答（日本語）</h5>
    <ul>
      <li>複数のスイッチを冗長的に接続したネットワークでは、<strong>ループ</strong>（循環経路）が生じる可能性があります。</li>
      <li>ループがあると、ブロードキャストフレームがネットワーク内を無限に回り続ける<strong>ブロードキャストストーム</strong>が発生し、通信障害を引き起こします。</li>
      <li>レイヤ2にはTTL（Time to Live）のような自動消滅機能がないため、フレームが永遠に循環し続けることになります。</li>
      <li><strong>スパニングツリープロトコル（STP）</strong>は、ネットワーク全体を分析して、ループのない論理的なツリー構造（Spanning Tree）を作成します。</li>
      <li>これにより、特定のポートを<strong>ブロッキング状態</strong>にしてループを物理的には維持しつつ、論理的には排除します。</li>
      <li>もしアクティブな経路に障害が発生した場合、ブロッキングされていたポートが自動的にアクティブ化され、冗長性を維持できます。</li>
      <li>STPはIEEE 802.1Dとして標準化され、安定したスイッチネットワーク構築に不可欠なプロトコルです。</li>
      <li>また、<strong>RSTP（Rapid STP）</strong>のような高速版では、より迅速な切替が可能となっています。</li>
    </ul>
  </div>
</div>

<!-- Thema 5: Next-Hop Forwarding -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Next-Hop Forwarding – Optimierung der Pfadwahl in IP-Netzen
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    Next-Hop Forwarding – IPネットワークにおける経路制御
  </p>
</div>
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Antwort (Deutsch)</h5>
    <ul>
      <li>Next-Hop Forwarding ist ein zentrales Konzept der <strong>Layer-3-Routing-Logik</strong> in IP-Netzwerken.</li>
      <li>Ein Router prüft die <strong>Ziel-IP-Adresse</strong> eines eingehenden Pakets und sucht in seiner Routing-Tabelle nach dem passenden Eintrag.</li>
      <li>Statt den gesamten Pfad zu kennen, entscheidet der Router nur über den <strong>nächsten Sprung</strong> – also den nächsten Router auf dem Weg zum Ziel.</li>
      <li>Dadurch kann das Routing dynamisch angepasst und optimiert werden, etwa bei Ausfällen oder Lastverteilung.</li>
      <li>Im Gegensatz zu Switches, die MAC-Adressen auf Layer 2 verwenden, arbeitet Next-Hop Forwarding auf der Netzwerk-Schicht (Layer 3).</li>
      <li>Dieses Verfahren bildet die Grundlage für das gesamte Internet-Routing über viele autonome Systeme hinweg.</li>
      <li>Protokolle wie OSPF oder BGP basieren auf dieser Logik, um große Netzwerke skalierbar zu steuern.</li>
      <li>Next-Hop-Informationen reduzieren zudem den Speicherbedarf, da nur der nächste Zielrouter gespeichert werden muss – nicht der gesamte Pfad.</li>
    </ul>
  </div>
  <div class="col-md-6">
    <h5>解答（日本語）</h5>
    <ul>
      <li><strong>Next-Hop Forwarding</strong>は、IPネットワークにおける<strong>ルーティング（Layer 3）</strong>の基本的な仕組みです。</li>
      <li>ルーターは受信したパケットの<strong>宛先IPアドレス</strong>を参照し、自身のルーティングテーブルから最も適切な経路を選択します。</li>
      <li>ここで重要なのは、パケットの「最終目的地」ではなく、<strong>次に渡すべきルーター（Next Hop）</strong>だけを決定する点です。</li>
      <li>この方式により、ネットワーク全体の構成を知らなくても柔軟で効率的なルーティングが可能になります。</li>
      <li>障害発生時やネットワークの負荷変動にも動的に対応でき、耐障害性が向上します。</li>
      <li>スイッチがMACアドレスによってフレームを転送するのとは異なり、Next-Hop ForwardingはIPベースで制御されます。</li>
      <li>この仕組みは、<strong>インターネット全体の通信</strong>の根幹を支える要素であり、OSPFやBGPといったルーティングプロトコルに応用されています。</li>
      <li>Next Hopの情報だけを保持すれば良いため、ルーターのルーティングテーブルも比較的簡素に保てます。</li>
    </ul>
  </div>
</div>

  </div>
</template>

<script setup>
// No logic required
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
