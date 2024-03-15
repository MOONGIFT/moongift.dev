---
title: PlanetScale
key: planetscale
tags:
  - Database
  - MySQL
cover: /assets/images/planetscale.jpg
comment: true
---

[PlanetScale](https://planetscale.com/)はフルマネージドなMySQLサービスです。スケーリングが容易で、データの可用性を高めるための機能が豊富です。また、データのバックアップや復元も簡単に行えます。

[![PlanetScaleのWebサイト](/assets/images/zapp.jpg)](https://planetscale.com/)

<!--more-->

## 特徴

PlanetScaleのベースは[Vitess](https://vitess.io/)で、スケーラブルなMySQL互換のデータベースを用いています。コネクション数も無制限で、サーバーレスアーキテクチャと組み合わせることもできます。自動的にキャッシュも行われ、高いパフォーマンスを発揮します。

PlanetScaleではGitのようにスキーマをバージョン管理できるブランチ機能があります。スキーマのスナップショットを作成することで、他のブランチに影響しない形でスキーマの変更を行えます。

また、データのバックアップや復元も簡単に行えます。バックアップは自動的に行われ、復元も簡単に行えます。

## 価格

基本プランはScaler Proで、クラスターサイズとリージョン、データベースサイズによって決まります。たとえば、AWSのus-east-1リージョンで1/8 vCPU、1GB RAM、10GBのデータベースを利用する場合、月額39ドルになります。東京リージョンでは47ドルで、もう少し高くなります。

クラウドはAWSとGCPに対応しています。また、カスタムプランはより大きなプランで、月額3,000ドルからになります。

## URL

[The ultimate MySQL database platform — PlanetScale](https://planetscale.com/)
