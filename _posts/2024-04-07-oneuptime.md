---
title: OneUptime
key: oneuptime
catch: Datadog代替のオープンソースな監視ツール
tags:
  - Observability
  - Monitoring
  - Incident Management
  - APM
  - Log Management
  - OSS
cover: /assets/images/oneuptime.jpg
comment: true
---

[OneUptime](https://oneuptime.com/)はオープンソースのDatadog代替とも言える監視ツールです。監視、ステータスページ、インシデント管理、オンコール、ログ管理、APM、エラートラッキングなどの機能があります。

[![OneUptimeのWebサイト](/assets/images/oneuptime.jpg)](https://oneuptime.com/)

<!--more-->

## 特徴

OneUptimeが提供する機能は以下の通りです。

- モニタリング
- ステータスページ
- インシデント管理
- オンコールとアラート
- ログ管理
- APM
- エラートラッキング
- 信頼性のオートパイロット

信頼性のオートパイロットは、コードのスキャンやDBクエリーの自動修正機能ですが、執筆時点（2024年4月）ではまだ実装されていません。

## API

OneUptimeはRESTful APIを提供しています。これを使って、モニタリングデータやステータスページの情報を取得できます。

[OneUptime API Reference - Introduction](https://oneuptime.com/reference/introduction)

![APIドキュメント](/assets/images/oneuptime-2.jpg)

## 料金

OneUptimeはオープンソース・ソフトウェアなので、無料で利用できます。プロダクト利用はKubernetesをお勧めしています。

- [Kubernetes](https://artifacthub.io/packages/helm/oneuptime/oneuptime)
- [Docker Compose](https://github.com/OneUptime/oneuptime/blob/master/App/FeatureSet/Docs/Content/installation/docker-compose.md)
- [ローカルでの立ち上げ](https://github.com/OneUptime/oneuptime/blob/master/App/FeatureSet/Docs/Content/installation/local-development.md)

なお、エンプラ向けにサポートも提供されています。

[OneUptime for Enterprise.](https://oneuptime.com/enterprise/overview)

## URL

[OneUptime \| One Complete Observability platform.](https://oneuptime.com/)
