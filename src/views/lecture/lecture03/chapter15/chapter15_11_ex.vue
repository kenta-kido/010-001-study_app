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

    <!-- Thema -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Thema:</strong><br />
        Warum erfolgt die Netzwerksegmentierung auf Basis von IP-Adressen?
      </p>
      <hr />
      <p><strong>テーマ:</strong><br />
        なぜネットワークの分割はIPアドレスを基準にして行われるのか？
      </p>
    </div>

    <!-- Erklärung -->
    <div class="row mb-4">
      <div class="col-md-6">
        <h5>Erklärung (Deutsch)</h5>

        <p>
          Die IP-Adresse ist eine logische Adresse, die unabhängig von der Hardware frei vergeben werden kann.
        </p>
        <p>
          Eine IP-Adresse besteht aus einem Netzwerk- und einem Host-Teil.
        </p>
        <p>
          Zum Beispiel bei 192.168.1.10/24 gibt /24 an, dass die ersten 24 Bit den Netzwerkteil bilden – der Rest ist der Hostteil.
        </p>

        <p>
          Durch diese hierarchische Struktur lässt sich ein Netzwerk flexibel und effizient in Subnetze unterteilen, je nach Bedarf und Größe.
        </p>
        
        <p>
          Dank CIDR (Classless Inter-Domain Routing) ist es möglich, beliebig große oder kleine Subnetze zu definieren – z.&nbsp;B. /30, /24 oder /20.
          Das hilft, IP-Adressbereiche optimal zu nutzen und Übertragungen gezielt zu steuern.
        </p>

        <p>
          Router treffen Weiterleitungsentscheidungen ausschließlich auf Basis von IP-Adressen, nicht MAC-Adressen.
          Die physische MAC-Adresse ist zwar für die letzte Zustellung im lokalen Netzwerk notwendig, aber nicht für Routingentscheidungen.
        </p>

        <p>
          Deshalb basiert die gesamte Netzwerksegmentierung und -kontrolle im modernen Internet auf IP – nicht auf der MAC-Adresse.
        </p>
        <p>
          Router entscheiden auf Basis von IP-Adressen, in welches Netzwerk ein Paket weitergeleitet wird.  
          Die Segmentierung erfolgt also auf IP-Ebene – nicht durch MAC-Adressen.
        </p>

        <p>
          MAC-Adressen benötigen deshalb kein eigenes Netzwerkadresskonzept –  
          sie gelten nur innerhalb eines IP-Teilnetzes und werden durch Router nicht weitergeleitet.
        </p>
      </div>

      <div class="col-md-6">
        <h5>解説（日本語）</h5>

        <p>
          IPアドレスは物理機器とは独立して自由に設定できる「論理アドレス」です。
        </p>
        <p>
          IPアドレスは「ネットワーク部」と「ホスト部」に分かれています。
        </p>
        <p>
          例えば 192.168.1.10/24 の場合、/24 は最初の24ビットがネットワーク部で、残りがホスト部を表します。
        </p>
        <p>
          このような階層構造により、ネットワークは用途や規模に応じて柔軟かつ効率的にサブネットに分割できます。
        </p>

        <p>
          CIDR（Classless Inter-Domain Routing）によって、クラスA/B/Cにとらわれず、  
          /30 や /24、/20 など任意のサブネットサイズを指定でき、アドレス空間を無駄なく使えます。
        </p>

        <p>
          また、ルーターは通信の宛先を判断する際、IPアドレス（特にネットワーク部）に基づいてルーティングします。
          一方、MACアドレスは最終的なホストへの届け先としてだけ使われ、ルーターはMACアドレスを見ません。
        </p>

        <p>
          このため、**ネットワークの論理的な分割や制御はIPアドレスを使って行われる**のが基本です。
        </p>
        <p>
          一方、MACアドレスはルーターを越えないローカルなリンク内でのみ使用されます。  
          既にIPによってネットワークは分割されているため、**MACアドレスに「ネットワークアドレス」の概念は不要**です。
        </p>

        <p>
          つまり、MACアドレスは物理的に一意な識別子として機能しますが、ネットワークの階層構造はIPアドレスが担っているのです。
        </p>
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


    <!-- Thema -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Thema:</strong><br />
        Wie ist ein Ethernet-Frame aufgebaut? – Struktur und MAC-Adresse erklärt
      </p>
      <hr />
      <p><strong>テーマ:</strong><br />
        Ethernet フレームの構造とは？構成要素と MAC アドレスの仕組みの解説
      </p>
    </div>

    <!-- Abbildung -->
    <div class="text-center mb-4">
      <img :src="ethernetImage" alt="Ethernet Frame Struktur" class="img-fluid rounded border" />
      <p class="text-muted mt-2">Abbildung: Aufbau eines Ethernet-Frames mit Header, Payload und CRC</p>
    </div>

    <!-- Erklärung -->
    <div class="row mb-4">
      <div class="col-md-6">
        <h5>Erklärung (Deutsch)</h5>

        <p>
          Ein Ethernet-Frame besteht aus drei Hauptkomponenten: dem Header, dem Payload (Nutzdaten)
          und der CRC-Prüfsumme. Der Header enthält die Zieladresse (6 Byte), die Quelladresse (6 Byte)
          und ein Typfeld (2 Byte).
        </p>

        <p>
          Das Typfeld spezifiziert das Protokoll der darüberliegenden Schicht, z.&nbsp;B. IPv4 oder ARP.
          Die Nutzlast kann zwischen 46 und 1500 Byte groß sein.
        </p>

        <p>
          Die CRC (Cyclic Redundancy Check) ist 4 Byte groß und dient zur Erkennung von Bitfehlern
          während der Übertragung.
        </p>

        <p>
          Die MAC-Adresse (Media Access Control) ist 6 Byte = 48 Bit lang und wird häufig im Format
          <code>00:1A:2B:3C:4D:5E</code> dargestellt. Jeder Byte (8 Bit) wird dabei in zwei Hex-Zeichen
          umgewandelt. Das ist möglich, da <code>2^8 = 256</code> und <code>16^2 = 256</code>, also ein
          Byte durch zwei hexadezimale Ziffern darstellbar ist.
        </p>
      </div>

      <div class="col-md-6">
        <h5>解説（日本語）</h5>

        <p>
          Ethernetフレームは大きく3つの部分で構成されています：ヘッダ、ペイロード（データ部分）、
          そしてCRC（巡回冗長検査）です。ヘッダには以下の情報が含まれます：
          宛先MACアドレス（6バイト）、送信元MACアドレス（6バイト）、タイプフィールド（2バイト）です。
        </p>

        <p>
          タイプフィールドは、上位プロトコル（例：IPv4やARPなど）を識別するために使われます。
          ペイロードは最小46バイトから最大1500バイトの間で変動します。
        </p>

        <p>
          CRC（4バイト）は、転送中のビット誤りを検出するための検査データです。
        </p>

        <p>
          MACアドレスは6バイト（48ビット）で構成され、<code>00:1A:2B:3C:4D:5E</code> のように、
          通常は16進数表記で表示されます。1バイトは8ビットであり、<code>2^8 = 256</code>。これは
          <code>16^2 = 256</code>と同じであるため、1バイトはちょうど2桁の16進数で表現可能です。
        </p>
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
      Bei einem gleichzeitigen Start vieler Hosts – etwa nach einem Stromausfall – kann es zur gleichzeitigen Aussendung mehrerer DHCP Discover kommen.  
    </p>
    <p>
    Um ein sogenanntes synchronisiertes Fluten zu vermeiden, verzögern Hosts insbesondere vor dem ersten DHCPDISCOVER nach dem Start oder einer Netzwerkwiederherstellung ihre Anfragen um eine zufällige Zeit.
    </p>
    <p>
      Sollte eine Nachricht verloren gehen oder ein Antwortpaket doppelt empfangen werden, sorgt DHCP selbst für Wiederholung oder Ignorieren der Duplikate:
    </p>
    <ul>
      <li>Bei fehlendem Response: erneute Übertragung der Anfrage</li>
      <li>Bei doppeltem Response: zusätzliche Kopien werden ignoriert</li>
    </ul>
    <p>
      Außerdem wird die Adresse des DHCP-Servers nach der ersten Erkennung zwischengespeichert, um spätere Lease-Verlängerungen effizient abzuwickeln.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      DHCP（Dynamic Host Configuration Protocol）は、ネットワーク機器にIPアドレスや設定情報を自動で割り当てます。
      このプロセスは<strong>DORA</strong>（Discover, Offer, Request, Ack）の4段階で行われます。
    </p>
    <ul>
      <li><strong>Discover：</strong> DHCPサーバを探す（ブロードキャスト）</li>
      <li><strong>Offer：</strong> 利用可能なIPアドレスを提案（ユニキャストまたはブロードキャスト）</li>
      <li><strong>Request：</strong> 特定のIPを要求（ブロードキャスト）</li>
      <li><strong>Ack：</strong> 割り当てを承認（ユニキャストまたはブロードキャスト）</li>
    </ul>
    <p>
      クライアントは<strong>初期状態ではIPアドレスを持っていない</strong>ため、最初のDiscoverメッセージはIPアドレス<code>255.255.255.255</code>とMACアドレス<code>FF:FF:FF:FF:FF:FF</code>を使った<strong>ブロードキャスト</strong>で送信されます。
    </p>
    <p>
      電源復旧後などに多くの端末が同時に起動すると、DHCP Discoverが一斉に送信されることがあります。  
      これを<strong>同期フラッディング（synchronized flooding）</strong>と呼び、ネットワークの混雑を引き起こす恐れがあります。
    </p>
    <p>
      いわゆる「同期したフラッディング」を避けるために、ホストは特に起動直後やネットワーク復旧後の最初の DHCP Discover の送信前に、要求をランダムな時間だけ遅延させます。
    </p>
    <p>
      また、DHCPは以下のような動作で冗長やロスに対応します：
    </p>
    <ul>
      <li>レスポンスが得られない場合 → 再送を行う</li>
      <li>レスポンスが重複して届いた場合 → 余分な応答を無視する</li>
    </ul>
    <p>
      さらに、一度発見したDHCPサーバのアドレスはキャッシュに保持され、  
      今後のリース更新（Renew）の際に効率よく通信を行うことができます。
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

    <!-- Thema -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Thema:</strong><br />
        DHCP und IP-Adressvergabe: Unterschied zwischen dynamischer und statischer Zuweisung
      </p>
      <hr />
      <p><strong>テーマ:</strong><br />
        DHCP における IP アドレス割り当て：動的割り当てと静的割り当ての違い
      </p>
    </div>

    <!-- Erklärung -->
    <div class="row mb-4">
      <div class="col-md-6">
        <h5>Erklärung (Deutsch)</h5>

        <p>
          DHCP (Dynamic Host Configuration Protocol) weist Geräten im Netzwerk automatisch IP-Adressen zu.
          Dabei unterscheidet man zwei Hauptformen: dynamische und statische Zuweisung.
        </p>

        <p>
          Bei der dynamischen Vergabe wird eine IP-Adresse aus einem vordefinierten Pool für eine bestimmte <strong>Lease Time</strong> zugewiesen.  
          Vor Ablauf dieser Zeit sendet das Gerät eine Verlängerungsanfrage („Renew“). Diese wird in der Regel automatisch bewilligt.
        </p>

        <p>
          Die statische Vergabe über DHCP erfolgt mittels <strong>Reservation</strong>: Der DHCP-Server erkennt ein Gerät an seiner MAC-Adresse  
          und weist ihm jedes Mal dieselbe IP-Adresse zu. So bleibt die Konfiguration zentral verwaltbar.
        </p>

        <p>
          Der Hauptvorteil von DHCP ist die Vereinfachung der Verwaltung – selbst bei festen IPs muss man auf Client-Seite keine manuelle  
          Konfiguration mehr durchführen.
        </p>

        <p>
          Typische Einsatzfälle:
        </p>
          <ul>
            <li>Dynamisch: Benutzergeräte, mobile Endgeräte, Gäste, IoT</li>
            <li>Statisch: Server, Drucker, NAS, Netzwerkgeräte (z.B. Router, Switches)</li>
          </ul>

        <p>
          Im Vergleich dazu ist eine vollständig manuelle IP-Konfiguration fehleranfälliger und schwerer zu warten –  
          DHCP mit statischer Bindung ist meist die bessere Lösung.
        </p>
      </div>

      <div class="col-md-6">
        <h5>解説（日本語訳）</h5>

        <p>
          DHCP（Dynamic Host Configuration Protocol）は、ネットワーク機器に対して IP アドレスを自動で割り当てる仕組みです。  
          主に 2 種類の割り当て方式があり、動的割り当てと静的割り当てに分けられます。
        </p>

        <p>
          動的割り当てでは、DHCP サーバはあらかじめ用意された IP アドレスプールから、指定された<strong>リース時間（Lease Time）</strong>に基づき、  
          一時的に IP アドレスを貸与します。リース満了前に更新要求（Renew）を出し、通常は自動更新されます。
        </p>

        <p>
          静的割り当てでは、DHCP サーバがデバイスの MAC アドレスを識別し、毎回同じ IP アドレスを割り当てます（<strong>DHCP 予約：Reservation</strong>）。  
          これにより、クライアント側の設定変更なしに、常に固定 IP を使用できます。
        </p>

        <p>
          DHCP の最大の利点は、IP アドレスの管理をサーバ側で一元的に行えることです。  
          静的割り当てにおいても、クライアント側での手動設定が不要になります。
        </p>

        <p>
          代表的な適用例：
        </p>
          <ul>
            <li>動的割り当て：ユーザー端末、スマートフォン、ゲスト機器、IoTデバイスなど</li>
            <li>静的割り当て：サーバ、プリンタ、NAS、ネットワーク機器（ルーター、スイッチなど）</li>
          </ul>

        <p>
          完全な手動による IP 設定は、エラーの原因となりやすく保守も煩雑なため、  
          DHCP による静的割り当ての方が実用的かつ管理しやすい選択肢といえます。
        </p>
      </div>
    </div>

<!-- Thema: Zuverlässigkeit und Effizienz in DHCP-Kommunikation -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Mechanismen zur Fehlertoleranz und Effizienz in DHCP
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    DHCPにおけるロス耐性・冗長対応とキャッシュ活用
  </p>
</div>

<!-- Erklärung -->
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>

    <p>
      DHCP ist ein verbindungsloses Protokoll (UDP) und kann daher Paketverluste oder Duplikate erleben.  
      Um trotzdem zuverlässig zu funktionieren, nutzt DHCP mehrere Schutzmechanismen:
    </p>

    <ul>
      <li><strong>Keine Antwort erhalten?</strong> → Die Nachricht wird automatisch erneut gesendet (Retry)</li>
      <li><strong>Doppelte Antwort erhalten?</strong> → Überflüssige Antwort wird ignoriert</li>
      <li><strong>Gefundene Serveradresse wird gespeichert:</strong> Die Adresse des DHCP-Servers wird nach dem ersten Discover im Cache behalten</li>
    </ul>

    <p>
      Dank dieser Cache-Information kann ein Client beim nächsten <strong>Lease Renewal (Verlängerung)</strong> direkt mit dem bekannten Server kommunizieren,  
      ohne den Discover-Prozess erneut starten zu müssen. Das erhöht die Effizienz deutlich.
    </p>

    <p>
      Diese Techniken machen DHCP robust gegenüber Netzwerkausfällen und gleichzeitigen Anfragen vieler Hosts.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>

    <p>
      DHCPはUDPベースのプロトコルであるため、<strong>パケットのロスや重複が起きる可能性</strong>があります。  
      しかし、これに対処するために以下のような仕組みを備えています：
    </p>

    <ul>
      <li><strong>レスポンスが得られない場合：</strong> 自動的に再送（Retry）を行います</li>
      <li><strong>同じレスポンスが複数届いた場合：</strong> 最初の応答を採用し、残りは無視します</li>
      <li><strong>発見したDHCPサーバのアドレスをキャッシュ：</strong> 最初のDiscoverで見つけたサーバを記録しておきます</li>
    </ul>

    <p>
      この<strong>キャッシュ機能</strong>により、今後の<strong>リース更新（Renew）</strong>では<span style="color: red;">DHCP Discoverをスキップ</span>して、  
      直接サーバにRequestを送信できるようになります。これにより通信が効率化されます。
    </p>

    <p>
      これらの工夫により、DHCPは通信の信頼性と効率性を両立させており、  
      多数のホストが一斉に接続するような状況でも安定して動作します。
    </p>
  </div>
</div>

    <!-- Thema: DHCP-Relay zur Subnetz-übergreifenden IP-Vergabe -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    DHCP-Relay zur Subnetz-übergreifenden IP-Adressvergabe
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    DHCPリレーによるネットワーク越え対応
  </p>
</div>

<!-- Erklärung -->
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>

    <p>
      Ein DHCP-Server funktioniert normalerweise nur innerhalb desselben Netzwerks (Layer 2).  
      Damit auch Geräte in anderen Subnetzen IP-Adressen erhalten können, wird ein sogenannter <strong>DHCP-Relay-Agent</strong> verwendet.
    </p>

    <p>
      Dieser Relay-Agent nimmt DHCP-Nachrichten (z.&nbsp;B. Discover) entgegen und leitet sie an einen zentralen DHCP-Server weiter.  
      Dazu muss der Relay die IP-Adresse des DHCP-Servers kennen.
    </p>

    <p>
      Auch spätere Nachrichten wie Request und ACK werden über den Relay-Agent übertragen, sodass der komplette DORA-Ablauf möglich ist.
    </p>

    <p>
      Vorteil: Auch in großen Netzwerken mit vielen Subnetzen genügt ein einziger DHCP-Server, wenn überall DHCP-Relays vorhanden sind.  
      Viele kommerzielle Router oder Layer-3-Switches unterstützen DHCP-Relay standardmäßig.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>

    <p>
      DHCPサーバは基本的に<strong>同一ネットワーク内（L2レベル）</strong>でのみ動作します。  
      そのため、異なるサブネットに属する機器がIPアドレスを取得するには、<strong>DHCPリレー（Relay Agent）</strong>が必要です。
    </p>

    <p>
      DHCPリレーは、DHCP Discover などのパケットを受け取り、あらかじめ設定された<strong>DHCPサーバのIPアドレス</strong>へ中継します。
    </p>

    <p>
      中継はDiscoverだけでなく、RequestやACKなど<strong>DORAの全工程</strong>において行われるため、サブネットをまたいでもDHCPが利用可能です。
    </p>

    <p>
      この仕組みにより、<strong>複数のネットワークに分かれた大規模環境でも、DHCPサーバを1カ所に集中配置</strong>することができます。  
      多くの商用ルーターやL3スイッチは、DHCPリレー機能を標準で備えています。
    </p>
  </div>
</div>

  </div>
</template>

<script setup>
import ethernetImage from '@/assets/lecture/lecture03/Figure_0101.png'
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
