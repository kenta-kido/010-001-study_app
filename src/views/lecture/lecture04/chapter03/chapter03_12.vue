<template>
  <div class="container my-4">
    <h3 class="mb-4">Chapter 3 - Transport Layer</h3>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          Residing between the application and network layers, the transport layer is a central 
          piece of the layered network architecture. It has the critical role of providing communication 
          services directly to the application processes running on different hosts.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          アプリケーション層とネットワーク層の間に位置するトランスポート層は、階層型ネットワークアーキテクチャの中核的な要素です。異なるホスト上で動作するアプリケーションプロセスに直接通信サービスを提供するという重要な役割を担っています。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          The pedagogic approach we take in this chapter is to alternate between discussions of 
          transport-layer principles and discussions of how these principles are implemented 
          in existing protocols; as usual, particular emphasis will be given to Internet protocols, 
          in particular the TCP and UDP transport-layer protocols.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          本章では、トランスポート層の原則と、それが既存のプロトコルでどのように実装されているかを交互に解説する教育的アプローチを取ります。特に、TCPとUDPといったインターネットプロトコルに重点を置きます。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          We’ll begin by discussing the relationship between the transport and network layers. 
          This sets the stage for examining the first critical function of the transport layer—extending 
          the network layer’s delivery service between two end systems to a delivery service between 
          two application-layer processes running on the end systems. We’ll illustrate this function 
          in our coverage of the Internet’s connectionless transport protocol, UDP.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          最初に、トランスポート層とネットワーク層の関係について説明します。これは、ネットワーク層が提供する2つのエンドシステム間の配送サービスを、アプリケーション層の2つのプロセス間の配送サービスに拡張するという、トランスポート層の第一の重要な機能を理解するための基礎となります。この機能は、インターネットのコネクションレス型トランスポートプロトコルであるUDPを扱う際に具体的に示されます。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          We’ll then return to principles and confront one of the most fundamental problems in computer 
          networking—how two entities can communicate reliably over a medium that may lose and 
          corrupt data. Through a series of increasingly complicated (and realistic!) scenarios, we’ll build 
          up an array of techniques that transport protocols use to solve this problem. We’ll then show 
          how these principles are embodied in TCP, the Internet’s connection-oriented transport protocol.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          次に、基本原理に立ち返り、コンピュータネットワークにおける最も基本的な問題の一つ、すなわち、データが失われたり破損したりする可能性のある媒体を通じて、2つのエンティティがどのように信頼性のある通信を行うかという課題に取り組みます。ますます複雑かつ現実的なシナリオを通じて、トランスポートプロトコルがこの問題を解決するために使用する技術の数々を構築します。そして、これらの原則が、インターネットのコネクション指向トランスポートプロトコルであるTCPにどのように組み込まれているかを示します。
        </p>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <p>
          We’ll next move on to a second fundamentally important problem in networking—controlling 
          the transmission rate of transport-layer entities in order to avoid, or recover from, congestion 
          within the network. We’ll consider the causes and consequences of congestion, as well as 
          commonly used congestion-control techniques. After obtaining a solid understanding of 
          the issues behind congestion control, we’ll study TCP’s approach to congestion control.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-muted">
          次に、ネットワーキングにおけるもう一つの根本的に重要な問題、すなわち、ネットワーク内の輻輳を回避または回復するために、トランスポート層のエンティティの送信レートを制御するという課題に取り組みます。輻輳の原因とその影響、そして一般的に使用されている輻輳制御の技術について考察します。輻輳制御の背後にある問題をしっかり理解した後に、TCPがどのように輻輳制御を行っているかを学びます。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script logic required
</script>

<style scoped>
/* Optional: make the Japanese side slightly lighter */
.text-muted {
  color: #6c757d;
}
</style>
