<template>
  <div class="container my-4">
    <h3 class="mb-4">1(a) Medienzugriff – Analyse MAC-Adresse & Broadcast</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Ein LAN mit Rechnern A, B und C sei gegeben. A sendet viele tausend Frames an die MAC-Adresse von B (mit eingeschlossenen IP-Paketen). Analysiert die Netzwerkkarte von C diese Frames? Wenn ja, werden sie an die Netzwerkschicht von C weitergegeben?<br />
        Was ändert sich, wenn A die Frames an die MAC Broadcastadresse sendet?
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        A、B、C のコンピュータが存在する LAN を考える。A が B の MAC アドレス宛に何千ものフレーム（IPパケットを含む）を送信した場合、C のネットワークカードはこれらのフレームを解析するか？ もし解析するなら、それらは C のネットワーク層に渡されるのか？<br />
        A がフレームを MAC ブロードキャストアドレス宛に送信した場合は何が変わるか？
      </p>
    </div>
<div class="row mt-4">
  <div class="col-md-6">
    <h5>Ergänzende Erklärung (Deutsch)</h5>
    <p>
      Wenn ein <strong>Switch oder eine Bridge</strong> im Netzwerk verwendet wird, die bereits die MAC-Adressen gelernt haben,
      wird ein <strong>Unicast-Frame</strong> (z.B. von A an B) nur an den Port weitergeleitet, an dem sich B befindet.
      <strong>C erhält diesen Frame nicht</strong>, da sich C an einem anderen Port befindet.
    </p>
    <p>
      Wird hingegen ein <strong>Hub</strong> verwendet, leitet dieser den Frame an <strong>alle Ports</strong> weiter.
      In diesem Fall erhält auch C den Frame, aber <strong>seine Netzwerkkarte verwirft ihn</strong>, weil die Zieladresse nicht seiner MAC-Adresse entspricht.
    </p>
    <p>
      Bei einem <strong>Broadcast-Frame</strong> (z.B. FF:FF:FF:FF:FF:FF) verhalten sich Switch, Bridge und Hub wie folgt:
    </p>
    <ul>
      <li><strong>Switch/Bridge:</strong> Leiten den Broadcast an <em>alle Ports außer dem empfangenden</em> weiter. C erhält den Frame und verarbeitet ihn.</li>
      <li><strong>Hub:</strong> Sendet den Frame an alle Ports. Auch hier erhält C den Frame und verarbeitet ihn, da es sich um einen Broadcast handelt.</li>
    </ul>
    <p>
      <strong>Zusammenfassung:</strong> Ein Switch oder eine Bridge verwendet MAC-Adressentabellen zur gezielten Weiterleitung (intelligent), während ein Hub immer an alle weiterleitet (dumm).
    </p>
  </div>

  <div class="col-md-6">
    <h5>補足解説（日本語）</h5>
    <p>
      <strong>スイッチやブリッジ</strong> を使用しており、すでにMACアドレスを学習している場合、
      <strong>ユニキャストフレーム</strong>（例：A→B）はBが接続されたポートのみに転送されます。
      よって、<strong>Cには届きません</strong>。
    </p>
    <p>
      一方、<strong>ハブ</strong>はすべてのポートに信号を送るため、Cにもフレームが届きます。
      しかし、<strong>宛先MACがCと一致しないため、NICで破棄</strong>され、上位層には渡りません。
    </p>
    <p>
      <strong>ブロードキャストフレーム</strong>（例：FF:FF:FF:FF:FF:FF）の場合は以下のように動作します：
    </p>
    <ul>
      <li><strong>スイッチ／ブリッジ：</strong> 受信ポートを除く <em>すべてのポート</em> に転送。Cにも届き、NICが受け取りネットワーク層に渡されます。</li>
      <li><strong>ハブ：</strong> 全ポートに送信。Cにも届き、ブロードキャストと認識してネットワーク層へ渡されます。</li>
    </ul>
    <p>
      <strong>まとめ：</strong> スイッチやブリッジはMACアドレスに基づき「<em>賢く転送</em>」する機器であり、ハブは常に「<em>全てに送信する</em>」単純な装置です。
    </p>
  </div>
</div>

<!-- 解説：Deutsch & 日本語 -->
<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Jede Netzwerkkarte überprüft die Ziel-MAC-Adresse eines eingehenden Frames. Nur wenn diese Adresse mit der eigenen übereinstimmt
      oder ein Broadcast ist, wird der Frame akzeptiert. In einem LAN mit Switches wird der Frame gezielt nur an den Zielport weitergeleitet.
      Frames für andere Hosts werden daher von der Netzwerkkarte ignoriert. Broadcasts hingegen werden an alle Ports gesendet, weil sie
      an alle Teilnehmer im Netzwerk gerichtet sind. Solche Frames verarbeitet die Netzwerkkarte und reicht sie an höhere Protokolle weiter.
      Dieses Verhalten schützt das System vor unnötiger Belastung durch fremde Daten.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      ネットワークカードは、受信したフレームの宛先MACアドレスを必ず確認し、自分宛かブロードキャストでなければ破棄します。
      スイッチ環境ではフレームは特定の宛先にだけ転送されるため、他のホストには届きません。
      つまり、A→B宛のフレームはCに届かず、Cのネットワーク層にも渡されません。
      しかし、ブロードキャストは「全ホスト宛」の特別なアドレスであるため、すべてのネットワークカードがそれを処理し、
      上位層（IP層など）に渡します。
      この仕組みによって、必要な通信だけが適切に処理され、他のホストへの影響を最小限に抑えることができます。
    </p>
  </div>
</div>

<!-- 中タイトル -->
<div class="row mb-4">
  <div class="col-12">
    <p class="fw-bold fs-5" style="color: #004085;">
      スイッチ・ブリッジ・ハブにおけるフレーム転送の仕組みと送信元ポートの扱い
    </p>
  </div>
</div>

<!-- 解説ブロック -->
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Der <strong>Sendungsport</strong> ist der physische Port, über den ein Gerät – z.B. Host A – ein Frame in das Netzwerk einspeist.
      Bei einem <strong>Switch oder einer Bridge</strong> wird ein Broadcast-Frame an <strong>alle Ports weitergeleitet, außer dem Port, an dem der Frame empfangen wurde</strong>.
      Beispiel: Wenn A an Port 1 eines Switches angeschlossen ist und ein Broadcast sendet, geht der Frame an alle anderen Ports (Port 2, Port 3 usw.), jedoch <strong>nicht zurück an Port 1</strong>.
    </p>
    <p>
      Ein <strong>Hub</strong> hingegen ist ein physikalisches Gerät ohne Intelligenz. Er <strong>spiegelt das Signal an alle Ports, einschließlich des Eingangsports</strong>.
      Das bedeutet: Wenn A an Port 1 sendet, wird das Signal an alle Ports (auch Port 1) weitergegeben. 
      Moderne Netzwerkkarten ignorieren jedoch typischerweise ihr eigenes Echo.
    </p>
    <p>
      Beispiel: A sendet ein Frame an die Broadcast-Adresse. B und C empfangen es. Bei Switch/Bridge bekommt C das Frame über seinen Port, aber nicht A. Beim Hub bekommen A, B und C das Signal.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      <strong>送信元ポート</strong>とは、端末（例：ホストA）がフレームをネットワークに送信した際に、<strong>そのフレームがスイッチやハブに入力されたポート</strong>を指します。
    </p>
    <p>
      <strong>スイッチやブリッジ</strong>では、ブロードキャストフレームを受信すると、<strong>そのフレームが入力されたポート（送信元ポート）以外の全ポート</strong>に転送します。
      例：Aがスイッチのポート1に接続されていて、ブロードキャストを送信した場合、<strong>ポート2、ポート3、… など他のすべてのポート</strong>にフレームが送られ、<strong>ポート1には送られません</strong>。
    </p>
    <p>
      一方、<strong>ハブ</strong>は制御を行わないため、<strong>すべてのポート（送信元ポートを含む）</strong>に信号を電気的に中継します。
      つまり、Aがポート1から送信した場合、ポート1にも信号が戻ってくる可能性があります（通常AのNICはそれを無視します）。
    </p>
    <p>
      例：Aがブロードキャストフレームを送信すると、BとCはそのフレームを受信します。スイッチ／ブリッジではCのポートにだけ転送され、Aには戻りません。ハブではA・B・Cすべてに届きます。
    </p>
  </div>
</div>


<!-- 中タイトル -->
<div class="row mb-4">
  <div class="col-12">
    <p class="fw-bold fs-5" style="color: #004085;">
      スイッチの学習前の挙動とFloodingの仕組み
    </p>
  </div>
</div>

<!-- 解説ブロック -->
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Wenn ein Switch noch keine MAC-Adresse einem Port zugeordnet hat, kennt er das Zielgerät nicht.
      In diesem Fall verhält er sich wie ein Hub und <strong>sendet den Frame an alle Ports außer dem Eingangsport</strong>.
      Dieses Verhalten nennt man <em>Flooding</em>. Sobald der Switch jedoch ein Frame empfängt, merkt er sich die Quelladresse
      und den dazugehörigen Port in seiner MAC-Tabelle. Zukünftige Frames an diese Adresse können dann gezielt weitergeleitet werden.
      So entsteht durch Lernen nach und nach ein optimierter Weiterleitungsprozess.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      スイッチは初期状態では、宛先MACアドレスがどのポートにあるかを知りません。
      そのため、最初の通信ではフレームを<strong>全ポート（受信元以外）に送信</strong>する「フラッディング」と呼ばれる動作を行います。
      これにより正しい宛先に届くまで全体に広く配信されます。
      その後、受信フレームの<strong>送信元MACアドレスとポート番号</strong>を学習し、内部のMACテーブルに記録します。
      次回以降はその情報を使い、宛先にのみフレームを転送することで、通信効率が向上していきます。
    </p>
  </div>
</div>

  </div>
</template>

<script setup>
// No JS logic needed
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
