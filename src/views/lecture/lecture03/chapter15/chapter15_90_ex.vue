<template>
  <div class="container my-4">
    <h3 class="mb-4">TCP Überlastkontroll</h3>

<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Was ist der Zweck von „Slow Start“ in TCP und wie funktioniert es?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    TCP における「Slow Start（スロー・スタート）」の目的と動作とは？
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Slow Start ist der erste Zustand der TCP-Kongestionskontrolle.  
      Es dient dazu, die Übertragungsrate vorsichtig zu erhöhen, um die verfügbare Bandbreite zu erkunden.
    </p>
    <p>
      Beginnend mit einem cwnd von 1 oder 2 MSS wird das Fenster bei jedem ACK exponentiell vergrößert.  
      Nach jedem RTT verdoppelt sich cwnd typischerweise.
    </p>
    <p>
      Wenn cwnd den ssthresh erreicht, geht TCP in die Phase „Congestion Avoidance“ über und wächst nur noch linear.
    </p>
    <p>
      Bei Paketverlusten reagiert TCP unterschiedlich je nach Variante:  
    </p>
    <ul>
    <li>
      TCP Tahoe setzt cwnd sofort auf 1 MSS zurück und beginnt wieder mit Slow Start.  
    </li>
    <li>
      TCP Reno hingegen geht bei dreifachen Duplikat-ACKs in die Phase „Fast Recovery“ über, in der linear gewachsen wird – analog zur Congestion Avoidance.
      </li>
    </ul>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      Slow Start は TCP 輻輳制御の最初のフェーズであり、ネットワーク帯域を徐々に探索するため、送信速度を慎重に増加させます。
    </p>
    <p>
      開始時の cwnd（輻輳ウィンドウ）は通常 1〜2 MSS で、ACK を受信するたびに指数関数的に増加し、RTT ごとにおよそ倍になります。
    </p>
    <p>
      cwnd が ssthresh（しきい値）に達すると、TCP は Congestion Avoidance フェーズに移行し、以降の成長は線形になります。
    </p>
    <p>
      パケット損失時の挙動は TCP の実装によって異なります：  
    </p>
    <ul>
      <li>  
      TCP Tahoe では cwnd を 1 MSS に戻して再び Slow Start に入り、指数的にやり直します。  
      </li>
      <li>  
      一方 TCP Reno は 3 重複 ACK を検出した場合、Fast Recovery に入り、cwnd を半分に減らした後、Congestion Avoidance のように線形に増加を続けます。
      </li>
    </ul>
  </div>
</div>

<!-- Abbildung -->
<div class="text-center mb-4">
  <img :src="image" alt="Poisoned Reverse Beispiel" class="img-fluid rounded border" />
  <p class="text-muted mt-2">Abbildung: Beispiel – Linkkostenänderung und Anwendung von Poisoned Reverse</p>
</div>



<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Wie funktioniert „Congestion Avoidance“ im TCP-Protokoll?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    TCP における「Congestion Avoidance（輻輳回避）」の仕組みとは？
  </p>
</div>
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Nach der Slow-Start-Phase beginnt TCP mit „Congestion Avoidance“, um Netzwerküberlastung zu vermeiden.  
      Die Erhöhung von cwnd erfolgt nur noch linear (z.&nbsp;B. 1 MSS pro RTT).
    </p>
    <p>
      Ziel ist es, vorsichtig weiter zu wachsen, solange kein Verlustsignal auftritt.  
      Dies vermeidet plötzliche Überlastung und sorgt für stabile Durchsatzleistung.
    </p>
    <p>
      Bei Paketverlust wird der Schwellenwert <code>ssthresh</code> auf <code>cwnd / 2</code> gesetzt, um künftiges Wachstum zu bremsen.
    </p>
    <p>
      In TCP Tahoe wird <code>cwnd</code> nach dem Verlust auf 1 MSS zurückgesetzt – ein vollständiger Neustart in Slow Start.  
      TCP Reno hingegen reduziert <code>cwnd</code> ebenfalls, startet aber mit dem neuen <code>ssthresh</code> direkt in die Phase „Fast Recovery“.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      TCPは Slow Start の後、「Congestion Avoidance」フェーズに移行し、ネットワークの輻輳を回避することを目的とします。
    </p>
    <p>
      このフェーズでは cwnd の増加が線形（1 RTT あたり約 1 MSS）となり、成長はより慎重になります。
    </p>
    <p>
      パケット損失が発生した際には、<code>ssthresh</code> が現在の <code>cwnd / 2</code> に設定され、成長を抑える制限が設けられます。
    </p>
    <p>
      TCP Tahoeでは、損失後に<code>cwnd</code>を1 MSSまでリセットし、Slow Start からやり直します。  
      一方、TCP Renoは<code>ssthresh</code>を使って<code>cwnd</code>を減少させた後、Fast Recovery フェーズに入り、通信を完全に止めずに再開します。
    </p>
  </div>
</div>

<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Was ist „Fast Recovery“ in TCP und wann wird es verwendet?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    TCP における「Fast Recovery（高速回復）」は何か？ いつ使われるのか？
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Fast Recovery ist eine spezielle Reaktion in TCP Reno, die aktiviert wird, wenn drei duplizierte ACKs empfangen werden – ein Hinweis auf Paketverlust.
    </p>
    <p>
      TCP halbiert in diesem Fall das aktuelle cwnd (cwnd = cwnd / 2), setzt ssthresh auf denselben Wert und erhöht cwnd sofort um 3 MSS,  
      um den Verlust bereits teilweise zu kompensieren.
    </p>
    <p>
      Nach dem Empfang eines neuen, nicht duplizierten ACKs verlässt TCP die Fast-Recovery-Phase und setzt das Wachstum linear im Stil von Congestion Avoidance fort.
    </p>
    <p>
      Dies unterscheidet sich von TCP Tahoe, wo bei Verlust immer auf cwnd = 1 MSS zurückgesetzt und Slow Start erneut begonnen wird.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      Fast Recovery は TCP Reno における動作で、3つの重複ACKを受信した場合に発動されます。これはパケット損失の軽度な兆候とみなされます。
    </p>
    <p>
      この場合 TCP は cwnd を現在値の半分（cwnd = cwnd / 2）に減少させ、ssthresh も同じ値に設定します。さらに 3 MSS を加算して速やかな再送を行います。
    </p>
    <p>
      その後、新しい非重複ACKを受信すると Fast Recovery フェーズを終了し、Congestion Avoidance に入り線形成長（1 MSS / RTT）を再開します。
    </p>
    <p>
      これは TCP Tahoe の挙動（常に cwnd = 1 MSS に戻って Slow Start に入る）とは対照的です。
    </p>
  </div>
</div>


  </div>
</template>

<script setup>
import image from '@/assets/lecture/lecture03/Figure_0801.png'
</script>
