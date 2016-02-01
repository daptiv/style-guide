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
<nav class="daptiv-nav">
    <a class="tab" href="#" onclick="return false;">Home</a><!--
    --><a class="selected tab" href="#" onclick="return false;">Selected</a><!--
    --><a class="tab" href="#" onclick="return false;">About</a><a class="tab" href="#" onclick="return false;">Contact</a>
</nav>
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

## Side-Bar

{% snippet html %}
<div class="example-flex-column-container">
    <div class="example-left-column">Aliqua stumptown accusamus trust fund swag kogi. Lomo artisan normcore shabby chic ugh irure sriracha. Whatever consequat cillum id 8-bit. Four dollar toast meh qui, meditation adipisicing occaecat deserunt elit gastropub messenger bag echo park twee exercitation roof party offal. Direct trade hammock mlkshk YOLO, asymmetrical iPhone tousled VHS swag normcore. Chicharrones gastropub waistcoat, elit disrupt heirloom magna. Occaecat four loko fashion axe non hoodie, qui elit chia microdosing roof party.
    <button onclick="var sidebar = document.querySelector('.daptiv-sidebar'); sidebar.classList.toggle('slide-out-ltr', !sidebar.classList.toggle('slide-in-rtl'))">Toggle Side-Bar</button></div>
    <nav class="daptiv-sidebar">
        <a class="tab" href="#" onclick="return false;">Home</a>
        <a class="selected tab" href="#" onclick="return false;">Selected</a>
        <a class="tab" href="#" onclick="return false;">About</a>
        <a class="tab" href="#" onclick="return false;">Contact</a>
        <a class="disabled tab" href="#" onclick="return false;" tabIndex="-1">Disabled</a>
    </nav>
</div>
{% endsnippet %}
<br />
