<template>
  <div class="container my-4">
    <h3 class="mb-4">5(a) UDP – Zieladresse und Rückantwort</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Ein UDP-Paket wird von einem Client mit Quell-IP und Quell-Port an einen Server gesendet, der durch Ziel-Port identifiziert ist.<br />
        An welche IP-Adresse und welchen Port wird die Nachricht gesendet?<br />
        Und an welche Adresse/Port wird eine eventuelle Antwort zurückgeschickt?
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        UDP パケットが、クライアントの送信元 IP アドレスと送信元ポートから、
        サーバの宛先ポートに送信される。<br />
        このとき、送信される IP アドレスおよびポートは何か？<br />
        また、返信がある場合、それはどの IP アドレスおよびポートに送られるか？
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p>
          Die Nachricht vom Client wird gesendet an:
          <br />
          <strong>Ziel-IP:</strong> IP-Adresse des Servers<br />
          <strong>Ziel-Port:</strong> vom Client spezifizierter Zielport (z.B. 53 bei DNS)
        </p>
        <p>
          Die Antwort vom Server wird zurückgesendet an:
          <br />
          <strong>Ziel-IP:</strong> ursprüngliche Quell-IP (IP des Clients)<br />
          <strong>Ziel-Port:</strong> ursprünglicher Quell-Port (Port des Clients)
        </p>
        <p>
          → Die Zuordnung erfolgt also: Antwort geht an (Client-IP, Client-Port).
        </p>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p>
          クライアントからのメッセージは次の宛先に送信されます：
          <br />
          <strong>宛先IP：</strong> サーバのIPアドレス<br />
          <strong>宛先ポート：</strong> クライアントが指定した宛先ポート（例：DNSなら53番など）
        </p>
        <p>
          サーバからの返信は次の宛先に返されます：
          <br />
          <strong>宛先IP：</strong> 元の送信元IP（クライアントのIP）<br />
          <strong>宛先ポート：</strong> 元の送信元ポート（クライアントのポート）
        </p>
        <p>
          → つまり、返信は (クライアントのIP, ポート) に対して行われます。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Keine Logik nötig
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
