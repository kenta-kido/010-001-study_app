<template>
  <div class="container my-4">
    <h3 class="mb-4">7(a) Vergleich von Überlastkontroll-Strategien</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Vergleichen Sie die Überlastkontrolle in Peer-to-Peer-Systemen mit netzgestützter Überlastkontrolle.
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        P2P型の輻輳制御と、ネットワーク側が支援する輻輳制御を比較せよ。
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p><strong>Ende-zu-Ende Überlastkontrolle:</strong></p>
        <ul>
          <li>Das Netz liefert keine direkte Rückmeldung über den Überlastungszustand.</li>
          <li>Die aktuelle Auslastung wird anhand beobachtbarer Parameter wie Paketverlust oder Verzögerungszeit geschätzt.</li>
          <li>Die Überlastkontrolle erfolgt ausschließlich durch die Endsysteme, typischerweise auf Basis von TCP.</li>
        </ul>
        <p><strong>Netzgestützte Überlastkontrolle:</strong></p>
        <ul>
          <li>Router geben dem Sender und Empfänger explizit Rückmeldung über den Zustand des Netzes.</li>
          <li>Ein spezielles Bit im Paket signalisiert eine Überlastung (z.&nbsp;B. ECN, DECbit, ATM).</li>
          <li>Das Netz kann auch eine zulässige Senderrate vorgeben, mit der Pakete versendet werden sollen.</li>
        </ul>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p><strong>エンドツーエンド型輻輳制御:</strong></p>
        <ul>
          <li>ネットワークからの直接的な輻輳通知は行われない。</li>
          <li>パケット損失や遅延など、送信側・受信側が観測できる情報から輻輳状態を推測する。</li>
          <li>制御は送信側・受信側のエンドシステムで完結し、主にTCPによって実現される。</li>
        </ul>
        <p><strong>ネットワーク支援型輻輳制御:</strong></p>
        <ul>
          <li>ルーターが送信者や受信者に対してネットワークの輻輳状態を明示的に通知する。</li>
          <li>パケット中のビットを用いて輻輳を示す（例：ECN、DECbit、ATMなど）。</li>
          <li>ネットワーク側がパケット送信レートを決定し、それに基づいて送信者が制御を行う。</li>
        </ul>
      </div>
    </div>

    <!-- 図の挿入 -->
    <div class="text-center my-4">
      <img
        src="@/assets/lecture/lecture03/Figure_0701.png"
        alt="Vergleich der Überlastkontrollstrategien"
        class="img-fluid rounded border"
      />
      <p class="text-muted mt-2">図 7.1 — エンドツーエンド型とネットワーク支援型の輻輳制御の比較</p>
    </div>

<!-- 解説 -->
<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      In Computernetzwerken gibt es zwei grundlegende Strategien zur Überlastkontrolle:
      <strong>Ende-zu-Ende</strong> und <strong>netzgestützte</strong> Verfahren.
    </p>
    <p>
      Beim Ende-zu-Ende-Ansatz verlassen sich die Endsysteme (Sender und Empfänger)
      auf beobachtbare Hinweise wie Paketverlust oder Verzögerung,
      um eine Überlastung im Netzwerk zu erkennen.
    </p>
    <p>
      Dies bedeutet, dass das Netzwerk selbst keine explizite Rückmeldung über seinen Zustand liefert.
      Stattdessen schätzt das Transportprotokoll (z.&nbsp;B. TCP) anhand von Timeout oder Duplikat-Acknowledgments,
      ob das Netz überlastet ist.
    </p>
    <p>
      Diese Methode ist in vielen Netzwerken verwendbar,
      da sie keine spezielle Unterstützung durch Router oder Switches erfordert.
    </p>
    <p>
      Ein Nachteil ist jedoch, dass solche Erkennungen reaktiv sind und die Reaktion auf Überlastung verzögert erfolgen kann.
      Dadurch kann es zu Paketverlusten oder unnötiger Verzögerung kommen.
    </p>
    <p>
      Bei der netzgestützten Überlastkontrolle helfen die Netzwerkgeräte aktiv mit und geben Informationen über die Überlastung weiter.
      Router erkennen Überlast und geben Rückmeldungen an die Endsysteme.
    </p>
    <p>
      Diese Rückmeldung kann etwa durch das Setzen eines sogenannten Congestion-Bits im IP-Header erfolgen (wie bei ECN),
      oder durch spezielle Pakete, sogenannte Choke-Pakete.
    </p>
    <p>
      Fortgeschrittene Systeme wie ATM ABR erlauben sogar, dass ein Router dem Sender mitteilt,
      mit welcher maximalen Rate Daten gesendet werden dürfen.
    </p>
    <p>
      Diese Verfahren ermöglichen eine genauere und oft auch schnellere Steuerung,
      setzen jedoch voraus, dass das Netzwerk selbst komplexere Funktionen unterstützt.
    </p>
    <p>
      Moderne Protokolle wie TCP können auch hybride Ansätze nutzen,
      bei denen beide Methoden kombiniert werden,
      z.&nbsp;B. durch Verwendung von ECN mit TCP.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      コンピュータネットワークにおける輻輳制御には、
      基本的に<strong>エンドツーエンド型</strong>と<strong>ネットワーク支援型</strong>の2つの方法があります。
    </p>
    <p>
      エンドツーエンド型では、送信側と受信側のエンドシステムが、
      パケットの損失や通信の遅延といった観測可能な情報をもとに
      輻輳状態を推測します。
    </p>
    <p>
      つまり、ネットワーク自体は輻輳について明示的に通知せず、
      TCPなどのトランスポート層プロトコルが、
      タイムアウトや3重ACKなどを根拠に輻輳を判断します。
    </p>
    <p>
      この方法は特別なルーター機能などを必要とせず、
      汎用的なネットワーク環境で使えるという利点があります。
    </p>
    <p>
      その一方で、判断が遅れたり誤った判断をしたりすることがあり、
      輻輳への反応が遅くなる可能性があります。
      そのため、効率的な制御が難しい場合もあります。
    </p>
    <p>
      一方、ネットワーク支援型の輻輳制御では、
      ルーターなどのネットワーク機器が輻輳を検知し、
      送信者や受信者に通知を行います。
    </p>
    <p>
      通知の方法としては、パケットのヘッダー内にある輻輳ビットをセットする（ECN）か、
      「チョークパケット」と呼ばれる警告パケットを送る方法があります。
    </p>
    <p>
      より高度な仕組みとしては、ATMネットワークのABRのように、
      ルーターが送信可能な最大レートを送信者に指示する方式もあります。
    </p>
    <p>
      これにより、精密で迅速な制御が可能になりますが、
      ネットワーク機器に高度な機能が求められるというデメリットもあります。
    </p>
    <p>
      現在のインターネットでは、基本はエンドツーエンド型ですが、
      TCPとECNを組み合わせたようなハイブリッド方式も実用化されており、
      両方の利点を取り入れた設計が進んでいます。
    </p>
  </div>
</div>




  </div>
</template>

<script setup>
// Keine zusätzliche Logik erforderlich
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
