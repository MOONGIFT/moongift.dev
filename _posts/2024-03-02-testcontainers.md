---
title: Testcontainers
key: testcontainers
tags:
  - Test
  - Container
  - OSS
cover: /assets/images/testcontainers.jpg
comment: true
---

Testcontainersはテストの依存関係をコンテナによって解決するオープンソース・ソフトウェアです。コンテナの定義や起動をコードで記述するのが特徴です。

[![TestcontainersのWebサイト](/assets/images/testcontainers.jpg)](https://testcontainers.com/)

<!--more-->

## 特徴

Testcontainersは下記の言語に対応しています。

- Java
- Go
- .NET
- Node.js
- Python
- Rust
- Haskell
- Ruby
- Clojure
- Elixir

たとえば、Node.jsであれば以下のようにコンテナの定義と起動を行います。

```javascript
const redis = await new GenericContainer("redis:5.0.3-alpine")
    .withExposedPorts(6379)
    .withWaitStrategy(Wait.forLogMessage("Ready to accept connections"))
    .start();
```

後はユニットテストを実行するだけです。起動したコンテナは、テストが完了すると破棄されます。

## ユースケース

Testcontainersのサイトで上がっているユースケースは以下の通りです。

1. データベースなどが関連するインテグレーションテスト
2. UI/受け入れテスト
3. アプリケーション統合テスト

## クラウドサービス

Testcontainersはオープンソース・ソフトウェアですが、クラウドサービスも提供されています。

![Testcontainers Cloud](/assets/images/testcontainers.jpg)

[Testcontainers Cloud](https://testcontainers.com/cloud/)

月間300分までは無料で利用できます。それ以上になると、月35ドル + 0.02ドル/分となります。

## デスクトップアプリ

Testcontainersではローカル・クラウドで使えるデスクトップアプリがあります。Windows、Mac、Linuxに対応しています。

[Download the free Testcontainers Desktop app](https://testcontainers.com/desktop/)

## URL

[Testcontainers](https://testcontainers.com/)
