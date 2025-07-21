<template>
  <div class="container my-4">
    <h3 class="mb-4">3.1 Introduction and Transport-Layer Services</h3>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          In the previous two chapters, we touched on the role of the transport layer and the
          services that it provides. Let’s quickly review what we have already learned about
          the transport layer.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          前の2章では、トランスポート層の役割とその提供するサービスについて触れました。ここで、これまでに学んだトランスポート層の内容を簡単に復習しましょう。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          A transport-layer protocol provides for logical communication between
          application processes running on different hosts. By logical communication, we
          mean that from an application’s perspective, it is as if the hosts running the processes
          were directly connected; in reality, the hosts may be on opposite sides of the
          planet, connected via numerous routers and a wide range of link types.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          トランスポート層のプロトコルは、異なるホスト上で実行されるアプリケーションプロセス間の論理的通信を提供します。論理的通信とは、アプリケーションの視点では、あたかもそれぞれのホストが直接接続されているかのように見えることを意味します。実際には、ホストは地球の反対側にあり、数多くのルーターや多様なリンクによって接続されていることもあります。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Application processes use the logical communication provided by the transport
          layer to send messages to each other, free from the worry of the details of the physical
          infrastructure used to carry these messages. Figure 3.1 illustrates the notion of logical
          communication.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          アプリケーションプロセスは、トランスポート層が提供する論理的通信を利用して、物理的インフラの詳細を気にすることなくメッセージをやり取りします。図3.1は、この論理的通信の概念を示しています。
        </p>
      </div>
    </div>

    <div class="text-center my-4">
      <img
        :src="imgUrl"
        alt="Figure 3.1 - Logical Communication"
        class="img-fluid rounded border"
      />
      <p class="text-muted mt-2 mb-0">
        Figure 3.1 — The transport layer provides logical rather than physical communication between application processes
      </p>
      <p class="text-muted">
        図3.1 — トランスポート層は、アプリケーションプロセス間に物理的ではなく論理的な通信を提供する
      </p>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          As shown in Figure 3.1, transport-layer protocols are implemented in the end
          systems but not in network routers. On the sending side, the transport layer converts
          the application-layer messages it receives from a sending application process into
          transport-layer packets, known as transport-layer segments in Internet terminology.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          図3.1に示されているように、トランスポート層のプロトコルはエンドシステムに実装されており、ネットワークルーターには実装されていません。送信側では、トランスポート層は送信アプリケーションプロセスから受け取ったアプリケーション層のメッセージを「トランスポート層セグメント」と呼ばれるパケットに変換します。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          This is done by (possibly) breaking the application messages into smaller chunks
          and adding a transport-layer header to each chunk to create the transport-layer segment.
          The transport layer then passes the segment to the network layer at the sending
          end system, where the segment is encapsulated within a network-layer packet (a
          datagram) and sent to the destination.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          これは、アプリケーションメッセージを小さなチャンクに分割し、それぞれにトランスポート層ヘッダを追加することで行われます。その結果できるトランスポート層セグメントは、送信側エンドシステムのネットワーク層に渡され、ネットワーク層パケット（データグラム）にカプセル化されて送信先へ送られます。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          It’s important to note that network routers act only on the network-layer fields of the datagram;
          that is, they do not examine the fields of the transport-layer segment encapsulated with the datagram.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          ネットワークルーターは、データグラムのネットワーク層フィールドのみに基づいて処理を行い、カプセル化されたトランスポート層セグメントの内容は一切確認しないという点に注意が必要です。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          On the receiving side, the network layer extracts the transport-layer segment from the datagram
          and passes the segment up to the transport layer. The transport layer then processes
          the received segment, making the data in the segment available to the receiving
          application.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          受信側では、ネットワーク層がデータグラムからトランスポート層セグメントを取り出し、それをトランスポート層に渡します。トランスポート層は受け取ったセグメントを処理し、その中のデータを受信アプリケーションに利用可能な形で提供します。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          More than one transport-layer protocol may be available to network applications.
          For example, the Internet has two protocols—TCP and UDP. Each of these protocols
          provides a different set of transport-layer services to the invoking application.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          ネットワークアプリケーションには複数のトランスポート層プロトコルが利用可能な場合があります。たとえば、インターネットにはTCPとUDPという2つのプロトコルがあり、それぞれが異なるトランスポート層サービスをアプリケーションに提供します。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import imgUrl from '@/assets/lecture/lecture04/Figure_01.png';
</script>

<style scoped>
.text-muted {
  color: #6c757d;
}
</style>
