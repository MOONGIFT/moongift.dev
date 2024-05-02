---
title: Playwright
key: playwright
catch: 多数のOSとブラウザに対応したブラウザ自動化ツール
tags:
  - Test
  - Browser
  - Node.js
  - TypeScript
  - Python
  - .NET
  - Java
  - Automation
cover: /assets/images/playwright.jpg
comment: true
---

[Playwright](https://playwright.dev/)は、ブラウザの自動化ツールです。Playwrightを利用することで、ブラウザの操作を自動化してテストできます。PlaywrightはChrome、Firefox、WebKitに対応しており、ブラウザの違いを意識せずにUIテストを実行できます。

[![PlaywrightのWebサイト](/assets/images/playwright.jpg)](https://playwright.dev/)

<!--more-->

## 特徴

Playwrightは以下のブラウザエンジンに対応しています。

- Chromium
- Firefox
- WebKit

Chromiumに対応しているので、Google ChromeやMicrosoft Edge、Operaなどのブラウザに対応しています。また、FirefoxやSafariにも対応しており、モダンなブラウザであれば問題なく利用できます。

### OS

対応OSは以下の通りです。

- Windows
- macOS
- Linux
- Android（Google Chrome）
- iOS（Safari）

さらにヘッドレスでも動作し、CIと組み合わせた利用も可能です。

### API

PlaywrightはNode.jsの他、TypeScript、Python、.NET、Javaで利用できます。

```tsx
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
```

## 料金

Playwrightはオープンソースで提供されており、無料で利用できます。

## URL

[Fast and reliable end-to-end testing for modern web apps \| Playwright](https://playwright.dev/)
