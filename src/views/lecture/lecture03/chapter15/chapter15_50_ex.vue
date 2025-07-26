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


  </div>
</template>

<script setup>
import imgUrl from '@/assets/lecture/lecture03/Figure_0601.png';
</script>
