<template>
  <div class="container my-4">
    <h3 class="mb-4">3.3.2 UDP Checksum</h3>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          The UDP checksum provides for error detection. That is, the checksum is used to determine whether bits within the UDP segment have been altered (for example, by noise in the links or while stored in a router) as it moved from source to destination.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          UDPチェックサムはエラー検出のために使用されます。つまり、UDPセグメント内のビットが、送信元から宛先に移動する過程（例えばリンク上のノイズやルータ内での保管中）で変更されていないかを判断するために使われます。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          UDP at the sender side performs the 1’s complement of the sum of all the 16-bit words in the segment, with any overflow encountered during the sum being wrapped around. This result is put in the checksum field of the UDP segment.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          送信側のUDPは、セグメント内のすべての16ビットワードを加算し、その1の補数を取ります。加算中にオーバーフローが発生した場合、その分は繰り返して加算されます。この結果がUDPセグメントのチェックサムフィールドに格納されます。
        </p>
      </div>
    </div>
    <!-- 元の3ワード -->
    <div class="row mb-4">
      <div class="col-md-6">
        <p>Original 16-bit words:</p>
        <pre class="pre-block">
0110011001100000
0101010101010101
1000111100001100
        </pre>
      </div>
      <div class="col-md-6">
        <p class="text-muted">元の16ビットワード：</p>
        <pre class="pre-block text-muted">
0110011001100000
0101010101010101
1000111100001100
        </pre>
      </div>
    </div>

    <!-- 最初の2つの加算 -->
    <div class="row mb-4">
      <div class="col-md-6">
        <p>Sum of first two words:</p>
        <pre class="pre-block">
  0110011001100000
+ 0101010101010101
────────────────────
  1011101110110101
        </pre>
      </div>
      <div class="col-md-6">
        <p class="text-muted">最初の2ワードの合計：</p>
        <pre class="pre-block text-muted">
  0110011001100000
+ 0101010101010101
────────────────────
  1011101110110101
        </pre>
      </div>
    </div>

    <!-- 3番目との加算 -->
    <div class="row mb-4">
      <div class="col-md-6">
        <p>Add third word:</p>
        <pre class="pre-block">
  1011101110110101
+ 1000111100001100
────────────────────
  0100101011000010
        </pre>
      </div>
      <div class="col-md-6">
        <p class="text-muted">3番目を加算：</p>
        <pre class="pre-block text-muted">
  1011101110110101
+ 1000111100001100
────────────────────
  0100101011000010
        </pre>
      </div>
    </div>

    <!-- 1の補数 -->
    <div class="row mb-4">
      <div class="col-md-6">
        <p>1's Complement:</p>
        <pre class="pre-block">
Original : 0100101011000010
1's Comp : 1011010100111101
        </pre>
      </div>
      <div class="col-md-6">
        <p class="text-muted">1の補数：</p>
        <pre class="pre-block text-muted">
元の値  : 0100101011000010
1の補数 : 1011010100111101
        </pre>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Note that this last addition had overflow, which was wrapped around. The 1's complement is obtained by converting all the 0s to 1s and all the 1s to 0s.
        </p>
        <p>
          Thus, the 1’s complement of 01001010110000010 is:
        </p>
        <pre>10110101001111101</pre>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          この最後の加算にはオーバーフローがあり、それは繰り返して加算されました。1の補数は、すべての0を1に、1を0に変換することで得られます。
        </p>
        <p class="text-muted">
          したがって、01001010110000010 の1の補数は次のようになります：
        </p>
        <pre class="text-muted">10110101001111101</pre>
      </div>
    </div>

    <!-- チェックサム確認 -->
    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          At the receiver, all words (including checksum) are added.
          If the result is <code>1111111111111111</code>, no error occurred.
          Otherwise, an error is detected.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          受信側ではすべてのワード（チェックサム含む）を加算し、結果が <code>1111111111111111</code> であればエラーはありません。そうでなければ、エラーが検出されたと判断します。
        </p>
      </div>
    </div>

        <div class="row mb-3">
      <div class="col-md-6">
        <p>
          You may wonder why UDP provides a checksum in the first place, as many
          link-layer protocols (including the popular Ethernet protocol) also provide error
          checking.
        </p>
        <p>
          The reason is that there is no guarantee that all the links between source
          and destination provide error checking; that is, one of the links may use a link-layer
          protocol that does not provide error checking.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          多くのリンク層プロトコル（人気のあるイーサネットなど）もエラーチェックを提供している中で、なぜUDPがわざわざチェックサムを提供しているのか疑問に思うかもしれません。
        </p>
        <p class="text-muted">
          その理由は、送信元から宛先までのすべてのリンクがエラーチェックを提供しているとは限らないからです。つまり、一部のリンクではエラーチェックを提供しないリンク層プロトコルが使われている可能性があります。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Furthermore, even if segments are correctly transferred across a link, it’s possible
          that bit errors could be introduced when a segment is stored in a router’s memory.
          Given that neither link-by-link reliability nor in-memory error detection is guaranteed,
          UDP must provide error detection at the transport layer, on an end-end basis, if the
          end-end data transfer service is to provide error detection.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          さらに、リンクを通じてセグメントが正しく転送されたとしても、ルータのメモリにセグメントが格納される際にビットエラーが発生する可能性もあります。リンク単位の信頼性やメモリ内でのエラーチェックが保証されていないことを考えると、エンド間のデータ転送サービスでエラー検出を行いたい場合、UDPはトランスポート層でエラー検出を提供する必要があります。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          This is an example of the celebrated end-end principle in system design [Saltzer 1984],
          which states that since certain functionality (error detection, in this case) must be
          implemented on an end-end basis: “functions placed at the lower levels may be redundant
          or of little value when compared to the cost of providing them at the higher level.”
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          これは、システム設計における有名なエンドエンド原則の一例です [Saltzer 1984]。この原則では、ある機能（この場合はエラー検出）はエンドエンドで実装する必要があるため、「下位層に配置された機能は、上位層で提供されるコストと比べて冗長であったり、ほとんど意味を持たなかったりする可能性がある」と述べられています。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Because IP is supposed to run over just about any layer-2 protocol, it is useful
          for the transport layer to provide error checking as a safety measure.
        </p>
        <p>
          Although UDP provides error checking, it does not do anything to recover from an error.
          Some implementations of UDP simply discard the damaged segment; others pass the damaged
          segment to the application with a warning.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          IPは、あらゆる種類のレイヤ2プロトコルの上で動作することが前提とされているため、安全対策としてトランスポート層でエラーチェックを提供することは有用です。
        </p>
        <p class="text-muted">
          UDPはエラーチェックを提供しますが、エラーの修復処理は一切行いません。UDPの実装によっては、破損したセグメントを単に破棄するものもあれば、アプリケーションに警告付きで渡すものもあります。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          That wraps up our discussion of UDP. We will soon see that TCP offers reliable
          data transfer to its applications as well as other services that UDP doesn’t offer.
        </p>
        <p>
          Naturally, TCP is also more complex than UDP. Before discussing TCP, however,
          it will be useful to step back and first discuss the underlying principles of reliable
          data transfer.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          以上でUDPに関する説明は終了です。次に、TCPがアプリケーションに対して信頼性の高いデータ転送や、UDPにはない他のサービスを提供することを見ていきます。
        </p>
        <p class="text-muted">
          当然ながら、TCPはUDPよりも複雑です。しかしTCPの説明に入る前に、信頼性のあるデータ転送の基本原理を振り返っておくとよいでしょう。
        </p>
      </div>
    </div>

  </div>
</template>

<style scoped>
.text-muted {
  color: #6c757d;
}
.checksum-table {
  font-family: monospace;
  font-size: 1rem;
  margin: 0 auto;
}
.checksum-table td {
  padding: 2px 8px;
  text-align: center;
  white-space: nowrap;
  border: none;
}
.pre-block {
  font-family: 'Courier New', monospace;
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 6px;
  white-space: pre;
}

</style>