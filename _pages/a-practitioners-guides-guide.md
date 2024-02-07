---
layout: post
banner: turquoise

title:  "A Practitioners Guides Guide"
description: How to build a practitioners guide
summary: How to setup a Practitioners Guide with examples on the theming and how to use the ToC and images.
highlights: Setup a Practitioners Guide||Understand ToC Nav

date:   26-01-2024
comingSoon: false

author: Dean Hunter
role: Senior Developer
bio: Hi, I'm Dean.||I'm a senior developer at Scott Logic.
profile:
---

## Writing a Practitioners Guide

We use markdown to write a Practitioners Guide.

To create a Practitioners Guide you should:
- fork the GitHub repo and clone the project.
- create a markdown file in the _pages directory 'my-practitioners-guide.md'.
- create a folder in the media directory 'my-practitioners-guide' where you can upload images.
- upload a profile picture to your directory, preferably 64px x 64px, e.g. profile.png (file type is not important).
- add the following code snipped to your markdown (md) file and you're then good to go:

```
---
layout: post
banner: turquoise

title:  "A Practitioners Guides Guide"
description: How to build a practitioners guide
summary: How to setup a Practitioners Guide with examples on the theming and how to use the ToC and images.
highlights: Highlight one||Highlight two

date:   26-01-2024
comingSoon: false

author: Dean Hunter
role: Senior Developer
bio: Hi, I'm Dean.||I'm a senior developer at Scott Logic.
profile: my-practitioners-guide/profile.jpg
---
```
  <br />
 
##### Document properties

```layout ``` Should always be set as ```post```, its the template we use to apply the theme.\
```banner``` optional - default is ```charcoal``` but also supports ```turquoise``` to change the banner colour.

```title``` Simply the title of your Practitioners Guide and displayed in the main banner and on the home page promo box.\
```description``` Displayed at the top of your Practitioners Guide and on the home page promo box.\
```summary``` Displayed on the home page promo under the visual element.\
```highlights``` optional - Short list of what your guide is about which will appear under your profile separated by the double pipe character ```||```

```date``` Formatted as dd-MM-yyyy, Guides are displayed chronologically.\
```comingSoon``` optional - if set to ```false``` will be excluded from navigation and show in the home page section for coming soon Practitioners Guides.

```author``` Your name, it will appear on the Guide, also should you choose not to use a profile picture we will use the first and last initial in place of the profile pic.\
```role``` Your job title.\
```bio``` optional - Short bit about you, preferably no more than 100 words.  If you would like to have multiple paragraphs, the split then with the double pipe character ```||```\
```profile``` Picture you uploaded ```my-practitioners-guide/profile.png```.\
  <br />
  <br />
  <br />
 
## Components in the Markdown theme

Some components are used to build ToC and have a general style applied for the Practitioners Guides theme.  Examples of these are:

## h2 Main Heading - used in the ToC Nav

### h3 Secondary Heading - used in the ToC Nav

#### h4 Minor Heading

##### h5 Top Tip heading

## Images

We have a image tag that can be used within the page and will have a default style, this includes the clipped corner and border and will appear full width in your guide.  You should upload your images that you would like to use in the media directory you created for your Practitioners Guide, and this should be included in the path.

To include in your page, reference as markdown: ```![penguins]({{ site.baseurl }}/media/my-practitioners-guide/penguins.jpg)```

![penguins]({{ site.baseurl }}/media/a-practitioners-guides-guide/penguins.jpg)