---
title: WebContainers
key: webcontainers
tags:
  - WebAssembly
  - Node.js
  - Dev Environment
cover: /assets/images/webcontainers.jpg
comment: true
---

WebContainersは、ブラウザ上で動くNode.js環境を提供します。ターミナルも利用でき、npmでライブラリをインストールすることもできます。実体はWebAssemblyであり、モダンなブラウザであれば問題なく利用できます。

[![WebContainersのWebサイト](/assets/images/webcontainers.jpg)](https://webcontainers.io/x)

<!--more-->

## 特徴

WebContainersはStackBlitzが開発しているオープンソース・ソフトウェアになります。利用時には npm でインストールします。

```bash
npm i @webcontainer/api
```

StackBlitzの中でも使われており、ローカルブラウザだけで開発を行えます。HTTPサーバーも立ち上がるので、Webアプリケーションの開発にもトライできます。

ファイルシステムは独自のJSON形式で渡す必要があります。

```js
const files = {
  // This is a file - provide its path as a key:
  'package.json': {
    // Because it's a file, add the "file" key
    file: {
      // Now add its contents
      contents: `
        {
          "name": "vite-starter",
          "private": true,
         // ...
          },
          "devDependencies": {
            "vite": "^4.0.4"
          }
        }`,
    },
  },
};
```

似たような技術はありますが、WebContainersはサードパーティーのライブラリがインストールできるのが特徴です。npmやpnpm、yarnが利用できます。

## 料金

WebContainersはオープンソース・ソフトウェアなので、無料で利用できます。

## URL

[WebContainers \- Dev environments\. In your web app\. \| WebContainers](https://webcontainers.io/)
