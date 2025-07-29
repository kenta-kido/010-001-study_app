<template>
  <div class="container my-4">
    <h2 class="mb-4">10 TCP BBR – Überblick und Grundlagen / TCP BBR の概要と基礎</h2>

    <!-- BBR概要 -->
    <div class="row">
      <div class="col-md-6">
        <h4>BBR – Übersicht (Deutsch)</h4>
        <ul>
          <li><strong>BBR</strong> steht für <em>Bottleneck Bandwidth and Round-trip propagation time</em> und ist ein moderner TCP-Staukontrollalgorithmus, entwickelt von Google.</li>
          <li>Klassische Algorithmen wie TCP Reno oder CUBIC reagieren auf Paketverluste. BBR hingegen <span style="color: red;">schätzt Bandbreite und Latenz, um Überlastung proaktiv zu vermeiden.</span></li>
        </ul>
      </div>
      <div class="col-md-6">
        <h4>BBRの概要（日本語）</h4>
        <ul>
          <li><strong>BBR</strong>（<span style="color: red;">Bottleneck Bandwidth and Round-trip propagation time</span>）は、Google が開発したTCPの新しい輻輳制御アルゴリズムです。</li>
          <li>従来のRenoやCUBICがパケット損失に基づく制御を行うのに対し、<span style="color: red;">BBRは「帯域幅」と「遅延」の推定に基づき</span>、<strong style="color: red;">損失の前に輻輳を回避</strong>するよう設計されています。</li>
        </ul>
      </div>
    </div>

    <!-- 背景と問題 -->
    <div class="row mt-4">
      <div class="col-md-6">
        <h5>🚩 Motivation und Probleme klassischer Algorithmen</h5>
        <ul>
          <li>Verlustbasierte Kontrolle (z.B. CUBIC) führt oft zu <strong>Bufferbloat</strong>: volle Puffer → hohe RTT</li>
          <li>BBR adressiert dies durch direkte Kontrolle der Auslastung, nicht durch Verlust</li>
        </ul>
      </div>
      <div class="col-md-6">
        <h5>🚩 背景と問題点</h5>
        <ul>
          <li>CUBICなど損失ベースの制御では、ルータのバッファが溢れて<strong>Bufferbloat</strong>が発生し、RTTが大きくなります。</li>
          <li>BBRはこの問題を、パケット損失ではなくネットワーク利用率と遅延の観測を通して解決しようとします。</li>
        </ul>
      </div>
    </div>

    <!-- 用語 -->
    <div class="row mt-4">
      <div class="col-md-6">
        <h5>📌 Grundbegriffe (Folie 40)</h5>
        <ul>
          <li><strong>BtlBw:</strong> Bottleneck Bandwidth – maximale Rate am Engpass</li>
          <li><strong>RT<sub>prop</sub>:</strong> <span style="color: red;">minimale RTT (nur Übertragungszeit)</span></li>
          <li><strong>BDP:</strong> = BtlBw × RT<sub>prop</sub>: <span style="color: red;">Datenmenge, die sich gleichzeitig im Netzwerk befinden kann</span></li>
        </ul>
      </div>
      <div class="col-md-6">
        <h5>📌 用語（スライド40）</h5>
        <ul>
          <li><strong>BtlBw：</strong> ボトルネック帯域幅 – 最も細いリンクの最大送信能力</li>
          <li><strong>RT<sub>prop</sub>：</strong> 伝搬遅延のみを含む最小RTT</li>
          <li><strong>BDP：</strong> = BtlBw × RT<sub>prop</sub>：ネットワーク内で滞留可能なデータ量</li>
        </ul>
      </div>
    </div>

    <!-- Kleinrock理論 -->
    <div class="row mt-4">
      <div class="col-md-6">
        <h5>📊 Theorie: Kleinrock (Folie 41–42)</h5>
        <ul>
          <li>Kleinrock zeigte: BDP ist optimal für maximalen Durchsatz bei minimaler Verzögerung</li>
          <li>Jaffe: Algorithmen können diesen Punkt nicht exakt erreichen → Ursachen für hohe RTT sind uneindeutig</li>
        </ul>
      </div>
      <div class="col-md-6">
        <h5>📊 Kleinrock の理論（スライド41–42）</h5>
        <ul>
          <li>Kleinrock によれば、BDP は「最大スループット・最小遅延」を両立する最適な動作点</li>
          <li>しかし Jaffe は、RTT増加の原因が多様で曖昧なため、その点に収束するアルゴリズムは作れないと示しました</li>
        </ul>
      </div>
    </div>

    <!-- BBRの状態 -->
    <div class="row mt-4">
      <div class="col-md-6">
        <h5>⚙️ Steuerung durch Zustände (Folie 48–50)</h5>
        <ul>
          <li><strong>Startup:</strong> schätzt Bandbreite durch schnelles Senden</li>
          <li><strong>Drain:</strong> reduziert Rate, leert Puffer</li>
          <li><strong>ProbeBW:</strong> variiert Rate zur BtlBw-Schätzung</li>
          <li><strong>ProbeRTT:</strong> minimales Senden zur RT<sub>prop</sub>-Aktualisierung</li>
        </ul>
      </div>
      <div class="col-md-6">
        <h5>⚙️ BBRの4つの状態（スライド48–50）</h5>
        <ul>
          <li><strong>Startup：</strong> 急速に送信量を増やし、帯域推定</li>
          <li><strong>Drain：</strong> バッファを解放</li>
          <li><strong>ProbeBW：</strong> スループットを変化させてBtlBw推定</li>
          <li><strong>ProbeRTT：</strong> RTT再計測のため一時的に送信を抑制</li>
        </ul>
      </div>
    </div>

    <!-- 動的適応 -->
    <div class="row mt-4">
      <div class="col-md-6">
        <h5>📉 Dynamisches Verhalten (Folie 45–47)</h5>
        <ul>
          <li>BBR misst BtlBw und RT<sub>prop</sub> getrennt – nicht gleichzeitig</li>
          <li>→ Wechselt periodisch zwischen ProbeRTT und ProbeBW</li>
        </ul>
      </div>
      <div class="col-md-6">
        <h5>📉 動的挙動（スライド45–47）</h5>
        <ul>
          <li>BBRはRT<sub>prop</sub>とBtlBwを<strong>同時には測れない</strong></li>
          <li>そのため、ProbeRTTとProbeBWのフェーズを交互に切り替えながら推定します</li>
        </ul>
      </div>
    </div>

    <!-- 比較 -->
    <div class="row mt-4">
      <div class="col-md-6">
        <h5>📈 Vergleich zu CUBIC (Folie 51–52)</h5>
        <ul>
          <li>BBR bleibt stabil bei Paketverlust</li>
          <li>Verursacht deutlich geringere RTT</li>
        </ul>
      </div>
      <div class="col-md-6">
        <h5>📈 CUBICとの比較（スライド51–52）</h5>
        <ul>
          <li>BBRはパケット損失の影響を受けず安定</li>
          <li>RTTが小さく保たれる（キュー発生を防ぐため）</li>
        </ul>
      </div>
    </div>

    <!-- Fairnessと進化 -->
    <div class="row mt-4">
      <div class="col-md-6">
        <h5>⚖️ Fairness & Entwicklung (Folie 39, 53)</h5>
        <ul>
          <li>BBR v2: ECN-Unterstützung</li>
          <li>BBR v3: nutzt maschinelles Lernen</li>
          <li>Neue Flows können sich schnell fair einpendeln</li>
        </ul>
      </div>
      <div class="col-md-6">
        <h5>⚖️ フェアネスと進化（スライド39, 53）</h5>
        <ul>
          <li>BBR v2：ECN（明示的輻輳通知）に対応</li>
          <li>BBR v3：機械学習による動的適応</li>
          <li>新しいフローも短時間で公平な帯域を得られる</li>
        </ul>
      </div>
    </div>

    <!-- まとめ -->
    <div class="row mt-4">
      <div class="col-md-6">
        <h5>✅ Zusammenfassung (Folie 54)</h5>
        <ul>
          <li>Reagiert auf Überlast – nicht auf Verluste</li>
          <li>Hoher Durchsatz und niedrige RTT</li>
          <li>Vermeidet Bufferbloat</li>
        </ul>
      </div>
      <div class="col-md-6">
        <h5>✅ まとめ（スライド54）</h5>
        <ul>
          <li>損失ではなく「負荷」に基づく制御</li>
          <li>高スループット・低遅延を両立</li>
          <li>Bufferbloatを根本的に防止</li>
        </ul>
      </div>
    </div>


<div class="text-center my-4">
  <img
    :src="imgUrl1005"
    alt="BBR reacting to changes in BtlBw"
    class="img-fluid rounded border"
  />
  <p class="text-muted mt-2">
    <strong>Figure 1005 –</strong> Dynamische Anpassung von BBR bei Verdopplung (links) bzw. Halbierung (rechts) der verfügbaren Bandbreite
  </p>
  <p class="text-muted">
    図1005 – 利用可能帯域幅が倍増（左）または半減（右）したときのBBRの適応挙動
  </p>
</div>
<div class="row mt-5">
  <div class="col-md-6">
    <h5>Vertiefende Erklärung – BBR passt sich dynamisch an</h5>

    <p>
      Diese zwei Diagramme zeigen, wie <strong>BBR auf Änderungen der Bottleneck-Bandwidth (BtlBw)</strong> reagiert:
    </p>

    <ul>
      <li>
        <strong>Links:</strong> Die verfügbare BtlBw verdoppelt sich von 10 Mbps auf 20 Mbps. BBR erkennt dies innerhalb von drei ProbeBW-Zyklen und erhöht sukzessive die inflight-Menge. Die RTT bleibt zunächst stabil, bis die Puffer wieder gefüllt werden.
      </li>
      <li>
        <strong>Rechts:</strong> Die BtlBw halbiert sich plötzlich von 20 Mbps auf 10 Mbps. BBR erkennt dies durch steigende RTT und begrenzt inflight-Daten durch Timeout. Die Sende­rate wird entsprechend reduziert, bis ein neues Gleichgewicht entsteht.
      </li>
    </ul>

    <p>
      BBR <strong>passt sich nicht sofort</strong> an, sondern beobachtet delivery rate und RTT über mehrere Zyklen, um <em>Trend statt Ausreißer</em> zu erkennen.
    </p>

    <p><strong>Fazit:</strong> BBR ist in der Lage, auf abrupte Veränderungen der Netzwerkbedingungen <strong>reaktiv und stabil</strong> zu reagieren, ohne auf Paketverluste zu warten.</p>
  </div>

  <div class="col-md-6">
    <h5>詳細な解説 – BBRの動的適応</h5>

    <p>
      この2つのグラフは、<strong>BBRがボトルネック帯域幅（BtlBw）の変化にどのように適応するか</strong>を示しています：
    </p>

    <ul>
      <li>
        <strong>左図：</strong> BtlBw が10 Mbpsから20 Mbpsに<strong>倍増</strong>した例。BBRはこれを約3サイクルのProbeBWを通じて徐々に検出し、送信中のデータ量（inflight）を増加させていきます。RTTは初期には安定していますが、バッファが再度埋まると少しずつ上昇します。
      </li>
      <li>
        <strong>右図：</strong> BtlBw が20 Mbpsから10 Mbpsに<strong>半減</strong>した例。BBRはRTTの急上昇やtimeoutを通じて過去の推定値が過大であったことに気づき、送信レートを低下させて適正なinflight量に収束させていきます。
      </li>
    </ul>

    <p>
      BBR はこうした変化に<strong>即座には反応せず</strong>、複数回の観測を通じて変化が一時的なものか恒常的なものかを見極めます。
    </p>

    <p><strong>結論：</strong> BBRは、ネットワーク状況の変動に対して、パケット損失を待たずに<strong>安定かつ柔軟に適応</strong>できる設計になっています。</p>
  </div>
</div>


  </div>
</template>
<script setup>
import imgUrl1005 from '@/assets/lecture/lecture03/Figure_1005.png';
</script>

