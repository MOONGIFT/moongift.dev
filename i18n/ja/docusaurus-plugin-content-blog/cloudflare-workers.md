---
title: Cloudflare Workers
title_meta: Cloudflare Workers 〜サーバーレスなアプリケーションを作成できるFaaS〜
key: cloudflare-workers
date: 2025-05-06
tags:
  - Cloudflare
  - FaaS
  - JavaScript
  - Serverless
  - Rust
  - C
  - "C++"
---

CDNで有名な[Cloudflare](https://www.cloudflare.com/)の提供するFaaS（Function as a Service）です。JavaScriptなどでサーバーレスなアプリケーションを作成できます。無料プランもあります。

[![Cloudflare WorkersのWebサイト](/img/services/cloudflare-workers.jpg)](https://workers.cloudflare.com/)

<!--more-->

開発後は、専用の `wrangler` コマンドでデプロイできます。もちろんGitHub Actionsなどと連携することもできます。デプロイしたコードにはHTTPSのURLが作成されるので、ブラウザや任意のプログラミング言語からアクセスできます。

実際の利用に際してはNode.jsが必要で、 `wrangler` コマンドを使ってプロジェクトを作成、操作します。

```bash
npm create cloudflare -- my-app
cd my-app
npx wrangler deploy
```

これだけで `https://my-app.world.workers.dev` といったURLが生成され、デプロイしたコードにアクセスできます。デプロイ毎に異なるURLも生成されるので、デプロイしたコードをテストするのに便利です。

作成した関数を、ダッシュボードにて確認できます。リクエスト数やエラー数などを確認できます。

![Cloudflare Workersのダッシュボード](/img/services/cloudflare-workers-2.jpg)

## ドキュメント

開発者ドキュメントは[Overview · Cloudflare Workers docs](https://developers.cloudflare.com/workers/)にあります。

## API

APIは[Cloudflare API \| Workers](https://developers.cloudflare.com/api/resources/workers/)にて確認できます。ただし、基本的な操作は `wrangler` コマンドで完結するので、APIを直接叩くことはあまりなさそうです。

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

カスタムドメインも利用できます。

## 対応言語

実行できる言語は以下の通りです。

- JavaScript
- Rust
- C
- C++

なお、JavaScriptエンジンはNode.jsではなく、ブラウザAPIをサポートしたエンジンとなっています。また、XMLHttpRequestなどのレガシーなAPIはサポートしていません。

## MOONGIFTはこう見る

Cloudflare Workersの魅力はなんと言っても無料枠の広さでしょう。さまざまなプロジェクトで利用していますが、課金状態になる方が難しいくらいです。また、Cloudflare Pagesと組み合わせることで、静的サイトをベースに動的な機能を組み込めるのも魅力です。

前述の通り、ブラウザAPIがベースなので若干の癖はあります。その部分さえクリアできれば、とても魅力的なプラットフォームです。

[Cloudflare Workers®](https://workers.cloudflare.com/)
