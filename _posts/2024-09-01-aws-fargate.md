---
title: AWS Fargate
key: aws-fargate
catch: AWSのサーバーレスコンテナ実行環境
tags:
  - AWS
  - Serverless
  - Container
  - Docker
cover: /assets/images/aws-fargate.jpg
comment: true
---

[AWS Fargate](https://aws.amazon.com/fargate/)は、コンテナを実行するためのサーバーレスサービスです。サーバーのプロビジョニングや管理を行う必要なく、スケーリングやクラスタリング、ロードバランシング、セキュリティ、およびログの管理を行えます。

[![AWS FargateのWebサイト](/assets/images/aws-fargate.jpg)](https://aws.amazon.com/fargate/)

<!--more-->

## 特徴

AWS Fargateの特徴は以下の通りです。

- サーバーレスのコンテナ実行環境
- 従量課金
- Amazon Elastic Container ServiceとAmazon Elastic Kubernetes Serviceとの互換性
- セキュリティ

AWS FargateではDockerイメージをプッシュして、指定したタスクを実行します。タスク実行時にはメモリやvCPUを指定します。ECSを利用したケースと比べて、インスタンスの運用から解放されるのがメリットです。

## 料金

AWS Fargateは、利用したvCPU・メモリ・OS・CPUアーキテクチャ・ストレージ・リージョンによって料金が異なります。

[料金 - AWS Fargate \| AWS](https://aws.amazon.com/jp/fargate/pricing/)

## URL

[Serverless Compute - AWS Fargate - AWS](https://aws.amazon.com/fargate/)
