---
title: GeoSpy
title_meta: GeoSpy - AI-Powered Photo Location Identification
key: geospy
tags:
  - AI
  - Image
  - Geolocation
---

[GeoSpy](https://geospy.ai/) is a service that uses AI to instantly identify the location of a photo. It can identify locations such as accident scenes, buildings, and natural landscapes, based on the background of the photo.

[![GeoSpy's website](/img/services/geospy.jpg)](https://geospy.ai/)

<!--more-->

## Features

The features of GeoSpy are as follows:

- Identify the location of a photo
- In addition to location information, identify the location with AI

GeoSpy identifies the location of a photo based on the background of the photo. If buildings or other objects can be identified, it provides a very accurate location.

## API

Using the GeoSpy API, you can specify the URL of an image to get location information and address.

[GeoSpy API \- AI Powered Intel](https://api.geospy.ai/)

The sample code is as follows:

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

## Demo

The demo is available at [GeoSpy \| Interactive Map](https://app.geospy.ai/). Note that the photo is selected from pre-specified photos, and you cannot upload it freely.

[![GeoSpy's demo](/img/services/geospy-2.jpg)](https://app.geospy.ai/)

Other sample codes are available at [geospy\-api\-samples/examples at main · Graylark\-io/geospy\-api\-samples](https://github.com/Graylark-io/geospy-api-samples/tree/main/examples).

## Pricing

GeoSpy is provided for government and law enforcement agencies at a fee. Please contact us for the price.

## MOONGIFT Eye

The atmosphere is like that of AI version of GeoGuessr. It accurately identifies the location of a photo based on the photo. The clues are the soil, vegetation, objects, and environmental information. Therefore, GeoSpy is said to be more accurate for outdoor photos.

## URL

[GeoSpy \| Find a Photo's Location Instantly](https://geospy.ai/)
