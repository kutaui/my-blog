---
title: Microservices on the Frontend
description: Learn what Micro Frontends are, what are the benefits, drawbacks and when to use them.
date: '2024-05-05'
categories:
  - architecture
  - frontend
  - accessibility
published: true
---

**Micro frontend** is an architectural style in which the front-end of the app is split into individual, loosely coupled "micro apps" that can be built, tested, and deployed independently. Just like in the world of microservices where the backend is chopped into individual services.

![Micro Frontend architecture overview with teams split into different business needs](https://micro-frontends.org/ressources/diagrams/organisational/verticals-headline.png)

<br/>

[Conclusion](#conclusion)

<br/>

## Why Micro Frontends?

The idea behind Micro Frontends is to think about a website or web app as a composition of features which are owned by independent teams. These teams usually split by having distinct business area or mission they specialize in.

<br/>

A **micro frontend** can be a single page, a group of pages, or a group of components that work together to provide a specific feature or functionality. Each micro frontend is a separate app, with its own codebase, build process, and deployment process. This allows you to develop, test, and deploy each feature independently, which can be a huge advantage when it comes to continuous delivery.

<br/>

Each team is able to choose their own technology stack, and they can implement their feature in a way that suits them best. They can also deploy their feature independently, which is a huge advantage when it comes to continuous delivery.

<br/>

For example, your header team can use React, while your footer team can use Angular. They can both deploy their feature independently, and they can both work on their feature without having to worry about the other team.

![Micro Frontend architecture with different frontend frameworks](https://www.altexsoft.com/static/blog-post/2023/11/e29a679f-b6c6-4464-87d3-da08cbfd70a6.webp)

<br/>

While you can use multiple frameworks peope usually stick to one because of the overhead of having multiple frameworks and additional complexity which is the contrary of what micro frontends are trying to achieve.

<br/>

## Benefits

### Incremental upgrades

You can upgrade your app incrementally, one micro frontend at a time. This is a huge advantage when it comes to continuous delivery. You can deploy new features or bug fixes without having to deploy the whole app.

<br/>

### Simple codebase

Each micro frontend is a separate app, so you can keep the codebase small and simple. This makes it easier to maintain and test. You can also use different technologies for different micro frontends, which can be a huge advantage if you have different teams working on different parts of the app. And you can also use different versions of the same technology, which can be useful if you have legacy code that you can't upgrade.

<br/>

### Independent deployment

Each micro frontend is a separate app, so you can deploy them independently.You can deploy new features or bug fixes without having to deploy the whole app. You can also roll back a deployment if something goes wrong, without having to roll back the whole app.

<br/>

## Drawbacks

### Complexity

Micro Frontends can add complexity to your app. You have to manage multiple codebases, build processes, and deployment processes. You also have to manage the communication between the micro frontends, which can be tricky.

<br/>

### Performance

Micro Frontends can impact the performance of your app. Each micro frontend is a separate app, so you have to load multiple apps on the same page. This can slow down the page load time, especially if you have a lot of micro frontends.

<br/>

### Communication

Micro Frontends have to communicate with each other, which can be tricky. You have to manage the communication between the micro frontends, which can be complex. You also have to manage the state of the app, which in itself can be a challenge.

<br/>

## Conclusion

Micro Frontends can be a great way to build a large, complex app. They allow you to develop, test, and deploy each feature independently, which can be a huge advantage when it comes to continuous delivery. They also allow you to use different technologies for different parts of the app, which can be useful if you have different teams working on different parts of the app. However, they can add complexity to your app, and they can impact the performance of your app. So, you have to weigh the benefits against the drawbacks and decide if Micro Frontends are right for you.
