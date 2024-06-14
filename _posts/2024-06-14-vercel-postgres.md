---
title: Vercel Postgres
key: vercel-postgres
catch: Vercelが提供するスケーラブルなPostgreSQL
tags:
  - Vercel
  - PostgreSQL
  - Database
  - Next.js
  - Nuxt
  - SvelteKit
cover: /assets/images/vercel-postgres.jpg
comment: true
---

[Vercel Postgres](https://vercel.com/storage/postgres)は、スケーラブルなPostgreSQLデータベースを提供するサービスです。[Neon](https://moongift.dev/2024/04/01/neon)と提携して提供されています。

[![Vercel PostgresのWebサイト](/assets/images/vercel-postgres.jpg)](https://vercel.com/storage/postgres)

<!--more-->

## 特徴

Vercel Postgresはフルマネージドデータベースであり、Vercel Functionsからも利用できます。Next.jsで使う場合には、サーバー側で実行するかたちになります。以下はSQLを直接実行していますが、PrismaやKyselyをORMとして使うこともできます。

```jsx
import { sql } from '@vercel/postgres';
import { redirect } from 'next/navigation';

async function create(formData: FormData) {
  'use server';
  const { rows } = await sql`
    INSERT INTO products (name)
    VALUES (${formData.get('name')})
  `;
  redirect(`/product/${rows[0].slug}`);
}

export default function Page() {
  return (
    <form action={create}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

また、Next.jsだけでなく、SvelteKitやNuxtでも利用できます。

## 料金

Vercel Postgresは、Vercelのプラン（HobbyとProプラン）に含まれています。実行時間、書き込みデータ、データベース数、転送量、ストレージなどによって従量課金になります。

[Vercel Pro Plan](https://vercel.com/docs/accounts/plans/pro)

## URL

[Vercel Postgres: Scalable SQL for the web - Vercel](https://vercel.com/storage/postgres)
