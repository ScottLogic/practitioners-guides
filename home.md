---
layout: home
title: Practitioner's Guides
permalink: /
---

The Practitioner's Guides are designed to be small practical guides for IT professionals - authored by the team at [Scott Logic](https://www.scottlogic.com/). We draw on our collective experience to tackle topics that we don't feel are addressed elsewhere. Our hope is that these little 'value adds' will help you just as much as they have helped us.

The current catalogue of guides is as follows:

{% for item in site.pages %}
- <a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a>
{% endfor %}

The Practitioners Guides site is an ongoing project, where we expect new guides to be published on a somewhat regular basis, watch this space!

If you're interested in finding out more, or want to get involved, please visit the [GitHub project](https://github.com/ScottLogic/practitioners-guides).
