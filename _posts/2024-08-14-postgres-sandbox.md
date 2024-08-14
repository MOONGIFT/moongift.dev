---
title: Postgres Sandbox
key: postgres-sandbox
catch: LLMでPostgresのデータベーススキーマを作成
tags:
  - Database
  - Postgres
  - AI
  - LLM
cover: /assets/images/postgres-sandbox.jpg
comment: true
---

[Postgres Sandbox](https://postgres.new/)は、ブラウザ上でPostgresのデータベーススキーマを作成できるサービスです。AIを利用し、チャットを使ってデータベーススキーマを操作します。

[![Postgres SandboxのWebサイト](/assets/images/postgres-sandbox.jpg)](https://postgres.new/)

<!--more-->

## 特徴

Postgres Sandboxの特徴は以下の通りです。

- ブラウザで操作
- チャット（テキスト）でデータベーススキーマを生成
- スキーマをビジュアル化

スキーマは自然言語で生成します。日本語も利用可能ですが、日本語の変換確定のタイミングで送信されてしまうので注意してください。生成されたスキーマを確認して、足りないフィールドやリレーションがあれば追加できます。

できあがったスキーマは、PostgresのSQLファイルとしてダウンロードできます。

## 料金

Postgres Sandboxはオープンソース・ソフトウェアであり、無料で利用できます（ライセンスはApache License 2.0です）。

[supabase-community/postgres-new: In-browser Postgres sandbox with AI assistance](https://github.com/supabase-community/postgres-new)

## URL

[Postgres Sandbox](https://postgres.new/)
