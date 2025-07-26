<template>
  <div class="container my-4">
    <h3 class="mb-4">Analyse von MAC-Adressierung und Frame-Verarbeitung</h3>

<!-- Thema 1: Ethernet-Adressierung und Frame-Zustellung -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Ethernet-Adressierung und Frame-Zustellung
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    Ethernetにおけるアドレス指定とフレーム配信の仕組み
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Antwort (Deutsch)</h5>
    <ul>
      <li>Jede Netzwerkkarte in einem Ethernet-Netzwerk besitzt eine eindeutige <strong>MAC-Adresse</strong> (Media Access Control).</li>
      <li>Ethernet-Frames enthalten im Header sowohl die Quell- als auch die Ziel-MAC-Adresse.</li>
      <li>Die Zieladresse entscheidet, an welche Netzwerkkarte der Frame weitergeleitet wird.</li>
      <li>Es gibt drei Arten von Adressierung: <strong>Unicast</strong> (eine bestimmte Adresse), <strong>Broadcast</strong> (alle Geräte) und <strong>Multicast</strong> (Gruppe).</li>
      <li>Bei einem <strong>Unicast-Frame</strong> wird der Frame nur an die Netzwerkkarte mit passender MAC-Adresse zugestellt.</li>
      <li>Bei einem <strong>Broadcast</strong> wird der Frame an alle Geräte im lokalen Netzwerksegment gesendet.</li>
    </ul>
  </div>

  <div class="col-md-6">
    <h5>解答（日本語）</h5>
    <ul>
      <li>Ethernetネットワークに接続された各ネットワークカード（NIC）は、<strong>MACアドレス</strong>という固有の識別子を持っています。</li>
      <li>Ethernetフレームには、<strong>送信元</strong>と<strong>宛先</strong>のMACアドレスがヘッダに含まれています。</li>
      <li>宛先アドレスによって、フレームをどのNICが受信するかが決まります。</li>
      <li>アドレス指定には、<strong>ユニキャスト</strong>（特定の1台）、<strong>ブロードキャスト</strong>（全端末）、<strong>マルチキャスト</strong>（一部のグループ）の3種類があります。</li>
      <li><strong>ユニキャスト</strong>の場合は、該当するMACアドレスのNICのみにフレームが渡されます。</li>
      <li><strong>ブロードキャスト</strong>の場合は、同一LAN内の全てのNICがそのフレームを受信します。</li>
    </ul>
  </div>
</div>
<!-- Thema 2: Was ist ein LAN? Besteht es aus Ethernet-Geräten? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Was ist ein LAN? Besteht es aus Ethernet-Geräten?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    LANとは？Ethernetで接続された機器群はLANなのか？
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Antwort (Deutsch)</h5>
    <ul>
      <li>Ein <strong>LAN (Local Area Network)</strong> bezeichnet ein Netzwerk, das sich typischerweise über einen begrenzten geografischen Bereich erstreckt – z.B. innerhalb eines Gebäudes.</li>
      <li><strong>Ethernet</strong> ist die am weitesten verbreitete Technologie zur Realisierung eines LANs. Es handelt sich dabei um einen Standard für Protokolle und physikalische Übertragung.</li>
      <li>Geräte, die über Ethernet-Kabel direkt miteinander verbunden sind, bilden in der Regel ein <strong>LAN-Segment</strong> – insbesondere wenn sie sich im selben <em>Broadcast-Domain</em> befinden.</li>
      <li>Ein Switch verbindet Geräte zu einem gemeinsamen LAN-Segment. Eine Bridge funktioniert ähnlich.</li>
      <li>Ein Router trennt Netzwerke logisch – Geräte auf verschiedenen Seiten eines Routers befinden sich <strong>nicht im selben LAN</strong>, sondern in unterschiedlichen IP-Subnetzen.</li>
      <li>Fazit: <strong>Ja</strong>, Geräte, die direkt per Ethernet verbunden sind, gelten im Allgemeinen als Teil eines LANs – sofern keine Segmentierung durch Router oder VLANs vorliegt.</li>
    </ul>
  </div>

  <div class="col-md-6">
    <h5>解答（日本語）</h5>
    <ul>
      <li><strong>LAN（Local Area Network）</strong>とは、主に同じ建物やフロアなど、限られた範囲内にある機器同士を接続したネットワークのことです。</li>
      <li><strong>Ethernet</strong>は、LANを構築するための標準的な通信技術（プロトコルと物理仕様のセット）です。</li>
      <li>Ethernetで直接接続された機器は、通常同一の<strong>LANセグメント</strong>を構成し、同じブロードキャストドメイン内にあると見なされます。</li>
      <li>スイッチやブリッジを介して接続された機器は、同一のLAN内に属します。</li>
      <li>一方、<strong>ルーター</strong>を挟むとネットワークは分割され、別々のLAN（およびIPサブネット）になります。</li>
      <li>結論：<strong>はい</strong>、Ethernetで直接接続された機器同士は通常「同じLAN」として扱われます。ただし、ルーターやVLANの有無により分割される場合もあります。</li>
    </ul>
  </div>
</div>


<!-- Thema 2: Verhalten der Netzwerkkarte bei Empfang von Frames -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Verhalten der Netzwerkkarte bei Empfang von Frames
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    フレーム受信時のネットワークカードの動作
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Antwort (Deutsch)</h5>
    <ul>
      <li>Wenn ein Ethernet-Frame die Netzwerkkarte erreicht, prüft diese zunächst die <strong>Ziel-MAC-Adresse</strong>.</li>
      <li>Stimmt sie mit der eigenen MAC-Adresse überein oder handelt es sich um einen Broadcast, wird der Frame akzeptiert.</li>
      <li>Andernfalls wird der Frame verworfen und nicht weiter bearbeitet.</li>
      <li>Nur akzeptierte Frames werden an die <strong>höhere Protokollschicht</strong> (z.B. IP) weitergeleitet.</li>
      <li>Diese Filterung erfolgt in Hardware und ist effizient – sie verhindert unnötige CPU-Belastung.</li>
      <li>Bei aktivem Promiscuous Mode kann die Netzwerkkarte allerdings auch fremde Frames annehmen (z.B. für Sniffing).</li>
    </ul>
  </div>

  <div class="col-md-6">
    <h5>解答（日本語）</h5>
    <ul>
      <li>ネットワークカード（NIC）は、受信したEthernetフレームの<strong>宛先MACアドレス</strong>をまず確認します。</li>
      <li>それが自分のMACアドレスか、もしくはブロードキャストアドレスであればフレームを受け入れます。</li>
      <li>それ以外の場合、フレームは破棄され、それ以上処理されません。</li>
      <li>受け入れたフレームのみが<strong>上位プロトコル層（例：IP）</strong>に渡されます。</li>
      <li>このフィルタリングはハードウェアで行われ、CPUへの負荷を最小限に抑える設計になっています。</li>
      <li>ただし、NICが「プロミスキャスモード（Promiscuous Mode）」に設定されている場合は、他のMAC宛のフレームも受け取ることがあります（パケットキャプチャなどで使用）。</li>
    </ul>
  </div>
</div>

<!-- Thema 3: Unterschied zwischen Unicast und Broadcast auf MAC-Ebene -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Unterschied zwischen Unicast und Broadcast auf MAC-Ebene
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    MAC層におけるユニキャストとブロードキャストの違い
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Antwort (Deutsch)</h5>
    <ul>
      <li>Bei <strong>Unicast</strong> wird ein Ethernet-Frame an genau eine Ziel-MAC-Adresse gesendet.</li>
      <li>Nur die Netzwerkkarte mit dieser MAC-Adresse akzeptiert und verarbeitet den Frame – andere ignorieren ihn.</li>
      <li>Unicast-Verkehr ist effizient, da nur der notwendige Empfänger involviert ist.</li>
      <li>Bei <strong>Broadcast</strong> wird der Frame an die Adresse <code>FF:FF:FF:FF:FF:FF</code> gesendet.</li>
      <li>Alle Netzwerkkarten im selben LAN-Segment nehmen diesen Frame an und leiten ihn ggf. an höhere Schichten weiter.</li>
      <li>Broadcasts sind nützlich (z.B. für ARP), können aber bei hoher Häufigkeit die Netzwerklast erhöhen.</li>
    </ul>
  </div>

  <div class="col-md-6">
    <h5>解答（日本語）</h5>
    <ul>
      <li><strong>ユニキャスト</strong>は、特定の1つのMACアドレスを宛先とする通信です。</li>
      <li>フレームは、そのMACアドレスを持つネットワークカードだけが受信し、それ以外は無視します。</li>
      <li>ユニキャスト通信は最小限の通信対象で済むため、ネットワーク資源の使用が効率的です。</li>
      <li><strong>ブロードキャスト</strong>は、宛先MACアドレスとして<code>FF:FF:FF:FF:FF:FF</code>が使われ、LAN内の全端末に送信されます。</li>
      <li>すべてのネットワークカードがこのフレームを受け入れ、必要に応じて上位層に渡します。</li>
      <li>ブロードキャストはARPなどで有効ですが、多用されるとLAN全体に負荷をかける可能性があります。</li>
    </ul>
  </div>
</div>

<!-- Thema 7: Warum gibt es bei MAC-Adressen kein Netzwerkadresskonzept wie bei IP? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum gibt es bei MAC-Adressen kein Netzwerkadresskonzept wie bei IP?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    なぜMACアドレスにはIPのようなネットワークアドレスの概念がないのか？
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Antwort (Deutsch)</h5>
    <ul>
      <li>Eine IP-Adresse besteht aus einem Netzanteil und einem Hostanteil – der Netzanteil definiert die Zugehörigkeit zu einem Subnetz.</li>
      <li>Die <strong>Netzwerkadresse</strong> (z.B. <code>192.168.1.0</code>) steht für das gesamte Subnetz, und wird u.a. für Routing und Subnetting verwendet.</li>
      <li>Die <strong>Broadcast-Adresse</strong> (z.B. <code>192.168.1.255</code>) wird genutzt, um alle Hosts innerhalb dieses Netzes anzusprechen.</li>
      <li>MAC-Adressen hingegen sind flach organisiert und enthalten keine Information über die Netzstruktur – sie identifizieren Geräte innerhalb eines lokalen Segments.</li>
      <li>Da MAC-Adressen nicht geroutet werden, benötigen sie kein Konzept wie „Netzwerkadresse“ – sie gelten nur im LAN.</li>
      <li>Ein MAC-Broadcast (<code>FF:FF:FF:FF:FF:FF</code>) erreicht alle Geräte im Layer-2-Bereich, unabhängig von logischen Netzen.</li>
      <li>Die Trennung in Netzwerke und deren Adressierung ist Aufgabe der IP-Schicht, nicht der MAC-Schicht.</li>
    </ul>
  </div>

  <div class="col-md-6">
    <h5>解答（日本語）</h5>
    <ul>
      <li>IPアドレスは「ネットワーク部」と「ホスト部」に分かれており、ネットワーク部がどのサブネットに属するかを示します。</li>
      <li><strong>ネットワークアドレス</strong>（例：<code>192.168.1.0</code>）は、特定のネットワーク全体を示し、ルーティングやサブネット設計に使われます。</li>
      <li><strong>ブロードキャストアドレス</strong>（例：<code>192.168.1.255</code>）は、同一サブネット内の全端末を対象にパケットを送る際に使用されます。</li>
      <li>MACアドレスは機器ごとの一意な識別子であり、「どのネットワークに属しているか」という情報は含まれていません。</li>
      <li>MACアドレスはLAN（同一セグメント）内でのみ有効なローカルアドレスであり、ルーティングされません。</li>
      <li>MACのブロードキャスト（<code>FF:FF:FF:FF:FF:FF</code>）は、物理的に接続された全端末に届きますが、ネットワーク構造を考慮しません。</li>
      <li>ネットワークの分離や経路制御はIP層で行われるため、MAC層にはネットワークアドレスの概念が不要なのです。</li>
    </ul>
  </div>
</div>

<!-- Thema 4: Übergabe an die Netzwerkschicht: Wann und warum? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Übergabe an die Netzwerkschicht: Wann und warum?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    フレームがネットワーク層に渡される条件と理由
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Antwort (Deutsch)</h5>
    <ul>
      <li>Ein Ethernet-Frame wird nur dann an die Netzwerkschicht weitergereicht, wenn er von der Netzwerkkarte akzeptiert wird.</li>
      <li>Dies ist der Fall bei:
        <ul>
          <li>Übereinstimmung der Zieladresse mit der eigenen MAC-Adresse (Unicast),</li>
          <li>oder bei Broadcast- bzw. Multicast-Adressen.</li>
        </ul>
      </li>
      <li>Nach erfolgreicher Prüfung wird der Frame entkapselt und der enthaltene IP-Paketinhalt an Layer 3 übergeben.</li>
      <li>Frames mit fremder MAC-Adresse werden verworfen und erreichen die Netzwerkschicht nicht.</li>
      <li>Diese Filterung reduziert unnötige Verarbeitung und erhöht die Effizienz im Netzwerk-Stack.</li>
    </ul>
  </div>

  <div class="col-md-6">
    <h5>解答（日本語）</h5>
    <ul>
      <li>Ethernetフレームが<strong>ネットワーク層（例：IP層）</strong>に渡されるのは、ネットワークカードがそのフレームを受信したときのみです。</li>
      <li>その条件は次のいずれかです：
        <ul>
          <li>フレームの宛先MACアドレスが自分自身のMACアドレスと一致する（ユニキャスト）</li>
          <li>ブロードキャストまたはマルチキャストアドレスで送られてきた</li>
        </ul>
      </li>
      <li>受信が許可されると、フレームは分解され、その中に含まれるIPパケットがネットワーク層に渡されます。</li>
      <li>自分宛でないフレームは破棄され、ネットワーク層には到達しません。</li>
      <li>この仕組みにより、無関係なパケット処理を避け、システム全体の効率が向上します。</li>
    </ul>
  </div>
</div>

<!-- Thema 5: Auswirkungen von Broadcasts im LAN -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Auswirkungen von Broadcasts im LAN
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    ブロードキャストがLANに与える影響
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Antwort (Deutsch)</h5>
    <ul>
      <li>Broadcasts sind notwendig für Dienste wie ARP, DHCP oder Routing-Updates.</li>
      <li>Sie werden an alle Hosts im gleichen Layer-2-Netzwerksegment gesendet.</li>
      <li>Jede Netzwerkkarte muss diese Broadcast-Frames analysieren – unabhängig davon, ob sie betroffen ist oder nicht.</li>
      <li>Ein übermäßiger Gebrauch von Broadcasts führt zu sogenanntem „Broadcast Storm“ und kann das Netzwerk stark belasten.</li>
      <li>Moderne Netzwerke begrenzen Broadcasts durch Segmentierung (z.B. VLANs) oder den Einsatz von Routern.</li>
    </ul>
  </div>

  <div class="col-md-6">
    <h5>解答（日本語）</h5>
    <ul>
      <li>ブロードキャストはARP、DHCP、ルーティング情報の通知など、多くのネットワーク機能に不可欠です。</li>
      <li>同一のL2セグメントに存在する全ホストに向けて送信されるため、すべてのNICがそれを処理しようとします。</li>
      <li>自分に関係ない情報でも、毎回処理の負荷がかかるため、端末やネットワークに影響を及ぼす可能性があります。</li>
      <li>特に頻繁なブロードキャストは「ブロードキャストストーム」と呼ばれる現象を引き起こし、ネットワーク全体の性能低下を招きます。</li>
      <li>これを防ぐため、VLANやルーターによってL2ブロードキャスト領域を分割するのが一般的です。</li>
    </ul>
  </div>
</div>

<!-- Thema 6: Verhalten bei Verwendung von Switches -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Verhalten bei Verwendung von Switches
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    スイッチ使用時のフレーム処理の補足
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Antwort (Deutsch)</h5>
    <ul>
      <li>Ein Switch speichert die MAC-Adressen der angeschlossenen Geräte in einer internen Tabelle.</li>
      <li>Er leitet eingehende Frames nur an den Port weiter, der zur Zieladresse gehört (Unicast-Weiterleitung).</li>
      <li>Dadurch erhalten andere Geräte den Frame gar nicht erst – das verringert unnötigen Datenverkehr.</li>
      <li>Bei Broadcast-Frames sendet der Switch jedoch an <strong>alle</strong> Ports – wie ein Hub.</li>
      <li>Auch in einem geswitchten Netzwerk muss die Netzwerkkarte prüfen, ob ein empfangener Frame für sie bestimmt ist.</li>
      <li>Switche verbessern die Effizienz, ändern aber nicht die grundlegende Filterlogik der NIC.</li>
    </ul>
  </div>

  <div class="col-md-6">
    <h5>解答（日本語）</h5>
    <ul>
      <li>スイッチは、各ポートに接続された機器のMACアドレスを内部のテーブルに記録しています。</li>
      <li>フレームを受信すると、その宛先MACアドレスに対応するポートのみに転送します（ユニキャスト転送）。</li>
      <li>これにより、他のホストには不要なフレームが届かず、ネットワークの効率が大幅に向上します。</li>
      <li>ただし、宛先がブロードキャストアドレスの場合は、<strong>全ポート</strong>にフレームを転送します（ハブと同様の挙動）。</li>
      <li>スイッチを使っていても、NICは受信したフレームが自分宛かどうかを判断する必要があります。</li>
      <li>つまり、スイッチはフィルタリングを助けますが、NIC自身のアドレス判定機能も依然として重要です。</li>
    </ul>
  </div>
</div>

<!-- Thema 3: Verhältnis zwischen MAC-Adresse und IP-Adresse -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Verhältnis zwischen MAC-Adresse und IP-Adresse
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    MACアドレスとIPアドレスの関係とは？1対1なのか？
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Antwort (Deutsch)</h5>
    <ul>
      <li>Die <strong>MAC-Adresse</strong> ist eine eindeutige physikalische Adresse, die jeder Netzwerkschnittstelle (NIC) zugewiesen ist.</li>
      <li>Ein Gerät kann mehrere MAC-Adressen haben (z.B. für LAN und WLAN).</li>
      <li>Die <strong>IP-Adresse</strong> ist eine logische Adresse, die einem Gerät im Netzwerk dynamisch (DHCP) oder statisch zugewiesen wird.</li>
      <li>Ein <strong>MAC ist keine "Geräteadresse"</strong>, sondern gehört zur Netzwerkschnittstelle (z.B. Ethernet/WLAN).</li>
      <li>Die Zuordnung IP ⇔ MAC erfolgt über das ARP-Protokoll.</li>
      <li>In einem LAN wird jeder NIC eine eindeutige IP-Adresse zugewiesen (meist durch den Router per DHCP).</li>
      <li><strong>1:1 Beziehung?</strong> In der Praxis meistens, aber es gibt Ausnahmen:</li>
      <ul>
        <li>Ein NIC kann mehrere IPs haben (z.B. bei Servern oder virtuellen Interfaces).</li>
        <li>Eine IP kann von mehreren MACs verwendet werden (z.B. bei Load-Balancing oder VRRP).</li>
      </ul>
    </ul>
  </div>

  <div class="col-md-6">
    <h5>解答（日本語）</h5>
    <ul>
      <li><strong>MACアドレス</strong>は、ネットワークインターフェース（NIC）に割り当てられる固有の物理アドレスです。</li>
      <li>1台の機器に複数のNIC（例：Wi-Fiと有線LAN）がある場合、それぞれ別のMACアドレスを持ちます。</li>
      <li><strong>IPアドレス</strong>はネットワーク上で通信のために使われる論理的なアドレスで、通常DHCPなどにより割り当てられます。</li>
      <li>MACは「機器そのもの」ではなく、「通信インターフェースの識別子」です。</li>
      <li>IPアドレスとMACアドレスの対応は<strong>ARP（Address Resolution Protocol）</strong>により行われます。</li>
      <li>LAN内では、各NICごとに一意のIPアドレスが割り当てられる必要があります。</li>
      <li><strong>MACとIPは1対1か？</strong> → 多くの場合そうですが、例外も存在します：</li>
      <ul>
        <li>1つのNICが複数のIPアドレスを持つ（サーバ、仮想環境など）</li>
        <li>1つのIPアドレスを複数のMACが使う（フェイルオーバー、プロキシ、NATなど）</li>
      </ul>
    </ul>
  </div>
</div>

<!-- Thema X:  -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum kann es bei DHCP zu Kollisionen kommen?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    なぜDHCPにおいて衝突が発生する可能性があるのか？
  </p>
</div>

<!-- 解説ブロック -->
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      DHCP (Dynamic Host Configuration Protocol) weist Geräten im Netzwerk automatisch IP-Adressen und andere Konfigurationsdaten zu.
      Der Ablauf folgt dem sogenannten <strong>DORA-Modell</strong>:
    </p>
    <ul>
      <li><strong>Discover:</strong> Wer ist ein DHCP-Server? (Broadcast)</li>
      <li><strong>Offer:</strong> Hier ist ein IP-Angebot (Unicast oder Broadcast)</li>
      <li><strong>Request:</strong> Ich hätte gern diese IP (Broadcast)</li>
      <li><strong>Ack:</strong> OK, IP ist vergeben (Unicast oder Broadcast)</li>
    </ul>
    <p>
      Da ein Gerät zu Beginn <strong>noch keine IP-Adresse besitzt</strong>, nutzt es für die erste Kommunikation <strong>Broadcast</strong> (IP: 255.255.255.255, MAC: FF:FF:FF:FF:FF:FF).
    </p>
    <p>
      In älteren Netzwerken mit Hubs teilen sich alle Geräte denselben Übertragungskanal. Wenn mehrere Hosts gleichzeitig einen DHCP Discover senden – etwa beim gleichzeitigen Einschalten mehrerer PCs – überlagern sich die Signale auf physikalischer Ebene.
    </p>
    <p>
      Dies führt zu einer <strong>Kollision</strong>, die durch <strong>CSMA/CD</strong> (Carrier Sense Multiple Access with Collision Detection) behandelt wird. Die Geräte erkennen den Konflikt, senden ein Jamming-Signal und versuchen es nach zufälliger Wartezeit erneut.
    </p>
    <p>
      In modernen Netzwerken mit Switches sind solche Kollisionen praktisch ausgeschlossen, da jeder Port ein eigenes Übertragungsmedium hat und unabhängig arbeitet.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      DHCP（Dynamic Host Configuration Protocol）は、ネットワークに接続された機器にIPアドレスや設定情報を自動で割り当てる仕組みです。
      通信は<strong>DORA</strong>の4ステップで進みます：
    </p>
    <ul>
      <li><strong>Discover：</strong> IPアドレスをくれるDHCPサーバを探す（ブロードキャスト）</li>
      <li><strong>Offer：</strong> 使えるIPアドレスの提案（ユニキャストまたはブロードキャスト）</li>
      <li><strong>Request：</strong> そのIPが欲しいと要求（ブロードキャスト）</li>
      <li><strong>Ack：</strong> 割り当てを承認（ユニキャストまたはブロードキャスト）</li>
    </ul>
    <p>
      接続初期は<strong>自分のIPアドレスを持っていない</strong>ため、DHCP Discoverはブロードキャスト（IP: 255.255.255.255 / MAC: FF:FF:FF:FF:FF:FF）でネットワーク全体に送信されます。
    </p>
    <p>
      特に古い<strong>ハブ接続のネットワーク</strong>では、すべての機器が同じ物理回線を共有しているため、
      例えば複数のPCを同時に起動したときに<strong>Discoverメッセージが同時に送信される</strong>と、物理的に信号がぶつかり<strong>衝突（コリジョン）</strong>が発生します。
    </p>
    <p>
      こうした衝突は<strong>CSMA/CD</strong>方式により処理され、機器はジャム信号を送って通知し、その後ランダムな時間待機して再送を試みます。
    </p>
    <p>
      一方で現代の<strong>スイッチ接続のネットワーク</strong>では、各ポートが個別に分離されているため、
      ブロードキャストであっても物理的な衝突は発生せず、より安全かつ高速にDHCP通信が行われます。
    </p>
  </div>
</div>

<!-- Thema X:  -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Wo befindet sich der DHCP-Server?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    DHCPサーバはどこにある？
  </p>
</div>

<!-- 解説ブロック -->
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Wo sich der DHCP-Server befindet, hängt von der Netzwerkgröße ab:
    </p>
    <ul>
      <li><strong>Zuhause / kleine Büros:</strong> Der DHCP-Server ist in der Regel im <strong>Router</strong> integriert (z.B. Fritzbox, TP-Link, etc.).</li>
      <li><strong>Unternehmen / Campus-Netzwerke:</strong> Ein <strong>dedizierter Server</strong> (z.B. Windows Server oder Linux) übernimmt die Aufgabe.</li>
      <li>In VLAN- oder Multi-Subnet-Umgebungen wird DHCP oft über einen <strong>DHCP-Relay-Agenten</strong> weitergeleitet.</li>
    </ul>
    <p>
      Beispiel: Ein zentraler Server auf 192.168.10.1 verwaltet IP-Adressen für mehrere Abteilungen im Netzwerk.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      DHCPサーバがどこにあるかは、ネットワークの規模によって異なります：
    </p>
    <ul>
      <li><strong>家庭・小規模オフィス：</strong> ルーターの中にDHCPサーバ機能が内蔵されているのが一般的です。（例：バッファロー、NEC、TP-Linkなど）</li>
      <li><strong>企業や学校：</strong> Windows Server や Linux サーバなどで専用のDHCPサービスを運用するのが一般的です。</li>
      <li>複数のサブネットやVLANがある場合、<strong>DHCPリレー</strong>で別ネットワークに中継されることもあります。</li>
    </ul>
    <p>
      例：192.168.10.1 にあるWindowsサーバが、部署ごとに異なるIP範囲を配布しているケースなど。
    </p>
  </div>
</div>




  </div>
</template>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
