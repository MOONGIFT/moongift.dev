---
title: Artifacts
key: artifacts
catch: APIを使って操作するMMOゲーム
tags:
  - Game
  - API
  - Online
cover: /assets/images/artifacts.jpg
comment: true
---

[Artifacts](https://artifactsmmo.com/)は、APIを使って操作するMMO（Massively Multiplayer Online）ゲームです。任意のプログラミング言語でキャラクターを操作できます。

[![ArtifactsのWebサイト](/assets/images/artifacts.jpg)](https://artifactsmmo.com/)

<!--more-->

## 特徴

Artifactsの特徴は以下の通りです。

- APIを使って操作
- マルチプレイヤーゲーム

各ゲームはサンドボックスになっており、同時に5つのキャラクターまで操作できます。HTTP APIなので、プログラミング言語を問わず操作、遊べます。戦闘、イベント、スキルなどさまざまなゲーム要素があります。

Pythonでのコード例です。

```python
import requests
url = "https://api.artifactsmmo.com/my/name/action/fight"
headers = {	
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer token"
}
response = requests.post(url, headers=headers)
print(response.json())
```

## 料金

Artifactsは無料で利用できます。

## URL

[Artifacts - API-Based MMORPG](https://artifactsmmo.com/)
