---
title: 'File Hosting and URL Shortener via LINE Chatbot'
pubDate: 2022-07-01
description: 'Upload a file to chatbot -> Got yourself a shorten URL!!'
author: 'Astro Learner'
image:
    url: '/assets/projects/5/cover.PNG'
    alt: 'A picture of file sent to chatbot'
tags: ["urlshorten", "s3", "learning in public"]
---

# File Hosting and URL Shortener via LINE Chatbot

Published on: 2023-11-03

## TL;DR 
Picture this: You're in a university classroom, preparing for a presentation, and you need to access a PowerPoint file. The traditional process involves logging into Google Drive (entering your email, password, and 2FA), downloading the file, and finally opening it. What if I told you there's a simpler way? 

**I've created a URL shortener that allows you to upload a file to a chatbot, and voila, you get a shortened URL.**

1.Send a file or picture |  2.Upload via UI
:-------------------------:|:-------------------------:
![](/assets/projects/5/message.PNG)  |  ![](/assets/projects/5/web.PNG)

## Technologies Used in This Project
1. **Next.js** - Deployed on Vercel [https://liff.cjtim.com](https://liff.cjtim.com)
2. **LINE Frontend Framework** - Allowed Login seemlessly inside LINE application [Docs](https://developers.line.biz/en/docs/liff/overview/)
3. **Golang** - [GitHub Repository](https://github.com/cjtim/cjtim-backend-go)
4. **MongoDB** - Used for mapping LINE user IDs and storing URLs
5. **Rebrandly** - Provider for URL shortening
6. **Google Cloud Storage (S3 bucket)** - Used for storing images and videos provided by users
7. **Cloudflare** - Manages the domain server
8. **Kubernetes** - Deployment platform
9. **GitLab CI** - Containerize, Push to container registry, and deploy to k8s.
