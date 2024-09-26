---
title: Cloudflare R2
key: cloudflare-r2
catch: Cloudflare提供のS3互換のオブジェクトストレージ
tags:
  - Cloudflare
  - Storage
  - Amazon S3
cover: /assets/images/cloudflare-r2.jpg
comment: true
---

[Cloudflare R2](https://www.cloudflare.com/ja-jp/developer-platform/r2/)は、Cloudflareの提供するクラウドオブジェクトストレージです。エグレスコスト（下り通信料）なしで、高速なデータ転送が可能です。

[![Cloudflare R2のWebサイト](/assets/images/cloudflare-r2.jpg)](https://www.cloudflare.com/ja-jp/developer-platform/r2/)

<!--more-->

## 特徴

Cloudflare R2の特徴は以下の通りです。

- AWS S3互換のAPIを提供
- リージョン指定不要
- Cloudflare Workersとの連携

下り通信料がかからないということは、他のオブジェクトストレージと比べて安価であるのはもちろんのこと、移行も容易ということです。そのため、ベンダーロックインが発生しづらいサービスとなっています。

## 料金

R2の料金はストレージ利用量やリクエストによる従量課金になります。[R2 Calculator](https://r2-calculator.cloudflare.com/jp/)にて料金をシミュレーションできます。

[Pricing \| Cloudflare R2 docs](https://developers.cloudflare.com/r2/pricing/)

## URL

[Cloudflare R2 \| エグレス料金ゼロのオブジェクトストレージ \| Cloudflare](https://www.cloudflare.com/ja-jp/developer-platform/r2/)
