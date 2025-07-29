<template>
  <div class="container my-4">
    <h3 class="mb-4">AIMD</h3>
<!-- Thema: Bedeutung des Congestion Window (cwnd) in TCP -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Bedeutung und Funktion des Congestion Window (cwnd) in TCP
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    TCPにおけるcwnd（輻輳ウィンドウ）の役割と仕組み
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Das <strong>Congestion Window</strong> (cwnd) ist ein zentrales Steuerinstrument im TCP-Protokoll, um die Datenrate
      dem aktuellen Zustand des Netzwerks anzupassen. <span style="color: red;">Es begrenzt die maximale Anzahl an Bytes, die ein Sender
      ohne Bestätigung (ACK) senden darf.</span>
    </p>
    <p>
      cwnd ist ein dynamischer Wert, der sich je nach beobachtetem Netzwerkverhalten verändert. 
      <br/><span style="color: red;">Bei stabilen Bedingungen wird es erhöht (z.&nbsp;B. durch <em>slow start</em> oder <em>additive increase</em>)</span>, 
      bei Paketverlust hingegen reduziert (z.&nbsp;B. durch <em>multiplicative decrease</em>).
    </p>
    <p>
      cwnd funktioniert immer in Kombination mit dem <strong>empfangsseitigen Fenster</strong> (rwnd), um die effektive
      Sendegrenze zu bestimmen: <code>send window = min(cwnd, rwnd)</code>.
    </p>
    <p>
      Ziel ist es, Netzwerküberlastung zu vermeiden, ohne Bandbreite ungenutzt zu lassen. 
      <span style="color: red;">cwnd reagiert also auf implizite Rückmeldungen aus dem Netz, wie Verzögerung oder Paketverlust.</span>
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      <strong>cwnd（輻輳ウィンドウ）</strong>は、TCPにおいてネットワークの状態に応じて送信量を調整するための
      重要な制御パラメータです。これは、<span style="color: red;"><strong>送信側がACKを受け取るまでに送信してよいデータの最大量（バイト単位）</strong>を制限するもの</span>です。
    </p>
    <p>
      cwndの値は、<span style="color: red;">ネットワークの状態（パケットロスや遅延）に応じて動的に変化</span>します。
      <br/>通常は、<span style="color: red;">ネットワークが安定していれば徐々に増加し（例：スロースタートや加算的増加）</span>、
      混雑が発生すると急激に減少します（例：乗算的減少）。
    </p>
    <p>
      さらに、受信側が指定する受信ウィンドウ（rwnd）と合わせて、実際に送信可能な範囲は
      <code>min(cwnd, rwnd)</code> によって決定されます。
    </p>
    <p>
      このようにして、TCPは輻輳の回避と帯域の効率的利用を両立させようとします。
      <span style="color: red;">cwndは明示的な信号ではなく、ネットワークのふるまい（遅延・パケット損失など）から
      暗黙的に輻輳を検出して調整されます。</span>
    </p>
  </div>
</div>


  </div>
</template>

<script setup>
</script>
