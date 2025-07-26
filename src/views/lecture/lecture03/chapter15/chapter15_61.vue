<template>
  <div class="container my-4">
    <h3 class="mb-4">6(a) UDP – Bereich der Prüfsumme im Header</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Über welchen Bereich werden die Prüfsummen im UDP-Header angegeben?<br />
        Was genau wird durch die Prüfsumme abgedeckt, und warum ist das nötig?
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        UDPヘッダのチェックサムは、どの範囲を対象として指定されているか？<br />
        どのような部分に対して計算され、なぜそれが必要なのか？
      </p>
    </div>


    <!-- 解答：ドイツ語 & 日本語 -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p>
          Die <strong>UDP-Prüfsumme</strong> ist ein Feld im UDP-Header, das <em>über einen bestimmten Datenbereich berechnet</em> wird und dann im Header angegeben wird.
        </p>
        <p>
          Der berechnete Wert bezieht sich nicht nur auf das UDP-Segment selbst, sondern auch auf wichtige Informationen aus der IP-Schicht. Dadurch wird sichergestellt, dass das Paket korrekt beim Empfänger ankommt.
        </p>
        <p>Der Prüfsummenbereich umfasst:</p>
        <ul>
          <li>den gesamten UDP-Header (8 Byte)</li>
          <li>die UDP-Nutzdaten (Application Data)</li>
          <li>einen sogenannten <strong>Pseudo-Header</strong> aus der IP-Schicht:</li>
          <ul>
            <li>Quell-IP-Adresse</li>
            <li>Ziel-IP-Adresse</li>
            <li>Protokollnummer (17 für UDP)</li>
            <li>Länge des UDP-Segments</li>
          </ul>
        </ul>
        <p>
          Diese Konstruktion erhöht die <strong>Zuverlässigkeit</strong> in der Datenübertragung, obwohl UDP selbst verbindungslos ist.
        </p>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p>
          <strong>UDPのチェックサム</strong>は、ヘッダ内にある16ビットのフィールドで、<em>特定の範囲に対して計算された値</em>が記録されています。
        </p>
        <p>
          このチェックサムによって、UDPセグメントの転送中にデータの破損や改ざんがないかを受信側が検出できます。
        </p>
        <p>チェックサムが計算される対象は以下の通りです：</p>
        <ul>
          <li>UDPヘッダ全体（8バイト）</li>
          <li>UDPデータ（アプリケーションからのメッセージ）</li>
          <li>IP層の「擬似ヘッダ（Pseudo Header）」：</li>
          <ul>
            <li>送信元IPアドレス</li>
            <li>宛先IPアドレス</li>
            <li>プロトコル番号（UDPは17）</li>
            <li>UDPの全長（ヘッダ＋データ）</li>
          </ul>
        </ul>
        <p>
          このようにして、UDP単体では補えないIP層との整合性も含めて、<strong>パケットの完全性を確認</strong>する仕組みとなっています。
        </p>
      </div>
    </div>
    
    <!-- 図 -->
    <div class="text-center my-4">
      <img
        :src="imgUrl"
        alt="UDP-Pseudo-Header"
        class="img-fluid rounded border"
      />
      <p class="text-muted mt-2">Abbildung: UDP-Pseudo-Header</p>
    </div>


    <!-- 中タイトル -->
<div class="row mb-4">
  <div class="col-12">
    <p class="fw-bold fs-5" style="color: #004085;">
      UDPチェックサムはオプション（ただしIPv6では必須）<br />
      UDP-Prüfsumme ist optional (aber bei IPv6 verpflichtend)
    </p>
  </div>
</div>

<!-- 解説：Deutsch & 日本語 -->
<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Im UDP-Protokoll ist die Prüfsumme unter IPv4 offiziell <strong>optional</strong>. Das bedeutet:
    </p>
    <ul>
      <li>Wenn die Prüfsumme den Wert <code>0x0000</code> hat, wird sie ignoriert.</li>
      <li>Das UDP-Paket wird trotzdem akzeptiert, ohne Validierung.</li>
    </ul>
    <p>
      Bei IPv6 hingegen ist die UDP-Prüfsumme <strong>verpflichtend</strong> und darf <strong>niemals 0</strong> sein.
      Andernfalls wird das Paket vom Empfänger verworfen.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      UDPプロトコルでは、IPv4環境下において<strong>チェックサムは任意</strong>です。つまり：
    </p>
    <ul>
      <li>チェックサムが <code>0x0000</code> の場合、チェック処理は行われません。</li>
      <li>そのパケットは、内容が壊れていても<strong>そのまま受け取られる</strong>ことがあります。</li>
    </ul>
    <p>
      しかし<strong>IPv6ではチェックサムは必須</strong>で、値が0であることは許されていません。<br />
      そのようなUDPパケットは<strong>破棄されます</strong>。
    </p>
  </div>
</div>

<!-- 中タイトル -->
<div class="row mb-4">
  <div class="col-12">
    <p class="fw-bold fs-5" style="color: #004085;">
      計算結果が全て0のときの置き換え規則（0xFFFF）<br />
      Regel für Prüfsumme = 0: Ersetzung durch 0xFFFF
    </p>
  </div>
</div>

<!-- 解説：Deutsch & 日本語 -->
<div class="row mt-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Wenn die Prüfsumme nach der Berechnung <code>0x0000</code> ergibt, darf sie nicht direkt im UDP-Header eingetragen werden.
      Denn <code>0x0000</code> steht für „<em>keine Prüfsumme verwendet</em>“.
    </p>
    <p>
      Um Verwechslung zu vermeiden, wird stattdessen <strong><code>0xFFFF</code></strong> eingetragen.
      Dies ist laut <strong>RFC 768</strong> die offizielle Regel.
    </p>
    <p>
      Bei der Validierung wird die Prüfsumme wieder hinzuaddiert. Falls das ursprüngliche Datenwort <code>0xFFFF</code> war, ergibt sich durch
      <code>0xFFFF + 0xFFFF = 0x1FFFE</code> → mit Carry-Rückführung wieder <code>0xFFFF</code>.
      Das Paket gilt somit als korrekt.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      UDPチェックサムの計算結果が <code>0x0000</code>（全ビット0）になることがあります。
      しかしこの値は「チェックサム未使用」という意味にとられてしまうため、
      <strong>そのままでは使えません。</strong>
    </p>
    <p>
      そのため、計算結果が0x0000であっても、
      <strong>代わりに<code>0xFFFF</code>（全ビット1）をUDPヘッダに記載する</strong>というルールが定められています（RFC 768）。
    </p>
    <p>
      受信側ではチェック時に <code>0xFFFF + 0xFFFF = 0x1FFFE</code> のようになっても、
      キャリービットを加算（折り返し）して <code>0xFFFF</code> になるので、<strong>正常と判断されます</strong>。
    </p>
  </div>
</div>



  </div>
</template>

<script setup>
import imgUrl from '@/assets/lecture/lecture03/Figure_0602.png'
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
