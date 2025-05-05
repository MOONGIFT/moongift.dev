---
title: Akamai Object Storage
title_meta: Akamai Object Storage 〜 Akamaiが提供するS3互換のオブジェクトストレージ〜
key: akamai-object-storage
tags:
  - Object Storage
  - Cloud Storage
  - S3 Compatible
company: Akamai
---

[Akamai Object Storage](https://www.akamai.com/products/object-storage)は、CDNとして有名なAkamaiが提供するオブジェクトストレージです。元々はLinodeで提供されていたサービスで、買収後にAkamai Object Storageと名前を変更しているようです。

[![Akamai Object StorageのWebサイト](/img/services/akamai-object-storage.jpg)](https://www.akamai.com/products/object-storage)

<!--more-->

## 特徴

Akamai Object Storageの特徴は次の通りです。

- S3互換のAPIを提供
- バケットあたり5PBまで保存可能
- 毎秒20,000リクエストまで処理可能

Akamai Object Storageは、作成したバケットに対してAkamaiのCDNを適用できます。

![Akamai Object Storageのダッシュボード](/img/services/akamai-object-storage-2.jpg)

## 料金

料金はストレージ容量による従量課金です。最低250GB、アウトバウンド1TBで月額5ドルとなっています。

[Cloud Computing Services \| Linode \(now Akamai\) Pricing](https://www.linode.com/pricing/#object-storage)

## MOONGIFTはこう見る

Akamai Object Storageは元々Linodeで提供されていたサービスです。Linode自体は安価なVPSとして知られており、オブジェクトストレージについても安価だったようです。最低5ドルからではありますが、アウトバウンドも含まれており、十分な容量であれば割安なようです。

Akamaiの各種サービスを使っている場合や、Linodeのサーバーを使っている場合に便利ではないでしょうか。

[Object Storage \| Akamai](https://www.linode.com/products/object-storage/)