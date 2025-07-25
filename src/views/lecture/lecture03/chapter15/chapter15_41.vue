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

    <!-- 図（0401） -->
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
          Der gesamte Adressbereich <code>213.168.110.0/23</code> umfasst 512 IP-Adressen (davon 510 nutzbar).
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
      </div>

      <div class="col-md-6">
        <h5>解答（日本語）</h5>
        <p>
          全体のアドレス空間 <code>213.168.110.0/23</code> には 512個のIPアドレス（510個が使用可能）があります。<br />
          BとCにはそれぞれ最低120個のアドレスが必要なので、/25（128アドレス、126利用可能）を割り当てます。
        </p>
        <ul>
          <li>B：<code>213.168.110.0/25</code></li>
          <li>C：<code>213.168.110.128/25</code></li>
        </ul>
        <p>
          D、E、Fはルータ間接続のため、2台分のアドレスがあれば十分なので、/30（4アドレス、2利用可能）を使用します：
        </p>
        <ul>
          <li>D：<code>213.168.111.0/30</code></li>
          <li>E：<code>213.168.111.4/30</code></li>
          <li>F：<code>213.168.111.8/30</code></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import imgUrl from '@/assets/lecture/lecture03/Figure_0401.png';
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
