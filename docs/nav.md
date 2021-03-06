---
layout: simple
title: Navigation
section: Guide
---

These are the different types of navigation components.

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Tab Navigation

Navigation for switching views. Results in a collection of left aligned, horizontal tabs. The example below shows a selected, regular and menu tab; the later causes display of the [Tab Navigation Menu Dropdown](#tab-navigation-menu-dropdown).

{% snippet html %}
<!-- Empty comments used to remove line breaks. -->
<div class="daptiv-header">
    <nav class="daptiv-nav ">
        <a class="tab" href="#" onclick="return false;">Home</a><!--
        --><a class="selected tab" href="#" onclick="return false;">Selected</a><!--
        --><a class="tab" href="#" onclick="return false;">About</a><a class="tab" href="#" onclick="return false;">Contact</a>
    </nav>
</div>
{% endsnippet %}
<br />

## Tab Navigation Menu Dropdown

{% snippet html %}
<div class="daptiv-dropdown">
    <a class="item" href="#" onclick="return false;">Item 1</a>
    <a class="item" href="#" onclick="return false;">Item 2</a>
    <a class="selected item" href="#" onclick="return false;">Selected Item 3</a>
    <a class="disabled item" href="#" onclick="return false;">Disabled Item 4</a>
    <span class="label" tabindex="-1">Label Item 5</span>
</div>
{% endsnippet %}
<br />

## Alternate Tab-Navigation Menu Dropdown

{% snippet html %}
<div class="daptiv-dropdown">
    <a class="alternate item" href="#" onclick="return false;">Item 1</a>
    <a class="alternate item" href="#" onclick="return false;">Item 2</a>
    <a class="alternate selected item" href="#" onclick="return false;">Selected Item 3</a>
    <a class="alternate disabled item" href="#" onclick="return false;">Disabled Item 4</a>
</div>
{% endsnippet %}
<br />

## Tab Sub-Navigation

{% snippet html %}
<nav class="daptiv-subnav">
    <a class="tab" href="#" onclick="return false;">Home</a>
    <a class="selected tab" href="#" onclick="return false;">Selected</a>
    <a class="tab" href="#" onclick="return false;">About</a>
    <a class="tab" href="#" onclick="return false;">Contact</a>
    <a class="disabled tab" href="#" onclick="return false;" tabIndex="-1">Disabled</a>
</nav>
{% endsnippet %}
<br />
