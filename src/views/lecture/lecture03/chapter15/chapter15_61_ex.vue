<template>
  <div class="container my-4">
    <h3 class="mb-4">UDP-Prüfsumme</h3>
<!-- Thema: Warum ist die UDP-Prüfsumme „naiv“ und welche Grenzen hat sie? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum gilt die UDP-Prüfsumme als „naiv“ und welche Schwächen hat sie?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    UDPのチェックサムはなぜ「ナイーブ（単純）」と言われるのか？その限界とは？
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Die UDP-Prüfsumme verwendet eine einfache 1er-Komplement-Summenbildung, um Datenübertragungen auf Bitfehler zu prüfen.
      Doch dieses Verfahren hat <strong>strukturelle Schwächen</strong>:
    </p>
    <ul>
      <li>Mehrere Bitfehler können sich gegenseitig aufheben → Prüfsumme bleibt gleich</li>
      <li>Die Erkennungsrate liegt unter 100 %, insbesondere bei komplexeren Fehlern</li>
    </ul>
    <p>
      Laut <strong>RFC 1071</strong> erkennt die UDP/TCP-Prüfsumme alle Einzelfehler sicher, aber nur eingeschränkt Mehrbit-Fehler.
      Daher wird sie als <strong>naiv</strong> oder minimaler Schutzmechanismus betrachtet.
    </p>
    <p>
      UDP ist ein leichtgewichtiges Protokoll – die Prüfsumme bietet nur eine „schnelle Plausibilitätsprüfung“.
      Für sicherheitskritische oder zuverlässige Daten wird stattdessen Folgendes verwendet:
    </p>
    <ul>
      <li>TCP (mit Fehlererkennung, Reihenfolge, Wiederholung)</li>
      <li>Stärkere Prüfverfahren in der Anwendungsschicht wie CRC, SHA, MD5</li>
    </ul>
    <p>
      <strong>Vergleich zur CRC:</strong><br />
      Die CRC (Cyclic Redundancy Check) erkennt komplexe Bitmuster, auch Burstfehler, sehr zuverlässig.
    </p>
    <table class="table table-bordered table-sm">
      <thead><tr><th>Verfahren</th><th>Fehlerschutz</th><th>Typische Anwendung</th></tr></thead>
      <tbody>
        <tr><td>UDP-Prüfsumme</td><td>Grundlegend (naiv)</td><td>VoIP, Streaming, DNS</td></tr>
        <tr><td>CRC</td><td>Sehr hoch</td><td>Ethernet, Speichermedien</td></tr>
        <tr><td>SHA/MD5</td><td>Kryptographisch sicher</td><td>Signaturen, Datenintegrität</td></tr>
      </tbody>
    </table>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      UDPのチェックサムは「<strong>1の補数加算</strong>」によってデータの整合性を検証しますが、
      その手法には構造的な限界があります：
    </p>
    <ul>
      <li>複数のビットが同時に反転した場合、それらが<strong>相殺されてしまい</strong>チェックサムが変わらないことがある</li>
      <li>そのため、<strong>すべてのエラーを検出できるわけではない</strong></li>
    </ul>
    <p>
      RFC 1071 によれば、UDP/TCPのチェックサムは「単一ビットエラー」には強いが、
      「複数ビットの誤り」には検出漏れの可能性があるとされています。
    </p>
    <p>
      このような性質から、UDPのチェックサムは<strong>最低限の保護手段</strong>として位置づけられ、
      より高い信頼性が必要な場合は以下の手法が使われます：
    </p>
    <ul>
      <li>TCP（再送・順序保証あり）</li>
      <li>アプリ層での<strong>CRC</strong>や<strong>ハッシュ（SHA, MD5など）</strong>による整合性検証</li>
    </ul>
    <p>
      <strong>CRCとの比較：</strong><br />
      CRC（巡回冗長検査）は、複雑なビットパターンやバーストエラーも検出できる高精度な手法です。
    </p>
    <table class="table table-bordered table-sm">
      <thead><tr><th>方式</th><th>検出能力</th><th>用途例</th></tr></thead>
      <tbody>
        <tr><td>UDPチェックサム</td><td>基本的（ナイーブ）</td><td>VoIP, ストリーミング, DNS</td></tr>
        <tr><td>CRC</td><td>非常に高い</td><td>イーサネット, ディスク</td></tr>
        <tr><td>SHA/MD5</td><td>暗号学的に安全</td><td>署名, 改ざん検出</td></tr>
      </tbody>
    </table>
  </div>
</div>


  </div>
</template>

<script setup>
</script>
