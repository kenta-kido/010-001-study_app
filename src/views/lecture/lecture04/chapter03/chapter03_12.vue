<template>
  <div class="container my-4">
    <h3 class="mb-4">3.1.2 Overview of the Transport Layer in the Internet</h3>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Recall that the Internet makes two distinct transport-layer protocols available to the
          application layer. One of these protocols is UDP (User Datagram Protocol), which
          provides an unreliable, connectionless service to the invoking application. The second
          of these protocols is TCP (Transmission Control Protocol), which provides a reliable,
          connection-oriented service to the invoking application.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          インターネットはアプリケーション層に対して2つの異なるトランスポート層プロトコルを提供しています。1つはUDP（ユーザデータグラムプロトコル）で、信頼性のないコネクションレス型のサービスを提供します。もう1つはTCP（トランスミッションコントロールプロトコル）で、信頼性のあるコネクション指向型のサービスを提供します。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          When designing a network application, the application developer must specify one
          of these two transport protocols. As we saw in Section 2.7, the application developer
          selects between UDP and TCP when creating sockets.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          ネットワークアプリケーションを設計する際、アプリケーション開発者はこれら2つのトランスポートプロトコルのいずれかを指定する必要があります。2.7節で見たように、ソケットを作成するときにUDPかTCPのどちらかを選択します。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          To simplify terminology, we refer to the transport-layer packet as a segment. We
          mention, however, that the Internet literature (for example, the RFCs) also refers to the
          transport-layer packet for TCP as a segment but often refers to the packet for UDP as
          a datagram. However, this same Internet literature also uses the term datagram for the
          network-layer packet!
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          用語を簡略化するため、本書ではトランスポート層のパケットを「セグメント」と呼びます。ただし、インターネットの文献（たとえばRFC）では、TCPのパケットは「セグメント」と呼ばれますが、UDPのパケットは「データグラム」と呼ばれることが多いです。さらに混乱を招くことに、ネットワーク層のパケットも「データグラム」と呼ばれています！
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          For an introductory book on computer networking such as this, we believe that it is
          less confusing to refer to both TCP and UDP packets as segments, and reserve the
          term datagram for the network-layer packet.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          本書のようなコンピュータネットワーキングの入門書では、TCPとUDPのパケットをどちらも「セグメント」と呼び、ネットワーク層のパケットに対してのみ「データグラム」という用語を使った方が混乱が少ないと考えています。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Before proceeding with our brief introduction of UDP and TCP, it will be useful
          to say a few words about the Internet’s network layer. (We’ll learn about the network
          layer in detail in Chapters 4 and 5.) The Internet’s network-layer protocol has a
          name—IP, for Internet Protocol. IP provides logical communication between hosts.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          UDPとTCPの簡単な紹介に入る前に、インターネットのネットワーク層について少し触れておくと良いでしょう。（ネットワーク層については第4章と第5章で詳しく学びます。）インターネットのネットワーク層プロトコルには名前があり、それはIP（Internet Protocol）です。IPはホスト間の論理的通信を提供します。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          The IP service model is a best-effort delivery service. This means that IP makes
          its “best effort” to deliver segments between communicating hosts, but it makes no
          guarantees. In particular, it does not guarantee segment delivery, it does not guarantee
          orderly delivery of segments, and it does not guarantee the integrity of the data
          in the segments. For these reasons, IP is said to be an unreliable service.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          IPのサービスモデルはベストエフォート型の配送サービスです。つまり、IPは通信するホスト間でセグメントを配送しようと「最善を尽くす」ものの、何も保証はしません。特に、セグメントの配達保証、順序保証、データの完全性保証は一切ありません。これらの理由により、IPは「信頼性のないサービス」とされています。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          We also mention here that every host has at least one network-layer address, a so-called IP
          address. We’ll examine IP addressing in detail in Chapter 4; for this chapter we need
          only keep in mind that each host has an IP address.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          ここで、すべてのホストは少なくとも1つのネットワーク層アドレス、すなわち「IPアドレス」を持っていることも付け加えておきます。IPアドレスの詳細については第4章で学びますが、この章では「各ホストがIPアドレスを持っている」ことを覚えておけば十分です。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Having taken a glimpse at the IP service model, let’s now summarize the service
          models provided by UDP and TCP. The most fundamental responsibility of UDP
          and TCP is to extend IP’s delivery service between two end systems to a delivery
          service between two processes running on the end systems.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          IPのサービスモデルを簡単に見たところで、今度はUDPとTCPが提供するサービスモデルをまとめてみましょう。UDPとTCPの最も基本的な責任は、IPのホスト間配送サービスを、エンドシステム上で動作するプロセス間の配送サービスへと拡張することです。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Extending host-to-host delivery to process-to-process delivery is called
          transport-layer multiplexing and demultiplexing. We’ll discuss transport-layer
          multiplexing and demultiplexing in the next section.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          ホスト間配送をプロセス間配送に拡張することを、トランスポート層の「マルチプレクシング（multiplexing）」および「デマルチプレクシング（demultiplexing）」と呼びます。これについては次のセクションで詳しく扱います。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          UDP and TCP also provide integrity checking by including error-detection
          fields in their segments’ headers. These two minimal transport-layer
          services—process-to-process data delivery and error checking—are the only two
          services that UDP provides! In particular, like IP, UDP is an unreliable service—
          it does not guarantee that data sent by one process will arrive intact (or at all!) to the
          destination process.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          UDPとTCPは、セグメントのヘッダーにエラーチェック用のフィールドを含めることで、整合性の確認も行います。UDPが提供するトランスポート層のサービスは、プロセス間のデータ配送とエラーチェックというこの2つだけです！ 特に、IPと同様に、UDPは信頼性のないサービスです。つまり、あるプロセスから送られたデータが、完全な形で（あるいはそもそも）受信プロセスに届くことを保証しません。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          TCP, on the other hand, offers several additional services to applications.
          First and foremost, it provides reliable data transfer. Using flow control,
          sequence numbers, acknowledgments, and timers (techniques we’ll explore
          in detail in this chapter), TCP ensures that data is delivered from sending
          process to receiving process, correctly and in order.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          一方、TCPはアプリケーションに対していくつかの追加的なサービスを提供します。まず何よりも、信頼性のあるデータ転送です。フロー制御、シーケンス番号、確認応答、タイマといった技術（これらは本章で詳しく学びます）を用いて、TCPはデータが送信プロセスから受信プロセスへ正確かつ順序通りに届けられることを保証します。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          TCP thus converts IP’s unreliable service between end systems into a
          reliable data transport service between processes. TCP also provides
          congestion control. Congestion control is not so much a service provided to
          the invoking application as it is a service for the Internet as a whole, a service
          for the general good.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          このように、TCPはIPの信頼性のないエンドシステム間のサービスを、プロセス間の信頼性のあるデータ転送サービスに変換します。また、TCPは輻輳制御も提供します。輻輳制御は、アプリケーションに対して提供されるというよりも、インターネット全体のためのサービスであり、公共的な利益のための機能です。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Loosely speaking, TCP congestion control prevents any one TCP connection
          from swamping the links and routers between communicating hosts with
          an excessive amount of traffic. TCP strives to give each connection traversing a
          congested link an equal share of the link bandwidth. This is done by regulating the
          rate at which the sending sides of TCP connections can send traffic into the network.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          おおまかに言えば、TCPの輻輳制御は、1つのTCP接続が通信中のホスト間のリンクやルーターに過剰なトラフィックを送りつけて圧迫するのを防ぎます。TCPは、輻輳しているリンクを通る各接続に対して帯域幅を公平に分配しようとします。これは、TCP接続の送信側がネットワークにトラフィックを送出する速度を調整することで実現されます。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          UDP traffic, on the other hand, is unregulated. An application using UDP transport
          can send at any rate it pleases, for as long as it pleases.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          一方、UDPのトラフィックは制御されません。UDPトランスポートを使用するアプリケーションは、好きな速度で、好きなだけ長くデータを送信することができます。
        </p>
      </div>
    </div>
<div class="row mb-3">
  <div class="col-md-6">
    <p>
      A protocol that provides reliable data transfer and congestion control is necessarily
      complex. We’ll need several sections to cover the principles of reliable data
      transfer and congestion control, and additional sections to cover the TCP protocol
      itself.
    </p>
  </div>
  <div class="col-md-6">
    <p class="text-muted">
      信頼性のあるデータ転送と輻輳制御を提供するプロトコルは、必然的に複雑になります。信頼性のあるデータ転送と輻輳制御の原理を説明するために複数のセクションが必要であり、さらにTCPプロトコル自体を扱うためのセクションも必要になります。
    </p>
  </div>
</div>

<div class="row mb-3">
  <div class="col-md-6">
    <p>
      These topics are investigated in Sections 3.4 through 3.7. The approach taken
      in this chapter is to alternate between basic principles and the TCP protocol.
      For example, we’ll first discuss reliable data transfer in a general setting and
      then discuss how TCP specifically provides reliable data transfer.
    </p>
  </div>
  <div class="col-md-6">
    <p class="text-muted">
      これらのトピックはセクション3.4から3.7で扱います。本章のアプローチは、基本原理とTCPプロトコルの説明を交互に行うというものです。たとえば、まず信頼性のあるデータ転送の一般的な考え方を説明し、その後TCPがそれをどのように実現しているかを解説します。
    </p>
  </div>
</div>

<div class="row mb-3">
  <div class="col-md-6">
    <p>
      Similarly, we’ll first discuss congestion control in a general setting and then
      discuss how TCP performs congestion control. But before getting into all this
      good stuff, let’s first look at transport-layer multiplexing and demultiplexing.
    </p>
  </div>
  <div class="col-md-6">
    <p class="text-muted">
      同様に、輻輳制御についてもまず一般的な観点から説明し、その後にTCPがそれをどのように実現しているかを解説します。ただし、それらの詳細に入る前に、まずはトランスポート層のマルチプレクシングとデマルチプレクシングについて見ていきましょう。
    </p>
  </div>
</div>

  </div>
</template>

<script setup>
// No images in this section
</script>

<style scoped>
.text-muted {
  color: #6c757d;
}
</style>
