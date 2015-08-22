---
layout: simple
title: Navigation
section: Guide
---

These are the different types of navigation components.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Tab Navigation

Navigation for switching views. Results in a collection of left aligned, horizontal tabs. The example below shows a selected, regular and menu tab; the later causes display of the [Tab Navigation Menu Dropdown](#tab-navigation-menu-dropdown).

{% snippet html %}
<nav class="daptiv-nav">
    <a class="selected tab" href="javascript:void(0);">Home</a>
    <a class="tab" href="javascript:void(0);">About</a>
    <a class="tab" href="javascript:void(0);">Contact</a>
    <a class="menu tab" href="javascript:void(0);">Menu</a>
</nav>
{% endsnippet %}
<br />

## Tab Navigation Menu Dropdown

{% snippet html %}
<div class="daptiv-dropdown">
    <a class="item" href="javascript:void(0);">Item 1</a>
    <a class="item" href="javascript:void(0);">Item 2</a>
    <a class="disabled item" href="javascript:void(0);">Disabled Item 3</a>
    <a class="selected item" href="javascript:void(0);">Selected Item 4</a>
</div>
{% endsnippet %}
<br />

## Alternate Tab-Navigation Menu Dropdown

{% snippet html %}
<div class="daptiv-dropdown">
    <a class="alternate item" href="javascript:void(0);">Item 1</a>
    <a class="alternate item" href="javascript:void(0);">Item 2</a>
    <a class="alternate selected item" href="javascript:void(0);">Selected Item 3</a>
</div>
{% endsnippet %}
<br />

## Tab Sub-Navigation

{% snippet html %}
<nav class="daptiv-subnav">
    <a class="selected tab" href="javascript:void(0);">Home</a>
    <a class="tab" href="javascript:void(0);">About</a>
    <a class="tab" href="javascript:void(0);">Contact</a>
    <a class="disabled tab" href="javascript:void(0);">Disabled</a>
    <a class="menu tab" href="javascript:void(0);">Menu</a>
</nav>
{% endsnippet %}
<br />

