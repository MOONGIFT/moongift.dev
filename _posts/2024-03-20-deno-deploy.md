---
title: Deno Deploy
key: deno-deploy
tags:
  - FaaS
  - Deno
cover: /assets/images/deno-deploy.jpg
comment: true
---

[Deno Deploy](https://deno.com/deploy)はJavaScriptの実行環境の一つであるDenoを基盤としたFaaS（Function as a Service）です。Deno Deployは、Denoの標準ライブラリを使って、サーバーレスアーキテクチャを実現しています。

[![Deno DeployのWebサイト](/assets/images/deno-deploy.jpg)](https://deno.com/deploy)

<!--more-->

## 特徴

Deno Deployの特徴は、実行エンジンがDenoである点が挙げられるでしょう。Deno公式に提供されるサービスなので、ローカル実行コマンドである `deno` からも利用できます。

```bash
deno run --check main.ts
```

そして、ローカルで開発したものをそのままデプロイできるので、開発環境と本番環境の差異が少なくなります。

## GitHub連携

Deno DeployはGitHubと連携して、リポジトリにプッシュすると自動的にデプロイすることができます。

## 料金

Deno Deployは無料で利用できます。ただし、利用制限があります。無料プランでは、月間100万リクエストまでとなっています。また、帯域は月間100GBまでです。

有料プランは月額20ドルのProプランで、実行回数が月間500万回、そして帯域が200GBまでに増えます。

[Deno Deploy Pricing \| Deno](https://deno.com/deploy/pricing)

## URL

[Deno Deploy | Deno](https://deno.com/deploy)
