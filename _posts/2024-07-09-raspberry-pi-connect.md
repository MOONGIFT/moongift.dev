---
title: Raspberry Pi Connect
key: raspberry-pi-connect
catch: Raspberry Pi公式のリモートアクセスサービス
tags:
  - Remote
  - Raspberry Pi
  - Desktop
  - Terminal
  - IoT
cover: /assets/images/raspberry-pi-connect.jpg
comment: true
---

[Raspberry Pi Connect](https://www.raspberrypi.com/documentation/services/connect.html)は、Raspberry Piの提供するリモートコネクトサービスです。ブラウザを使って、リモートからRaspberry Piにアクセスできます。

[![Raspberry Pi ConnectのWebサイト](/assets/images/raspberry-pi-connect.jpg)](https://www.raspberrypi.com/documentation/services/connect.html)

<!--more-->

## 特徴

Raspberry Pi Connectの特徴は以下の通りです。

- Raspberry Pi OS Bookworm以降に対応
- 現時点（2024年7月）では無料、かつベータ
- ブラウザから利用する

Raspberry Pi Connectを実行すると、 `https://connect.raspberrypi.com/verify/XXXX-XXXX` のようなURLが発行されます。このアドレスにブラウザからアクセスすれば、リモートデスクトップまたはリモートシェルを実行できます。どちらもブラウザからの利用です。画面共有にはVNCが使われています。

雰囲気としてはGoogleリモートデスクトップに近そうです。

## 料金

Raspberry Pi Connectは現時点ではベータであり、無料で利用できます。

## URL

[Raspberry Pi Connect](https://www.raspberrypi.com/documentation/services/connect.html)
