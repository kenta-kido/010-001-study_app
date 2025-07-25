<template>
  <div class="container my-4">
    <h3 class="mb-4">2(a) Ergänzende Themen: Switch und Hub</h3>

<!-- 解説セクション：Hub と Switch の比較（詳細版） -->
<!-- Thema: Hub vs. Switch – Technischer Hintergrund und praktische Folgen -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Technische und funktionale Unterschiede zwischen Hub und Switch
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    ハブとスイッチの技術的・機能的な違いとその影響
  </p>
</div>
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Ein <strong>Hub</strong> arbeitet auf Layer 1 (Bitübertragungsschicht) und agiert wie ein elektrischer Verteiler:
      Alle eingehenden Signale werden unverändert an alle Ports ausgesendet. Der gesamte LAN-Segment ist somit ein <em>gemeinsames Übertragungsmedium</em>.
    </p>
    <p>
      Das führt zu einer <strong>großen Kollisionsdomäne</strong>: Wenn zwei Hosts gleichzeitig senden, stoßen die Signale zusammen – Kollision.
      Dadurch sinkt der Datendurchsatz erheblich und es wird <strong>CSMA/CD</strong> benötigt.
    </p>
    <p>
      Ein <strong>Switch</strong> hingegen arbeitet auf Layer 2 (Sicherungsschicht) und verwendet eine <strong>MAC-Lerntabelle</strong>,
      um Frames nur an den richtigen Port weiterzuleiten. Jeder Port bildet eine eigene Kollisionsdomäne.
    </p>
    <p>
      Switches unterstützen außerdem <strong>Vollduplex</strong>-Kommunikation, was gleichzeitiges Senden und Empfangen ohne Kollision ermöglicht.
      Sie isolieren den Verkehr und erhöhen die Sicherheit, da Frames nicht mehr für alle sichtbar sind.
    </p>
    <p>
      Daher sind Switches heute Standard in fast allen Netzwerken, während Hubs veraltet sind und nur noch in Spezialfällen eingesetzt werden.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      <strong>ハブ</strong>は物理層（レイヤ1）で動作し、単なる信号の中継装置として機能します。
      つまり、受信した信号をすべてのポートにそのまま流す「電気的な分配器」のようなものです。
    </p>
    <p>
      このため、ネットワーク全体が<strong>単一の共有媒体</strong>となり、複数のホストが同時に通信すると<strong>衝突（コリジョン）</strong>が発生します。
      結果として通信効率が大きく下がり、<strong>CSMA/CD</strong>のような衝突検出メカニズムが必要になります。
    </p>
    <p>
      一方、<strong>スイッチ</strong>はデータリンク層（レイヤ2）で動作し、受信したフレームの送信元MACアドレスを学習し、
      宛先MACアドレスに応じて<strong>適切なポートのみに転送</strong>します。各ポートは独立した通信領域（コリジョンドメイン）になります。
    </p>
    <p>
      スイッチはさらに<strong>フルデュプレックス通信</strong>をサポートしており、送受信の同時通信でも衝突は発生しません。
      また、通信は宛先にだけ届くため、<strong>セキュリティ面でも優れています</strong>。
    </p>
    <p>
      このような理由から、スイッチは現在のネットワーク設計において標準装置となっており、
      ハブはほとんど使われなくなりました（一部、パケットキャプチャや特殊用途で使用）。
    </p>
  </div>
</div>

<!-- Thema: Wie löst Vollduplex das Problem von Kollisionen? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Wie löst Vollduplex das Problem von Kollisionen?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    フルデュプレックス通信はどのようにして衝突の問題を解決するのか？
  </p>
</div>
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      In traditionellen Ethernet-Netzen mit Hubs kann immer nur ein Gerät gleichzeitig senden.
      Wenn mehrere Geräte gleichzeitig senden, kommt es zu <strong>Kollisionen</strong> – das führt zu Verzögerungen und reduziert den Durchsatz.
    </p>
    <p>
      Mit <strong>Vollduplex</strong>-Verbindungen (z.B. bei Switches) kommunizieren zwei Geräte gleichzeitig in beide Richtungen, 
      ohne dass es zu einer Kollision kommt, weil die Sende- und Empfangskanäle physisch getrennt sind.
    </p>
    <p>
      Damit entfällt der Bedarf an CSMA/CD und die Effizienz der Netzwerkkommunikation steigt erheblich.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      従来のハブを使ったネットワークでは、同時に複数の端末が通信すると<strong>衝突（コリジョン）</strong>が発生し、
      再送による遅延や帯域の浪費が問題となっていました。
    </p>
    <p>
      <strong>フルデュプレックス通信</strong>は、送信と受信を独立したチャネルで同時に行えるため、
      このような衝突が発生しません。特にスイッチとの接続で有効に機能します。
    </p>
    <p>
      これにより、<strong>CSMA/CD</strong>のような衝突検出機構が不要となり、通信効率と信頼性が大幅に向上します。
    </p>
  </div>
</div>


  </div>
</template>

<script setup>
</script>
