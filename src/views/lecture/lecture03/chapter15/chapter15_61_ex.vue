<template>
  <div class="container my-4">
    <h3 class="mb-4">UDP-Prüfsumme</h3>
<!-- Thema: Warum ist die UDP-Prüfsumme „naiv“ und welche Grenzen hat sie? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum gilt die UDP-Prüfsumme als „naiv“ und welche Schwächen hat sie?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    UDPのチェックサムはなぜ「ナイーブ（単純）」と言われるのか？その限界とは？
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Die UDP-Prüfsumme verwendet eine einfache 1er-Komplement-Summenbildung, um Datenübertragungen auf Bitfehler zu prüfen.
      Doch dieses Verfahren hat <strong>strukturelle Schwächen</strong>:
    </p>
    <ul>
      <li>Mehrere Bitfehler können sich gegenseitig aufheben → Prüfsumme bleibt gleich</li>
      <li>Die Erkennungsrate liegt unter 100 %, insbesondere bei komplexeren Fehlern</li>
    </ul>
    <p>
      Laut <strong>RFC 1071</strong> erkennt die UDP/TCP-Prüfsumme alle Einzelfehler sicher, aber nur eingeschränkt Mehrbit-Fehler.
      Daher wird sie als <strong>naiv</strong> oder minimaler Schutzmechanismus betrachtet.
    </p>
    <p>
      UDP ist ein leichtgewichtiges Protokoll – die Prüfsumme bietet nur eine „schnelle Plausibilitätsprüfung“.
      Für sicherheitskritische oder zuverlässige Daten wird stattdessen Folgendes verwendet:
    </p>
    <ul>
      <li>TCP (mit Fehlererkennung, Reihenfolge, Wiederholung)</li>
      <li>Stärkere Prüfverfahren in der Anwendungsschicht wie CRC, SHA, MD5</li>
    </ul>
    <p>
      <strong>Vergleich zur CRC:</strong><br />
      Die CRC (Cyclic Redundancy Check) erkennt komplexe Bitmuster, auch Burstfehler, sehr zuverlässig.
    </p>
    <table class="table table-bordered table-sm">
      <thead><tr><th>Verfahren</th><th>Fehlerschutz</th><th>Typische Anwendung</th></tr></thead>
      <tbody>
        <tr><td>UDP-Prüfsumme</td><td>Grundlegend (naiv)</td><td>VoIP, Streaming, DNS</td></tr>
        <tr><td>CRC</td><td>Sehr hoch</td><td>Ethernet, Speichermedien</td></tr>
        <tr><td>SHA/MD5</td><td>Kryptographisch sicher</td><td>Signaturen, Datenintegrität</td></tr>
      </tbody>
    </table>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      UDPのチェックサムは「<strong>1の補数加算</strong>」によってデータの整合性を検証しますが、
      その手法には構造的な限界があります：
    </p>
    <ul>
      <li>複数のビットが同時に反転した場合、それらが<strong>相殺されてしまい</strong>チェックサムが変わらないことがある</li>
      <li>そのため、<strong>すべてのエラーを検出できるわけではない</strong></li>
    </ul>
    <p>
      RFC 1071 によれば、UDP/TCPのチェックサムは「単一ビットエラー」には強いが、
      「複数ビットの誤り」には検出漏れの可能性があるとされています。
    </p>
    <p>
      このような性質から、UDPのチェックサムは<strong>最低限の保護手段</strong>として位置づけられ、
      より高い信頼性が必要な場合は以下の手法が使われます：
    </p>
    <ul>
      <li>TCP（再送・順序保証あり）</li>
      <li>アプリ層での<strong>CRC</strong>や<strong>ハッシュ（SHA, MD5など）</strong>による整合性検証</li>
    </ul>
    <p>
      <strong>CRCとの比較：</strong><br />
      CRC（巡回冗長検査）は、複雑なビットパターンやバーストエラーも検出できる高精度な手法です。
    </p>
    <table class="table table-bordered table-sm">
      <thead><tr><th>方式</th><th>検出能力</th><th>用途例</th></tr></thead>
      <tbody>
        <tr><td>UDPチェックサム</td><td>基本的（ナイーブ）</td><td>VoIP, ストリーミング, DNS</td></tr>
        <tr><td>CRC</td><td>非常に高い</td><td>イーサネット, ディスク</td></tr>
        <tr><td>SHA/MD5</td><td>暗号学的に安全</td><td>署名, 改ざん検出</td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- Thema: Wie funktioniert Padding bei UDP-Prüfsummen? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Wie funktioniert Padding bei UDP und welche Länge wird für die Prüfsummenberechnung verwendet?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    UDPのチェックサム計算時のパディング処理と、UDP長（Length）の扱いについて
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Bei der UDP-Prüfsummenberechnung müssen die Daten in 16-Bit-Wörtern verarbeitet werden.
      Falls das UDP-Datenfeld (Payload) eine ungerade Länge hat, wird <strong>ein Padding-Byte mit dem Wert 0x00</strong> hinzugefügt –
      <em>nur für die Prüfsumme</em>.
    </p>
    <ul>
      <li>Das Padding wird <strong>nicht</strong> im Paket übertragen.</li>
      <li>Die im UDP-Header angegebene Länge bleibt <strong>unverändert</strong>.</li>
    </ul>
    <p>Beispiel:</p>
    <ul>
      <li>UDP-Header = 8 Byte</li>
      <li>Daten = 5 Byte → Prüfsumme berechnet über 8 + 5 + 1 (Padding) = 14 Byte</li>
      <li><code>UDP-Length = 13</code> im Header</li>
    </ul>
    <p>
      Der Empfänger rekonstruiert dieselbe Prüfsummenstruktur, ggf. ebenfalls mit Padding, und verwendet den <strong>originalen UDP-Längenwert</strong> aus dem Header.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      UDPのチェックサムは、2バイト（16ビット）単位で計算されます。そのため、データ部が奇数バイトの場合は、
      計算のために<strong>末尾に0x00の1バイトをパディング</strong>します。
    </p>
    <ul>
      <li>このパディングは<strong>実際には送信されません</strong>。</li>
      <li>UDPヘッダのLengthフィールドの値は、<strong>元の長さ（ヘッダ＋データ）</strong>のままです。</li>
    </ul>
    <p>例：</p>
    <ul>
      <li>UDPヘッダ：8バイト</li>
      <li>データ：5バイト → パディング1バイト追加 → 計算上は14バイト</li>
      <li><code>UDP長 = 13</code>（8 + 5）と記録</li>
    </ul>
    <p>
      受信側も同じようにLengthフィールドの値を使ってチェックサムを再計算し、必要ならパディングを追加して整合性を確認します。
    </p>
  </div>
</div>

<!-- Thema: Wie funktioniert Padding bei der UDP-Prüfsumme und was steht im Length-Feld? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Wie funktioniert Padding bei der UDP-Prüfsummenberechnung? Und was steht im UDP-Length-Feld?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    UDPチェックサム計算におけるパディングとは？UDP長フィールドには何が入るのか？
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      UDP verwendet 16-Bit-Blöcke zur Berechnung der Prüfsumme. Wenn die Nutzdaten eine ungerade Anzahl von Bytes haben,
      wird am Ende ein Padding-Byte mit dem Wert <code>0x00</code> hinzugefügt – nur für die Berechnung.
      Dieses Padding wird <strong>nicht gesendet</strong> und ist temporär.
    </p>
    <p>
      Im UDP-Header steht im Feld <strong>Length</strong> immer die tatsächliche Länge des UDP-Segments (Header + Nutzdaten),
      <strong>ohne Padding</strong>.
    </p>
    <p>
      Der Empfänger verwendet dasselbe Length-Feld aus dem empfangenen UDP-Header, um die Prüfsumme zu verifizieren.
      Auch er fügt ggf. temporär ein Padding-Byte für die Berechnung ein.
    </p>
    <p><strong>Beispiel:</strong></p>
    <ul>
      <li>Header = 8 Byte</li>
      <li>Daten = 5 Byte</li>
      <li>UDP-Länge = 13 (im Header)</li>
      <li>Padding auf 14 Byte zur Berechnung</li>
    </ul>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      UDPチェックサムは16ビット単位で計算されるため、データ長が奇数バイトの場合は、チェックサム計算のために
      <strong>最後に1バイトの0（0x00）を一時的に追加（パディング）</strong>します。
      このパディングは送信されず、計算時だけ使われます。
    </p>
    <p>
      UDPヘッダー内の <strong>Lengthフィールド</strong> には、
      <strong>本来のUDPパケットの長さ（＝ヘッダー＋データ）</strong> が記録され、パディングは含まれません。
    </p>
    <p>
      受信側では、送られてきたUDPヘッダーの Length を使用し、
      必要に応じて同様にパディングを加えてチェックサムを再計算・検証します。
    </p>
    <p><strong>例：</strong></p>
    <ul>
      <li>ヘッダー：8バイト</li>
      <li>データ：5バイト（奇数）</li>
      <li>UDP長 = 13（ヘッダー＋データ）</li>
      <li>計算時のみ14バイトにパディング</li>
    </ul>
  </div>
</div>

<!-- Thema: Was ist ein UDP-Pseudo-Header und wofür wird er verwendet? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Was ist ein Pseudo-Header bei UDP und wie wird er verwendet?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    UDPにおける擬似ヘッダー（Pseudo Header）とは？どのように使われるのか？
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Der sogenannte <strong>Pseudo-Header</strong> wird weder übertragen noch gespeichert, sondern dient
      <u>nur der Prüfsummenberechnung</u> auf Sender- und Empfängerseite.
    </p>
    <p>
      Er enthält Felder aus der IP-Schicht, um sicherzustellen, dass das UDP-Paket an die richtige Adresse
      gesendet wurde und keine Layer-3-Verwechslung auftritt.
    </p>
    <p>Der Pseudo-Header besteht aus:</p>
    <ul>
      <li>Source IP Address (32 Bit)</li>
      <li>Destination IP Address (32 Bit)</li>
      <li>Zero (8 Bit, immer 0)</li>
      <li>Protocol Number (8 Bit, z.B. 17 für UDP)</li>
      <li>UDP Length (16 Bit)</li>
    </ul>
    <p>
      Sender und Empfänger bauen diesen Header <strong>jeweils selbst</strong> aus den IP- und UDP-Feldern und führen die Prüfsummenberechnung durch.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      <strong>擬似ヘッダー（Pseudo Header）</strong>は、<u>UDPチェックサム計算のためだけに使用される一時的な構造体</u>で、
      実際にはパケットとして送信されません。
    </p>
    <p>
      IP層の情報を含めることで、UDPレイヤのデータが正しく処理されたかを検証します。
      送信側も受信側も、<strong>自分自身で擬似ヘッダーを構成</strong>し、それをチェックサム計算に使います。
    </p>
    <p>擬似ヘッダーの構成：</p>
    <ul>
      <li>送信元IPアドレス（32ビット）</li>
      <li>宛先IPアドレス（32ビット）</li>
      <li>ゼロ（8ビット）</li>
      <li>プロトコル番号（8ビット, UDPは17）</li>
      <li>UDP長（16ビット）</li>
    </ul>
    <p>
      この構成により、UDPチェックサムは <strong>IPレイヤも含めた整合性検証</strong> を実現できます。
    </p>
  </div>

    <!-- 図の挿入 -->
    <div class="text-center mt-4">
      <img :src="imgUrl" alt="UDP Checksum Calculation" class="img-fluid" style="max-width: 700px;" />
      <p class="text-muted mt-2">Abbildung: Struktur zur Prüfsummenberechnung inkl. Pseudo Header</p>
    </div>

  <!-- Thema: Wie funktioniert Padding bei der UDP-Prüfsumme und was steht im Length-Feld? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Prüfsumme über Pseudo Header und Segmentstruktur
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    UDPチェックサムの構成要素と「1の補数加算」による計算
  </p>
</div>

    <!-- 図の挿入 -->
    <div class="text-center mt-4">
      <img :src="imgUrl" alt="UDP Checksum Calculation" class="img-fluid" style="max-width: 700px;" />
      <p class="text-muted mt-2">Abbildung: Struktur zur Prüfsummenberechnung inkl. Pseudo Header</p>
    </div>

</div>
    <!-- 解説：Deutsch & 日本語 -->
    <div class="row mt-4">
      <div class="col-md-6">
        <h5>Erklärung (Deutsch)</h5>
        <p>
          Die UDP-Prüfsumme wird über folgende Felder berechnet:
        </p>
        <ul>
          <li><strong>Pseudo Header</strong> aus der IP-Schicht (nicht übertragen):</li>
          <ul>
            <li>Quell-IP-Adresse (2 × 16 Bit)</li>
            <li>Ziel-IP-Adresse (2 × 16 Bit)</li>
            <li>0 (8 Bit), Protokollnummer (8 Bit, UDP = 17)</li>
            <li>UDP-Gesamtlänge (Header + Daten)</li>
          </ul>
          <li>UDP-Header (Source Port, Destination Port, Length, Checksum = 0 während der Berechnung)</li>
          <li>UDP-Daten (Payload, ggf. mit Padding auf 16 Bit)</li>
        </ul>

        <p>
          Die Summe wird mit der <strong>1er-Komplementaddition</strong> gebildet: Man addiert alle 16-Bit-Wörter nacheinander. 
          Falls dabei ein Übertrag entsteht (17. Bit), wird dieser zurück auf das niederwertige Ende addiert (Wraparound).
        </p>
        <p>
          Zum Schluss wird das <strong>1er-Komplement</strong> (Bitweise Invertierung) der Gesamtsumme genommen und als Checksumme im UDP-Header gespeichert.
        </p>
      </div>

      <div class="col-md-6">
        <h5>解説（日本語）</h5>
        <p>
          UDPチェックサムは以下の範囲のデータを対象に計算されます：
        </p>
        <ul>
          <li><strong>IP層の擬似ヘッダ（Pseudo Header）</strong>（送信はされない）：
            <ul>
              <li>送信元IPアドレス（16ビット × 2）</li>
              <li>宛先IPアドレス（16ビット × 2）</li>
              <li>0（8ビット）＋ プロトコル番号（8ビット、UDP=17）</li>
              <li>UDP長（ヘッダ＋データ）</li>
            </ul>
          </li>
          <li>UDPヘッダ（送信元ポート、宛先ポート、長さ、チェックサム ※計算時は 0）</li>
          <li>UDPのデータ（必要に応じて奇数バイトのとき 0x00 でパディング）</li>
        </ul>

        <p>
          すべてのフィールドを<strong>16ビット単位で通常の加算</strong>を行い、
          もし加算結果が17ビット（オーバーフロー）になった場合は、
          上位の1ビットを下位に「折り返して加算」します（<strong>1の補数加算</strong>）。
        </p>
        <p>
          最後にその合計に対して<strong>ビット反転（1の補数）</strong>をとった値がチェックサムとしてUDPヘッダに記録されます。
        </p>
      </div>
    </div>


<!-- Thema: Welche Felder des Pseudo-Headers stammen aus dem IP-Header? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Welche Informationen des Pseudo-Headers stammen aus dem IP-Header?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    擬似ヘッダーの各フィールドはどこから取得されるのか？IPヘッダーとの関係は？
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Der Pseudo-Header wird ausschließlich für die UDP-Prüfsummenberechnung verwendet und ist nicht Bestandteil des übertragenen Pakets.
      Alle Felder des Pseudo-Headers stammen aus dem <strong>IP-Header</strong>:
    </p>
    <ul>
      <li><strong>Source IP Address:</strong> aus dem IP-Header (Quelladresse)</li>
      <li><strong>Destination IP Address:</strong> aus dem IP-Header (Zieladresse)</li>
      <li><strong>Protokollnummer:</strong> ebenfalls aus dem IP-Header (z.&nbsp;B. 17 für UDP)</li>
      <li><strong>UDP Length:</strong> aus dem UDP-Header</li>
    </ul>
    <p>
      Der Pseudo-Header wird vom Sender und vom Empfänger <strong>lokal erzeugt</strong>, um die Prüfsumme korrekt zu berechnen bzw. zu prüfen.
      Dabei greifen beide auf die tatsächlichen IP-Header-Felder des Pakets zu.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      擬似ヘッダー（Pseudo Header）は、<strong>UDPチェックサムの計算時のみ</strong>内部的に構成され、<strong>実際のパケットには含まれません</strong>。
      この擬似ヘッダーの情報はすべて、<strong>IPヘッダーから取得</strong>されます。
    </p>
    <ul>
      <li><strong>送信元IPアドレス：</strong>IPヘッダーから</li>
      <li><strong>宛先IPアドレス：</strong>IPヘッダーから</li>
      <li><strong>プロトコル番号：</strong>IPヘッダーから（UDPなら17）</li>
      <li><strong>UDP長（Length）：</strong>UDPヘッダーから</li>
    </ul>
    <p>
      送信側・受信側の双方が、受信したIPヘッダーやUDPヘッダーからこれらの情報を参照し、<strong>自分で擬似ヘッダーを構成してチェックサム処理を行います</strong>。
    </p>
  </div>
</div>

<!-- Thema: Wo und wie wird die UDP-Prüfsumme tatsächlich berechnet und geprüft? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Wie funktioniert die UDP-Prüfsummenberechnung im Zusammenspiel der Schichten? Welche Rolle spielt der IP-Header?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    UDPチェックサムはどこでどのように計算・検証されるのか？IPヘッダー情報はどう関わるのか？
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Obwohl die UDP-Prüfsumme ein Teil der Transportschicht (Layer 4) ist, erfordert ihre Berechnung Informationen aus dem IP-Header (Layer 3),
      insbesondere die Quell- und Zieladresse sowie die Protokollnummer.
    </p>
    <p>
      Die Berechnung erfolgt daher <strong>nicht rein im UDP-Modul</strong>, sondern im Zusammenspiel mit der Netzwerkschicht – meist im Kernel des Betriebssystems.
    </p>
    <p>
      Beim Senden stellt der UDP-Code die Nutzdaten und Header bereit, während die Prüfsumme mit Hilfe des Pseudo-Headers und der IP-Daten ermittelt wird.
    </p>
    <p>
      Beim Empfangen prüft das System die Prüfsumme <strong>noch bevor die Daten an die Anwendung weitergeleitet werden</strong>. Schlägt die Prüfung fehl, wird das Paket verworfen.
    </p>
    <p><strong>Zusammenfassung:</strong></p>
    <ul>
      <li>UDP verwendet einen Pseudo-Header aus Layer 3 zur Prüfsumme</li>
      <li>Prüfung erfolgt auf OS-Ebene zwischen IP- und UDP-Schicht</li>
      <li>Ungültige Pakete werden nie an die Anwendung weitergegeben</li>
    </ul>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      UDPチェックサムは第4層（トランスポート層）に属しますが、<strong>計算には第3層（IP層）の情報</strong>（送信元/宛先IPアドレス、プロトコル番号など）が必要です。
    </p>
    <p>
      そのため、UDP層だけでは完結せず、OSカーネル内でIP層の情報を参照しながらチェックサムが計算されます（＝レイヤー間の協調）。
    </p>
    <p>
      受信時も、パケットがUDPとして識別された後、<strong>UDP層に渡される前にチェックサムが検証</strong>されます。
      チェックサムが一致しなければそのセグメントは廃棄され、<strong>アプリケーションには一切届きません</strong>。
    </p>
    <p><strong>まとめ：</strong></p>
    <ul>
      <li>UDPチェックサムには擬似ヘッダー（Pseudo Header）が必要</li>
      <li>送信時はIP情報を参照して計算</li>
      <li>受信時もIPとUDPの中間で検証</li>
      <li>不一致なら破棄 → アプリには届かない</li>
    </ul>
  </div>
</div>

<!-- Thema: Wie funktioniert UDP-Kapselung in den Netzwerk-Schichten? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Wie funktioniert die UDP-Kapselung innerhalb des Netzwerkmodells?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    UDPのカプセル化とは？ネットワーク階層におけるデータの包み方
  </p>
</div>

<!-- 図の挿入 -->
<div class="text-center mt-4">
  <img src="@/assets/lecture/lecture03/Figure_0604.png" class="img-fluid" alt="UDPカプセル化の構造" style="max-width: 700px;" />
  <p class="text-muted mt-2">Abbildung: UDP-Kapselung durch die Schichten (Transport → Netzwerk → Data Link)</p>
</div>

<!-- 解説：Deutsch & 日本語 -->
<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Diese Abbildung zeigt den Kapselungsprozess eines UDP-Datagramms im Rahmen des OSI-Schichtenmodells:
    </p>
    <ul>
      <li>Ein <strong>UDP-Datagramm</strong> besteht aus UDP-Header und UDP-Nutzdaten</li>
      <li>Dieses wird in das <strong>IP-Paket</strong> eingebettet – genauer: in das Payload-Feld des IP-Headers</li>
      <li>Das vollständige IP-Paket wird anschließend in einen <strong>Frame</strong> (z.&nbsp;B. Ethernet) eingebettet</li>
    </ul>
    <p>
      Die <strong>Protokollnummer im IP-Header</strong> (z.&nbsp;B. 17 für UDP) zeigt dem Empfänger an, welches Protokoll die Nutzdaten enthält.
    </p>
    <p><strong>Zusammenfassung:</strong></p>
    <ul>
      <li>UDP = Nutzlast der Netzwerkschicht (IP)</li>
      <li>IP = Nutzlast der Sicherungsschicht (Frame)</li>
      <li>Jede Schicht fügt ihren eigenen Header hinzu, bevor sie die Daten an die darunterliegende Schicht übergibt</li>
    </ul>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      この図は、UDPパケットが通信の際にネットワークの各層でどのように「包まれていく」か（カプセル化）を示したものです。
    </p>
    <ul>
      <li><strong>UDPデータグラム</strong>（UDPヘッダ＋データ）が最初に生成されます（トランスポート層）</li>
      <li>それが <strong>IPパケット</strong> に包まれます（ネットワーク層）</li>
      <li>最終的に <strong>フレーム</strong>（例えばEthernet）にカプセル化されて物理的に送信されます（データリンク層）</li>
    </ul>
    <p>
      IPヘッダー内の <strong>プロトコル番号</strong>（UDPは17）によって、受信側は「これはUDPだ」と識別できます。
    </p>
    <p><strong>まとめ：</strong></p>
    <ul>
      <li>UDPはIPのペイロード</li>
      <li>IPはフレームのペイロード</li>
      <li>各層でそれぞれのヘッダーが追加され、順にカプセル化されて送信される</li>
    </ul>
  </div>
</div>


  </div>
</template>


<script setup>
import imgUrl from '@/assets/lecture/lecture03/Figure_0603.png';
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>