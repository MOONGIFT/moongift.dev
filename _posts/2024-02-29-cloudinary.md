---
title: Cloudinary
key: cloudinary
tags:
  - Image
  - Video
  - AI
cover: /assets/images/cloudinary.jpg
comment: true
---

[Cloudinary](https://cloudinary.com/)は画像や動画の加工や解析、CDN配信を提供するサービスです。プログラマブルに、動的にメディアを加工できます。また、AIを使った画像・動画解析も提供しています。

[![CloudinaryのWebサイト](/assets/images/cloudinary.jpg)](https://cloudinary.com/)

<!--more-->

## 特徴

Cloudinaryは指定された形式に沿ってURLを指定することで、画像を加工したり、指定した文字を挿入した画像を生成できます。OGP画像を動的に生成するのによく用いられています。

[Image Transformations for Developers \| Cloudinary](https://cloudinary.com/documentation/image_transformations)

そして、画像加工は単純な指定だけではなく、特定のオブジェクトを消したり、メインとなるオブジェクトを軸にしたトリミングなど、高度な加工も可能です。

Generative Fillという機能では、画像の一部を指定して、その部分を埋めるように新しい画像を生成することができます。また、画像をズーム・パンする動画やアニメーションGIFを生成する機能もあります。アップスケール機能も便利です。

Video APIでは動的な動画エンコードや、動画のトリミング、リサイズ、フィルター、エフェクト、テキストの挿入などが可能です。スマートクリッピングは、動画の中から最も重要な部分を抽出する機能です。

## SDK

URLを適切に指定するのは大変ですが、SDKが用意されていますので、それを利用することで簡単に画像や動画の加工ができます。SDKは下記言語に対応しています。

- JavaScript
- Python
- PHP
- Ruby
- Java
- .NET
- Go

モバイル向けのSDKもあります。

- iOS
- Android
- Dart
- React Native
- Kotlin
- Flutter

[Community\-Developed Libraries for Cloudinary \| Cloudinary](https://cloudinary.com/documentation/community_sdks)

## 料金

Cloudinaryは無料から利用できます。月間25,000回の変換が可能です。また、無料の場合はストレージ容量などに制限があります。有料になると、月89ドルになります。その上位プランやカスタマイズプランも用意されています。

[Cloudinary \- Pricing and Plans](https://cloudinary.com/pricing)

## URL

[Image and Video Upload, Storage, Optimization and CDN](https://cloudinary.com/)
