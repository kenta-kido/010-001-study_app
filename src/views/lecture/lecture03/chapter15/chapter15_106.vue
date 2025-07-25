<template>
  <div class="container my-4">
    <h3 class="mb-4">10(f) BBR – Erklärung der Kennzahlen und Betriebspunkte</h3>

    <!-- 問題文 -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong></p>
      <ol>
        <li>Erklären Sie die Kennzahlen 1–4.</li>
        <li>Erklären Sie die Betriebspunkte 1 und 2. Welcher davon ist aus Sicht von TCP BBR anzustreben und warum?</li>
      </ol>
      <hr />
      <p><strong>問題（日本語訳）:</strong></p>
      <ol>
        <li>指標（Kennzahlen）1〜4 の意味を説明せよ。</li>
        <li>動作点（Betriebspunkte）1 と 2 を説明し、どちらが望ましいか理由とともに述べよ。</li>
      </ol>
    </div>

    <!-- 図（1003） -->
    <div class="text-center my-4">
      <img
        :src="imgUrl"
        alt="BBR Kennzahlen und Betriebspunkte"
        class="img-fluid rounded border"
      />
      <p class="text-muted mt-2">Abbildung 1 — Beschriftung der Kennzahlen und Betriebspunkte (Figure_1003)</p>
    </div>

    <!-- 解答 -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p><strong>1) Erklärung der Kennzahlen:</strong></p>
        <ul>
          <li><strong>Kennzahl 1:</strong> <em>BDP</em> (Bandwidth-Delay Product) – Gibt die maximale Datenmenge an, die gleichzeitig im Netzwerk unterwegs sein darf, ohne Warteschlangen zu verursachen.</li>
          <li><strong>Kennzahl 2:</strong> <em>BDP + Puffergröße</em> – Entspricht einer überlasteten Verbindung. Puffer vor dem Engpass sind vollständig gefüllt, was zu hoher Latenz führt.</li>
          <li><strong>Kennzahl 3:</strong> <em>RT<sub>prop</sub></em> – Minimale Round-Trip Time ohne Warteschlangen. Wird als Basis für BDP verwendet.</li>
          <li><strong>Kennzahl 4:</strong> <em>Bottleneck Bandwidth (BtlBw)</em> – Maximale Liefergeschwindigkeit der Verbindung, bestimmt den maximalen Durchsatz.</li>
        </ul>

        <p><strong>2) Erklärung der Betriebspunkte:</strong></p>
        <ul>
          <li><strong>Betriebspunkt 1:</strong> Optimale Ausnutzung der Leitung: inflight ≈ BDP, RTT ≈ RT<sub>prop</sub>. Kein Warteschlangenaufbau – idealer Zustand laut Kleinrock.</li>
          <li><strong>Betriebspunkt 2:</strong> Bufferbloat-Zustand: inflight ≫ BDP, Puffer sind voll, RTT ist stark erhöht – ineffizient trotz hohen Durchsatzes.</li>
        </ul>

        <p><strong>Fazit:</strong> TCP BBR strebt Betriebspunkt 1 an, indem es regelmäßig <em>RT<sub>prop</sub></em> und <em>BtlBw</em> modelliert und sich dynamisch anpasst (siehe Folien 41–42).</p>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p><strong>1）指標（Kennzahlen）の説明：</strong></p>
        <ul>
          <li><strong>指標1：</strong> <em>BDP（帯域遅延積）</em> – 輻輳を起こさずにネットワーク上に存在できる理想的なデータ量。</li>
          <li><strong>指標2：</strong> <em>BDP + バッファサイズ</em> – ネットワークが過負荷になり、バッファが埋まった状態（遅延が大きい）。</li>
          <li><strong>指標3：</strong> <em>RT<sub>prop</sub></em> – 最小RTT。キューが存在しない理想状態での伝搬遅延。</li>
          <li><strong>指標4：</strong> <em>BtlBw（ボトルネック帯域幅）</em> – 回線上で最も遅いリンクが許容する最大スループット。</li>
        </ul>

        <p><strong>2）動作点の説明：</strong></p>
        <ul>
          <li><strong>動作点1：</strong> Kleinrock の理想点。BDPちょうどで送信し、RTTは最小。BBRが目標とする最適点。</li>
          <li><strong>動作点2：</strong> バッファが詰まり、RTTが大幅上昇するBufferbloat状態。スループットは高いが遅延が深刻。</li>
        </ul>

        <p><strong>結論：</strong> BBR は RT<sub>prop</sub> と BtlBw を別々に推定しながら制御を行い、BDP という理想的な送信量に近づくように設計されています。</p>
      </div>
    </div>

    <!-- 図（1004） -->
    <div class="text-center my-4">
      <img
        :src="imgUrl2"
        alt="BBR RTT & delivery rate Modell"
        class="img-fluid rounded border"
      />
      <p class="text-muted mt-2">Abbildung 2 — Modellgrafik: RTT und delivery rate im Verhältnis zur inflight-Menge (Figure_1004)</p>
    </div>

<!-- 解説：Vertiefende Erklärung mit Modellgrafik（図による追加解説） -->
<div class="row mt-4">
  <div class="col-md-6">
    <h5>Vertiefende Erklärung (Deutsch)</h5>

    <p><strong>Was zeigen die beiden Abbildungen?</strong></p>
    <ul>
      <li>
        In der oberen Grafik (RTT): Solange die Menge der im Netzwerk befindlichen Daten (inflight) unter dem BDP liegt, bleibt die RTT konstant bei RT<sub>prop</sub>. Sobald inflight den BDP überschreitet, steigt die RTT linear an – ein Zeichen für entstehende Warteschlangen.
      </li>
      <li>
        In der unteren Grafik (delivery rate): Die delivery rate steigt bis zum BDP linear an. Danach erreicht sie ein Plateau, da die Bottleneck Bandwidth (BtlBw) voll ausgelastet ist.
      </li>
    </ul>

    <p><strong>Warum ist das wichtig?</strong></p>
    <ul>
      <li>
        Der Punkt, an dem inflight = BDP gilt, wird als <strong>optimaler Zustand nach Kleinrock</strong> betrachtet: maximale Auslastung bei minimaler Verzögerung.
      </li>
      <li>
        Klassische TCP-Protokolle (z.B. Reno oder CUBIC) arbeiten meist rechts vom BDP, also im Bereich erhöhter RTT, und reagieren erst bei Paketverlust.
      </li>
      <li>
        TCP BBR hingegen beobachtet sowohl RTT als auch delivery rate aktiv und erkennt frühzeitig, wenn inflight zu groß wird – bevor Verluste auftreten.
      </li>
      <li>
        Da <strong>RT<sub>prop</sub> und BtlBw nie gleichzeitig bestimmt</strong> werden können (siehe Folie 46), führt BBR regelmäßig Messphasen durch: <em>ProbeRTT</em> zur RTT-Erfassung und <em>ProbeBW</em> zur Bandbreitenmessung.
      </li>
    </ul>
    <p><strong>Fazit:</strong> TCP BBR zielt bewusst auf den Bereich nahe BDP, um Bufferbloat zu vermeiden und stabile, latenzarme Verbindungen zu ermöglichen.</p>
  </div>


  <div class="col-md-6">
    <h5>解説（日本語）</h5>

    <p><strong>この2つの図は何を示しているか？</strong></p>
    <ul>
      <li>
        上の図（RTT）では、ネットワーク上の送信済みデータ量（inflight）が BDP 以下であれば、RTT は一定で RT<sub>prop</sub> にとどまります。しかし BDP を超えると、RTT は直線的に上昇し、これはルーター内のバッファにキューが溜まっている兆候です。
      </li>
      <li>
        下の図（delivery rate）では、inflight が BDP に達するまではスループット（delivery rate）は線形に増加します。BDP を超えると、それ以上スループットは上がらず、BtlBw に達したことを意味します。
      </li>
    </ul>

    <p><strong>なぜこれが重要か？</strong></p>
    <ul>
      <li>
        inflight = BDP の点は、<strong>Kleinrock による理想的な通信状態</strong>を意味します。この状態では最大のスループットを達成しつつ、遅延は最小になります。
      </li>
      <li>
        CUBIC や Reno などの古典的な TCP は、BDP を超えた領域で動作し、パケット損失が起きて初めて輻輳を検出します。
      </li>
      <li>
        一方、BBR は RTT や delivery rate を積極的に監視し、損失が起きる前に inflight が過剰であることを察知して調整を行います。
      </li>
      <li>
        また、<strong>RT<sub>prop</sub>とBtlBwは同時に正確に測定できない</strong>ため（スライド46参照）、BBRは定期的に ProbeRTT 状態でRTTを、ProbeBW 状態で帯域幅を測定します。
      </li>
    </ul>

    <p><strong>結論：</strong> BBR は意図的に BDP 付近を目指して制御を行い、Bufferbloat（バッファ詰まり）を防ぎながら、安定した低遅延・高スループット通信を実現します。</p>
  </div>
</div>
<!-- 基本用語の補足 -->
<div class="row mt-4">
  <div class="col-md-6">
    <h5>Zusätzliche Begriffserklärung (Deutsch)</h5>

    <ul>
      <li>
        <strong>Bottleneck Bandwidth (BtlBw):</strong> Die Bandbreite an der engsten Stelle im Netzwerkpfad – also am Flaschenhals. Diese bestimmt die maximale Datenrate, die über den Pfad übertragen werden kann.
      </li>
      <li>
        <strong>Round Trip Propagation Time (RT<sub>prop</sub>):</strong> Die minimale Round Trip Time, gemessen in einem Zustand ohne Warteschlangen oder Verzögerungen durch Verarbeitung. Sie entspricht der reinen Übertragungszeit.
      </li>
      <li>
        <strong>Bandwidth Delay Product (BDP):</strong> BDP = BtlBw × RT<sub>prop</sub>. Diese Kennzahl gibt die maximale Menge an Daten an, die sich gleichzeitig im Netzwerk befinden dürfen, ohne dass Überlastung entsteht. Sie beschreibt den idealen Füllgrad des Netzes.
      </li>
    </ul>
  </div>

  <div class="col-md-6">
    <h5>基本用語の補足（日本語）</h5>

    <ul>
      <li>
        <strong>ボトルネック帯域幅（BtlBw）：</strong> 通信経路上で最も帯域の狭いリンク部分（ボトルネック）の帯域です。ネットワークの最大データ転送速度を決定する要素です。
      </li>
      <li>
        <strong>往復伝搬遅延（RT<sub>prop</sub>）：</strong> ネットワークに輻輳や処理遅延がない場合に観測される最小の往復時間です。物理的距離と媒体の速度によって決まります。
      </li>
      <li>
        <strong>帯域遅延積（BDP = BtlBw × RT<sub>prop</sub>）：</strong> ネットワーク上に同時に存在可能な最大のデータ量です。この値を超えると、キューや輻輳が発生する可能性があります。BBR はこの BDP を基準にして送信制御を行います。
      </li>
    </ul>
  </div>
</div>


<!-- 解説：Vertiefende Erklärung mit Modellgrafik（図による追加解説） -->
<div class="row mt-4">
  <div class="col-md-6">
<p><strong>Warum ist das wichtig?</strong></p>
<ul>
  <li>
    Der Punkt, an dem inflight = BDP gilt, wird als <strong>optimaler Zustand nach Kleinrock</strong> betrachtet: maximale Ausnutzung der Netzwerkkapazität bei minimaler Verzögerung. Es entsteht keine Überlast und keine Warteschlange – ideal für Effizienz und Interaktivität.
  </li>
  <li>
    Klassische TCP-Protokolle (z.B. Reno oder CUBIC) operieren meist <strong>rechts vom BDP</strong>, d.h. sie erhöhen die Sendemenge weiter, bis es zu Paketverlusten kommt. Erst dann reduzieren sie die Sende­rate – ein reaktives Verhalten mit hoher Verzögerung und Instabilität.
  </li>
  <li>
    <strong>TCP BBR hingegen verfolgt einen präventiven Ansatz</strong>: Es erkennt Überlast nicht erst bei Verlust, sondern schon am Anstieg der RTT. Sobald die RTT sich von RT<sub>prop</sub> entfernt, beginnt BBR seine Sende­rate zu stabilisieren – noch bevor Warteschlangen entstehen.
  </li>
  <li>
    <strong>Wichtig:</strong> RT<sub>prop</sub> und BtlBw können <em>nicht gleichzeitig</em> exakt bestimmt werden. Denn um RT<sub>prop</sub> zu messen, muss das Netzwerk leer sein; um BtlBw zu messen, muss das Netzwerk voll ausgelastet sein. Deshalb führt BBR regelmäßig <em>ProbeRTT</em>- und <em>ProbeBW</em>-Phasen durch, um beide Werte dynamisch aktuell zu halten.
  </li>
</ul>
  </div>


  <div class="col-md-6">
<p><strong>なぜこれが重要か？</strong></p>
<ul>
  <li>
    inflight = BDP の点は、<strong>Kleinrock による最適状態</strong>とされます。ネットワークの帯域を最大限に使いながら、遅延を最小限に抑えられる理想的な送信状態であり、輻輳や損失が発生しない効率的な通信を実現できます。
  </li>
  <li>
    従来の TCP（例：Reno や CUBIC）は、<strong>BDP を超えた領域で動作</strong>し、バッファが詰まり始めた後に初めてパケット損失を通じて輻輳を認識します。この「損失後に対応する」設計は、遅延が大きくなる原因であり、特にリアルタイム通信には不向きです。
  </li>
  <li>
    一方で <strong>TCP BBR は予防的なアプローチ</strong>を取ります。RTT が RT<sub>prop</sub> から上昇し始めた段階で、「バッファが埋まりつつある」と判断して送信レートの調整を始めます。これにより、損失や輻輳が発生する前に制御を行えます。
  </li>
  <li>
    <strong>重要なのは：</strong> RT<sub>prop</sub>（最小遅延）と BtlBw（最大帯域幅）は、<em>同時に測定することができません</em>。RT<sub>prop</sub> はネットワークが空のときに、BtlBw は帯域が飽和しているときにしか正確に推定できないためです。BBR はこの問題に対処するため、定期的に <em>ProbeRTT</em>（RTT計測）と <em>ProbeBW</em>（帯域推定）を繰り返して、それぞれの値を継続的に更新します。
  </li>
</ul>
  </div>
</div>


<div class="row mt-4">
  <div class="col-md-6">
  <li>
  <strong>Wichtig:</strong> <code>RT<sub>prop</sub></code> (minimale Verzögerung) und <code>BtlBw</code> (maximale Bottleneck-Bandbreite) können <em>nicht gleichzeitig</em> zuverlässig gemessen werden. Der Grund ist, dass die Voraussetzungen für die Erfassung dieser beiden Größen sich widersprechen:
  <ul>
    <li>
      Um <strong>RT<sub>prop</sub></strong> zu messen, muss das Netzwerk <strong>frei von Warteschlangen</strong> sein – also möglichst keine zusätzlichen Verzögerungen enthalten.
    </li>
    <li>
      Um <strong>BtlBw</strong> zu messen, muss das Netzwerk <strong>voll ausgelastet</strong> sein – d.h. es muss ein kontinuierlicher Datenfluss stattfinden, damit die delivery rate die wahre Kapazität widerspiegelt.
    </li>
  </ul>
  Diese zwei Zustände (leer vs. voll) schließen sich aus – man kann sie nicht gleichzeitig herstellen. <br />
  Deshalb hat BBR einen Mechanismus entwickelt, der diese beiden Bedingungen <strong>zeitlich getrennt</strong> behandelt:
  <ul>
    <li>
      In der <em>ProbeRTT</em>-Phase wird die Sende­rate drastisch reduziert (z.B. auf vier kleine Pakete), um die tatsächliche RT<sub>prop</sub> ohne Staus zu ermitteln.
    </li>
    <li>
      In der <em>ProbeBW</em>-Phase wird die delivery rate aktiv variiert, um ein realistisches Maximum für die Bottleneck-Bandbreite zu finden.
    </li>
  </ul>
  So gelingt es BBR, beide Messgrößen getrennt, aber regelmäßig und aktuell zu halten.
</li>
  </div>
  <div class="col-md-6">
<li>
  <strong>重要なのは：</strong> <code>RT<sub>prop</sub></code>（最小遅延）と <code>BtlBw</code>（ボトルネック帯域幅）は、<em>同時に正確に測定することができません</em>。これは、それぞれの測定に必要なネットワーク状態が相反するためです：
  <ul>
    <li>
      <strong>RT<sub>prop</sub></strong> を正確に測るには、ネットワークが<strong>混雑していない状態（キューがゼロ）</strong>でなければなりません。つまり、パケットが一切待たされることなく最速で往復する必要があります。
    </li>
    <li>
      一方で <strong>BtlBw</strong> を測定するには、ネットワークが<strong>十分に負荷されている状態</strong>である必要があります。送信レートを高め、ボトルネックを飽和させることで初めて、実際の最大delivery rateを観測できます。
    </li>
  </ul>
  この2つの条件（ネットワークが空 vs. ネットワークが満杯）は、同時に成立することがないため、<strong>1つの瞬間に両方を測ることは原理的に不可能</strong>なのです。<br />
  この課題を解決するために、BBRは以下の2つの状態を設けて、<strong>時間的に分けて交互に測定</strong>します：
  <ul>
    <li>
      <em>ProbeRTT</em> 状態では、送信量を一時的に極端に減らし（通常は4パケット程度）、キューが完全に消えた状態で RT<sub>prop</sub> を再計測します。
    </li>
    <li>
      <em>ProbeBW</em> 状態では、送信レートを周期的に増減させることで、ネットワークを適度に負荷しながら、delivery rate を最大化し、BtlBw を更新します。
    </li>
  </ul>
  このようにして BBR は、2つの重要なパラメータを継続的に・動的に推定しながら、理想的な送信状態（BDP）を維持できるように設計されています。
</li>

  </div>
</div>

  </div>
</template>

<script setup>
import imgUrl from '@/assets/lecture/lecture03/Figure_1003.png'; // Kennzahlen & Betriebspunkte
import imgUrl2 from '@/assets/lecture/lecture03/Figure_1004.png'; // RTT & Delivery Rate Diagramm
</script>
