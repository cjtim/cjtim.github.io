---
title: "Crypto Portfolio Tracking and Notification"
pubDate: 2023-11-03
description: "Effortlessly track your Crypto portfolio"
author: "Tim Jinna"
image:
  url: "/assets/projects/4/architecture.png"
  alt: "The full Astro logo."
tags:
  [
    "python",
    "golang",
    "microservice",
    "learning in public",
  ]
---


## Introduction

In 2021, I ventured into the world of cryptocurrency. With the volatile nature of crypto prices, I wanted a reliable way to track my portfolio and summarize my assets. To address this, I developed a bot to notify me through Excel picture files. This solution combines Golang, Python, the Pandas library, and the Binance API.

|                Customization                |        Notification Message         |
| :-----------------------------------------: | :---------------------------------: |
| ![](/assets/projects/4/customize.PNG) | ![](/assets/projects/4/message.PNG) |

## Technologies Used in This Project

1. **Next.js** - Deployed on Vercel: [https://liff.cjtim.com](https://liff.cjtim.com)
2. **LINE Frontend Framework** - Facilitates seamless login within the LINE application. [Docs](https://developers.line.biz/en/docs/liff/overview/)
3. **Binance API** - Used to fetch cryptocurrency prices.
4. **Golang** - [GitHub Repository](https://github.com/cjtim/cjtim-backend-go)
5. **MongoDB** - Utilized for mapping LINE user IDs and storing Binance API keys.
6. **Python and Pandas** - Responsible for creating Excel pictures and streaming binary data to the LINE Notify API. https://github.com/cjtim/line-notify-binance-asset
7. **LINE Notify** - The notification API.
8. **Kubernetes** - The deployment platform.
9. **GitLab CI** - Used for containerization, pushing to container registry, and deployment to Kubernetes.

## How to Use It

1. Launch the web application: [https://liff.cjtim.com](https://liff.cjtim.com)
2. Enter the average price at which you purchased your crypto assets.
3. Paste your Binance API key and LINE Notify key.
4. Select the notification frequency.
