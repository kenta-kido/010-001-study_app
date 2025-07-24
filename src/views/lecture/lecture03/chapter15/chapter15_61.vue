<template>
  <div class="container my-4">
    <h3 class="mb-4">6(a) UDP – Bereich der Prüfsumme</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Über welchen Bereich werden die Prüfsummen im UDP-Header gebildet?
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        UDPヘッダのチェックサムは、どの範囲のデータに対して計算されるか？
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p>
          Die UDP-Prüfsumme wird über folgenden Bereich berechnet:
        </p>
        <ul>
          <li>den gesamten UDP-Header</li>
          <li>die UDP-Nutzdaten</li>
          <li>ein Pseudo-Header aus der IP-Schicht, bestehend aus:</li>
          <ul>
            <li>Quell-IP-Adresse</li>
            <li>Ziel-IP-Adresse</li>
            <li>Protokollnummer (17 für UDP)</li>
            <li>UDP-Länge</li>
          </ul>
        </ul>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p>
          UDPのチェックサムは以下の範囲に対して計算されます：
        </p>
        <ul>
          <li>UDPヘッダ全体</li>
          <li>UDPのデータ部分（ペイロード）</li>
          <li>IP層の擬似ヘッダ（Pseudo Header）</li>
          <ul>
            <li>送信元IPアドレス</li>
            <li>宛先IPアドレス</li>
            <li>プロトコル番号（UDPは17）</li>
            <li>UDP長（ヘッダ＋データ）</li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// Keine Logik erforderlich
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
