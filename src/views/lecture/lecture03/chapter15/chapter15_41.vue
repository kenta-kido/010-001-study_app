<template>
  <div class="container my-4">
    <h3 class="mb-4">4. Subnetting (6P)</h3>

    <!-- 問題文（Deutsch + 日本語） -->
    <div class="border rounded p-3 bg-light mb-4">
      <p><strong>Aufgabe:</strong><br />
        Erstellen Sie Subnetze für das im Bild gezeigte Netzwerk. Alle Subnetze sollen im Segment <code>213.168.110/23</code> liegen. Die Subnetze B und C sollen dabei wenigstens 120 Adressen besitzen. Die Subnetze D, E und F müssen je mindestens zwei Adressen besitzen. Geben Sie die Subnetze im Format <em>a.b.c.d/x</em> oder <em>a.b.c.d/x − e.f.g.h/y</em> (Subtraktion) an.
      </p>
      <hr />
      <p><strong>問題:</strong><br />
        図に示されたネットワークに対して、サブネットを作成してください。すべてのサブネットは <code>213.168.110/23</code> セグメント内である必要があります。サブネットBとCには少なくとも120個のアドレスが必要です。サブネットD、E、Fはそれぞれ少なくとも2つのアドレスを持つ必要があります。サブネットの表記は <em>a.b.c.d/x</em> または <em>a.b.c.d/x − e.f.g.h/y</em>（差分）形式で記述してください。
      </p>
    </div>

    <!-- 図 -->
    <div class="text-center my-4">
      <img
        :src="imgUrl"
        alt="Netzwerk-Topologie für Subnetting"
        class="img-fluid rounded border"
      />
      <p class="text-muted mt-2">Abbildung 4 — Netzwerk-Topologie zur Subnetting-Aufgabe (Figure_0401)</p>
    </div>

    <!-- 解答ブロック -->
    <div class="row">
      <div class="col-md-6">
        <h5>Antwort (Deutsch)</h5>
        <p>
          Der gesamte Adressbereich <code>213.168.110.0/23</code> umfasst 512 IP-Adressen (davon 510 nutzbar).<br />
          Für B und C benötigen wir je mindestens 120 Adressen → /25 (128 Adressen, 126 nutzbar) passt.
        </p>
        <ul>
          <li>B: <code>213.168.110.0/25</code></li>
          <li>C: <code>213.168.110.128/25</code></li>
        </ul>
        <p>
          Für die Punkt-zu-Punkt-Verbindungen (D, E, F) reichen /30-Netze mit 4 Adressen (2 nutzbar):
        </p>
        <ul>
          <li>D: <code>213.168.111.0/30</code></li>
          <li>E: <code>213.168.111.4/30</code></li>
          <li>F: <code>213.168.111.8/30</code></li>
        </ul>
        <p>
          Für das Subnetz A, das den Router R1 und zwei Hosts verbindet, werden mindestens 3 nutzbare Adressen benötigt.<br />
          Daher eignet sich ein /28-Subnetz (16 Adressen, 14 nutzbar).
        </p>
        <ul>
          <li>A: <code>213.168.111.16/28</code></li>
        </ul>
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p>
          全体のアドレス空間 <code>213.168.110.0/23</code> は、512個のIPアドレス（510個が使用可能）を含みます。<br />
          BとCには最低でも120アドレスが必要なので、/25（128アドレス、126利用可能）を割り当てます。
        </p>
        <ul>
          <li>B：<code>213.168.110.0/25</code></li>
          <li>C：<code>213.168.110.128/25</code></li>
        </ul>
        <p>
          D、E、Fはルーター間のポイント・ツー・ポイント接続であり、2台のホストがあれば十分なので、/30（4アドレス、2利用可能）を使います。
        </p>
        <ul>
          <li>D：<code>213.168.111.0/30</code></li>
          <li>E：<code>213.168.111.4/30</code></li>
          <li>F：<code>213.168.111.8/30</code></li>
        </ul>
        <p>
          AはルーターR1と2台のPCからなるネットワークなので、少なくとも3つのホストが必要です。<br />
          そのため、14ホストが使える /28（16アドレス）を割り当てるのが妥当です。
        </p>
        <ul>
          <li>A：<code>213.168.111.16/28</code></li>
        </ul>
      </div>
    </div>

    <!-- 解説：Deutsch & 日本語 -->
    <div class="row mt-4">
      <div class="col-md-6">
        <h5>Erklärung (Deutsch)</h5>
        <p>
          Die Wahl eines geeigneten Subnetzpräfixes richtet sich nach der Anzahl der benötigten Hostadressen. Für B und C sind mindestens 120 Hosts erforderlich,
          daher wurde /25 verwendet. Punkt-zu-Punkt-Verbindungen wie D, E und F benötigen nur 2 Hosts, weshalb /30 optimal ist.
          Für Subnetz A sind mindestens 3 Hosts nötig (zwei PCs und ein Routerinterface). Da ein /30-Netz nicht ausreicht (nur 2 Hosts),
          ist /28 die kleinste passende Wahl mit 14 nutzbaren Adressen. Damit bleibt der Adressraum effizient genutzt.
        </p>
      </div>

      <div class="col-md-6">
        <h5>解説（日本語）</h5>
        <p>
          適切なサブネットプレフィックスは、必要なホスト数に基づいて決定されます。BとCはそれぞれ120台以上のホストが必要なので /25 を使用します。
          D、E、Fは2台間の通信のため、/30が最適です。AはPC2台とルーター1台が含まれるため、最低3台のアドレスが必要です。
          /30ではホスト数が足りず、/28（14台使用可能）が最小で適切な選択です。これにより、無駄なくアドレスを活用できます。
        </p>
      </div>
    </div>

    <!-- 図（補足） -->
    <div class="text-center my-4">
      <img
        :src="imgUrl2"
        alt="Subnetting Berechnung"
        class="img-fluid rounded border"
      />
      <p class="text-muted mt-2">Abbildung 4.2 — Subnetzberechnung (Figure_0402)</p>
    </div>

    <div class="text-center my-4">
      <img
        :src="imgUrl3"
        alt="Subnetting Belegung"
        class="img-fluid rounded border"
      />
      <p class="text-muted mt-2">Abbildung 4.3 — Subnetzbelegung (Figure_0403)</p>
    </div>
  </div>
</template>

<script setup>
import imgUrl from '@/assets/lecture/lecture03/Figure_0401.png';
import imgUrl2 from '@/assets/lecture/lecture03/Figure_0402.png';
import imgUrl3 from '@/assets/lecture/lecture03/Figure_0403.png';
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
