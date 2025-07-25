<template>
  <div class="container my-4">
    <h3 class="mb-4">2(b) Keine Kollisionen bei Switch</h3>

    <!-- 問題文 -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Warum gibt es bei Switches keine Kollisionen?
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        なぜスイッチでは衝突（コリジョン）が発生しないのか？
      </p>
    </div>

    <!-- 解答 -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <ul>
          <li>In einem modernen Ethernet-Netzwerk ist jeder Host über eine eigene Punkt-zu-Punkt-Verbindung direkt mit dem Switch verbunden.</li>
          <li>Im Gegensatz zu früheren Bus-Topologien oder Hub-basierten Netzwerken, wo mehrere Geräte sich eine Leitung teilten, hat bei einem Switch jeder Port seinen eigenen Übertragungskanal.</li>
          <li>Switches arbeiten im Vollduplex-Modus: Senden und Empfangen ist gleichzeitig möglich, ohne dass Signale sich gegenseitig stören.</li>
          <li>Ein Switch nutzt Store-and-Forward-Verfahren und kontrolliert aktiv den Datenfluss – es wird niemals mehr als ein Frame gleichzeitig über denselben Port weitergeleitet.</li>
          <li>Dadurch gibt es keine Kollisionen und Protokolle wie CSMA/CD, die früher zur Kollisionsvermeidung dienten, sind heute überflüssig.</li>
        </ul>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <ul>
          <li>現在のイーサネットでは、各ホストはスイッチと1対1で接続されており、「ポイント・ツー・ポイント接続」と呼ばれます。</li>
          <li>これは、過去のバス型トポロジーやハブを使用した構成（複数の端末が同じ通信路を共有）とは異なり、各通信が独立していることを意味します。</li>
          <li>スイッチは<strong>フルデュプレックス通信</strong>に対応しており、送信と受信が同時に可能であるため、信号がぶつかる（＝衝突）ことはありません。</li>
          <li>スイッチは<strong>ストア・アンド・フォワード方式</strong>で、各ポートに送るフレームを一つずつ管理するため、物理的に同じラインに複数のフレームが流れることはありません。</li>
          <li>そのため、過去にバス型Ethernetで使用されていた<strong>CSMA/CD</strong>のようなMACプロトコルは、現代のスイッチベースのネットワークでは不要となっています。</li>
        </ul>
      </div>
    </div>

    <!-- 解説 -->
    <div class="row mt-4">
      <div class="col-md-6">
        <h5>Erklärung (Deutsch)</h5>
        <p>
          In den frühen Tagen von Ethernet wurde meist eine <strong>Bus-Topologie</strong> verwendet – ein einziges Kabel verband alle Geräte. Diese teilten sich das Medium und konnten nicht gleichzeitig senden, ohne dass es zu Kollisionen kam.
        </p>
        <p>
          Um diese Kollisionen zu erkennen und zu kontrollieren, wurde das <strong>CSMA/CD</strong>-Protokoll eingeführt: Geräte hörten auf das Medium, bevor sie sendeten, und stoppten bei Kollisionen.
        </p>
        <p>
          Mit dem Übergang zu <strong>Hub-basierten Stern-Topologien</strong> blieb das physikalische Layout zwar sternförmig, aber logisch war es weiterhin ein geteiltes Medium – also weiterhin kollisionsanfällig.
        </p>
        <p>
          Erst mit der Einführung von <strong>Switches</strong> änderte sich das: Jeder Host ist direkt mit dem Switch verbunden, und der Switch steuert gezielt, welcher Datenverkehr wohin geht. Dank Vollduplex und intelligenter Paketverarbeitung entstehen keine Kollisionen mehr.
        </p>
      </div>

      <div class="col-md-6">
        <h5>解説（日本語）</h5>
        <p>
          初期のEthernetでは、<strong>バス型トポロジー</strong>が一般的で、1本のケーブルに複数のホストが接続されていました。この構成では、複数の端末が同時に送信すると<strong>衝突（コリジョン）</strong>が発生します。
        </p>
        <p>
          そのため、「送信前にキャリア（信号）を感知し、衝突時にはランダムに再送する」<strong>CSMA/CD</strong> というMACプロトコルが必要でした。
        </p>
        <p>
          その後、<strong>ハブ</strong>を用いたスター型トポロジーが導入されましたが、信号は全ポートにブロードキャストされるため、論理的には依然としてバスと同様の問題を抱えていました。
        </p>
        <p>
          現在主流のスイッチは、各ホストとスイッチが<strong>1対1の専用リンク</strong>で接続され、しかも<strong>フルデュプレックス通信</strong>と<strong>パケットの一時保存と順次転送（ストア・アンド・フォワード）</strong>によって、衝突が起こらない構造になっています。
        </p>
        <p>
          このように、物理的・論理的にコリジョンが構造的に排除されているため、CSMA/CDのような衝突回避のためのMACプロトコルは、今日のスイッチ型Ethernetでは必要なくなっています。
        </p>
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
