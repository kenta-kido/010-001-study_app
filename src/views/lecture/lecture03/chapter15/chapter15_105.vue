<template>
  <div class="container my-4">
    <h3 class="mb-4">10(e) TCP BBR – Vier Zustände (States) und ihre Funktionen</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Nennen und erklären Sie die vier Phasen (States) von TCP BBR. (8P)<br />
        Was ist das Ziel jeder Phase?
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        TCP BBR における 4つのフェーズ（状態）を挙げ、それぞれの目的を説明せよ。（8点）
      </p>
    </div>

    <!-- 解答：ドイツ語 & 日本語 横並び -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <ol>
          <li>
            <strong>Startup:</strong> Aggressive Erhöhung von cwnd/Pacing zur schnellen Schätzung der verfügbaren Bandbreite.
            <br /><em>Ziel:</em> Maximal mögliche Bandbreite schnell erkennen.
          </li>
          <li>
            <strong>Drain:</strong> Reduktion von cwnd, um überschüssige Warteschlangen zu beseitigen.
            <br /><em>Ziel:</em> Netzwerk von Überlastungen bereinigen.
          </li>
          <li>
            <strong>ProbeBW (Probe Bandwidth):</strong> Zyklische Variation der cwnd/Pacing-Rate zur Bandbreitenbeobachtung.
            <br /><em>Ziel:</em> Neue freie Bandbreite erkennen und ausnutzen.
          </li>
          <li>
            <strong>ProbeRTT:</strong> Temporäres Minimieren der Sendeleistung zur Schätzung der echten RT<sub>prop</sub>.
            <br /><em>Ziel:</em> RT<sub>prop</sub> aktualisieren, um lange Warteschlangen zu vermeiden.
          </li>
        </ol>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <ol>
          <li>
            <strong>Startup：</strong> 輻輳ウィンドウと送信レートを急激に増加させ、帯域幅の上限を早期に推定する。
            <br /><em>目的：</em> 利用可能な最大帯域をすばやく見つける。
          </li>
          <li>
            <strong>Drain：</strong> 輻輳ウィンドウを減らして、Startupで生じた余分なキュー（遅延）を解消する。
            <br /><em>目的：</em> キューによる輻輳を除去。
          </li>
          <li>
            <strong>ProbeBW（帯域調査）：</strong> 送信レートを周期的に変化させ、ネットワークの帯域状態をモニタリング。
            <br /><em>目的：</em> 利用可能な帯域の変化を検出し、効率的に利用。
          </li>
          <li>
            <strong>ProbeRTT：</strong> 一時的に送信量を最小化し、RT<sub>prop</sub>（伝搬遅延）の再測定を行う。
            <br /><em>目的：</em> ネットワークの実際の遅延状態を定期的にリセット。
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup>
// Kein JavaScript erforderlich
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
