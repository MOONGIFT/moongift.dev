---
title: Cloudflare R2
title_meta: Cloudflare R2 - S3-Compatible Object Storage by Cloudflare
key: cloudflare-r2
tags:
  - S3 Compatible
  - Cloud Storage
  - Object Storage
company: Cloudflare
clone: amazon-s3
---

[Cloudflare R2](https://www.cloudflare.com/ja-jp/developer-platform/r2/) is a cloud object storage service provided by Cloudflare. It enables high-speed data transfer with no egress costs (outbound data transfer fees).

[![Cloudflare R2 Website](/img/services/cloudflare-r2.jpg)](https://www.cloudflare.com/ja-jp/developer-platform/r2/)

<!--more-->

## Features

Here are the key features of Cloudflare R2:

- AWS S3-compatible API
- No region specification required
- Integration with Cloudflare Workers

The absence of egress costs means not only is it more cost-effective compared to other object storage services, but it also makes migration easier. This makes it a service that minimizes vendor lock-in.

## Pricing

R2 pricing is based on pay-as-you-go for storage usage and requests. You can simulate costs using the [R2 Calculator](https://r2-calculator.cloudflare.com/jp/).

[Pricing \| Cloudflare R2 docs](https://developers.cloudflare.com/r2/pricing/)

## MOONGIFT Eye

The biggest advantage of Cloudflare R2 is its zero egress costs. This makes it particularly suitable for storing media files like images that are frequently downloaded. However, it may not be the best choice for backup purposes.

[Cloudflare R2 \| Zero Egress Object Storage \| Cloudflare](https://www.cloudflare.com/ja-jp/developer-platform/r2/)
