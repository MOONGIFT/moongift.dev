---
title: Passwordless.dev
key: passwordless.dev
catch: パスワードレス認証サービス
tags:
  - WebAuthn
  - FIDO2
  - Authentication
cover: /assets/images/passwordless.dev.jpg
comment: true
---

[Passwordless.dev](https://bitwarden.com/products/passwordless/)は、Bitwardenが提供するパスワードレス認証サービスです。数行のコードを記述するだけで、パスワードレス認証（Passkeys）を導入できます。

[![Passwordless.devのWebサイト](/assets/images/passwordless.dev.jpg)](https://bitwarden.com/products/passwordless/)

<!--more-->

## 特徴

Passwordless.devの特徴は以下の通りです。

- 数行のコードでパスワードレス認証（Passkeys）を導入
- FIDO2 WebAuthnに対応

Passwordless.devを使って登録するフローは以下の通りです。

```typescript
// Instantiate a passwordless client using your API public key.
const p = new Passwordless.Client({
  apiKey: 'myapplication:public:4364b1a49a404b38b843fe3697b803c8'
});

// Fetch the registration token from the backend.
const backendUrl = 'https://localhost:8002';
const registerToken = await fetch(backendUrl + '/create-token?userId' + userId).then((r) =>
  r.json()
);

// Register the token with the end-user's device.
const { token, error } = await p.register(registerToken);
```

## 料金

Passwordless.devは、10,000ユーザーまで無料です。プロプランは月間0.05ドル/ユーザーとなっています。また、現在実験的にDockerイメージを提供しています。

[Self\-hosting \| Passwordless\.dev Documentation](https://docs.passwordless.dev/guide/self-hosting.html)

## URL

[Bitwarden Passwordless.dev - Passwordless Authentication \| Bitwarden](https://bitwarden.com/products/passwordless/)
