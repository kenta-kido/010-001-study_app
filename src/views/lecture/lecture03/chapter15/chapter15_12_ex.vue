<template>
  <div class="container my-4">
    <h3 class="mb-4">Kollision</h3>
<!-- Thema: CSMA – Carrier Sense Multiple Access -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Was ist CSMA? – Grundprinzipien des Carrier Sense Multiple Access
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    CSMAとは何か？―Carrier Sense Multiple Access の基本と意義
  </p>
</div>

<!-- Erklärung -->
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>

    <p>
      CSMA steht für <strong>Carrier Sense Multiple Access</strong> und beschreibt ein Zugriffsverfahren auf das Übertragungsmedium in Netzwerken wie Ethernet oder WLAN.
    </p>

    <ul>
      <li><strong>Carrier Sense:</strong> Das Netzwerkgerät (z.&nbsp;B. die Netzwerkkarte) hört zunächst auf das Medium, um festzustellen, ob es bereits verwendet wird.</li>
      <li><strong>Multiple Access:</strong> Alle Geräte dürfen prinzipiell senden – es gibt keinen festen Sendeberechtigten.</li>
    </ul>

    <p>
      Der Begriff <strong>Carrier Sense</strong> bedeutet, dass die Netzwerkkarte (NIC) vor dem Senden prüft, ob das Übertragungsmedium gerade belegt ist. 
    </p>
    <p> 
      Dies geschieht durch das Messen elektrischer Signale auf dem Kabel (bei Ethernet) oder durch das Erkennen von Funksignalen in einem bestimmten Frequenzband (bei WLAN).
    <br/> 
      Nur wenn kein aktives Signal festgestellt wird, darf gesendet werden.
    </p>
    <p>
      Wenn das Medium frei ist, darf gesendet werden. Sind mehrere Geräte gleichzeitig bereit zu senden, kann es zu <strong>Kollisionen</strong> kommen.
    </p>

    <p>
      CSMA ist typisch für Ethernet (mit CSMA/CD) und WLAN (mit CSMA/CA).
    </p>

    <p>
      <strong>Gegenbeispiel:</strong> Im Token-Ring-Netzwerk darf nur das Gerät mit dem „Token“ senden. Das ist <em>kein Multiple Access</em>.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>

    <p>
      <strong>CSMA（Carrier Sense Multiple Access）</strong>は、ネットワークで複数の端末が同じ通信媒体を共有してアクセスする方式を指します。
    </p>

    <ul>
      <li><strong>Carrier Sense（搬送波感知）：</strong> NIC（ネットワークインタフェース）は送信前に、通信媒体（ケーブルや電波）に他の信号が存在しないか確認します。</li>
      <li><strong>Multiple Access（多重アクセス）：</strong> すべての端末が自由に送信を試みることができます（ただし競合の可能性あり）。</li>
    </ul>

    <p>
      <strong>Carrier Sense（搬送波感知）</strong>とは、NIC（ネットワークインタフェースカード）がデータ送信の前に、通信媒体が現在使用中かどうかを検出する動作を指します。
    </p>
    <p> 
      これは、（イーサネットの場合）ケーブル上の電気信号を測定することで、または（無線LANの場合）特定の周波数帯での電波信号を検出することで行われます。
    <br/> 
      信号が検出されなければ、そのタイミングで送信が許可されます。
    </p>


    <p>
      媒体が空いていれば送信しますが、他の端末も同時に送信しようとすると<strong>衝突（コリジョン）</strong>が起きることがあります。
    </p>

    <p>
      有線LAN（イーサネット）では<strong>CSMA/CD</strong>（Collision Detection：衝突検出）、無線LANでは<strong>CSMA/CA</strong>（Collision Avoidance：衝突回避）という派生方式が使われます。
    </p>

    <p>
      <strong>対照例：</strong>「トークンリング」のように、トークンを持った端末だけが送信できる方式は<strong>Multiple Accessではありません</strong>。
    </p>
  </div>
</div>

<!-- Thema 1: Warum verwendet WLAN CSMA/CA anstelle von CSMA/CD? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum verwendet WLAN CSMA/CA anstelle von CSMA/CD?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    なぜWi-Fi（無線LAN）ではCSMA/CDではなくCSMA/CAが使われるのか？
  </p>
</div>

<!-- 解説ブロック -->
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Im kabelgebundenen Ethernet wird CSMA/CD verwendet, da Geräte dort gleichzeitig senden und empfangen können. Dabei kann eine <strong>Kollision erkannt</strong> werden, wenn sich Signale überlagern.
    </p>
    <p>
      In drahtlosen Netzwerken (WLAN) ist das jedoch nicht möglich: Ein Gerät kann <strong style="color: red;">während der eigenen Übertragung keine anderen Signale empfangen</strong>, weil es durch die eigene Sendeleistung "taub" wird.
    </p>
    <p>
      Deshalb kommt im WLAN <strong>CSMA/CA (Collision Avoidance)</strong> zum Einsatz. Hierbei:
    </p>
    <ul>
      <li>Der Kanal wird zuerst auf andere Übertragungen geprüft (Carrier Sense).</li>
      <li>Ist der Kanal frei, wird eine zufällige Wartezeit (Backoff) eingelegt.</li>
      <li>Das empfangende Gerät sendet ein ACK (Acknowledgement), um den erfolgreichen Empfang zu bestätigen.</li>
      <li>Wenn kein ACK empfangen wird, geht das sendende Gerät von einer Kollision aus und versucht die Übertragung erneut.</li>
    </ul>
    <p>
      Da <span style="color: red;">die Reichweite von Funksignalen begrenzt</span> ist, kann es zum sogenannten Hidden-Terminal-Problem kommen.
      <br/>Um dieses Problem zu lösen, wurde der Mechanismus von RTS (Request to Send) und CTS (Clear to Send) eingeführt, der andere Geräte informiert und die Kommunikation koordiniert.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      有線LAN（Ethernet）ではCSMA/CD（衝突検出方式）が使われていますが、これは送信中でも他の信号を受信できるため、<strong>衝突を検出して再送信する</strong>ことが可能です。
    </p>
    <p>
      しかし、無線LAN（Wi-Fi）では、<span style="color: red;">端末が<strong>自分の電波を送信している間は他の電波を受信できず</strong>、衝突を検出できません。</span>
      そのため、<strong>CSMA/CDは使えず</strong>、代わりに<strong>CSMA/CA（衝突回避方式）</strong>が採用されています。
    </p>
    <p>
      CSMA/CAの手順は次の通りです：
    </p>
    <ul>
      <li>まず、他の端末が通信していないかを確認（Carrier Sense）。</li>
      <li>空いていれば、<strong>ランダムな短時間（バックオフ）待って</strong>から送信。</li>
      <li>受信端末は、受け取ったら<strong>ACK（確認応答）を返す</strong>。</li>
      <li>ACKが返ってこなければ衝突とみなして再送する。</li>
    </ul>
    <p>
      また、電波の届く範囲が限定されるため、<strong>隠れ端末（Hidden Terminal）問題</strong>が起こることがあります。
      この問題に対処するために、<strong>RTS（送信要求） / CTS（送信許可）</strong>の仕組みが導入されており、他の端末への通知と通信制御を行います。
    </p>
  </div>
</div>


<!-- Thema 2: Wie funktioniert Collision Avoidance im WLAN mit RTS/CTS und NAV? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Wie funktioniert Collision Avoidance im WLAN mit RTS/CTS und NAV?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    RTS/CTSとNAVによる無線LANの衝突回避の仕組みとは？
  </p>
</div>

<!-- 解説ブロック -->
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Im WLAN können sich manche Stationen nicht gegenseitig "hören" – dieses Phänomen nennt man das <strong>Hidden-Terminal-Problem</strong>.
      Zwei Geräte (z.B. PC1 und PC3) können gleichzeitig mit demselben Access Point (z.B. PC2) kommunizieren wollen, ohne sich gegenseitig zu erkennen. Dadurch entstehen <strong>Kollisionen</strong> am Access Point.
    </p>
    <p>
      Um das zu verhindern, verwendet WLAN den <strong>RTS/CTS-Mechanismus</strong>:
    </p>
    <ul>
      <li><strong>RTS (Request to Send):</strong> Der Sender kündigt seine geplante Übertragung an.</li>
      <li><strong>CTS (Clear to Send):</strong> Der Empfänger erteilt die Freigabe und signalisiert anderen Geräten: Jetzt nicht senden!</li>
      <li><strong>NAV (Network Allocation Vector):</strong> Alle Geräte "merken sich", wie lange sie still sein müssen, basierend auf der CTS-Nachricht.</li>
    </ul>
    <p>
      Dieser Mechanismus hilft dabei, den Funkkanal für eine bestimmte Zeit zu reservieren und vermeidet so unbeabsichtigte Parallelübertragungen.
    </p>
    <p>
      RTS/CTS wird besonders in Umgebungen mit <strong>hoher Netzlast oder vielen versteckten Stationen</strong> empfohlen.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      無線LANでは、<strong>隠れ端末（Hidden Terminal）問題</strong>によって通信の衝突が発生することがあります。
      たとえばPC1とPC3が物理的に離れていてお互いの存在を検知できない場合、同じアクセスポイント（PC2）に同時に送信してしまい、<strong>PC2で衝突</strong>が発生します。
    </p>
    <p>
      この問題に対処するために導入されているのが、<strong>RTS/CTS/NAV</strong>の仕組みです。
    </p>
    <ul>
      <li><strong>RTS（Request to Send）:</strong> 送信側（PC1など）が「この時間、通信してもよいか？」とアクセスポイントに問い合わせ</li>
      <li><strong>CTS（Clear to Send）:</strong> アクセスポイントが「OK、今はあなたの通信時間です」と応答。<strong>周囲の端末にも「送信禁止」の通知となる</strong></li>
      <li><strong>NAV（Network Allocation Vector）:</strong> 他の端末（PC3など）はCTSに含まれる<strong>通信時間</strong>を読み取り、その間は送信を控える</li>
    </ul>
    <p>
      このように、RTS/CTSにより<strong>無線帯域の一時的な予約</strong>が行われ、衝突を未然に防ぐことができます。
    </p>
    <p>
      RTS/CTSは<strong>常に必須ではありません</strong>が、通信量が多い環境や障害物の多い場所、隠れ端末が疑われる状況で有効に機能します。
    </p>
  </div>
</div>

<!-- Thema 3: Was ist das Hidden-Terminal-Problem im WLAN? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Was ist das Hidden-Terminal-Problem im WLAN?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    無線LANにおける隠れ端末（Hidden Terminal）問題とは？
  </p>
</div>

<!-- 解説ブロック -->
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Das <strong>Hidden-Terminal-Problem</strong> tritt im WLAN auf, wenn zwei Geräte (z.&nbsp;B. PC1 und PC3) zwar denselben Empfänger (z.&nbsp;B. Access Point PC2) erreichen können, sich aber gegenseitig nicht "hören" können – etwa wegen zu großer Entfernung oder Hindernissen.
    </p>
    <p>
      Da sie nichts voneinander wissen, könnten sie gleichzeitig senden. Dies führt dazu, dass ihre Signale beim Empfänger kollidieren – eine <strong>Datenkollision</strong>.
    </p>
    <p>
      Besonders in großen Gebäuden oder weitläufigen WLAN-Installationen ist dieses Problem häufig.
    </p>
    <p>
      Zur Lösung wird das <strong>RTS/CTS-Verfahren</strong> verwendet:
    </p>
    <ul>
      <li><strong>RTS (Request to Send):</strong> Der Sender fragt beim Empfänger an, ob er senden darf.</li>
      <li><strong>CTS (Clear to Send):</strong> Der Empfänger erlaubt die Übertragung und signalisiert dies allen erreichbaren Geräten.</li>
      <li><strong>NAV (Network Allocation Vector):</strong> Geräte in der Umgebung merken sich die geplante Sendezeit und warten entsprechend.</li>
    </ul>
    <p>
      So kann auch dann eine Kollision verhindert werden, wenn sich die Sender gegenseitig nicht erkennen können.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      <strong>隠れ端末（Hidden Terminal）問題</strong>とは、無線LANにおいて、例えばPC1とPC3が<strong style="color: red;">同じアクセスポイント（例：PC2）</strong>には届くが、<strong>互いの電波を感知できない</strong>ような状況で発生します。
    </p>
    <p>
      このような場合、両者は「他に誰も通信していない」と誤解して<strong>同時に送信</strong>してしまい、アクセスポイント側で<strong>電波の衝突（コリジョン）</strong>が起きてしまいます。
    </p>
    <p>
      この問題は、大きな建物や広いエリアに無線LANを展開している環境でよく発生します。
    </p>
    <p>
      解決のために使われるのが、<strong>RTS/CTS（送信要求／送信許可）方式</strong>です：
    </p>
    <ul>
      <li><strong>RTS（Request to Send）:</strong> 送信側が「送ってもよいか？」と受信側に申請します。</li>
      <li><strong>CTS（Clear to Send）:</strong> 受信側が「送信してよい」と返答し、それを周囲の端末にも知らせます。</li>
      <li><strong>NAV（Network Allocation Vector）:</strong> 他の端末は、その通信時間を記憶し、自分の送信を一時的に控えます。</li>
    </ul>
    <p>
      これにより、互いに存在を感知できない端末同士の衝突も<strong>事前に回避</strong>することができます。
    </p>
  </div>
</div>

<!-- Thema 4: Wie werden CTS und NAV zur Vermeidung von Kollisionen eingesetzt? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Wie werden CTS und NAV zur Vermeidung von Kollisionen eingesetzt?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    衝突を防ぐためにCTSとNAVはどのように使われるのか？
  </p>
</div>

<!-- 解説ブロック -->
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Im WLAN dient das Zusammenspiel von <strong>CTS (Clear to Send)</strong> und <strong>NAV (Network Allocation Vector)</strong> der <strong>Kollisionsvermeidung</strong>, besonders bei Hidden-Terminal-Szenarien.
    </p>
    <p>
      Nachdem ein Sender (z.&nbsp;B. PC1) ein <strong>RTS</strong> an den Empfänger (z.&nbsp;B. PC2) geschickt hat, antwortet der Empfänger mit einem <strong>CTS</strong>-Frame.
    </p>
    <p>
      Andere Geräte, die sich im Empfangsbereich von PC2 befinden (z.B. PC3), empfangen ebenfalls den <strong>CTS-Rahmen</strong> – darunter auch solche, die den ursprünglichen Sender (PC1) nicht hören können (z.&nbsp;B. PC3).
    </p>
    <p>
      Das CTS enthält eine <strong>Dauerangabe (NAV)</strong>, die angibt, wie lange die bevorstehende Übertragung dauern wird.
      Alle Geräte, die dieses CTS empfangen, setzen ihren eigenen NAV entsprechend und unterbrechen in dieser Zeit ihre Übertragungen.
    </p>
    <p>
      Dadurch wird verhindert, dass andere Geräte in den Übertragungszeitraum eingreifen und eine Kollision verursachen.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      無線LANでは、<strong>CTS（Clear to Send）</strong>と<strong>NAV（Network Allocation Vector）</strong>が<strong>衝突回避の鍵</strong>となります。特に隠れ端末のような状況で有効です。
    </p>
    <p>
      送信端末（例：PC1）が受信端末（例：PC2）に<strong>RTS（送信要求）</strong>を送った後、PC2はそれに応じて<strong>CTS（送信許可）</strong>を返します。
    </p>
    <p>
      この<strong>CTSフレーム</strong>を、PC2の電波が届くすべての端末（例：PC3など）が受信します。これにより、PC1の存在を知らない機器にも通信の予定が伝わります。
    </p>
    <p>
      さらに、CTSの中には<strong>「これから何マイクロ秒の通信があるか」</strong>という<strong>NAV情報</strong>が含まれており、CTSを受け取った端末はその時間分、自身の送信を<strong>待機（黙る）</strong>ようにします。
    </p>
    <p>
      このようにして、CTSとNAVによってネットワーク全体で通信の調整が行われ、<strong>物理的に互いに感知できない端末同士の衝突を防ぐ</strong>ことができます。
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
