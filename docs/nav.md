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

Navigation for switching views. Results in a collection of left aligned, horizontal

<nav class="daptiv-nav">
    <a class="daptiv-nav-tab selected" href="#">Home</a>
    <a class="daptiv-nav-tab" href="#">About</a>
    <a class="daptiv-nav-tab" href="#">Contact</a>
</nav>
{% highlight html %}
<nav class="daptiv-nav">
    <a class="daptiv-nav-tab selected" href="#">Home</a>
    <a class="daptiv-nav-tab" href="#">About</a>
    <a class="daptiv-nav-tab" href="#">Contact</a>
</nav>
{% endhighlight %}

## Navigation Menu-Tab

<nav class="daptiv-nav">
    <a class="daptiv-nav-tab selected" href="#">Home</a>
    <a class="daptiv-nav-tab" href="#">About</a>
    <a class="daptiv-nav-menu-tab" href="#">Menu</a>
</nav>

{% highlight html %}
<nav class="daptiv-nav">
    <a class="daptiv-nav-tab selected" href="#">Home</a>
    <a class="daptiv-nav-tab" href="#">About</a>
    <a class="daptiv-nav-menu-tab" href="#">Menu</a>
</nav>
{% endhighlight %}

## Navigation Menu-Tab Dropdown

<div class="daptiv-nav-menu-dropdown">
    <a class="daptiv-nav-menuitem" href="#">Item 1</a>
    <a class="daptiv-nav-menuitem" href="#">Item 2</a>
    <a class="daptiv-nav-menuitem selected" href="#">Selected Item 3</a>
</div>

{% highlight html %}

<div class="daptiv-nav-menu-dropdown">
    <a class="daptiv-nav-menuitem" href="#">Item 1</a>
    <a class="daptiv-nav-menuitem" href="#">Item 2</a>
    <a class="daptiv-nav-menuitem selected" href="#">Selected Item 3</a>
</div>

{% endhighlight %}

## Alternate Navigation Menu-Tab Dropdown

<div class="daptiv-nav-menu-dropdown">
    <a class="daptiv-nav-menuitem-alternate" href="#">Item 1</a>
    <a class="daptiv-nav-menuitem-alternate" href="#">Item 2</a>
    <a class="daptiv-nav-menuitem-alternate selected" href="#">Selected Item 3</a>
</div>

{% highlight html %}

<div class="daptiv-nav-menu-dropdown">
    <a class="daptiv-nav-menuitem-alternate" href="#">Item 1</a>
    <a class="daptiv-nav-menuitem-alternate" href="#">Item 2</a>
    <a class="daptiv-nav-menuitem-alternate selected" href="#">Selected Item 3</a>
</div>

{% endhighlight %}
