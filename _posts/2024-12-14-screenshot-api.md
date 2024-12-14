---
title: Screenshot API
key: screenshot-api
catch: Webサイトのスクリーンショットを取得するAPI
tags:
  - API
  - Screenshot
  - WhoisXML
cover: /assets/images/screenshot-api.jpg
comment: true
---

[Screenshot API](https://website-screenshot.whoisxmlapi.com/api)は、WhoisXML APIが提供するWebサイトのスクリーンショットを取得するためのAPIです。Chromeベースのブラウザを使用して、Webサイトのスクリーンショットを取得できます。

[![Screenshot APIのWebサイト](/assets/images/screenshot-api.jpg)](https://website-screenshot.whoisxmlapi.com/api)

<!--more-->

## 特徴

Screenshot APIの特徴は次の通りです。

- Chromeベースのブラウザを使用してスクリーンショットを取得
- 画像はJPEGまたはPNG、PDFで取得可能
- レスポンシブ対応

Screenshot APIは、レスポンシブに対応しつつユーザーエージェントの変更も可能で、モバイルデバイスのスクリーンショットを取得も可能です。キャプチャのタイミングも指定でき、JavaScriptの実行も可能です。

## API

Screenshot APIは名前の通り、APIを公開しています。基本形は以下のようになります。

```
GET https://website-screenshot.whoisxmlapi.com/api/v1?apiKey=YOUR_API_KEY&url=google.com&credits=DRS
```

[Making requests \| Documentation \| Screenshot API \| WhoisXML API](https://website-screenshot.whoisxmlapi.com/api/documentation/making-requests)

## 料金

Screenshot APIは、月間500リクエストまで無料です。その後、1,000リクエストまでで19ドルとなります。それ以上のプランも用意されています。

[Pricing \| Screenshot API \| WhoisXML API](https://website-screenshot.whoisxmlapi.com/api/pricing)

## URL

[Screenshot API \| WhoisXML API](https://website-screenshot.whoisxmlapi.com/api)
