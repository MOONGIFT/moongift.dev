---
title: OpenDevin
key: opendevin
catch: 自立型AIエンジニアDevinのオープンソース実装
tags:
  - AI
  - Agent
  - Programming
  - OSS
cover: /assets/images/opendevin.jpg
comment: true
---

[OpenDevin](https://opendevin.github.io/OpenDevin/)は、自立型AIエンジニアとして発表されたDevinのオープンソース実装です。複雑なエンジニアリングタスクを自動化し、開発者の生産性を向上させます。

[![OpenDevinのWebサイト](/assets/images/opendevin.jpg)](https://opendevin.github.io/OpenDevin/)

<!--more-->

## 特徴

元々、DevinはCognition社が発表したAIです。Devinは、自然言語での指示を受け取り、それに基づいてステップバイステップの計画を立てます。その計画を承諾すると、実際に開発を行います。

OpenDevinも同じく、Devinのように自動化された自立型エージェントを備えており、開発を自動化します。

## 使い方

Dockerで利用できます。まずワークスペースを定義します。

```bash
export WORKSPACE_BASE=$(pwd)/workspace
```

そして、Dockerイメージを実行します。

```bash
docker run -it \
    --pull=always \
    -e SANDBOX_USER_ID=$(id -u) \
    -e SSH_PASSWORD="make something up here" \
    -e WORKSPACE_MOUNT_PATH=$WORKSPACE_BASE \
    -v $WORKSPACE_BASE:/opt/workspace_base \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -p 3000:3000 \
    --add-host host.docker.internal:host-gateway \
    ghcr.io/opendevin/opendevin:0.5
```

ブラウザで`http://localhost:3000`にアクセスします。チャットやコードエディタ、ブラウザ、Jupyter Notebook、ターミナルを利用して開発を行います。

## 利用できるモデル

デフォルトはGPT-4ですが、ClaudeやLlamaも利用できます。ollamaを使ってローカルLLMも利用できます。

## 料金

OpenDevinはオープンソース・ソフトウェアなので、無償で利用できます。ライセンスはMITです。

[OpenDevin/OpenDevin: 🐚 OpenDevin: Code Less, Make More](https://github.com/OpenDevin/OpenDevin/tree/main)

## URL

[Hello from OpenDevin \| OpenDevin](https://opendevin.github.io/OpenDevin/)
