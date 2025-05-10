---
title: GeoSpy
title_meta: GeoSpy 〜写真から住所・位置情報を特定〜
key: geospy
date: 2025-05-06
tags:
  - AI
  - Image
  - Geolocation
---

[GeoSpy](https://geospy.ai/)は、AIを利用して写真の位置情報を瞬時に特定するサービスです。事故現場や建物、自然の風景など、写真の背景に写っている場所を特定できます。

[![GeoSpyのWebサイト](/img/services/geospy.jpg)](https://geospy.ai/)

<!--more-->

## 特徴

GeoSpyの特徴は以下の通りです。

- 写真から位置情報を特定
- 位置情報だけでなく、AIによる位置特定

GeoSpyでは、写真に写っている背景から位置情報を特定します。建物などが特定できる場合には、かなり精度の高い位置情報を提供します。

## API

GeoSpy APIを使うと、画像のURLを指定すれば位置情報や住所が取得できます。

[GeoSpy API \- AI Powered Intel](https://api.geospy.ai/)

サンプルコードは以下の通りです。

```python
import requests
import base64

image_path = "YOUR_IMAGE_PATH_HERE"
with open(image_path, "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read()).decode('utf-8')

url = f"https://dev.geospy.ai/predict?image={encoded_string}&top_k=5"
headers = {"Authorization": "Bearer YOUR_KEY_HERE"}

response = requests.post(url, headers=headers)

print(response.text)
```

## デモ

デモは[GeoSpy \| Interactive Map](https://app.geospy.ai/)にて利用できます。なお、写真はあらかじめ指定されたものからの選択で、自由にアップロードできる訳ではありません。

[![GeoSpyのデモ](/img/services/geospy-2.jpg)](https://app.geospy.ai/)

他、コードでのサンプルは[geospy\-api\-samples/examples at main · Graylark\-io/geospy\-api\-samples](https://github.com/Graylark-io/geospy-api-samples/tree/main/examples)に公開されています。

## 料金

GeoSpyは、政府や法執行機関向けにGeoSpy Proを有料で提供しています。料金は要問い合わせです。

## MOONGIFTはこう見る

雰囲気としては、AI版のGeoGuessrのような雰囲気です。写真をベースに、その位置情報を的確に特定します。手がかりとして、土壌と植生や写っているオブジェクト、環境情報を利用しているとのことです。そのため、GeoSpyとしては屋外の写真の方が精度が高いとしています。

## URL

[GeoSpy \| Find a Photo's Location Instantly](https://geospy.ai/)
