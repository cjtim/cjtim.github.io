---
title: "Renovate Bot: Open-source Contributions"
pubDate: 2022-11-01
description: "My story of making a contribution to Renovatebot"
author: "Tim Jinna"
image:
  url: "/assets/projects/2/image.jpg"
  alt: "Renovatebot logo"
tags:
  [
    "open-source",
    "renovatebot",
    "Github",
    "learning in public",
  ]
---

# My Renovate Bot Open-source Contribution Adventure!

<!-- ![Pic](https://docs.astro.build/assets/full-logo-light.png) -->

**Published** on: 2023-11-01

**All My Pull Request**: [Check it out here](https://github.com/renovatebot/renovate/pulls?q=is%3Apr+author%3Acjtim+)

## TL;DR

In a nutshell, I managed to enhance Renovatebot's syntax parser within the Scala and Kotlin modules.

## The Story Unfolds

It all started back in July 2022 when I first came across Renovatebot. The goal was to enhance the developer experience within our company. After diving into the documentation and conducting thorough tests, I stumbled upon an issue with parsing Scala repositories. Scala allows variable lookup from inside a package definition, which can be seen in an example from IntelliJ [here](https://github.com/JetBrains/intellij-scala/blob/76efc6cfa54909926542d0138492d52a22aa65e3/project/dependencies.scala#L4).

I tried my hand at configuring it for a while using the [regex Manager](https://docs.renovatebot.com/modules/manager/regex/), but the results weren't as impressive as I'd hoped. So, I made a bold decision – to do something I had never done before: clone the repository and rewrite the parser manager. To be honest, the code was quite a challenge, and testing it required writing some additional scripts.

## The Technical Side

The solution I came up with was a new function I named `extractAllPackageFiles`. In the previous version, the Scala manager processed one `.scala` file at a time using `extractPackageFile` function, which had its limitations when it came to looking up variables in other files. 

With the new function, I managed to:

1. Iterate through all Scala files.
2. Store variables inside a Hashmap.
3. Populate the dependencies object.

This enhancement allowed the Renovatebot Scala manager to read variables from other files, making it more powerful and versatile.

## My Contribution Highlights

Here are the Pull Requests where you can see the improvements I made:

1. [Fix(manager/sbt): Allow adding Compiler Plugins #17006](https://github.com/renovatebot/renovate/pull/17006)
2. [Fix(manager/sbt): Allow star comments #17005](https://github.com/renovatebot/renovate/pull/17005)
3. [Fix(managers/gradle): Allow dot annotation in version.ref #21820](https://github.com/renovatebot/renovate/pull/21820)
4. [Fix(managers/sbt): SBT Multiple Variable File Lookup #21622](https://github.com/renovatebot/renovate/pull/21622)
5. [Chore(managers/sbt): Remove Unused Types #21570](https://github.com/renovatebot/renovate/pull/21570)

These contributions were a significant step in improving Renovatebot and its capabilities. I'm excited to continue my journey in the world of open-source contributions, and I hope this story inspires others to step out of their comfort zones and make a difference in the open-source community.
