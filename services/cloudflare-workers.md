---
title: Cloudflare Workers
title_meta: Cloudflare Workers 〜 Serverless applications can be created with FaaS〜
key: cloudflare-workers
tags:
  - Cloudflare
  - FaaS
  - JavaScript
  - Serverless
  - Rust
  - C
  - "C++"
---

Cloudflare Workers is a FaaS (Function as a Service) provided by [Cloudflare](https://www.cloudflare.com/), known for its CDN services. You can create serverless applications using JavaScript and other languages. A free tier is available.

[![Cloudflare Workers Website](/img/services/cloudflare-workers.jpg)](https://workers.cloudflare.com/)

<!--more-->

After development, you can deploy using the dedicated `wrangler` command. Of course, it can also be integrated with GitHub Actions and other services. The deployed code gets an HTTPS URL, making it accessible from browsers and any programming language.

For actual usage, Node.js is required, and you use the `wrangler` command to create and manage projects.

```bash
npm create cloudflare -- my-app
cd my-app
npx wrangler deploy
```

This alone will generate a URL like `https://my-app.world.workers.dev`, allowing access to your deployed code. A different URL is generated for each deployment, making it convenient for testing deployed code.

You can also view the created functions in the dashboard, where you can check the number of requests and errors.

![Cloudflare Workers Dashboard](/img/services/cloudflare-workers-2.jpg)

## Documentation

Developer documentation is available at [Overview · Cloudflare Workers docs](https://developers.cloudflare.com/workers/).

## API

The API can be found at [Cloudflare API | Workers](https://developers.cloudflare.com/api/resources/workers/). However, since basic operations can be completed with the `wrangler` command, you rarely need to call the API directly.

## Pricing

The free tier includes:

- Up to 100,000 requests per day
- Up to 100 worker scripts
- Up to 10ms per request
- Higher latency for the first request
- Limited Workers KV capacity

The paid tier includes:

- All free tier conditions plus...
- Up to 30 seconds per request
- Consistently low latency
- Additional Workers KV capacity

Custom domains are also available.

## Supported Languages

The following languages can be executed:

- JavaScript
- Rust
- C
- C++

Note that the JavaScript engine is not Node.js but rather an engine that supports browser APIs. Legacy APIs like XMLHttpRequest are not supported.

## MOONGIFT's Perspective

The biggest appeal of Cloudflare Workers is undoubtedly its generous free tier. We use it in various projects, and it's actually difficult to exceed the free tier limits. Additionally, when combined with Cloudflare Pages, it's attractive for adding dynamic functionality to static sites.

As mentioned earlier, since it's based on browser APIs, there are some quirks to be aware of. However, once you get past that, it's a very attractive platform.

[Cloudflare Workers®](https://workers.cloudflare.com/)
