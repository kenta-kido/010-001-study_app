<template>
  <div class="container my-4">
    <h3 class="mb-4">3.4.1 Building a Reliable Data Transfer Protocol</h3>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          We now step through a series of protocols, each one becoming more complex,
          arriving at a flawless, reliable data transfer protocol.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          ここでは、一連のプロトコルを段階的に見ていきます。それぞれが徐々に複雑になり、最終的には完全な信頼性を備えたデータ転送プロトコルに到達します。
        </p>
      </div>
    </div>

    <!-- 中タイトル -->
    <div class="row mb-4">
      <div class="col-12">
        <p class="fw-bold" style="color: #004085;">
          Reliable Data Transfer over a Perfectly Reliable Channel: rdt1.0
        </p>
      </div>
    </div>

    <!-- rdt1.0の導入とFSMについて -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          We first consider the simplest case, in which the underlying channel is completely reliable.
          The protocol itself, which we’ll call <code>rdt1.0</code>, is trivial.
          The finite-state machine (FSM) definitions for the <code>rdt1.0</code> sender and receiver are shown in Figure 3.9.
        </p>
        <p>
          The FSM in Figure 3.9(a) defines the operation of the sender, while Figure 3.9(b) defines the receiver.
          There are separate FSMs for the sender and for the receiver.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          まずは最も単純なケースを考えます。下位チャネルが完全に信頼できる場合です。
          このときのプロトコル <code>rdt1.0</code> は非常に単純です。
          その送信側・受信側の有限状態機械（FSM）は図3.9に示されています。
        </p>
        <p class="text-muted">
          図3.9(a) は送信側の、(b) は受信側のFSMを表します。
          送信側と受信側にはそれぞれ独立したFSMがあります。
        </p>
      </div>
    </div>

    <!-- FSMの動作について -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Each FSM in Figure 3.9 has just one state. Transitions (arrows) show the response to events.
          The event is labeled above the horizontal line; the resulting action is below the line.
          If no event or action occurs, we denote this with Λ.
        </p>
        <p>
          The initial state is indicated by a dashed arrow.
          Though these FSMs have only one state, upcoming ones will have more, so identifying the initial state becomes important.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          図3.9の各FSMは1つの状態しか持ちません。
          状態遷移（矢印）は、イベントに対する反応を示します。
          水平線の上にはイベント、下にはアクションが書かれています。
          イベントまたはアクションが無い場合は、明示的に <code>Λ</code> を使って示します。
        </p>
        <p class="text-muted">
          初期状態は破線の矢印で示されます。
          本図では状態は1つのみですが、今後のFSMでは複数の状態を持つようになるため、
          初期状態の明示が重要になります。
        </p>
      </div>
    </div>

    <!-- 図3.9 表示 -->
    <div class="text-center my-4">
      <img
        :src="imgUrl9"
        alt="Figure 3.9 - rdt1.0: A protocol for a completely reliable channel"
        class="img-fluid rounded border"
      />
      <p class="text-muted mt-2 mb-0">
        Figure 3.9 — rdt1.0: A protocol for a completely reliable channel
      </p>
      <p class="text-muted">
        図3.9 — rdt1.0：完全に信頼できるチャネルに対するプロトコル
      </p>
    </div>

    <!-- 送信側の動作 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          The sending side of rdt simply accepts data via the <code>rdt_send(data)</code> event,
          creates a packet with <code>make_pkt(data)</code>, and sends it.
          In practice, <code>rdt_send()</code> would be called by an upper-layer app.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          <code>rdt</code> の送信側は、<code>rdt_send(data)</code> イベントによって上位層からデータを受け取り、
          <code>make_pkt(data)</code> でパケットを作成し、チャネルに送信します。
          実際にはこれは上位アプリケーションからの関数呼び出しになります。
        </p>
      </div>
    </div>

    <!-- 受信側の動作 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          The receiving side gets a packet via <code>rdt_rcv(packet)</code>,
          extracts data with <code>extract(packet, data)</code>,
          and delivers it via <code>deliver_data(data)</code>.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          受信側は <code>rdt_rcv(packet)</code> によりパケットを受け取り、
          <code>extract(packet, data)</code> でデータを取り出し、
          <code>deliver_data(data)</code> を使って上位層へ渡します。
        </p>
      </div>
    </div>

    <!-- パケットとフィードバックの必要性なし -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          In this protocol, a data unit and a packet are equivalent.
          All packets flow from sender to receiver; the receiver gives no feedback due to perfect reliability.
        </p>
        <p>
          It’s also assumed the receiver can always keep up with the sender, so no flow control is needed.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          このプロトコルでは、データ単位とパケットは同一です。
          パケットはすべて送信側から受信側へ一方向に流れます。
          チャネルが完全に信頼できるため、受信側からのフィードバックは不要です。
        </p>
        <p class="text-muted">
          また、受信側は常に送信側に追いつけると仮定されているため、
          フロー制御の必要もありません。
        </p>
      </div>
    </div>
        <!-- 中タイトル -->
    <div class="row mb-4">
      <div class="col-12">
        <p class="fw-bold" style="color: #004085;">
          Reliable Data Transfer over a Channel with Bit Errors: rdt2.0
        </p>
      </div>
    </div>

    <!-- 説明1：ビット誤りを含むチャネル -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          A more realistic model of the underlying channel is one in which bits in a packet may
          be corrupted. Such bit errors typically occur in the physical components of a network
          as a packet is transmitted, propagates, or is buffered.
        </p>
        <p>
          We’ll continue to assume for now that all transmitted packets are received (although
          possibly corrupted) in order.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          より現実的なチャネルモデルでは、パケット内のビットが破損する可能性があります。
          このようなビットエラーは、パケットが送信、伝搬、あるいはバッファリングされる過程で、
          ネットワークの物理的な構成要素に起因して発生します。
        </p>
        <p class="text-muted">
          今のところ、すべての送信パケットは順番通りに受信される（ただしビットが破損しているかもしれない）
          という前提を続けます。
        </p>
      </div>
    </div>

    <!-- 説明2：人間のやり取りになぞらえた説明 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Before developing a protocol for such a channel, consider how people handle this situation.
          For example, during a phone call, if someone mishears a sentence, they ask to repeat it.
          A typical exchange involves positive (“OK”) and negative (“Please repeat”) acknowledgments.
        </p>
        <p>
          These control messages allow the receiver to inform the sender about correct or
          incorrect reception. Protocols based on such retransmissions are called
          <strong>ARQ (Automatic Repeat reQuest)</strong> protocols.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          このようなチャネル向けのプロトコルを開発する前に、
          人間がどのようにこの状況に対処するかを考えてみましょう。
          たとえば電話でメッセージを伝える際、聞き取れなかった部分は「もう一度言ってください」と求めます。
        </p>
        <p class="text-muted">
          このように「OK」や「繰り返してください」といった確認応答を使うことにより、
          受信者は何が正しく受信されたか、何が誤って受信されたかを送信者に伝えることができます。
          コンピュータネットワークでは、これに基づいたプロトコルを
          <strong>ARQ（自動再送要求）プロトコル</strong>と呼びます。
        </p>
      </div>
    </div>

    <!-- 説明3：ARQに必要な3つの機能 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Fundamentally, ARQ protocols require three additional capabilities:
        </p>
      </div>
      
      <div class="col-md-6">
        <p class="text-muted">
          ARQプロトコルには、以下の3つの機能が必要です：
        </p>
      </div>
    </div>
    <!-- Error Detection -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          • <strong>Error detection.</strong> First, a mechanism is needed to allow the receiver to detect when
          bit errors have occurred. Recall from the previous section that UDP uses the Internet
          checksum field for exactly this purpose. In Chapter 6, we’ll examine error-detection
          and -correction techniques in greater detail; these techniques allow the
          receiver to detect and possibly correct packet bit errors.
        </p>
        <p>
          For now, we need only know that these techniques require that extra bits (beyond the
          bits of original data to be transferred) be sent from the sender to the receiver; these bits
          will be gathered into the packet checksum field of the rdt2.0 data packet.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          • <strong>エラー検出：</strong> まず、受信側がビットエラーの発生を検出できる仕組みが必要です。
          前節で説明したように、UDP はまさにこの目的のためにインターネットチェックサムフィールドを利用しています。
          第6章では、誤り検出・訂正技術についてさらに詳しく取り上げます。
          これらの技術により、受信側はパケットのビット誤りを検出し、場合によっては訂正することができます。
        </p>
        <p class="text-muted">
          現時点では、こうした技術には送信元から受信先に、元のデータビットに加えて余分なビット（冗長ビット）を送る必要があるという点だけを理解しておけば十分です。
          これらのビットは <code>rdt2.0</code> データパケットのチェックサムフィールドにまとめられます。
        </p>
      </div>
    </div>

    <!-- Receiver Feedback -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          • <strong>Receiver feedback.</strong> Since the sender and receiver are typically executing on different
          end systems, possibly separated by thousands of miles, the only way for
          the sender to learn of the receiver’s view of the world (in this case, whether or not
          a packet was received correctly) is for the receiver to provide explicit feedback
          to the sender.
        </p>
        <p>
          The positive (ACK) and negative (NAK) acknowledgment replies
          in the message-dictation scenario are examples of such feedback. Our rdt2.0
          protocol will similarly send ACK and NAK packets back from the receiver to
          the sender. In principle, these packets need only be one bit long; for example, a 0
          value could indicate a NAK and a value of 1 could indicate an ACK.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          • <strong>受信側からのフィードバック：</strong>
          送信側と受信側は通常、異なるエンドシステム上で動作しており、物理的に何千マイルも離れている可能性があります。
          したがって、送信側が受信側の状態（パケットが正しく受信されたかどうか）を知る唯一の方法は、
          受信側が送信側に明示的なフィードバックを返すことです。
        </p>
        <p class="text-muted">
          音声でのメッセージ伝達の例で見たように、「OK（ACK）」や「もう一度言ってください（NAK）」といった応答は、
          こうしたフィードバックの例です。
          <code>rdt2.0</code> プロトコルでも同様に、ACK や NAK パケットを受信側から送信側へ返します。
          理論上、これらのパケットは1ビットの長さで十分です。例えば、0 が NAK、1 が ACK を意味するように定義できます。
        </p>
      </div>
    </div>

    <!-- Retransmission -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          • <strong>Retransmission.</strong> A packet that is received in error at the receiver will be retransmitted
          by the sender.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          • <strong>再送：</strong>
          受信側でエラーが検出されたパケットは、送信側によって再送されます。
        </p>
      </div>
    </div>
    <!-- 図3.10 -->
    <div class="text-center my-4">
      <img
        :src="imgUrl10"
        alt="Figure 3.10 - rdt2.0: A protocol for a channel with bit errors"
        class="img-fluid rounded border"
      />
      <p class="text-muted mt-2 mb-0">
        Figure 3.10 — rdt2.0: A protocol for a channel with bit errors
      </p>
      <p class="text-muted">
        図3.10 — rdt2.0：ビットエラーのあるチャネルに対応するプロトコル
      </p>
    </div>


    <!-- 送信側の2状態 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          The send side of rdt2.0 has two states. In the leftmost state, the send-side
          protocol is waiting for data to be passed down from the upper layer. When the
          <code>rdt_send(data)</code> event occurs, the sender will create a packet (<code>sndpkt</code>) containing
          the data to be sent, along with a packet checksum (for example, as discussed
          in Section 3.3.2 for the case of a UDP segment), and then send the packet via the
          <code>udt_send(sndpkt)</code> operation.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          <code>rdt2.0</code> の送信側には 2 つの状態があります。左側の状態では、送信側プロトコルは上位層からデータが渡されるのを待っています。
          <code>rdt_send(data)</code> イベントが発生すると、送信側は送信すべきデータを含むパケット <code>sndpkt</code> を作成し、
          （たとえばセクション 3.3.2 で説明した UDP セグメントのように）チェックサムも含めて、
          <code>udt_send(sndpkt)</code> 操作を通じてパケットをチャネルへ送信します。
        </p>
      </div>
    </div>

    <!-- ACK/NAK を待つ状態 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          In the rightmost state, the sender protocol is waiting
          for an ACK or a NAK packet from the receiver. If an ACK packet is received
          (the notation <code>rdt_rcv(rcvpkt) &amp;&amp; isACK(rcvpkt)</code> in Figure 3.10 corresponds
          to this event), the sender knows that the most recently transmitted packet
          has been received correctly and thus the protocol returns to the state of waiting for
          data from the upper layer.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          右側の状態では、送信側プロトコルは受信側からの ACK または NAK パケットを待っています。
          ACK パケットが受信されると（図 3.10 の <code>rdt_rcv(rcvpkt) &amp;&amp; isACK(rcvpkt)</code> に対応）、
          送信側は直前に送信したパケットが正しく受信されたことを認識し、
          再び上位層からのデータ受信を待つ状態に戻ります。
        </p>
      </div>
    </div>

    <!-- NAK 受信と再送 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          If a NAK is received, the protocol retransmits the last
          packet and waits for an ACK or NAK to be returned by the receiver in response to
          the retransmitted data packet.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          もし NAK が受信された場合、プロトコルは直前のパケットを再送し、
          それに対する ACK または NAK を受信側が返してくるのを待ちます。
        </p>
      </div>
    </div>

    <!-- Stop-and-waitの説明 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          It is important to note that when the sender is in the
          wait-for-ACK-or-NAK state, it cannot get more data from the upper layer; that is, the
          <code>rdt_send()</code> event can not occur; that will happen only after the sender receives
          an ACK and leaves this state.
        </p>
        <p>
          Thus, the sender will not send a new piece of data until
          it is sure that the receiver has correctly received the current packet. Because of this
          behavior, protocols such as rdt2.0 are known as <strong>stop-and-wait protocols</strong>.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          重要な点として、送信側が ACK または NAK を待つ状態にある間は、
          上位層から新たなデータを受け取ることができません。
          つまり、<code>rdt_send()</code> イベントはこの状態では発生せず、
          ACK を受信してこの状態を抜けた後にのみ発生可能になります。
        </p>
        <p class="text-muted">
          したがって、受信側が現在のパケットを正しく受信したことを確認するまで、
          送信側は新しいデータを送信しません。
          このような動作のため、<code>rdt2.0</code> のようなプロトコルは<strong>ストップアンドウェイト（stop-and-wait）プロトコル</strong>と呼ばれます。
        </p>
      </div>
    </div>

    <!-- 受信側 FSM の説明 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          The receiver-side FSM for rdt2.0 still has a single state. On packet arrival,
          the receiver replies with either an ACK or a NAK, depending on whether or not the
          received packet is corrupted.
        </p>
        <p>
          In Figure 3.10, the notation <code>rdt_rcv(rcvpkt) &amp;&amp;
          corrupt(rcvpkt)</code> corresponds to the event in which a packet is received and is
          found to be in error.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          <code>rdt2.0</code> の受信側 FSM は引き続き 1 つの状態のみを持ちます。
          パケットを受信すると、エラーの有無に応じて ACK または NAK を返します。
        </p>
        <p class="text-muted">
          図 3.10 の <code>rdt_rcv(rcvpkt) &amp;&amp; corrupt(rcvpkt)</code> という記述は、
          パケットが受信され、エラーが検出された場合のイベントを表しています。
        </p>
      </div>
    </div>


    <!-- 欠陥の説明 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Protocol rdt2.0 may look as if it works but, unfortunately, it has a fatal flaw.
          In particular, we haven’t accounted for the possibility that the ACK or NAK packet
          could be corrupted! (Before proceeding on, you should think about how this problem
          may be fixed.) Unfortunately, our slight oversight is not as innocuous as it may
          seem.
        </p>
        <p>
          Minimally, we will need to add checksum bits to ACK/NAK packets in order
          to detect such errors. The more difficult question is how the protocol should recover
          from errors in ACK or NAK packets. The difficulty here is that if an ACK or NAK
          is corrupted, the sender has no way of knowing whether or not the receiver has correctly
          received the last piece of transmitted data.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          rdt2.0 プロトコルは一見すると正しく動作するように見えますが、実は致命的な欠陥があります。
          特に、ACK または NAK パケット自体が破損する可能性を考慮していません。
          （先に進む前に、この問題をどのように修正するかを少し考えてみてください。）
          残念ながら、この見落としはそれほど軽微なものではありません。
        </p>
        <p class="text-muted">
          最低限でも、ACK／NAK パケットにチェックサムビットを追加してエラーを検出できるようにする必要があります。
          しかし、より困難な問題は、それらの ACK／NAK にエラーがあった場合にプロトコルがどのように復旧すべきかという点です。
          この問題の難しさは、ACK や NAK が破損していた場合、送信側が直前に送信したデータが正しく受信されたかどうかを判断できないことにあります。
        </p>
      </div>
    </div>

    <!-- 3つの対応案 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Consider three possibilities for handling corrupted ACKs or NAKs:
        </p>
        <p>
          • For the first possibility, consider what a human might do in the message-dictation
          scenario. If the speaker didn’t understand the “OK” or “Please repeat that” reply
          from the receiver, the speaker would probably ask, “What did you say?” (thus
          introducing a new type of sender-to-receiver packet to our protocol). The receiver
          would then repeat the reply. But what if the speaker’s “What did you say?” is corrupted?
          The receiver, having no idea whether the garbled sentence was part of the
          dictation or a request to repeat the last reply, would probably then respond with
          “What did you say?” And then, of course, that response might be garbled. Clearly,
          we’re heading down a difficult path.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          ACK／NAK が破損した場合の対処法として、以下の3つの可能性が考えられます。
        </p>
        <p class="text-muted">
          • 1つ目の方法は、人間の会話を例に考えるものです。
          たとえば、スピーカーが「OK」や「もう一度言ってください」という返答をうまく聞き取れなかった場合、
          「今なんて言いましたか？」と聞き返すでしょう。
          これにより、プロトコルに新たな「スピーカー→リスナー」方向のパケット種別を追加することになります。
          しかし、「今なんて？」というパケットが破損した場合、リスナーはその文が元の内容なのか再送要求なのか判断できません。
          その結果、リスナーも「今なんて？」と返してしまい、その返答も破損する可能性があります。
          このように、混乱は連鎖的に深まっていきます。
        </p>
      </div>
    </div>

    <!-- 対応案2 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          • A second alternative is to add enough checksum bits to allow the sender not only
          to detect, but also to recover from, bit errors. This solves the immediate problem
          for a channel that can corrupt packets but not lose them.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          • 2つ目の方法は、チェックサムビットを十分に追加して、送信側がビット誤りを検出するだけでなく、
          それを自力で訂正できるようにすることです。
          これは、パケットが破損する可能性があるが、喪失しないチャネルであれば、当面の問題を解決できます。
        </p>
      </div>
    </div>

    <!-- 対応案3 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          • A third approach is for the sender simply to resend the current data packet when
          it receives a garbled ACK or NAK packet. This approach, however, introduces
          duplicate packets into the sender-to-receiver channel.
        </p>
        <p>
          The fundamental difficulty
          with duplicate packets is that the receiver doesn’t know whether the ACK
          or NAK it last sent was received correctly at the sender. Thus, it cannot know a
          priori whether an arriving packet contains new data or is a retransmission!
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          • 3つ目の方法は、送信側が破損した ACK または NAK を受け取った場合に、
          単純に現在のデータパケットを再送するというものです。
          ただし、この方法では「重複パケット」がチャネル内に発生します。
        </p>
        <p class="text-muted">
          重複パケットの根本的な問題は、
          受信側が自分の送った ACK／NAK が送信側に正しく届いたかどうかを把握できないことです。
          したがって、受信したパケットが新しいデータなのか、再送されたものなのかを事前に判断できません。
        </p>
      </div>
    </div>

    <!-- シーケンス番号による解決策 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          A simple solution to this new problem (and one adopted in almost all existing
          data transfer protocols, including TCP) is to add a new field to the data packet
          and have the sender number its data packets by putting a sequence number into
          this field.
        </p>
        <p>
          The receiver then need only check this sequence number to determine
          whether or not the received packet is a retransmission.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          このような問題に対する簡単な解決策（そして実際にほぼすべてのデータ転送プロトコルで採用されている方法、たとえば TCP）は、
          データパケットに新しいフィールドを追加して、送信側がそれぞれのパケットにシーケンス番号を付けることです。
        </p>
        <p class="text-muted">
          受信側はこのシーケンス番号をチェックするだけで、パケットが新しいものか再送されたものかを判断できます。
        </p>
      </div>
    </div>

    <!-- 1ビットの例 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          For this simple case of a stop-and-wait protocol, a 1-bit sequence number will suffice,
          since it will allow the receiver to know whether the sender is resending the previously
          transmitted packet (the sequence number of the received packet has the same sequence
          number as the most recently received packet) or a new packet (the sequence number changes).
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          ストップアンドウェイトプロトコルのような単純な場合には、
          1ビットのシーケンス番号で十分です。
          なぜなら、受信側はそのビット値が直前に受け取ったパケットと同じか異なるかを見て、
          パケットが新しいものか再送なのかを判別できるからです。
        </p>
      </div>
    </div>

    <!-- ACK/NAKには番号不要 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Since we are currently assuming a channel
          that does not lose packets, ACK and NAK packets do not themselves need to indicate
          the sequence number of the packet they are acknowledging.
        </p>
        <p>
          The sender knows that a
          received ACK or NAK packet (whether garbled or not) was generated in response to
          its most recently transmitted data packet.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          現時点では、チャネルがパケットを喪失しないという仮定を置いているため、
          ACK および NAK パケットには、対応するパケットのシーケンス番号を含める必要はありません。
        </p>
        <p class="text-muted">
          送信側は、自分が直前に送信したデータパケットに対する応答として
          ACK／NAK（たとえそれが破損していたとしても）が返されたのだと把握できるからです。
        </p>
      </div>
    </div>

   <!-- 段落1 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Figures 3.11 and 3.12 show the FSM description for rdt2.1, our fixed version
          of rdt2.0. The rdt2.1 sender and receiver FSMs each now have twice as many
          states as before. This is because the protocol state must now reflect whether the
          packet currently being sent (by the sender) or expected (at the receiver) should
          have a sequence number of 0 or 1.
        </p>
        <p>
          Note that the actions in those states where a 0-numbered packet is being sent
          or expected are mirror images of those where a 1-numbered packet is being sent
          or expected; the only differences have to do with the handling of the sequence number.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          図3.11と図3.12は、rdt2.0を修正したプロトコルであるrdt2.1のFSMを示しています。
          rdt2.1では、送信側と受信側それぞれのFSMが以前の2倍の状態を持っています。
          これは、送信中または受信予定のパケットにシーケンス番号0または1を付ける必要があるためです。
        </p>
        <p class="text-muted">
          シーケンス番号が0のパケットに関する状態での処理は、
          シーケンス番号が1のパケットに関する処理の鏡像となっており、
          違いはシーケンス番号の扱いのみにあります。
        </p>
      </div>
    </div>

    <!-- 図3.11 -->
    <div class="text-center my-4">
      <img :src="imgRdt21Sender" alt="Figure 3.11 - rdt2.1 sender" class="img-fluid rounded border" />
      <p class="text-muted mt-2 mb-0">Figure 3.11 — rdt2.1 sender</p>
      <p class="text-muted">図3.11 — rdt2.1 送信側</p>
    </div>

    <!-- 図3.12 -->
    <div class="text-center my-4">
      <img :src="imgRdt21Receiver" alt="Figure 3.12 - rdt2.1 receiver" class="img-fluid rounded border" />
      <p class="text-muted mt-2 mb-0">Figure 3.12 — rdt2.1 receiver</p>
      <p class="text-muted">図3.12 — rdt2.1 受信側</p>
    </div>

    <!-- 段落2 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Protocol rdt2.1 uses both positive and negative acknowledgments from the
          receiver to the sender. When an out-of-order packet is received, the receiver sends
          a positive acknowledgment for the packet it has received. When a corrupted packet
          is received, the receiver sends a negative acknowledgment.
        </p>
        <p>
          We can accomplish the same effect as a NAK if, instead of sending a NAK, we send
          an ACK for the last correctly received packet. A sender that receives two ACKs
          for the same packet (that is, receives duplicate ACKs) knows that the receiver did
          not correctly receive the packet following the packet that is being ACKed twice.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          rdt2.1 プロトコルでは、受信側から送信側へACK（肯定応答）とNAK（否定応答）の両方を送信します。
          順番が異なるパケットを受信した場合、受信側はそれを受け取ったというACKを送信します。
          破損していた場合はNAKを返します。
        </p>
        <p class="text-muted">
          NAKの代わりに、最後に正しく受信したパケットに対するACKを再送することで、
          同様の効果を得ることができます。送信側が同じパケットに対して2つのACK（重複ACK）を受け取った場合、
          その後のパケットが正しく受信されなかったことがわかります。
        </p>
      </div>
    </div>

    <!-- 段落3 + 図3.13 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Our NAK-free reliable data transfer protocol for a channel with bit errors is rdt2.2,
          shown in Figures 3.13 and 3.14. One subtle change between rdt2.1 and rdt2.2 is that
          the receiver must now include the sequence number of the packet being acknowledged
          by an ACK message.
        </p>
        <p>
          This is done by including the ACK, 0 or ACK, 1 argument in make_pkt() in the receiver FSM,
          and the sender must now check the sequence number of the packet being acknowledged by a
          received ACK message. This is done by including the 0 or 1 argument in isACK() in the sender FSM.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          ビットエラーのあるチャネルに対してNAKを使わずに信頼性のある転送を実現するプロトコルが、
          図3.13および図3.14に示されているrdt2.2です。
          rdt2.1とrdt2.2の重要な違いは、ACKパケットに対応するシーケンス番号を含める点です。
        </p>
        <p class="text-muted">
          これは受信側のFSMにおいて make_pkt() に ACK, 0 または ACK, 1 を引数として渡すことで行われ、
          送信側のFSMでは isACK() に 0 または 1 を渡してACKのシーケンス番号を確認することで処理されます。
        </p>
      </div>
    </div>

    <!-- 図3.13 -->
    <div class="text-center my-4">
      <img :src="imgRdt22Sender" alt="Figure 3.13 - rdt2.2 sender" class="img-fluid rounded border" />
      <p class="text-muted mt-2 mb-0">Figure 3.13 — rdt2.2 sender</p>
      <p class="text-muted">図3.13 — rdt2.2 送信側</p>
    </div>

    <!-- 図3.14 -->
    <div class="text-center my-4">
      <img :src="imgRdt22Receiver" alt="Figure 3.14 - rdt2.2 receiver" class="img-fluid rounded border" />
      <p class="text-muted mt-2 mb-0">Figure 3.14 — rdt2.2 receiver</p>
      <p class="text-muted">図3.14 — rdt2.2 受信側</p>
    </div>
    

        <!-- 中タイトル -->
    <div class="row mb-4">
      <div class="col-12">
        <p class="fw-bold" style="color: #004085;">
          Reliable Data Transfer over a Lossy Channel with Bit Errors: rdt3.0
        </p>
      </div>
    </div>

    <!-- 段落1 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Suppose now that in addition to corrupting bits, the underlying channel can lose
          packets as well, a not-uncommon event in today’s computer networks (including
          the Internet). Two additional concerns must now be addressed by the protocol: how
          to detect packet loss and what to do when packet loss occurs.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          ここで、ビットの破損に加えて、下位チャネルがパケットを喪失する可能性があると仮定します。
          これは、今日のコンピュータネットワーク（インターネットを含む）では珍しくありません。
          この場合、プロトコルはさらに2つの問題、すなわち「パケット損失の検出方法」と「損失時の対処方法」に対処しなければなりません。
        </p>
      </div>
    </div>

    <!-- 段落2 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          The use of checksumming, sequence numbers, ACK packets, and retransmissions—
          the techniques already developed in rdt2.2—will allow us to answer the latter concern.
          Handling the first concern will require adding a new protocol mechanism.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          チェックサム、シーケンス番号、ACKパケット、および再送といった、
          rdt2.2 ですでに導入された技術は「損失時の対処方法」に対応できます。
          一方、「損失の検出方法」には新しいプロトコル機構の追加が必要になります。
        </p>
      </div>
    </div>

    <!-- 段落3 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          There are many possible approaches toward dealing with packet loss (several
          more of which are explored in the exercises at the end of the chapter).
          Here, we’ll put the burden of detecting and recovering from lost packets on the sender.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          パケット損失への対処法には多くのアプローチがあり、
          いくつかは章末の演習でも紹介されています。
          ここでは、損失の検出と回復の責任を送信側に課す方法を採用します。
        </p>
      </div>
    </div>

    <!-- 段落4 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Suppose that the sender transmits a data packet and either that packet,
          or the receiver’s ACK of that packet, gets lost. In either case, no reply is
          forthcoming at the sender from the receiver. If the sender is willing to wait long
          enough so that it is certain that a packet has been lost, it can simply retransmit
          the data packet. You should convince yourself that this protocol does indeed work.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          送信者がデータパケットを送信し、そのパケット自体あるいは受信者からのACKが失われるとします。
          いずれの場合も、送信者は受信者からの返信を受け取れません。
          もし送信者が「パケットが失われた」と確信できるまで十分に待てるなら、
          単にそのパケットを再送すればよいのです。このプロトコルが機能することを自分で納得してみてください。
        </p>
      </div>
    </div>

    <!-- 段落5 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          But how long must the sender wait to be certain that something has been lost?
          The sender must clearly wait at least as long as a round-trip delay between the sender
          and receiver (which may include buffering at intermediate routers) plus whatever
          amount of time is needed to process a packet at the receiver.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          しかし、何かが失われたと確信するまで送信者はどのくらい待つ必要があるでしょうか？
          少なくとも、送信者と受信者間の往復遅延（中間ルータでのバッファリング時間を含む）と
          受信側でのパケット処理時間の合計より長く待つ必要があります。
        </p>
      </div>
    </div>

    <!-- 段落6 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          In many networks, this worst-case maximum delay is very difficult even to estimate,
          much less know with certainty. Moreover, the protocol should ideally recover from
          packet loss as soon as possible; waiting for a worst-case delay could mean a long wait
          until error recovery is initiated.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          多くのネットワークでは、この最悪の場合の最大遅延は推定するのさえ難しく、
          正確に知ることなど到底できません。
          さらに、プロトコルは理想的にはできるだけ早く損失から回復すべきであり、
          最悪の遅延を待つことはエラー回復の開始が大幅に遅れることを意味します。
        </p>
      </div>
    </div>

    <!-- 段落7 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          The approach thus adopted in practice is for the sender to judiciously choose a time value
          such that packet loss is likely, although not guaranteed, to have happened.
          If an ACK is not received within this time, the packet is retransmitted.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          そのため、実際に採用されているアプローチでは、送信者がある程度の時間を
          賢明に選び、その時間内にACKが受け取れなければ、パケット損失が起きた可能性が高いと判断して再送します。
        </p>
      </div>
    </div>

    <!-- 段落8 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Note that if a packet experiences a particularly large delay,
          the sender may retransmit the packet even though neither the data packet nor its ACK have been lost.
          This introduces the possibility of duplicate data packets in the sender-to-receiver channel.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          パケットが異常に大きな遅延を経験すると、
          実際にはパケットもACKも失われていないにもかかわらず、送信者が再送してしまうことがあります。
          これにより、送信者から受信者へのチャネルに重複したパケットが生じる可能性が出てきます。
        </p>
      </div>
    </div>

    <!-- 段落9 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Happily, protocol rdt2.2 already has enough functionality
          (that is, sequence numbers) to handle the case of duplicate packets.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          幸いなことに、プロトコルrdt2.2にはすでにシーケンス番号といった
          重複パケット処理に十分な機能が備わっています。
        </p>
      </div>
    </div>
    <!-- 段落1 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          From the sender’s viewpoint, retransmission is a panacea. The sender does not
          know whether a data packet was lost, an ACK was lost, or if the packet or ACK was
          simply overly delayed. In all cases, the action is the same: retransmit.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          送信者の視点から見ると、再送は万能薬です。送信者には、データパケットが失われたのか、
          ACKが失われたのか、あるいはどちらかが単に大きく遅延しているだけなのかを知るすべはありません。
          いずれの場合でも、取るべき行動は同じです ― 再送です。
        </p>
      </div>
    </div>

    <!-- 段落2 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Implementing a time-based retransmission mechanism requires a countdown timer that can
          interrupt the sender after a given amount of time has expired. The sender will thus
          need to be able to (1) start the timer each time a packet is sent, (2) respond to a
          timer interrupt, and (3) stop the timer.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          時間ベースの再送機構を実装するには、指定した時間が経過した後に送信者に割り込みをかける
          カウントダウンタイマーが必要です。送信者は次の3つを実行できる必要があります：
          (1) パケット（初回でも再送でも）を送るたびにタイマーを開始すること、
          (2) タイマー割り込みに応じて適切な動作を行うこと、
          (3) タイマーを停止すること。
        </p>
      </div>
    </div>

    <!-- 段落3 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Figure 3.15 shows the sender FSM for rdt3.0, a protocol that reliably transfers
          data over a channel that can corrupt or lose packets; in the homework problems, you’ll
          be asked to provide the receiver FSM for rdt3.0.
        </p>
        <p>
          Figure 3.16 shows how the protocol operates with no lost or delayed packets and
          how it handles lost data packets. In Figure 3.16, time moves forward from top to bottom.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          図3.15は、パケットの破損や喪失が起こり得るチャネル上でデータを確実に転送するプロトコル
          rdt3.0の送信側FSMを示しています。rdt3.0の受信側FSMは、章末の課題で問われます。
        </p>
        <p class="text-muted">
          図3.16は、パケットの喪失や遅延がない場合と、データパケットが失われた場合の
          プロトコルの動作を示しています。図3.16では、時間は上から下に進みます。
        </p>
      </div>
    </div>

    <!-- 図3.15: rdt3.0 sender -->
    <div class="text-center my-4">
      <img
        :src="imgRdt30Sender"
        alt="Figure 3.15 - rdt3.0 sender"
        class="img-fluid rounded border"
      />
      <p class="text-muted mt-2 mb-0">
        Figure 3.15 — rdt3.0 sender
      </p>
      <p class="text-muted">
        図3.15 — rdt3.0 送信側
      </p>
    </div>

    <!-- 図3.16: rdt3.0 operation -->
    <div class="text-center my-4">
      <img
        :src="imgRdt30Timeline"
        alt="Figure 3.16 - Operation of rdt3.0"
        class="img-fluid rounded border"
      />
      <p class="text-muted mt-2 mb-0">
        Figure 3.16 — Operation of rdt3.0, the alternating-bit protocol
      </p>
      <p class="text-muted">
        図3.16 — rdt3.0 の動作（交互ビットプロトコル）
      </p>
    </div>

    <!-- 締めの段落 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Because packet sequence numbers alternate between 0 and 1, protocol
          rdt3.0 is sometimes known as the alternating-bit protocol.
        </p>
        <p>
          We have now assembled the key elements of a data transfer protocol.
          Checksums, sequence numbers, timers, and ACK/NAK packets all play a crucial role.
          We now have a working reliable data transfer protocol!
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          パケットのシーケンス番号が0と1の間で交互に変化するため、
          プロトコルrdt3.0は「交互ビットプロトコル」とも呼ばれます。
        </p>
        <p class="text-muted">
          これで信頼性のあるデータ転送プロトコルに必要な要素がすべて揃いました。
          チェックサム、シーケンス番号、タイマー、ACK/NAKパケット ― いずれも
          重要な役割を果たします。信頼できるデータ転送プロトコルが完成しました！
        </p>
      </div>
    </div>

  </div>
</template>

<script setup>
import imgUrl9 from '@/assets/lecture/lecture04/Figure_09.png';
import imgUrl10 from '@/assets/lecture/lecture04/Figure_10.png';
import imgRdt21Sender from '@/assets/lecture/lecture04/Figure_11.png'
import imgRdt21Receiver from '@/assets/lecture/lecture04/Figure_12.png'
import imgRdt22Sender from '@/assets/lecture/lecture04/Figure_13.png'
import imgRdt22Receiver from '@/assets/lecture/lecture04/Figure_14.png'
import imgRdt30Sender from '@/assets/lecture/lecture04/Figure_15.png'
import imgRdt30Timeline from '@/assets/lecture/lecture04/Figure_16.png'
</script>
