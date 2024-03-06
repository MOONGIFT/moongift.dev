---
title: Cloudflare Pages
key: cloudflare-pages
tags:
  - Hosting
  - Static site
cover: /assets/images/cloudflare-pages.jpg
comment: true
---

[Cloudflare Pages](https://www.cloudflare.com/ja-jp/developer-platform/pages/)はCloudflareが提供する静的サイトホスティングサービスです。[Cloudflare Workers](https://moongift.dev/2024/02/07/cloudflare-workers)と連携可能で、動的なコンテンツも提供できます。

[![Cloudflare PagesのWebサイト](/assets/images/cloudflare-pages.jpg)](https://www.cloudflare.com/ja-jp/developer-platform/pages/)

<!--more-->

## 特徴

Cloudflare Pagesはコマンドでデプロイしたり、GitHubなどのリポジトリと連携してコンテンツの更新を行えます。他のサービスと違う点として、CDNでありながらコンテンツが即座に反映される点が挙げられます。

リポジトリと連携する場合、ブランチを指定することでメインサイトへ反映することも、独自のURLへの反映のみに留めることもできます。これにより、開発途中のサイトをデプロイしてメンバーで確認するといったことが可能です。

Cloudflare PagesはNext.jsアプリの構築も可能ですが、Vercelのものとは若干実装で工夫が必要なので注意してください。

## 利用

当サイト、MOONGIFT.devもCloudflare Pages上にデプロイしています。当サイトはRuby製の静的サイトジェネレータであるJekyllを使っていますが、下記のようなコマンドによって問題なくデプロイできます。 `_site` はJekyllがビルドした静的ファイルが格納されるフォルダです。

```sh
JEKYLL_ENV=production bundle exec jekyll build && wrangler pages deploy _site
```

デプロイ時には[Wrangler \(command line\)](https://developers.cloudflare.com/workers/wrangler/)を利用します。このコマンドをGitHub Actionsなどで実行すれば、CI/CDを構築できます。

![](/assets/images/cloudflare-pages-2.jpg)

## 料金

Cloudflare Pagesは無料で利用できます。多少の制限はありますが、個人や小規模なプロジェクトには十分な機能を提供しています。

- 一度に1ビルド
- 月500回のビルドまで

リクエスト数や帯域幅は無制限です。

有料プランは月20ドルのProプラン、または月200ドルのBusinessプランになります。

## URL

[フル スタックアプリケーション \| Cloudflare](https://www.cloudflare.com/ja-jp/developer-platform/pages/)
