<template>
  <div class="container my-4">
    <h3 class="mb-4">3.3.1 UDP Segment Structure</h3>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          The UDP segment structure, shown in Figure 3.7, is defined in RFC 768. The application
          data occupies the data field of the UDP segment. For example, for DNS, the data
          field contains either a query message or a response message. For a streaming audio
          application, audio samples fill the data field.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          図3.7に示されるUDPセグメント構造は、RFC 768で定義されています。アプリケーションデータはUDPセグメントのデータフィールドに格納されます。たとえば、DNSの場合はこのデータフィールドに問い合わせメッセージまたは応答メッセージが入ります。ストリーミングオーディオアプリケーションでは、音声サンプルがこのフィールドを埋めます。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          The UDP header has only four fields, each consisting of two bytes. As discussed in
          the previous section, the port numbers allow the destination host to pass the application data
          to the correct process running on the destination end system (that is, to perform the demultiplexing function).
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          UDPヘッダには4つのフィールドしかなく、それぞれが2バイトで構成されています。前節で説明したように、ポート番号は宛先ホストがアプリケーションデータを正しいプロセスに渡すために使われます（つまり、デマルチプレクシング機能を実行するためです）。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          The length field specifies the number of bytes in the UDP segment (header plus
          data). An explicit length value is needed since the size of the data field may differ
          from one UDP segment to the next.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          長さフィールドは、UDPセグメント（ヘッダとデータを含む）のバイト数を指定します。データフィールドのサイズはUDPセグメントごとに異なる可能性があるため、明示的な長さの値が必要です。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          The checksum is used by the receiving host to check whether errors have been introduced into the segment.
          In truth, the checksum is also calculated over a few of the fields in the IP header in addition to the
          UDP segment. But we ignore this detail in order to see the forest through the trees.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          チェックサムは、受信ホストがセグメントにエラーが混入していないかを確認するために使用されます。実際には、チェックサムはUDPセグメントに加えて、IPヘッダ内のいくつかのフィールドも対象にして計算されますが、ここでは全体像をつかむためにその詳細は省略します。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          We’ll discuss the checksum calculation below. Basic principles of error detection are
          described in Section 6.2. The length field specifies the length of the UDP segment,
          including the header, in bytes.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          チェックサムの計算方法については後述します。エラー検出の基本原理は第6.2節で説明されています。長さフィールドは、ヘッダを含めたUDPセグメント全体の長さ（バイト単位）を示します。
        </p>
      </div>
    </div>

    <!-- 図3.7の画像 -->
    <div class="text-center my-4">
      <img
        :src="imgUrl7"
        alt="Figure 3.7 - UDP segment structure"
        class="img-fluid rounded border"
      />
      <p class="text-muted mt-2 mb-0">
        Figure 3.7 — UDP segment structure
      </p>
      <p class="text-muted">
        図3.7 — UDPセグメント構造
      </p>
    </div>
  </div>
</template>

<script setup>
import imgUrl7 from '@/assets/lecture/lecture04/Figure_07.png';
</script>

<style scoped>
.text-muted {
  color: #6c757d;
}
</style>
