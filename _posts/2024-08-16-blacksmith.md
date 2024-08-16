---
title: Blacksmith
key: blacksmith
catch: GitHub Actionsの実行を2倍高速化
tags:
  - GitHub
  - GitHub Actions
  - CI/CD
  - DevOps
cover: /assets/images/blacksmith.jpg
comment: true
---

[Blacksmith](https://www.blacksmith.sh/)は、GitHub Actionsの実行を2倍高速化するサービスです。ゲーミングCPUを搭載したインスタンスを利用することで、実行時間を短縮できます。

[![BlacksmithのWebサイト](/assets/images/blacksmith.jpg)](https://www.blacksmith.sh/)

<!--more-->

## 特徴

Blacksmithの特徴は以下の通りです。

- GitHub Actionsの実行時間を2倍高速化
- コストは半分
- あらゆる規模のランナーに対応

Blacksmithは、既存のGitHub Actionsの設定にある `runs-on: ubuntu-latest` を `runs-on: blacksmith-4vcpu-ubuntu-220` に変更するだけで利用できます。既存のCI環境に影響を与えずに、効果を得られます。

## 料金

Blacksmithの料金は、vCPU数と実行時間によって異なります。また、x64とARMの選択肢があります。

[Pricing - Blacksmith](https://www.blacksmith.sh/pricing)

## URL

[Blacksmith](https://www.blacksmith.sh/)
