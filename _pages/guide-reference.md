---
layout: post
banner: turquoise

title: "Format & style reference"
description: A reference and showcase of the available elements
summary: This page demonstrates all the available markdown elements we have designed and implemented. Look at the source for how to use them, and the output page to see how they look.

date: 01-01-1970
secret: true

author: Development team
role: Team
bio: "<p>We're the team behind this site.</p><p>We design, implement, and write instructions.</p>"
profile: guide-reference/profile.png
---

## Metadata template

Copy this (including the dashed lines) as the very first thing in your new post file, and fill it in.

See the authoring guide on our internal wiki for further guidance.

```
---
layout: post

title: 
description: 
summary: 

date: 
comingSoon: 

author: 
role: 
bio: 
profile: 
---

Write here...
```

## Main heading

This is the highest (2nd) level you should use within the content.

### Secondary heading

This is a lower (3rd) level heading.

## Paragraphs

This is a paragraph.

This is another paragraph, denoted by leaving an empty line before it.

## Bulleted lists

- One
  - Un
- Two
  - Deux
- Three
- Four
- Five

## Links

Links, such as [this one to our entry on Wikipedia](https://en.wikipedia.org/wiki/Scott_Logic), look like this.

## Denoting top tips

Denote top tips as follows, using a block quote and a 5th-level heading.

> ##### Top Tip
>A "top tip" is a piece of advice or a suggestion that is considered to be the most effective or useful in a particular situation or for a specific purpose. It is often shared by experts or experienced individuals who have gained significant knowledge or insights in a certain field or area.
>
> Another paragraph. Note the blank lines in between have a single `>`, to keep the paragraphs as part of the same top tip block.

Text continues following top tip.

## Images

Place images in a subfolder of `media/` with the same name as your guide's filename, and include them as follows.

![penguins]({{ site.baseurl }}/media/guide-reference/penguins.jpg)
