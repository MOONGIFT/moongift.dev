---
title: Google Cloud Cloud Storage
key: google-cloud-cloud-storage
catch: Google Cloudのオブジェクトストレージ
tags:
  - Google Cloud
  - Storage
  - API
cover: /assets/images/google-cloud-cloud-storage.jpg
comment: true
---

[Google CloudのCloud Storage](https://cloud.google.com/storage)は、Google Cloudのオブジェクトストレージサービスです。Google Cloudの他のサービスと連携して、データの保存やバックアップ、アーカイブ、データの共有などができます。

[![Google CloudのCloud StorageのWebサイト](/assets/images/google-cloud-cloud-storage.jpg)](https://cloud.google.com/storage)

<!--more-->

## 特徴

Cloud Storageの特徴は以下の通りです。

- 無制限のスケーラビリティ
- 自動的なストレージクラスの移行
- ローカルファイルとしての利用

ストレージには、幾つかのクラスがあります。下に行くほどアクセス頻度が低いクラスで、料金も安価になります。

- Standard Storage
- Nearline Storage
- Coldline Storage
- Archive ストレージ

[Cloud Storage FUSE](https://cloud.google.com/storage/docs/gcs-fuse?hl=ja)を使うと、ローカルファイルシステムとしてCloud Storageを利用できます。Google Driveに近いものになります。

## API

Google Cloud StorageはAPIを提供しており、他のGoogle Cloudサービスと連携して使うことができます。JSON APIとXML APIがあります。

[API とリファレンス  \|  Cloud Storage  \|  Google Cloud](https://cloud.google.com/storage/docs/apis?hl=ja)

## 料金

Cloud Storageは5GBまで無料です。その後はストレージクラスとデータ量、ネットワークの使用量に応じて料金が発生します。

[料金  \|  Cloud Storage  \|  Google Cloud](https://cloud.google.com/storage/pricing?hl=ja)

## URL

[Cloud Storage \| Google Cloud](https://cloud.google.com/storage)
