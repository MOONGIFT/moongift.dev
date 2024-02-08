---
title: Cloudflare Workers
tags:
  - Cloudflare
  - FaaS
  - JavaScript
  - Serverless
  - Rust
  - C
  - "C++"
cover: /assets/images/cloudflare-workers.jpg
comment: true
---

CDNで有名な[Cloudflare](https://www.cloudflare.com/)の提供するFaaS（Function as a Service）です。JavaScriptなどでサーバーレスなアプリケーションを作成できます。無料プランもあります。

[![Cloudflare WorkersのWebサイト](/assets/images/cloudflare-workers.jpg)](https://workers.cloudflare.com/)

<!--more-->

開発後は、専用の `wrangler` コマンドでデプロイできます。もちろんGitHub Actionsなどと連携することもできます。デプロイしたコードにはHTTPSのURLが作成されるので、ブラウザや任意のプログラミング言語からアクセスできます。

## 料金

無料枠は以下の通りです。

- 1日10万リクエストまで無料
- 100ワーカースクリプトまで
- 1リクエスト10msまで
- 最初のリクエストはレイテンシーが高い
- Workers KVの容量に制限あり

有料枠は以下の通りです。

- 無料枠の条件に加えて…
- 1リクエスト30秒まで
- 常に低レイテンシー
- Workers KVの追加容量

## 対応言語

実行できる言語は以下の通りです。

- JavaScript
- Rust
- C
- C++

なお、JavaScriptエンジンはNode.jsではなく、ブラウザAPIをサポートしたエンジンとなっています。

[Cloudflare Workers®](https://workers.cloudflare.com/)
