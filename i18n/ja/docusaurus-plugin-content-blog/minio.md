---
title: MinIO
title_meta: MinIO 〜 S3互換のオープンソース・オブジェクトストレージ〜
key: minio
tags:
  - Object Storage
  - Cloud Storage
  - AI
  - OSS
clone: amazon-s3
---

[MinIO](https://min.io/)は、S3互換のオブジェクトストレージです。オープンソースで、高速でスケーラブルなストレージを提供します。DockerやKubernetesなどのコンテナ環境でも利用できます。

[![MinIOのWebサイト](/img/services/minio.jpg)](https://min.io/)

<!--more-->

## 特徴

MinIOの特徴は次の通りです。

- オープンソース
- S3互換
- DockerやKubernetesを使って簡単にデプロイ

最近のアップデートとして、AI対応を挙げています。各種AI/MLテクノロジーと連携してMinIOを利用できます。バージョン管理やオブザーバビリティ、セキュリティなどの機能も提供しています。

Podmanを使った場合、以下のコマンドでMinIOを起動できます。

```bash
podman run -p 9000:9000 -p 9001:9001 \
  quay.io/minio/minio server /data --console-address ":9001"
```

## MinIO AIStor

MinIO AIStorは、AIワークロードでの利用に最適化されたソリューションになります。エクサバイトクラスのデータを効率的に扱うのに適しています。

[Enterprise AI Storage Infrastructure \| AIStor by MinIO](https://min.io/product/aistor-overview)

## 料金

MinIOはオープンソース・ソフトウェアであり、無償で利用できます。Enterprise向けにはクラウドサービスも提供しています。これはストレージ容量などに応じた課金体系となっています。

[MinIO \| SUBNET Subscription & MinIO Pricing](https://min.io/pricing)

## MOONGIFTはこう見る

MinIOはオープンソース・ソフトウェアですが、あくまでもUIを提供するのみになります。ストレージについては、何らか（大抵ローカルですが）のストレージが必要になるでしょう。そういった意味では、クラウドのサーバーではなく、自社保有資産に対する利用になるかと思います。

または、個人のNASなどのインタフェースとして使ってみるのも面白そうです。

[MinIO \| S3 Compatible Storage for AI](https://min.io/)
