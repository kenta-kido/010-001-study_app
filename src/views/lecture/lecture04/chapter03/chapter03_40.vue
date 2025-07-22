<template>
  <div class="container my-4">
    <h3 class="mb-4">3.4 Principles of Reliable Data Transfer</h3>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          In this section, we consider the problem of reliable data transfer in a general context.
          This is appropriate since the problem of implementing reliable data transfer occurs
          not only at the transport layer, but also at the link layer and the application layer as well.
        </p>
        <p>
          The general problem is thus of central importance to networking. Indeed,
          if one had to identify a “top-ten” list of fundamentally important problems in all
          of networking, this would be a candidate to lead the list.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          このセクションでは、信頼性のあるデータ転送の問題を一般的な文脈で考察します。
          この問題はトランスポート層だけでなく、リンク層やアプリケーション層でも発生するため、
          非常に重要です。
        </p>
        <p class="text-muted">
          この一般的な問題はネットワーキングにおいて中心的な意味を持ちます。
          もしネットワークにおける「重要な課題トップ10」を挙げるならば、
          この問題は間違いなくその筆頭候補となるでしょう。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          In the next section, we’ll examine TCP and show, in particular, that TCP exploits many of the principles that we are about to describe.
        </p>
        <p>
          Figure 3.8 illustrates the framework for our study of reliable data transfer.
          The service abstraction provided to the upper-layer entities is that of a reliable channel through which data can be transferred.
        </p>
        <p>
          With a reliable channel, no transferred data bits are corrupted (flipped from 0 to 1, or vice versa)
          or lost, and all are delivered in the order in which they were sent.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          次のセクションでは、TCPを取り上げ、TCPがこれから紹介する多くの原則をどのように活用しているかを示します。
        </p>
        <p class="text-muted">
          図3.8は、信頼性のあるデータ転送を学ぶための枠組みを示しています。
          上位層に提供されるサービス抽象は、データを転送できる「信頼できるチャネル」です。
        </p>
        <p class="text-muted">
          信頼できるチャネルでは、データビットの破損（0と1の反転）や損失はなく、
          送信された順序通りにデータが配信されます。
        </p>
      </div>
    </div>

<!-- 図3.8: Reliable data transfer -->
<div class="text-center my-4">
  <img
    :src="imgUrl8"
    alt="Figure 3.8 - Reliable data transfer: Service model and service implementation"
    class="img-fluid rounded border"
  />
  <p class="text-muted mt-2 mb-0">
    Figure 3.8 — Reliable data transfer: Service model and service implementation
  </p>
  <p class="text-muted">
    図3.8 — 信頼性のあるデータ転送：サービスモデルとその実装
  </p>
</div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          It is the responsibility of a reliable data transfer protocol to implement this service abstraction.
          This task is made difficult by the fact that the layer below the reliable data transfer protocol may be unreliable.
        </p>
        <p>
          For example, TCP is a reliable data transfer protocol that is implemented on top of an unreliable (IP) end-to-end network layer.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          このサービス抽象を実現するのが、信頼性のあるデータ転送プロトコルの責任です。
          ただし、下位層が信頼できない場合もあるため、この実装は容易ではありません。
        </p>
        <p class="text-muted">
          たとえば、TCPは信頼性のあるデータ転送プロトコルですが、
          信頼性のないエンドツーエンドのネットワーク層（IP）の上に構築されています。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          More generally, the layer beneath the two reliably communicating end points
          might consist of a single physical link or a global internetwork.
        </p>
        <p>
          For our purposes, however, we can view this lower layer simply as an unreliable point-to-point channel.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          より一般的には、信頼的に通信する2点の下層は、単一の物理リンクや
          グローバルなインターネットワークからなるかもしれません。
        </p>
        <p class="text-muted">
          しかし本セクションでは、下位層を「信頼できない点対点チャネル」として扱います。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          In this section, we will incrementally develop the sender and receiver sides of a reliable data transfer protocol,
          considering increasingly complex models of the underlying channel.
        </p>
        <p>
          One assumption we’ll adopt throughout our discussion is that packets will be delivered in the order in which they were sent, with some packets possibly being lost.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          このセクションでは、下層チャネルのモデルを徐々に複雑化させながら、
          信頼性のあるデータ転送プロトコルの送信側・受信側を段階的に開発していきます。
        </p>
        <p class="text-muted">
          ここでの前提は、「パケットは送信された順序で配送されるが、一部が失われる可能性がある」ということです。
        </p>
      </div>
    </div>

    <!-- 関数名の扱い -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          The sending side of the data transfer protocol will be invoked by a call to
          <code>rdt_send()</code>. It will pass the data to the upper layer at the receiving side.
        </p>
        <p>
          On the receiving side, <code>rdt_rcv()</code> will be called when a packet arrives, and
          <code>deliver_data()</code> will be used to send data up to the application.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          データ転送プロトコルの送信側は、<code>rdt_send()</code> という関数の呼び出しで動作します。
          これにより、受信側の上位層へデータが渡されます。
        </p>
        <p class="text-muted">
          一方で受信側では、パケットが到着すると <code>rdt_rcv()</code> が呼ばれ、
          <code>deliver_data()</code> を使ってアプリケーション層へデータが引き渡されます。
        </p>
      </div>
    </div>

    <!-- packet という用語と意味 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          In the following, we use the term <strong>“packet”</strong> rather than “segment”,
          since this discussion applies to general networks, not only the Internet transport layer.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          以降では、トランスポート層の「セグメント」ではなく、
          より汎用的な用語である <strong>「パケット」</strong> を使用します。
          この議論はインターネットに限定されない一般的なネットワークに適用されるためです。
        </p>
      </div>
    </div>

    <!-- 単方向転送とudt_send -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          In this section, we consider only unidirectional data transfer from sender to receiver.
          Still, both sides will transmit packets including control packets using
          <code>udt_send()</code>, where <code>udt</code> stands for unreliable data transfer.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          このセクションでは、送信側から受信側への単方向データ転送のみを対象とします。
          それでも、データ転送プロトコルの送受信両側は、
          <code>udt_send()</code> を使ってコントロールパケットを含むパケットを相互に送信します。
          （<code>udt</code> は unreliable data transfer の略です）
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import imgUrl8 from '@/assets/lecture/lecture04/Figure_08.png';
</script>
