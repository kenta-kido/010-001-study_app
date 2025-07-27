<template>
  <div class="container my-4">
    <h3 class="mb-4">TCP</h3>
<!-- Thema 8-x -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum ist RTT kein faires Kriterium für die Bandbreitenzuteilung in TCP?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    なぜTCPにおいてRTT（往復時間）は帯域割り当ての公平な指標とは言えないのか？
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      In klassischen TCP-Algorithmen wie AIMD wird das Wachstum des Congestion Window (cwnd) durch die Häufigkeit der empfangenen ACKs gesteuert.  
      Eine Verbindung mit kurzer RTT erhält mehr ACKs pro Zeiteinheit und kann cwnd schneller erhöhen.
    </p>
    <p>
      Dadurch erhält eine kurze-RTT-Verbindung mehr Bandbreite, obwohl sie nicht notwendigerweise effizienter oder wichtiger ist.  
      Eine lange-RTT-Verbindung wird benachteiligt, selbst wenn sie dieselbe Netzstrecke oder denselben Fluss teilt.
    </p>
    <p>
      Dieses Verhalten führt zu sogenannter RTT-Unfairness – Flows mit niedriger Latenz verdrängen andere.  
      Besonders problematisch ist das in gemischten Netzen, z.B. bei globalen Cloud-Nutzern mit geografisch ungleichen Distanzen.
    </p>
    <p>
      Daher wird RTT als „nicht kontrollierbare“, standortabhängige Eigenschaft betrachtet, die keine Basis für faire Bandbreitenvergabe sein sollte.  
      Zeitbasierte Protokolle wie TCP CUBIC vermeiden diese Abhängigkeit, indem sie das cwnd-Wachstum von der realen Zeit und nicht von der ACK-Rate abhängig machen.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      従来のTCP（例：AIMD）では、ACKを受け取る頻度によってcwnd（輻輳ウィンドウ）の増加が決まります。  
      RTTが短いフローは1秒あたりに多くのACKを受け取れるため、より速くウィンドウを成長させられます。
    </p>
    <p>
      その結果、短RTTのフローは多くの帯域を得られ、長RTTのフローは同じネットワーク条件でも帯域を得にくくなります。  
      これはRTTが短い＝重要というわけではないため、本質的に不公平です。
    </p>
    <p>
      特にグローバルな通信環境では、地理的な距離によりRTTの差が避けられず、  
      東京からの接続とヨーロッパからの接続で同じサーバーにアクセスしても前者が有利になります。
    </p>
    <p>
      このように、RTTはユーザーが制御できない物理的条件であるため、  
      帯域割り当ての公平な基準とは見なせません。
    </p>
    <p>
      TCP CUBICのような時間ベースの方式は、ACKの頻度ではなく経過時間に基づいてウィンドウを制御し、  
      RTTによる不平等を回避しようとするアプローチです。
    </p>
  </div>
</div>

<!-- Thema 8-x -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Welche Faktoren beeinflussen die RTT (Round Trip Time) in Netzwerken?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    ネットワークにおけるRTT（往復時間）に影響を与える要因とは何か？
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Die RTT (Round Trip Time) misst die Zeit, die ein Paket vom Sender zum Empfänger und zurück benötigt.  
      Sie ist eine zentrale Metrik für die Leistungsbewertung von Netzwerken.
    </p>
    <p>
      Einer der Hauptfaktoren ist die <strong>physikalische Entfernung</strong>: Je weiter die Kommunikationspartner voneinander entfernt sind, desto länger ist die Signallaufzeit.
    </p>
    <p>
      Auch <strong>Router-Anzahl und Verarbeitung</strong> beeinflussen die RTT – jeder Hop kann zusätzliche Verzögerung einführen.
    </p>
    <p>
      <strong>Warteschlangenbildung</strong> (Queueing Delay) bei Überlastung erhöht die RTT zusätzlich dynamisch.
    </p>
    <p>
      Auch Layer-2-Technologien (z.&nbsp;B.&nbsp;WLAN vs. Glasfaser) und deren <strong>Verzögerungscharakteristiken</strong> spielen eine Rolle.
    </p>
  </div>


  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      RTT（往復時間）は、パケットが送信元から宛先に届き、ACKが返ってくるまでの合計時間です。  
      ネットワーク性能を評価する上で極めて重要な指標です。
    </p>
    <p>
      最も大きな要因の一つは<strong>物理的距離</strong>であり、通信相手が遠くにいるほど伝送遅延が大きくなります。
    </p>
    <p>
      また、途中経路上の<strong>ルータの数や処理時間</strong>も影響し、それぞれのノードでの中継やキュー処理が遅延を加算します。
    </p>
    <p>
      ネットワーク混雑時には<strong>キューイング遅延</strong>も発生し、RTTが大きく変動することがあります。
    </p>
    <p>
      さらに、WLANや光ファイバーなどの<strong>物理層技術の特性</strong>も、RTTに差を生む重要な要因となります。
    </p>
  </div>
</div>

  </div>
</template>

<script setup>
</script>
