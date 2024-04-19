---
title: SimpleLogin
key: simplelogin
catch: オープンソースの匿名メールアドレスサービス
tags:
  - Email
  - Security
  - Privacy
cover: /assets/images/simplelogin.jpg
comment: true
---

[SimpleLogin](https://simplelogin.io/)は、オープンソースの匿名メールアドレスサービスです。受信はもちろん、送信もこのエイリアスドメインから行えます。サービス毎に異なるエイリアスアカウントを作成することで、スパムやフィッシングメールがどこから送られてきたかも判別できます。

[![SimpleLoginのWebサイト](/assets/images/simplelogin.jpg)](https://simplelogin.io/)

<!--more-->

## 特徴

SimpleLoginはSign in with Appleのように、エイリアスメールアドレスを簡単に作成できるサービスです。生成されたメールアドレス宛に送信されたメールは元々のメールアドレスに転送されます。そこで返信をしても、元々のメールアドレスは隠蔽されているので安全です。

スマートフォンアプリやブラウザ機能拡張を使って、素早くエイリアスアドレスが作れるので、各Webサービスやアプリごとに異なるメールアドレスを設定できます。

SimpleLoginではカスタムドメインが設定できる他、セルフホスティングも可能です。プレミアムプランではPGP暗号化もサポートしています。

## API

SimpleLoginの各種操作はAPIからもできます。別なシステムとの連携も容易でしょう。

[app/docs/api.md at master · simple-login/app](https://github.com/simple-login/app/blob/master/docs/api.md)

## 料金

SimpleLoginはオープンソース・ソフトウェアなので、セルフホスティングすれば無料で利用できます。また、クラウド版でも10エイリアスまでは無料で利用できます。それ以上の場合は年間30ドル（月4ドル）で利用できます。

[SimpleLogin \| Pricing](https://simplelogin.io/pricing/)

## URL

[SimpleLogin \| Open source anonymous email service](https://simplelogin.io/)
