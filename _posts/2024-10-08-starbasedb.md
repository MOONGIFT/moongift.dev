---
title: StarbaseDB
key: starbasedb
catch: エッジで利用するSQLite
tags:
  - SQLite
  - Edge
	- Cloudflare
	- OSS
cover: /assets/images/starbasedb.jpg
comment: true
---

[StarbaseDB](https://starbasedb.com/)は、CloudflareのDurable Objectsを利用し、エッジで動作するSQLiteを提供します。HTTPでSQLを実行できます。

[![StarbaseDBのWebサイト](/assets/images/starbasedb.jpg)](https://starbasedb.com/)

<!--more-->

## 特徴

StarbaseDBの主な特徴は以下の通りです。

- ベースはCloudflareのDurable Objects
- リクエストボディの中にSQLを指定して実行

StarbaseDBはCloudflare D1と似ていますが、D1とは異なり、アプリケーションコードとSQLコードはコロケーションされません。StarbaseDBは同じファイル内にデータベースを入れられます。

## 料金

StarbaseDBはオープンソース・ソフトウェアです。StarbaseDB自体は無償で利用できます。

[Brayden/starbasedb: HTTP SQLite scale\-to\-zero database on the edge built on Cloudflare Durable Objects\.](https://github.com/brayden/starbasedb)

ただしCloudflareのDurable Objectsに関する料金はかかります。

[Cloudflare Durable Objects](https://developers.cloudflare.com/durable-objects/)

## URL

[Starbase \| SQLite on the edge](https://starbasedb.com/)
