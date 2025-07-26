<template>
  <div class="container my-4">
    <h3 class="mb-4">Analyse von MAC-Adressierung und Frame-Verarbeitung</h3>


<!-- Thema 1 -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum ist eine Subnetzmaske wie 255.255.255.0 nötig?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    サブネットマスク（例：255.255.255.0）はなぜ必要なのか？
  </p>
</div>
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Eine Subnetzmaske wie <code>255.255.255.0</code> wird verwendet, um eine IP-Adresse in einen Netzwerkteil
      und einen Hostteil zu unterteilen. Diese Maske gibt an, wie viele Bits zur Identifikation des Netzwerks dienen.
      Zum Beispiel bedeutet <code>/24</code> (also 255.255.255.0), dass die ersten 24 Bits zur Netzadresse gehören.
      Solche Masken werden manuell durch Administratoren konfiguriert oder dynamisch via DHCP zugewiesen.
    </p>
  </div>
  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      <code>255.255.255.0</code> のようなサブネットマスクは、IPアドレスを「ネットワーク部」と「ホスト部」に分けるためのビットの境界を定めるものです。
      たとえば /24（255.255.255.0）は、最初の24ビットがネットワーク部であることを意味します。
      このマスクはネットワーク設計者によって明示的に設定されるか、DHCPにより動的に配布されます。
    </p>
  </div>
</div>

<!-- Thema 2 -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Enthält der IP-Header die Netzadresse?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    IPヘッダーにはネットワークアドレスは含まれているのか？
  </p>
</div>
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Der IP-Header enthält nur zwei Adressen: die <strong>Quell-IP</strong> und die <strong>Ziel-IP</strong>.
      Die Netzadresse selbst wird nicht explizit übertragen. Stattdessen berechnet der Router oder das Betriebssystem
      die Netzadresse dynamisch, indem es die Ziel-IP mit der Subnetzmaske verknüpft (z.B. 192.168.1.20 mit /24 ergibt 192.168.1.0).
    </p>
  </div>
  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      IPヘッダーには「送信元IPアドレス」と「宛先IPアドレス」しか含まれません。
      ネットワークアドレス自体は送信されず、ルーターやOSがサブネットマスクを使ってIPアドレスから計算します。
      たとえば、宛先IPが192.168.1.20でマスクが/24であれば、ネットワークアドレスは192.168.1.0となります。
    </p>
  </div>
</div>

<!-- Thema 3 -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum kann man nicht an fremde Broadcast-Adressen senden?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    他のネットワークのブロードキャストアドレスに送ることはできないのはなぜか？
  </p>
</div>
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      Broadcasts wie 192.168.1.255 sind nur innerhalb eines lokalen Netzwerks gültig. Router blockieren solche Pakete automatisch,
      weil sie nur für lokale Kommunikation gedacht sind. Es ist daher nicht möglich, gezielt Broadcasts an fremde Subnetze zu senden,
      da das Routing-Protokoll dies nicht erlaubt.
    </p>
  </div>
  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      IPブロードキャスト（例：192.168.1.255）は、同一のサブネット内でのみ有効です。
      ブロードキャストパケットはルーターを通過できないため、他のネットワーク宛にブロードキャストを送信することはできません。
      これは、ネットワークを分離し安定性と制御性を保つための設計上の制限です。
    </p>
  </div>
</div>

<!-- Thema 4 -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Warum braucht man sowohl MAC- als auch IP-Adressierung?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    なぜMACアドレスとIPアドレスの両方が必要なのか？
  </p>
</div>
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      MAC-Adressen dienen der lokalen Geräteerkennung auf Layer 2, während IP-Adressen global eindeutig sind und auf Layer 3
      Routing ermöglichen. Ohne IP-Adressen könnte ein Host nur innerhalb eines lokalen Segments kommunizieren, aber nicht über
      Netzgrenzen hinweg. Beide Adressierungsarten ergänzen sich und sind notwendig für ein funktionierendes Internet.
    </p>
  </div>
  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      MACアドレスはL2（データリンク層）で使用されるローカルな識別子であり、同じセグメント内の通信に用いられます。
      一方、IPアドレスはL3（ネットワーク層）でルーティングに使われ、異なるネットワーク間の通信を可能にします。
      IPがなければ、インターネット全体の構造的な通信は不可能になります。両者は補完関係にあります。
    </p>
  </div>
</div>

<!-- Thema: Was ist DHCP? -->
<div class="border rounded p-3 bg-light mb-4">
  <p><strong>Thema:</strong><br />
    Was ist DHCP und warum wird es verwendet?
  </p>
  <hr />
  <p><strong>テーマ:</strong><br />
    DHCPとは何か？なぜ使われるのか？
  </p>
</div>
<div class="row mb-4">
  <div class="col-md-6">
    <h5>Erklärung (Deutsch)</h5>
    <p>
      <strong>DHCP</strong> (Dynamic Host Configuration Protocol) ist ein Netzwerkprotokoll, das Geräten automatisch
      IP-Adressen und andere Konfigurationsdaten wie Subnetzmaske, Gateway und DNS-Server zuweist.
      Ohne DHCP müsste jeder Host manuell konfiguriert werden, was aufwendig und fehleranfällig wäre.
      Der DHCP-Client (z.B. ein PC) sendet beim Start eine Anfrage, und ein DHCP-Server weist eine freie IP-Adresse zu.
      Die Zuweisung ist meist zeitlich begrenzt (Leasetime), kann aber auch dauerhaft sein.
    </p>
  </div>
  <div class="col-md-6">
    <h5>解説（日本語）</h5>
    <p>
      <strong>DHCP（Dynamic Host Configuration Protocol）</strong> は、IPアドレスやサブネットマスク、
      デフォルトゲートウェイ、DNSサーバなどのネットワーク設定情報をクライアントに自動で割り当てるプロトコルです。
      手動で設定する必要がなくなるため、ネットワーク管理の効率と正確性が向上します。
      起動時にDHCPクライアントが<strong>ブロードキャスト</strong>で要求を送り、DHCPサーバが利用可能なIPを一時的に（リース方式で）割り当てます。
    </p>
  </div>
</div>

  </div>
</template>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
