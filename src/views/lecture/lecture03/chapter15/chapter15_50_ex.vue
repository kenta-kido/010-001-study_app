<template>
  <div class="container my-4">
    <h3 class="mb-4">UDP/TCP</h3>
<!-- Thema 1 -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Was ist UDP und wie funktioniert es im Vergleich zu TCP?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    UDPとは何か？TCPと比べてどのように機能するのか？
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      <strong>UDP (User Datagram Protocol)</strong> ist ein verbindungsloses Transportprotokoll auf Ebene 4 (Transport Layer) des OSI-Modells.
      Es überträgt Daten in Form von sogenannten "Datagrammen", ohne vorher eine Verbindung aufzubauen.
    </p>
    <p>
      Im Gegensatz zu <strong>TCP</strong> garantiert UDP <em>nicht</em> die Zustellung, Reihenfolge oder Fehlerfreiheit der Daten. Es gibt:
    </p>
    <ul>
      <li>keinen Verbindungsaufbau (kein Handshake)</li>
      <li>keine Wiederholung bei Paketverlust</li>
      <li>keine Garantie für die Reihenfolge</li>
      <li>keine Fluss- oder Staukontrolle</li>
    </ul>
    <p>
      Dafür ist UDP sehr <strong>schnell und effizient</strong>, da es auf Overhead verzichtet. Es eignet sich besonders für Echtzeitanwendungen, bei denen Geschwindigkeit wichtiger ist als Zuverlässigkeit:
    </p>
    <ul>
      <li>Streaming (Audio/Video)</li>
      <li>VoIP (z.&nbsp;B. Skype, Zoom)</li>
      <li>Online-Games</li>
      <li>DNS-Anfragen (Domain Name System)</li>
    </ul>
    <p>
      Bei DNS z.&nbsp;B. wird oft ein einziges UDP-Paket gesendet, um eine Anfrage zu stellen. Falls keine Antwort kommt, wiederholt der Client die Anfrage.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      <strong>UDP（User Datagram Protocol）</strong>は、OSI参照モデルの第4層（トランスポート層）に位置するプロトコルで、
      「接続を確立せずに」データを送信できる<strong>コネクションレス型</strong>の通信方式です。
    </p>
    <p>
      <strong>TCP</strong>とは異なり、UDPには以下のような制御機能がありません：
    </p>
    <ul>
      <li>通信前の接続確立（ハンドシェイク）がない</li>
      <li>パケットの再送制御がない</li>
      <li>到着順の保証がない</li>
      <li>フロー制御や輻輳制御がない</li>
    </ul>
    <p>
      その分、UDPは<strong>非常に高速かつシンプル</strong>で、リアルタイム性を重視する用途に適しています。
    </p>
    <ul>
      <li>映像・音声ストリーミング</li>
      <li>VoIP（例：Skype、Zoomなど）</li>
      <li>オンラインゲーム</li>
      <li>DNS（ドメイン名解決）</li>
    </ul>
    <p>
      例えばDNSでは、クライアントは1つのUDPパケットで問い合わせを送り、応答が来なければ再送するという仕組みです。
      軽量かつ高速で、応答が早いプロトコル設計が求められる場面に最適です。
    </p>
  </div>
</div>


<!-- Thema: Warum ist UDP so schnell? Zusammenhang mit der Segmentstruktur -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum ist UDP so schnell? Zusammenhang mit der Segmentstruktur
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    なぜUDPは高速なのか？セグメント構造との関係とデータ長の限界
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      UDP ist besonders schnell, weil es einen sehr kleinen und einfachen Header hat – nur <strong>8 Byte</strong>.
    </p>
    <p>Der Header besteht aus vier 2-Byte-Feldern:</p>
    <ul>
      <li><code>Source Port</code> – Quellport (2 Byte)</li>
      <li><code>Destination Port</code> – Zielport (2 Byte)</li>
      <li><code>Length</code> – Länge von Header + Nutzdaten (2 Byte)</li>
      <li><code>Checksum</code> – Fehlerprüfung (2 Byte)</li>
    </ul>
    <p>
      Das Feld <code>Length</code> ist ein <strong>16-Bit-Wert</strong>, was bedeutet:
      <br />
      → <strong>Maximale UDP-Paketgröße = 65.535 Byte</strong>
    </p>
    <p>
      Davon entfallen 8 Byte auf den Header → <strong>Maximale Nutzdaten: 65.527 Byte</strong>
    </p>
    <p>
      In der Praxis ist die maximale UDP-Datenlänge jedoch meist <strong>durch das darunterliegende IP-Protokoll</strong> begrenzt (z.&nbsp;B. 1.472 Byte bei IPv4 über Ethernet).
    </p>
    <p>
      Das macht UDP ideal für schnelle, kurze Datenübertragungen – ohne großen Overhead, z.&nbsp;B. für DNS, VoIP oder Online-Games.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      UDPは<strong>ヘッダーが8バイトしかない</strong>という非常に軽量な構造により、通信速度が非常に速いのが特長です。
    </p>
    <p>ヘッダーは次の4つのフィールド（各2バイト＝16ビット）で構成されています：</p>
    <ul>
      <li><code>送信元ポート番号</code>（2バイト）</li>
      <li><code>宛先ポート番号</code>（2バイト）</li>
      <li><code>長さ</code>（2バイト）＝ヘッダー＋データの合計サイズ</li>
      <li><code>チェックサム</code>（2バイト）＝誤り検出用</li>
    </ul>
    <p>
      「長さ」フィールドは16ビットなので、<strong>UDPセグメントの最大サイズは65,535バイト</strong>です。
    </p>
    <p>
      このうちヘッダーが8バイトなので、<strong>最大データ長は65,527バイト</strong>となります。
    </p>
    <p>
      ただし実際には、<strong>下位のIP層（特にIPv4 + Ethernet）での制限</strong>により、UDPのペイロードは通常1,472バイト程度に抑えられます（MTU: 1,500 - IPヘッダー20 - UDPヘッダー8）。
    </p>
    <p>
      このシンプルかつ軽量な構造により、UDPはDNSやVoIP、ゲーム通信など、<strong>遅延を最小限にしたい用途に最適</strong>です。
    </p>
  </div>
</div>

<!-- Abbildung -->
<div class="text-center my-4">
  <img
    :src="imgUrl"
    alt="UDP segment structure"
    class="img-fluid rounded border"
  />
  <p class="text-muted mt-2">Abbildung: UDP-Segmentstruktur (Figure 0601)</p>
</div>

<!-- Thema: Warum ist die maximale UDP-Länge 2^16 - 1 = 65535 Byte? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum ist die maximale UDP-Länge 2<sup>16</sup> − 1 = 65.535 Byte?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    なぜUDPの最大長は2<sup>16</sup> − 1 = 65,535バイトなのか？
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Im UDP-Header gibt es ein Feld namens <code>Length</code>, das die <strong>Gesamtlänge des UDP-Segments</strong> angibt (also Header + Nutzdaten).
    </p>
    <p>
      Dieses Feld ist <strong>16 Bit breit</strong>, was bedeutet, dass es Werte von 0 bis 65.535 (2<sup>16</sup> − 1) darstellen kann.
    </p>
    <p>
      Somit ist die maximal mögliche Segmentgröße bei UDP:
    </p>
    <ul>
      <li><strong>65.535 Byte</strong> (16 Bit Maximum)</li>
      <li>davon <strong>8 Byte für den Header</strong></li>
      <li>→ maximal <strong>65.527 Byte an Nutzdaten</strong></li>
    </ul>
    <p>
      Praktisch sind viele Netzwerke jedoch durch das MTU (z.&nbsp;B. Ethernet = 1.500 Byte) begrenzt.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      UDPヘッダーには、<code>Length</code> というフィールドがあり、<strong>UDPセグメント全体の長さ（ヘッダー + データ）</strong>を表します。
    </p>
    <p>
      この「長さ」フィールドは <strong>16ビット</strong>（2バイト）です。つまり、<strong>表現できる最大値は2<sup>16</sup> − 1 = 65,535</strong> です。
    </p>
    <p>
      よって、UDPパケットの最大サイズは：
    </p>
    <ul>
      <li><strong>最大 65,535 バイト</strong>（フィールドの上限）</li>
      <li>うち <strong>8 バイトがヘッダー</strong></li>
      <li>→ <strong>最大データ長は 65,527 バイト</strong></li>
    </ul>
    <p>
      実際のネットワークでは、<strong>MTU（最大転送単位）</strong>の制限（例：Ethernet では約1,500バイト）により、UDPは通常もっと小さく分割されます。
    </p>
  </div>
</div>

<!-- Thema: Warum ist die maximale UDP-Länge 2^16 - 1 = 65.535 Byte? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum ist die maximale UDP-Länge 2<sup>16</sup> − 1 = 65.535 Byte?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    なぜUDPの最大長は2<sup>16</sup> − 1 = 65,535バイトなのか？
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Das Feld <code>Length</code> im UDP-Header ist 16 Bit breit. Damit können <strong>2<sup>16</sup> = 65.536</strong> verschiedene Werte dargestellt werden.
      Da bei der Zählung bei 0 begonnen wird, ist der <strong>maximale darstellbare Wert 65.535</strong>.
    </p>
    <p>
      Somit kann ein UDP-Segment maximal 65.535 Byte lang sein (inklusive Header).
    </p>
    <p>
      <strong>Beispiel:</strong> Wenn ein Feld 3 Bit breit ist, also z.&nbsp;B. <code>111</code>, entspricht das dem Wert <strong>7</strong>. 
      Man kann also von <code>000 (0)</code> bis <code>111 (7)</code> zählen → <strong>insgesamt 8 mögliche Werte</strong>.
    </p>
    <p>
      Genau das gleiche Prinzip gilt bei 16 Bit: <code>0000000000000000</code> bis <code>1111111111111111</code> = 0 bis 65.535.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      UDPヘッダー内の <code>Length</code> フィールドは <strong>16ビット（2バイト）</strong>です。
      これは <strong>2<sup>16</sup> = 65,536</strong> 通りの値を表現できます。
      ただし、値は<strong>0から</strong>始まるため、最大値は <strong>2<sup>16</sup> − 1 = 65,535</strong> になります。
    </p>
    <p>
      つまり、UDPセグメント全体の最大長（ヘッダー + データ）は 65,535バイトです。
    </p>
    <p>
      <strong>例えば：</strong> フィールドが3ビットしかなければ、
      <code>000</code> から <code>111</code> までしか表せません（これは 0〜7 で、8通り）。
      → <strong>「2のn乗 − 1」までが最大値</strong> というルールです。
    </p>
    <p>
      このルールは、UDPに限らず、あらゆるプロトコルや数値表現（アドレス・識別子など）において使われています。
    </p>
  </div>
</div>

<!-- Thema: Warum verwendet DNS UDP (und nicht TCP)? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum verwendet DNS UDP (und nicht TCP)?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    DNS（ドメイン名解決）ではなぜUDPが使われているのか？
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Das Domain Name System (DNS) übersetzt Domainnamen (z.&nbsp;B. <code>example.com</code>) in IP-Adressen.
      Für DNS-Anfragen wird in den meisten Fällen <strong>UDP</strong> verwendet – und zwar auf Port <code>53</code>.
    </p>
    <p>
      Die Gründe, warum DNS in der Regel UDP verwendet:
    </p>
    <ul>
      <li><strong>Sehr schnelle Übertragung:</strong> Es ist kein Verbindungsaufbau wie bei TCP erforderlich (kein Three-Way-Handshake).</li>
      <li><strong>Sehr kleine Datenmengen:</strong> Typische DNS-Antworten sind meist unter 512 Byte.</li>
      <li><strong>Geringer Protokoll-Overhead:</strong> UDP hat nur 8 Byte Header, während TCP deutlich mehr verwaltet.</li>
      <li><strong>Leichtgewichtige Verarbeitung:</strong> UDP ist einfacher zu implementieren und verursacht geringere Verarbeitungslast auf Client und Server.</li>
    </ul>
    <p>
      Wenn jedoch die Antwort größer ist oder Zuverlässigkeit gefordert wird (z.&nbsp;B. bei Zonentransfers oder DNSSEC), <strong>wechselt DNS automatisch auf TCP</strong>.
    </p>
    <p>
      Seit der Einführung von <strong>EDNS(0)</strong> (Extension Mechanism for DNS) sind größere DNS-Antworten über 512 Byte möglich,
      aber in solchen Fällen wird der Fallback auf TCP verwendet.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      DNS（Domain Name System）は、<code>example.com</code> のようなドメイン名をIPアドレスに変換する仕組みです。
      このDNSの問い合わせには、通常 <strong>UDP（ポート53）</strong> が使用されます。
    </p>
    <p>
      DNSでUDPが使われる主な理由：
    </p>
    <ul>
      <li><strong>通信が非常に高速：</strong> TCPのような接続確立（3ウェイハンドシェイク）が不要なため、即座に送信できます。</li>
      <li><strong>データサイズが非常に小さい：</strong> 一般的なDNS応答は512バイト未満に収まります。</li>
      <li><strong>プロトコルのオーバーヘッドが小さい：</strong> UDPヘッダーはわずか8バイトで、TCPより軽量です。</li>
      <li><strong>処理が軽い：</strong> クライアント・サーバ双方の処理負担が小さく、実装もシンプルです。</li>
    </ul>
    <p>
      ただし、応答が大きい場合や、信頼性が求められる用途（例：ゾーン転送やDNSSECなど）では、
      DNSは<strong>自動的にTCPに切り替えて通信</strong>を行います。
    </p>
    <p>
      また、<strong>EDNS(0)</strong>（拡張DNS）により512バイトを超える応答が可能となったため、
      TCPにフォールバックされるケースも増加しています。
    </p>
  </div>
</div>

<!-- Thema: Welches Transportprotokoll nutzen Internetanwendungen und warum? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Welches Transportprotokoll nutzen Internetanwendungen und warum?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    インターネットアプリケーションはどのトランスポートプロトコルを使うのか？そしてその理由は？
  </p>
</div>

<!-- 図の挿入 -->
<div class="text-center mt-4">
  <img src="@/assets/lecture/lecture03/Figure_0503.png" class="img-fluid" alt="Anwendungen und Transportprotokolle" style="max-width: 700px;" />
  <p class="text-muted mt-2">Abbildung: Zuordnung von Anwendungen zu TCP oder UDP</p>
</div>

<!-- 解説：Deutsch & 日本語 -->
<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>Diese Tabelle zeigt, welches Transportprotokoll (TCP oder UDP) von typischen Internetanwendungen verwendet wird und warum:</p>
    <ul>
      <li><strong>SMTP (E-Mail):</strong> Nutzt <strong>TCP</strong>, da Zuverlässigkeit beim Versand entscheidend ist.</li>
      <li><strong>Telnet (Fernzugriff):</strong> Verwendet <strong>TCP</strong>, da Reihenfolge und Fehlerkontrolle für interaktive Sitzungen erforderlich sind.</li>
      <li><strong>HTTP (Web):</strong> Setzt auf <strong>TCP</strong>, um eine zuverlässige Übertragung von Webseiten sicherzustellen.</li>
      <li><strong>FTP (Dateiübertragung):</strong> Nutzt <strong>TCP</strong>, da selbst kleinste Verluste in Dateien kritisch sind.</li>
      <li><strong>NFS (Dateiserver):</strong> Verwendet oft <strong>UDP</strong> mit eigener Fehlerbehandlung zur Performanzsteigerung, unterstützt aber auch TCP.</li>
      <li><strong>Streaming Multimedia:</strong> Nutzt <strong>UDP</strong> für niedrige Latenz, oder <strong>TCP</strong>, wenn Zuverlässigkeit wichtiger ist.</li>
      <li><strong>Internettelefonie:</strong> Typischerweise <strong>UDP</strong> (z.&nbsp;B. RTP), da Zeitverzögerung wichtiger ist als perfekte Übertragung.</li>
      <li><strong>SNMP (Netzwerkverwaltung):</strong> Setzt meist auf <strong>UDP</strong> für einfache, gelegentliche Nachrichten.</li>
      <li><strong>DNS (Namensauflösung):</strong> Typischerweise <strong>UDP</strong> für schnelle Abfragen; TCP wird nur bei großen Antworten verwendet.</li>
    </ul>
    <p><strong>Merke:</strong> TCP wird verwendet, wenn Zuverlässigkeit, Reihenfolge und Fehlerkontrolle wichtig sind. UDP wird bevorzugt, wenn Geschwindigkeit und geringer Overhead im Vordergrund stehen.</p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>この表は、代表的なインターネットアプリケーションが、TCP または UDP のどちらを使っているか、そしてその理由を示しています：</p>
    <ul>
      <li><strong>SMTP（電子メール）:</strong> <strong>TCP</strong>。メールは確実に届ける必要があるため信頼性が重要。</li>
      <li><strong>Telnet（リモート端末）:</strong> <strong>TCP</strong>。キー入力の順番や応答の正確さが要求される。</li>
      <li><strong>HTTP（ウェブ）:</strong> <strong>TCP</strong>。ウェブページの完全な表示に再送や順序保証が不可欠。</li>
      <li><strong>FTP（ファイル転送）:</strong> <strong>TCP</strong>。データの欠落が許されないため。</li>
      <li><strong>NFS（リモートファイルシステム）:</strong> <strong>通常はUDP</strong>。軽量で高速、ただし自前でエラー処理。</li>
      <li><strong>ストリーミング:</strong> <strong>UDPまたはTCP</strong>。遅延を避けたいならUDP、信頼性を重視するならTCP。</li>
      <li><strong>インターネット電話:</strong> <strong>UDPまたはTCP</strong>。リアルタイム性重視でUDPが多い。</li>
      <li><strong>SNMP（ネットワーク管理）:</strong> <strong>通常はUDP</strong>。小規模な監視データを迅速に。</li>
      <li><strong>DNS（名前解決）:</strong> <strong>通常はUDP</strong>。高速応答が求められる。応答が大きい場合はTCPにフォールバック。</li>
    </ul>
    <p><strong>ポイント：</strong>信頼性と正確さが必要な用途はTCP、速度と軽量性が重視される場合はUDPが使われます。</p>
  </div>
</div>

<!-- Thema: Warum verwenden bestimmte Anwendungen UDP – und was passiert bei Paketverlust? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum verwenden bestimmte Anwendungen das verbindungslose UDP – und wie reagieren sie auf verlorene Pakete?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    なぜ特定のアプリケーションはUDPを使うのか？パケットが届かなかったらどうなる？
  </p>
</div>

<!-- 図：Figure_0503.png -->
<div class="text-center mb-4">
  <img src="@/assets/lecture/lecture03/Figure_0503.png" class="img-fluid" alt="UDP Anwendungen und Transportprotokolle">
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      UDP ist ein verbindungsloses, leichtgewichtiges Transportprotokoll, das keine Garantie für Paketlieferung oder Reihenfolge bietet.
      Dennoch wird es in vielen Anwendungen verwendet, wo geringe Latenz oder Overhead entscheidend ist.
    </p>

    <h6>Typische UDP-Anwendungen und Verhalten bei Paketverlust:</h6>
    <ul>
      <li><strong>DNS:</strong> Sehr kurze Anfragen. UDP ist schnell. <br />
      <em>Bei Verlust:</em> Client fragt erneut nach Timeout.</li>

      <li><strong>SNMP (Netzwerküberwachung):</strong> Protokoll zur Überwachung von Netzwerkgeräten wie Routern oder Switches.<br />
      <em>Bei Verlust:</em> Meldung geht verloren. Manager kann erneut anfragen, aber meistens ist es nicht kritisch.</li>

      <li><strong>VoIP:</strong> Sprachübertragung über das Internet. Geringe Verzögerung ist wichtiger als Vollständigkeit.<br />
      <em>Bei Verlust:</em> Kurzer Ton-Aussetzer, keine Wiederholung.</li>

      <li><strong>Streaming:</strong> UDP für kontinuierliche Wiedergabe bevorzugt.<br />
      <em>Bei Verlust:</em> Kleine Störungen im Bild oder Ton, keine Wiederholung.</li>

      <li><strong>NFS (Network File System):</strong> Ermöglicht Zugriff auf Dateien über das Netzwerk, als wären sie lokal.<br />
      <em>Bei Verlust:</em> NFS erkennt Fehler und fragt fehlende Daten selbstständig erneut an.</li>
    </ul>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      UDPは「接続を確立せずに」送信できる軽量なプロトコルで、信頼性のある転送は保証されません。
      しかし、リアルタイム性やシンプルな通信が求められる場面で多く使われています。
    </p>

    <h6>UDPを使う代表的なアプリケーションと、届かなかった場合の挙動：</h6>
    <ul>
      <li><strong>DNS（名前解決）:</strong> 非常に小さな問い合わせで一回の応答がほとんど。<br />
      <em>届かなかった場合：</em> タイムアウト後に再送される。</li>

      <li><strong>SNMP（ネットワーク監視）:</strong> ルータやスイッチなどの状態を取得するためのプロトコル。<br />
      <em>届かなかった場合：</em> 応答が欠けても大きな影響はなく、必要なら再取得される。</li>

      <li><strong>VoIP（音声通話）:</strong> 遅延なく会話を続けることが優先される。<br />
      <em>届かなかった場合：</em> 短い音声の欠落が発生するが、再送されない。</li>

      <li><strong>ストリーミング:</strong> 映像や音声を途切れずに送るためにUDPが選ばれることがある。<br />
      <em>届かなかった場合：</em> 一部の映像・音声が乱れるが、再送はされずそのまま進む。</li>

      <li><strong>NFS（ネットワークファイルシステム）:</strong> ネットワーク越しにファイルをローカルのように操作できる仕組み。<br />
      <em>届かなかった場合：</em> クライアント側が応答の欠落を検知して、自動的に再送を行う。</li>
    </ul>

    <p><strong>まとめ：</strong> UDPを使うアプリは、届かないことを前提に、アプリ側で再送制御や誤り処理を行うか、
      届かなくても許容できるよう設計されています。</p>
  </div>
</div>

<!-- Thema: Warum verwenden bestimmte Anwendungen TCP – und wie wird Zuverlässigkeit sichergestellt? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum nutzen viele Anwendungen TCP – und wie wird mit verlorenen Paketen umgegangen?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    なぜ多くのアプリケーションはTCPを使うのか？パケットが届かなかった場合どう対処するのか？
  </p>
</div>

<!-- 図：Figure_0503.png -->
<div class="text-center mb-4">
  <img src="@/assets/lecture/lecture03/Figure_0503.png" class="img-fluid" alt="TCP Anwendungen und Transportprotokolle">
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      TCP ist ein verbindungsorientiertes Protokoll mit zuverlässiger Datenübertragung, garantierter Reihenfolge und Flusskontrolle. 
      Es ist besonders für Anwendungen geeignet, bei denen Daten vollständig und korrekt ankommen müssen.
    </p>

    <h6>Typische TCP-Anwendungen und Paketverlustbehandlung:</h6>
    <ul>
      <li><strong>SMTP (E-Mail):</strong> Zuverlässiger Versand von Nachrichten. <br />
        <em>Bei Verlust:</em> TCP erkennt fehlende Segmente und sendet sie automatisch erneut.</li>

      <li><strong>Telnet (Fernzugriff):</strong> Interaktive Eingabe über Netzwerk. <br />
        <em>Bei Verlust:</em> TCP garantiert, dass alle Eingaben in korrekter Reihenfolge ankommen.</li>

      <li><strong>HTTP (Web):</strong> Webseiten müssen vollständig geladen werden. <br />
        <em>Bei Verlust:</em> TCP puffert und wiederholt Segmente bei Bedarf.</li>

      <li><strong>FTP (Dateitransfer):</strong> Dateien dürfen keine Fehler enthalten. <br />
        <em>Bei Verlust:</em> TCP sorgt für korrekten und vollständigen Transfer.</li>
    </ul>

    <p><strong>Zusammenfassung:</strong> TCP erkennt verlorene Pakete durch Sequenznummern und erwartet Quittierungen (ACKs). 
      Fehlende Segmente werden erneut gesendet, bevor die Übertragung fortgesetzt wird.</p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      TCPは信頼性の高い接続型プロトコルで、データの順序や完全性が保証されます。
      そのため、<strong>「一部でも失われると困る通信」</strong>に非常に適しています。
    </p>

    <h6>TCPを使う代表的なアプリケーションと、届かなかった場合の対処：</h6>
    <ul>
      <li><strong>SMTP（メール送信）:</strong> メール本文や添付ファイルの正確な配送が必要。<br />
        <em>届かなかった場合：</em> TCPが再送し、受信確認（ACK）を待って次に進む。</li>

      <li><strong>Telnet（リモート端末）:</strong> キーボード入力や応答が即時かつ正確に必要。<br />
        <em>届かなかった場合：</em> 入力が遅延するが、順番通りに届けられる。</li>

      <li><strong>HTTP（Web）:</strong> ページデータを正しく取得しないと表示できない。<br />
        <em>届かなかった場合：</em> ブラウザは待機し、TCPが不足部分を補完する。</li>

      <li><strong>FTP（ファイル転送）:</strong> 完全なデータでなければファイル破損につながる。<br />
        <em>届かなかった場合：</em> TCPが誤りを検出し、必要部分を自動で再送する。</li>
    </ul>

    <p><strong>まとめ：</strong> TCPでは、全てのデータが届いたことを確認しながら送信が行われ、
      届かない場合は自動で再送されるため、アプリケーション側は信頼性を意識しなくて済みます。</p>
  </div>
</div>


<!-- Thema: Warum verwendet NFS UDP und Telnet TCP? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum verwendet NFS typischerweise UDP, während Telnet TCP nutzt?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    なぜNFSはUDP、TelnetはTCPを使うのか？アプリケーションの性質から見るトランスポート層プロトコルの選択
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>

    <p>
      <strong>NFS (Network File System)</strong> ist ein System, mit dem ein Computer über das Netzwerk auf Dateien auf einem anderen Computer zugreifen kann,
      als wären sie lokal gespeichert. Es wird z.&nbsp;B. in Firmennetzwerken eingesetzt.
    </p>
    <ul>
      <li><strong>Verwendetes Protokoll:</strong> Meist UDP (leicht und schnell)</li>
      <li><strong>Grund:</strong> NFS wurde für schnelle lokale Netzwerke konzipiert, wo Paketverlust selten ist. UDP ist schnell, da es keine Verbindungsaufbau braucht.</li>
      <li>
        <strong>Was passiert bei Paketverlust?</strong><br />
        Wenn ein Paket verloren geht, erkennt NFS das selbst (z.&nbsp;B. durch Zeitüberschreitung) und sendet die Anfrage erneut. 
        Die Anwendung selbst ist also verantwortlich für die Zuverlässigkeit.
      </li>
    </ul>

    <p>
      <strong>Telnet</strong> ist ein Protokoll, mit dem man sich auf entfernte Rechner einloggen kann, um sie über eine Kommandozeile zu steuern.
    </p>
    <ul>
      <li><strong>Verwendetes Protokoll:</strong> TCP (zuverlässig und verbindungsorientiert)</li>
      <li><strong>Grund:</strong> Bei Telnet ist es sehr wichtig, dass jede Tasteneingabe korrekt und in der richtigen Reihenfolge beim Server ankommt.
        Dafür ist TCP ideal, da es automatisch für fehlerfreie und geordnete Übertragung sorgt.
      </li>
      <li>
        <strong>Was passiert bei Paketverlust?</strong><br />
        TCP merkt, wenn Daten fehlen oder beschädigt sind, und sendet sie automatisch erneut. 
        Für die Anwendung ist das völlig transparent.
      </li>
    </ul>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>

    <p>
      <strong>NFS（Network File System）</strong> は、他のコンピュータのファイルを自分のPC上にあるかのように操作できる仕組みです。
      職場や大学などのネットワークでよく使われます。
    </p>
    <ul>
      <li><strong>使われるプロトコル：</strong> UDP（軽量・高速）</li>
      <li><strong>理由：</strong> NFSは元々、高速で安定したLAN内での利用を想定して設計されました。
        UDPは接続を確立する手間がないため、すぐにデータを送れて高速です。
      </li>
      <li>
        <strong>正しく届かなかった場合は？</strong><br />
        UDPは再送や順序保証をしないため、NFS自身が「届かなかった」と判断したら、
        タイムアウトやリトライ処理を自力で行います（プロトコルの中に含まれている）。
      </li>
    </ul>

    <p>
      一方で、<strong>Telnet</strong> はリモートのPCに接続して、文字ベースで操作を行うプロトコルです。
    </p>
    <ul>
      <li><strong>使われるプロトコル：</strong> TCP（信頼性の高い通信）</li>
      <li><strong>理由：</strong> Telnetでは、キーボードから入力した文字が1文字でも欠けると大問題になります。
        また、順番が入れ替わると正しくコマンドを解釈できません。
        そのため、<strong>通信の順序・正確性を自動で保証するTCP</strong>が必要なのです。
      </li>
      <li>
        <strong>正しく届かなかった場合は？</strong><br />
        TCPが自動的に再送して、正しい順序でアプリケーションに届けてくれます。
        ユーザーやアプリ側は意識する必要はありません。
      </li>
    </ul>
  </div>
</div>




  </div>
</template>

<script setup>
import imgUrl from '@/assets/lecture/lecture03/Figure_0601.png';
</script>
