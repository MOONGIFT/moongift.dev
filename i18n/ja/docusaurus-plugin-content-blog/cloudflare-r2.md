---
title: Cloudflare R2
title_meta: Cloudflare R2 〜 Cloudflare提供のS3互換オブジェクトストレージ〜
key: cloudflare-r2
tags:
  - S3 Compatible
  - Cloud Storage
  - Object Storage
company: Cloudflare
---

[Cloudflare R2](https://www.cloudflare.com/ja-jp/developer-platform/r2/)は、Cloudflareの提供するクラウドオブジェクトストレージです。エグレスコスト（下り通信料）なしで、高速なデータ転送が可能です。

[![Cloudflare R2のWebサイト](/img/services/cloudflare-r2.jpg)](https://www.cloudflare.com/ja-jp/developer-platform/r2/)

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

## MOONGIFTはこう見る

Cloudflare R2は、下りの通信料金がゼロであることが大きなメリットです。そのため、ダウンロードされることが多い、画像のようなメディアファイルの保存に適しています。逆に、バックアップ用途など、適さない場合もあるでしょう。

[Cloudflare R2 \| エグレス料金ゼロのオブジェクトストレージ \| Cloudflare](https://www.cloudflare.com/ja-jp/developer-platform/r2/)
