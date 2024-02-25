---
title: Let's Encrypt
key: letsencrypt
tags:
  - SSL
  - TLS
  - ACME
  - Certificate
cover: /assets/images/letsencrypt.jpg
comment: true
---

[Let's Encrypt](https://letsencrypt.org/)は無償で利用できるSSL/TLS証明書を提供しています。証明書の発行や更新が自動化されているため、手間がかかりません。多くの場合、対応ライブラリを使って発行・更新手順を自動化しています。

[![Let's EncryptのWebサイト](/assets/images/letsencrypt.jpg)](https://letsencrypt.org/)

<!--more-->

Let's Encryptの原則は以下の6つにまとめられています。

1. 無料
2. 自動化
3. セキュア
4. 透明性
5. オープン
6. 協力的

Let's EncryptではACMEというプロトコルを使って証明書の発行や更新を行っています。ACMEはAutomatic Certificate Management Environmentの略で、証明書の発行や更新を自動化するためのプロトコルです。[RFC 8555 \- Automatic Certificate Management Environment \(ACME\)](https://datatracker.ietf.org/doc/html/rfc8555)で標準化されています。

プロトコルの詳細は[動作の仕組み \- Let's Encrypt \- フリーな SSL/TLS 証明書](https://letsencrypt.org/ja/how-it-works/)にて確認できます。

## 特徴

Let's Encryptの特徴は以下の通りです。

- 無料
- 90日間有効
- マルチドメイン対応

基本的にモダンなブラウザであれば利用できますが、Android 2.3.6以下では使えなかったり、NINTENDO 3DSやPS3では利用できません。昔の端末からサポートする場合には注意が必要です。

## URL

[Let's Encrypt - フリーな SSL/TLS 証明書](https://letsencrypt.org/ja/)
