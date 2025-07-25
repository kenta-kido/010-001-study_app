<template>
  <div class="container my-4">
    <h3 class="mb-4">6. Link-State Routing – Vertiefungsthemen</h3>

    <!-- Thema 6-1 -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Thema 6-1:</strong><br />
        Wie entsteht aus Dijkstra ein Forwarding Table?
      </p>
      <hr />
      <p><strong>テーマ 6-1:</strong><br />
        Dijkstraアルゴリズムから転送表（Forwarding Table）はどのように作られるか？
      </p>
    </div>
    <div>
      <div class="row">
        <div class="col-md-6">
          <h5>Erklärung (Deutsch)</h5>
          <p>
            Dijkstra berechnet die kürzesten Wege zu allen Zielen.  
            Für den Forwarding Table braucht man aber nur die nächste Station (Next Hop).  
            Daher verfolgt man vom Ziel aus rückwärts den Pfad zum Startknoten und notiert den ersten Link.
          </p>
          <p>
            Für jeden Zielknoten wird also ermittelt, über welchen Nachbarn das erste Paket gehen muss.  
            So entsteht die <strong>Next-Hop-Tabelle</strong>, die im Router als Forwarding Table gespeichert wird.
          </p>
        </div>
        <div class="col-md-6">
          <h5>解説（日本語）</h5>
          <p>
            Dijkstraアルゴリズムでは、自ノードからすべての宛先ノードまでの最短経路を計算します。  
            ただし、実際のパケット転送に必要なのは、「次に送るべき隣接ノード（next hop）」だけです。
          </p>
          <p>
            そのため、最短経路を各宛先から逆方向にたどり、出発点（自ノード）に戻る経路上の最初のリンクを記録します。  
            これにより、各宛先に対してどの隣接ノードに送るべきかがわかり、<strong>転送表（Forwarding Table）</strong>が作成されます。
          </p>
        </div>
      </div>
    </div>

    <!-- Thema 6-2 -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Thema 6-2:</strong><br />
        Wie wählt man bei mehreren gleichwertigen Pfaden?
      </p>
    </div>
    <div>
      <hr />
      <p><strong>テーマ 6-2:</strong><br />
        同じコストの複数経路がある場合、どのように選択されるのか？
      </p>
      <div class="row">
        <div class="col-md-6">
          <h5>Erklärung (Deutsch)</h5>
          <p>
            Wenn zwei oder mehr Pfade die gleiche Kosten haben, spricht man von einem „Tie“.  
            Der Dijkstra-Algorithmus selbst trifft dann eine Wahl nach Implementierung:  
            alphabetische Reihenfolge, Portnummer oder Zufall.
          </p>
          <p>
            Diese Wahl beeinflusst den Traffic-Fluss und kann bei kleinen Änderungen große Effekte haben.  
            Manche Systeme nutzen Load Balancing oder Equal-Cost Multipath (ECMP), um mehrere Pfade gleichzeitig zu nutzen.
          </p>
        </div>
        <div class="col-md-6">
          <h5>解説（日本語）</h5>
          <p>
            同じコストの複数の経路が存在する場合、これを「タイ（tie）」と呼びます。  
            Dijkstraアルゴリズム自体は、その中から1つを選択しますが、選び方は実装に依存します。たとえば、名前順・ポート番号順・ランダムなどです。
          </p>
          <p>
            この選択は通信経路に大きな影響を与える可能性があり、場合によってはEqual-Cost Multipath（ECMP）や  
            負荷分散を用いて複数の経路を同時に使用する方法もあります。
          </p>
        </div>
      </div>
    </div>

    <!-- Thema 6-3 -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Thema 6-3:</strong><br />
        Wie effizient ist Dijkstra und wie kann man ihn verbessern?
      </p>
    </div>
    <div>
      <hr />
      <p><strong>テーマ 6-3:</strong><br />
        Dijkstraアルゴリズムの計算効率とその改善方法について
      </p>
      <div class="row">
        <div class="col-md-6">
          <h5>Erklärung (Deutsch)</h5>
          <p>
            Die naive Implementierung von Dijkstra hat eine Komplexität von O(n<sup>2</sup>).  
            Bei vielen Knoten wird das langsam. Nutzt man einen Min-Heap (Priority Queue),  
            kann man die Laufzeit auf O(n log<sub>n</sub> + E log<sub>n</sub>) senken.
          </p>
          <p>
            Moderne Implementierungen (z.&nbsp;B. in OSPF) verwenden binäre Heaps oder Fibonacci-Heaps,  
            um Performance bei großen Netzen zu verbessern.
          </p>
        </div>
        <div class="col-md-6">
          <h5>解説（日本語）</h5>
          <p>
            Dijkstraアルゴリズムの単純な実装では、すべてのノードに対して距離を比較するため、  
            計算量はO(n<sup>2</sup>)となり、大規模ネットワークでは遅くなります。
          </p>
          <p>
            これを改善するために、優先度付きキュー（Min-Heapなど）を使って  
            最小コストのノードを効率的に取り出すことで、O(n log<sub>n</sub> + E log<sub>n</sub>)に高速化できます。
          </p>
          <p>
            実際のOSPFなどでは、バイナリヒープやフィボナッチヒープを使用して処理性能を高めています。
          </p>
        </div>
      </div>
    </div>

    <!-- Thema 6-4 -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Thema 6-4:</strong><br />
        Was ist das Oscillation-Problem bei dynamischen Metriken?
      </p>
    </div>
    <div>
      <hr />
      <p><strong>テーマ 6-4:</strong><br />
        動的メトリックにおけるOscillation（経路の揺れ）問題とは？
      </p>
      <div class="row">
        <div class="col-md-6">
          <h5>Erklärung (Deutsch)</h5>
          <p>
            Wenn sich Metriken wie Delay oder Load schnell ändern,  
            können Router sich gegenseitig beeinflussen und ständig die Routen wechseln.  
            Dies nennt man Oscillation.
          </p>
          <p>
            Beispiel: Zwei Router wechseln immer wieder zwischen zwei Wegen,  
            weil jeder denkt, der andere Weg sei kürzer. Die Routen „springen“ ständig hin und her.
          </p>
          <p>
            Lösung: Hysterese, Schwellenwerte oder Stabilitätsfilter, die nur echte Änderungen akzeptieren.
          </p>
        </div>
        <div class="col-md-6">
          <h5>解説（日本語）</h5>
          <p>
            遅延やトラフィック量などのメトリックが頻繁に変動する環境では、  
            ルーターが経路を頻繁に切り替えすぎて不安定になることがあります。これを「Oscillation（経路の揺れ）」と呼びます。
          </p>
          <p>
            例えば、2台のルーターが「A経由の方が速い」「いやB経由の方が速い」と交互に判断を変えることで、  
            経路が何度も切り替わり、パケットの安定した転送ができなくなります。
          </p>
          <p>
            この問題を防ぐには、一定以上の変化がない限り経路を変えない「ヒステリシス」や、  
            しきい値による制御、安定化フィルターの導入が効果的です。
          </p>
        </div>
      </div>
    </div>
    
        <!-- Thema -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Thema 6-4 (Ergänzung):</strong><br />
        Wie entsteht Routing-Oscillation durch lastabhängige Linkkosten?
      </p>
      <hr />
      <p><strong>テーマ 6-4（補足）:</strong><br />
        輻輳や負荷に応じたリンクコストにより経路が「振動」してしまうのはなぜか？
      </p>
    </div>

    <!-- 図1 -->
    <div class="text-center mb-4">
      <img :src="figure551" alt="Initial routing state (Figure 5.5a)" class="img-fluid rounded border" />
      <p class="text-muted mt-2">Figure 5.5(a): 初期状態 – 全ルーターが反時計回り経路を選択</p>
    </div>

    <!-- Erklärung -->
    <div class="row mb-4">
      <div class="col-md-6">
        <h5>Erklärung (Deutsch)</h5>
        <p>
          Wenn Linkkosten vom Datenverkehr abhängen, können Router bei jeder Ausführung des LS-Algorithmus  
          andere Routen wählen. Das führt zu einem <strong>instabilen Routing-Verhalten</strong>.
        </p>
        <p>
          Im Beispiel sendet jeder Knoten Verkehr zu w. Anfangs ist der Weg gegen den Uhrzeigersinn (counterclockwise) am günstigsten.
        </p>
        <p>
          Doch nachdem y den Algorithmus erneut ausführt, erkennt es, dass der <strong>Uhrzeigersinn-Pfad</strong> kürzer geworden ist  
          (da dort aktuell weniger Last ist). Es wechselt die Route – und bald folgen x und z.
        </p>
        <p>
          Doch beim nächsten Durchlauf ist der neue Weg überlastet, der vorherige Weg wieder günstiger.  
          Alle Router schalten zurück – und der Zyklus beginnt erneut: eine <strong>Routing-Oszillation</strong>.
        </p>
      </div>

      <div class="col-md-6">
        <h5>解説（日本語）</h5>
        <p>
          リンクのコストがそのリンクを流れる<strong>トラフィック量に応じて変化</strong>する場合、  
          経路が「変動」して安定しないことがあります。これが Oscillation（振動）問題です。
        </p>
        <p>
          図5.5(a)では、全ノードが w に向けてパケットを反時計回り経路で送っています。
        </p>
        <p>
          ところが、次のアルゴリズム実行時に y が時計回り経路の方がコストが小さいと判断し、  
          それを選びます。やがて x, z もそれに追随します。
        </p>
        <p>
          しかし、今度はそちらのルートが混雑し、もとのルートの方が空いてくるため、  
          結果的にまた反時計回りに戻ってしまいます。これが経路の「振動」です。
        </p>
      </div>
    </div>

    <!-- 図2 -->
    <div class="text-center mb-4">
      <img :src="figure552" alt="Routing oscillation - clockwise and counterclockwise shift" class="img-fluid rounded border" />
      <p class="text-muted mt-2">Figure 5.5(b)–(c): 経路の切り替え：時計回り → 反時計回りへ</p>
    </div>

    <!-- 対策 -->
    <div class="row mb-4">
      <div class="col-md-6">
        <h5>Erklärung: Gegenmaßnahmen (Deutsch)</h5>
        <p>
          Um solche Oszillationen zu vermeiden, kann man Folgendes tun:
        </p>
        <ul>
          <li>Linkkosten sollten nicht vom aktuellen Traffic abhängen</li>
          <li>Nicht alle Router sollten gleichzeitig den LS-Algorithmus starten</li>
          <li>Man kann zufällige Verzögerungen beim Senden von Link-State-Advertisments einführen</li>
        </ul>
        <p>
          Diese Maßnahmen helfen, das Phänomen der Selbst-Synchronisation zu vermeiden,  
          das durch gleichzeitige Entscheidungen aller Router entsteht.
        </p>
      </div>

      <div class="col-md-6">
        <h5>解説：対策（日本語）</h5>
        <p>
          このような経路振動を防ぐには、以下のような工夫が有効です：
        </p>
        <ul>
          <li>リンクのコストをトラフィック量に依存させない</li>
          <li>すべてのルーターが同時にLSアルゴリズムを実行しない</li>
          <li>各ルーターがリンク状態情報の送信タイミングをランダムにする</li>
        </ul>
        <p>
          特に「自己同期（self-synchronization）」の問題を避けるためには、  
          各ルーターがランダムなタイミングで動作するように設計するのが効果的です。
        </p>
      </div>
    </div>

    <!-- 図3 -->
    <div class="text-center mb-4">
      <img :src="figure553" alt="Final state - randomization helps prevent oscillation" class="img-fluid rounded border" />
      <p class="text-muted mt-2">Figure 5.5(d): 全ルーターが再び時計回り経路を選択 – 振動の繰り返し</p>
    </div>

    <!-- Thema 6-4 (Vertiefung): Gegenmaßnahmen gegen Oscillation -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema 6-4 (Vertiefung):</strong><br />
    Wie lassen sich Routing-Oszillationen im LS-Algorithmus vermeiden?
  </p>
  <hr />
  <p><strong>テーマ 6-4（発展）:</strong><br />
    Link-Stateルーティングで経路振動を防ぐにはどうすればよいか？
  </p>
</div>

<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Routing-Oszillationen entstehen häufig, wenn Linkkosten von aktueller Last abhängen und alle Router  
      gleichzeitig den LS-Algorithmus ausführen. Das führt zu synchronen, instabilen Pfadwechseln.
    </p>
    <p>
      Es gibt mehrere Gegenmaßnahmen:
    </p>
    <ul>
      <li><strong>Feste Linkkosten:</strong> Man sollte Metriken wählen, die nicht direkt vom aktuellen Datenverkehr abhängen.</li>
      <li><strong>Asynchrone Ausführung:</strong> Router sollten den LS-Algorithmus nicht exakt zur selben Zeit ausführen.</li>
      <li><strong>Zufällige Verzögerung:</strong> Jeder Router kann die Aussendung seiner Link-State-Advertisments leicht verzögern (z.B. durch zufällige Timer).</li>
    </ul>
    <p>
      Diese Maßnahmen verhindern <strong>Selbstsynchronisation</strong>, ein bekanntes Phänomen, bei dem sich Router unbeabsichtigt im Takt angleichen und damit alle gleichzeitig reagieren – was Oszillation erst auslöst.
    </p>
  </div>

  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      経路振動（Oscillation）は、リンクコストがトラフィックに応じて変化したり、すべてのルーターが同時に経路計算を実行したりすることで発生します。
    </p>
    <p>
      これを防ぐための対策には、以下のようなものがあります：
    </p>
    <ul>
      <li><strong>静的なリンクコストを使用：</strong> 通信量に応じてリンクコストが変わる設計は避け、一定のメトリック（距離や帯域など）を使う。</li>
      <li><strong>非同期での実行：</strong> 全ルーターが同時にアルゴリズムを走らせるのではなく、タイミングをずらす。</li>
      <li><strong>リンク状態広告の送信タイミングにランダム性を持たせる：</strong> これにより「自己同期」が起きにくくなります。</li>
    </ul>
    <p>
      自己同期とは、各ルーターが偶然にも同じ周期でLSAを送るようになり、  
      ネットワーク全体で一斉にルーティングの更新が走ってしまう現象です。  
      このようなタイミングの一致が経路の振動を引き起こすため、ランダムな遅延を加えることで予防できます。
    </p>
  </div>
</div>

  </div>
</template>

<script setup>
import figure551 from '@/assets/lecture/lecture03/Figure_0308.png'
import figure552 from '@/assets/lecture/lecture03/Figure_0309.png'
import figure553 from '@/assets/lecture/lecture03/Figure_0310.png'
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>