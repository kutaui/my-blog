---
title: Accessibility in React
description: Here are some tools, tips & tricks to make your React applications more 
  accessible.

date: '2023-11-12'
categories:
  - accessibility
  - react
published: true
---

In this post, I share some tips and tricks to make your React applications more accessible with some
tools to help you along the way.

<br/>

## [Eslint Plugin](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)

There is an Eslint plugin called `eslint-plugin-jsx-a11y` which evaluates static JSX and warns
you when you are not adhering to the a11y guidelines.

<br/>

## [@axe-core/react](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/react)

Axe-core is an accessibility testing library that shows the results in the Chrome DevTools console.
It is easy to use(you just need to initialize it in your app, like Vercel’s analytics) and has some
good features like running accessibility tests inside Shadow DOM, debouncing, etc.

<br/>

## [Axe DevTools Chrome Extension](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)

This extension is from the same creators of the testing library. Think of it like React or Redux
DevTools. You can easily run automated accessibility tests on any website.

<br/>

---

<br/>

## Focus state

The UI elements should have a clear focus state. So if you mark an element with `outline:none` or
`outline:0` in CSS, make sure you provide a better focus indicator than the one provided by
browsers.
You can change the default focus style using `:focus` attribute.

<br/>

## Keyboard keys

All the interactive elements must be activated by the keyboard as per their semantics. If you have
defined event handlers for `touch` or `click` events, then the same handler should be triggered for
the
corresponding keyboard keys.

That is, for _example_: If you have defined a handler for a button click, then the same should be
triggered for pressing Enter or Space key. Apply proper semantics for arrow keys, Tab, Shift + Tab
etc.,

<br/>

## Focus Traps

Tab through the content of your website to ensure the focus is not trapped within any content.

<br/>

## Tab order — Avoid tabindex greater than zero

The tab order should be in coherence with the logical flow/order of a web page.

- A ``tabindex of 0`` allows elements other than links and form elements to receive keyboard
  focus. These
  DOM elements receive focus in the order they are arranged in DOM. This tabindex value is handy
  when you want to make elements like div or li to be accessible with the tab key.
- A `tabindex of -1` means an element is not accessible via sequential keyboard navigation but could
  be focussed with Javascript or using the mouse.
- Avoid using a positive value of tabindex because this value determines the order in which the
  element would be accessed while pressing the tab key. If an element down the page is set with a
  higher tabindex, it will receive focus before the one at the top of the DOM tree. It creates
  confusions and must be avoided

<br/>

## Animations

Some people face problems like nausea, dizziness, and malaise because of animations used on
websites. The operating system offers a solution to this problem to opt-out of animations and this
value can be read by browsers.

For example, Apple exposes this value to the browser using a media query: `prefer-reduced-motion`.
Websites can read this value and disable the animation.

Here is a detailed [article](https://www.joshwcomeau.com/react/prefers-reduced-motion/)
about `prefer-reduced-motion` and how to use it in React
applications to create accessible animations.

<br/>

---

<br/>

Jest also has [matchers](https://www.npmjs.com/package/jest-axe) for axe to test accessibility.
You’ll also want to look out for your
color
contrast and other design related issues like readable typography etc. And if you want to go deeper,
here are some other areas to consider: Correct image alt texts, heading levels, landmark regions,
accessible form controls, accessible labels to provide more context for some elements, define a live
region to ensure dynamic changes are announced by assistive technologies, setting the focus and
tabindex, etc.

<br/>

---

<br/>

Here is a free short course on all of these topics if you prefer learning by watching videos.

https://egghead.io/courses/develop-accessible-web-apps-with-react

```

```
