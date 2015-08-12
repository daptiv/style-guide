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

<nav class="daptiv-nav">
    <a class="daptiv-nav-tab selected" href="#">Home</a>
    <a class="daptiv-nav-tab" href="#">About</a>
    <a class="daptiv-nav-tab" href="#">Contact</a>
    <a class="daptiv-nav-menu-tab" href="#">Menu</a>
</nav>
{% highlight html %}
<nav class="daptiv-nav">
    <a class="daptiv-nav-tab selected" href="#">Home</a>
    <a class="daptiv-nav-tab" href="#">About</a>
    <a class="daptiv-nav-tab" href="#">Contact</a>
    <a class="daptiv-nav-menu-tab" href="#">Menu</a>
</nav>
{% endhighlight %}

## Tab Navigation Menu Dropdown

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

## Alternate Tab-Navigation Menu Dropdown

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

## Tab Sub-Navigation

<nav class="daptiv-subnav">
    <a class="daptiv-subnav-tab selected" href="#">Home</a>
    <a class="daptiv-subnav-tab" href="#">About</a>
    <a class="daptiv-subnav-tab" href="#">Contact</a>
    <a class="daptiv-subnav-menu-tab" href="#">Menu</a>
    <a class="daptiv-subnav-tab icon previous" href="#">Previous</a>
    <a class="daptiv-subnav-tab icon next" href="#">Next</a>
</nav>
{% highlight html %}
<nav class="daptiv-subnav">
    <a class="daptiv-subnav-tab selected" href="#">Home</a>
    <a class="daptiv-subnav-tab" href="#">About</a>
    <a class="daptiv-subnav-tab" href="#">Contact</a>
    <a class="daptiv-subnav-menu-tab" href="#">Menu</a>
    <a class="daptiv-subnav-tab icon previous" href="#">Previous</a>
    <a class="daptiv-subnav-tab icon next" href="#">Next</a>
</nav>
{% endhighlight %}

## Tab Sub-Navigation Menu Dropdown

<div class="daptiv-subnav-menu-dropdown">
    <a class="daptiv-subnav-menuitem" href="#">Item 1</a>
    <a class="daptiv-subnav-menuitem" href="#">Item 2</a>
    <a class="daptiv-subnav-menuitem selected" href="#">Selected Item 3</a>
</div>
{% highlight html %}
<div class="daptiv-subnav-menu-dropdown">
    <a class="daptiv-subnav-menuitem" href="#">Item 1</a>
    <a class="daptiv-subnav-menuitem" href="#">Item 2</a>
    <a class="daptiv-subnav-menuitem selected" href="#">Selected Item 3</a>
</div>
{% endhighlight %}
<br />
