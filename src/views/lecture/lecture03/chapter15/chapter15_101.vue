<template>
  <div class="container my-4">
    <h3 class="mb-4">10(a) TCP BBR – Motivation & Unterschied zu CUBIC</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Wofür steht <strong>BBR</strong> und was ist der Hauptunterschied zwischen BBR und CUBIC? (4P)<br />
        Erklären Sie insbesondere, was BBR anders macht als verlustbasierte Algorithmen wie CUBIC.
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        <strong>BBR</strong> の略語の意味と、CUBIC との主な違いを説明せよ（4点）<br />
        特に、BBR が CUBIC のような「損失ベースのアルゴリズム」と異なる点を述べよ。
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p>
          <strong>BBR</strong> steht für <em>Bottleneck Bandwidth and Round-trip propagation time</em>.
        </p>
        <p>
          Im Gegensatz zu CUBIC ist BBR kein verlustbasierter Algorithmus. Es basiert nicht auf Paketverlust
          zur Erkennung von Überlastung.
        </p>
        <p>
          Stattdessen schätzt BBR kontinuierlich zwei Größen:
        </p>
        <ul>
          <li>die maximale verfügbare Bandbreite (Bottleneck Bandwidth)</li>
          <li>die minimale RTT (Round-Trip Propagation Delay)</li>
        </ul>
        <p>
          Daraus berechnet es eine optimale Sende­rate, um die Leitungsauslastung zu maximieren und gleichzeitig
          Warteschlangen zu vermeiden.
        </p>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p>
          <strong>BBR</strong> は <em>Bottleneck Bandwidth and Round-trip propagation time</em>（ボトルネック帯域幅とRTT）を意味します。
        </p>
        <p>
          CUBIC とは異なり、BBR はパケット損失を輻輳の指標としない「非損失型アルゴリズム」です。
        </p>
        <p>
          BBR は次の2つを継続的に推定します：
        </p>
        <ul>
          <li>利用可能な最大ボトルネック帯域幅</li>
          <li>最小の往復遅延（RTT）</li>
        </ul>
        <p>
          これにより、最適な送信速度を算出し、輻輳やキュー遅延を発生させることなくリンク利用率を最大化します。
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
