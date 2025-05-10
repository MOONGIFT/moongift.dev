---
title: World ID
date: 2025-05-05
key: world-id
title_meta: World ID 〜分散型IDプロバイダー〜
tags:
  - World
  - Authentication
  - OpenID Connect
---

World IDは、[World](https://world.org/)が提供する分散型IDプロバイダーです。OpenID Connectをサポートしています。AI時代のための、「人間であること」を安全かつ匿名で証明します。

[![World IDのWebサイト](/img/services/world-id.jpg)](https://world.org/world-id)

<!--more-->

World IDはFace Authと呼ばれる認証技術を利用します。Orbと呼ばれるスキャンデバイスを用いて、虹彩情報を登録します。登録情報自体は、Worldアプリを使って、外部認証などに利用できます。

データはスマートフォンのローカルに保存されており、プライバシーに配慮された形で行われます。

<iframe width="560" height="315" src="https://www.youtube.com/embed/4IoX7vw4qac?si=ZMyfS7k-qqDZJU61" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## ドキュメント

World IDのドキュメントは、[World ID \| World Docs](https://docs.world.org/world-id)にて確認できます。基本的にはOpenID Connectプロバイダーとして、認証に利用する形になります。

React向けには、[IDKit](https://docs.world.org/world-id/reference/idkit)が公開されています。

## 開発者ポータル

WorldにはWorld IDやミニアプリの開発に利用する、開発者ポータルが用意されています。

![](/img/services/world-id-2.jpg)

## MOONGIFTはこう見る

World IDが注目されているのは、OpenAIのオルトマン氏が関わっているからでしょう。ただ、AI時代になって、さまざまなフェイクニュースやAIによって生成されたメディアが溢れていたり、ソーシャルメディアでも自動化された攻撃が行われている状況を鑑みると、「人間であること」を保証する動きは興味深いものがあります。

なお、実際にOrbで登録してみた体験としては、若干面倒（アプリの操作と、虹彩情報の登録など）でした。一般に普及するのは、ちょっと難しそうな印象があります。Orbデバイス自体もまだ多くないため、UX含めて改善を期待したいところです。

[World ID by World \- Digital proof of human for the internet\.](https://world.org/world-id)