---
title: Cloudflare Pages
key: cloudflare-pages
title_meta: Cloudflare Pages 〜高速な静的ホスティングサービス〜
tags:
  - Cloudflare
  - Hosting
  - Static site
---

[Cloudflare Pages](https://pages.cloudflare.com/)はCloudflareが提供する静的サイトホスティングサービスです。[Cloudflare Workers](https://moongift.dev/ja/services/cloudflare-workers/)と連携可能で、動的なコンテンツも提供できます。

[![Cloudflare PagesのWebサイト](/img/services/cloudflare-pages.jpg)](https://pages.cloudflare.com/)

<!--more-->

## 特徴

Cloudflare Pagesはコマンドでデプロイしたり、GitHubなどのリポジトリと連携してコンテンツの更新を行えます。他のサービスと違う点として、CDNでありながらコンテンツが即座に反映される点が挙げられます。

リポジトリと連携する場合、ブランチを指定することでメインサイトへ反映することも、独自のURLへの反映のみに留めることもできます。これにより、開発途中のサイトをデプロイしてメンバーで確認するといったことが可能です。

Cloudflare PagesはNext.jsアプリの構築も可能ですが、Vercelのものとは若干実装で工夫が必要なので注意してください。

## 利用

当サイト、MOONGIFT.devもCloudflare Pages上にデプロイしています。当サイトはNode.js製のDocusaurusを使っていますが、下記のようなコマンドによって問題なくデプロイできます。 `build` はDocusaurusがビルドした静的ファイルが格納されるフォルダです。

```bash
npm run build && wrangler pages deploy build
```

デプロイ時には[Wrangler \(command line\)](https://developers.cloudflare.com/workers/wrangler/)を利用します。このコマンドをGitHub Actionsなどで実行すれば、CI/CDを構築できます。

![](/img/services/cloudflare-pages-2.jpg)

## ドキュメント

Cloudflare Pagesのドキュメントは[Overview · Cloudflare Pages docs](https://developers.cloudflare.com/pages/)にあります。

## API

Cloudflare PagesはAPIを提供しています。[REST API · Cloudflare Pages docs](https://developers.cloudflare.com/pages/configuration/api/)に、APIドキュメントがあります。

## 料金

Cloudflare Pagesは無料で利用できます。多少の制限はありますが、個人や小規模なプロジェクトには十分な機能を提供しています。

- 一度に1ビルド
- 月500回のビルドまで

リクエスト数や帯域幅は無制限です。

有料プランは月20ドルのProプラン、または月200ドルのBusinessプランになります。

## MOONGIFTはこう見る

当サイトは、Cloudflare Pagesにて構築されています。Docusaurusなので、静的なホスティングのみですが、もし動的な仕組みが欲しければ[Cloudflare Workers](https://moongift.dev/ja/services/cloudflare-workers/)と組み合わせれば実現できます。

Cloudflare Pagesの魅力は圧倒的な低価格と、CLIを通じた開発体験の良さです。カスタムドメインを含めて、開発者であればすぐに使いこなせるでしょう。

[Cloudflare Pages](https://pages.cloudflare.com/)
