---
layout: simple
title: Components
section: Guide
---

This section provides styles for different types of layouts.

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Panel

Panel is a quick, easy way to display content with a title.

{% snippet html %}
<div class="daptiv-panel">
    <div class="title">Title of Panel</div>
    <div class="content">
        This is the content section.
        <div>
            Things to consider:
            <ul>
                <li>When to use a panel</li>
                <li>Why you need a panel</li>
                <li>When not to use a panel</li>
            </ul>
        </div>
    </div>
</div>
{% endsnippet %}

<br />

## Buttons

{% snippet html %}
<div>
    <button class="daptiv-button">Default</button>&nbsp;&nbsp;
    <button class="daptiv-button alternate">Alternate</button>&nbsp;&nbsp;
    <button class="daptiv-button" disabled="disabled">Disabled</button>
</div>
{% endsnippet %}

## Side-Bar
Used for side bars
{% snippet html %}
<div class="example-flex-column-container">
    <div class="example-left-column"><button onclick="var sidebar = this.parentNode.parentNode.querySelector('.daptiv-side-bar'); sidebar.classList.toggle('slide-out-ltr', !sidebar.classList.toggle('slide-in-rtl'))">Toggle Side-Bar</button>
    <br/>
    Aliqua stumptown accusamus trust fund swag kogi. Lomo artisan normcore shabby chic ugh irure sriracha. Whatever consequat cillum id 8-bit. Four dollar toast meh qui, meditation adipisicing occaecat deserunt elit gastropub messenger bag echo park twee exercitation roof party offal. Direct trade hammock mlkshk YOLO, asymmetrical iPhone tousled VHS swag normcore. Chicharrones gastropub waistcoat, elit disrupt heirloom magna. Occaecat four loko fashion axe non hoodie, qui elit chia microdosing roof party.
    </div>
    <div class="daptiv-side-bar hide-initial">
        <nav class="daptiv-side-menu">
            <a class="daptiv-side-menu-item" href="#" onclick="return false;">Home</a>
            <a class="selected daptiv-side-menu-item" href="#" onclick="return false;">Selected</a>
            <a class="daptiv-side-menu-item" href="#" onclick="return false;">About</a>
            <a class="daptiv-side-menu-item" href="#" onclick="return false;">Contact</a>
        </nav>
    </div>
</div>
{% endsnippet %}
<br />

## Side-Menu
Used for right side menu
{% snippet html %}
<nav class="daptiv-side-bar daptiv-side-menu">
    <a class="daptiv-side-menu-readonly" href="#" onclick="return false;" tabIndex="-1">Read Only</a>
    <hr class="daptiv-side-menu-divider" />
    <a class="daptiv-side-menu-item" href="#" onclick="return false;">Home</a>
    <a class="selected daptiv-side-menu-item" href="#" onclick="return false;">Selected</a>
    <a class="daptiv-side-menu-item" href="#" onclick="return false;">About</a>
    <a class="daptiv-side-menu-item" href="#" onclick="return false;">Contact</a>
</nav>
{% endsnippet %}
<br />

## Drop-down list
Used for drop-down lists<br />

### Closed

{% snippet html %}
<div class="daptiv-drop-down-list">
    <a class="item current" href="#" onclick="return false;"><i class="icon list"></i>Item 1<i class="icon menu"></i></a>
</div>
{% endsnippet %}

### Open

{% snippet html %}
<div class="daptiv-drop-down-list">
    <a class="item current open" href="#" onclick="return false;"><i class="icon list"></i>Item 1<i class="icon menu"></i></a>
    <div class="content">
        <a class="item" href="#" onclick="return false;"><i class="icon calendar"></i>Item 2</a>
        <a class="item" href="#" onclick="return false;"><i class="icon flag"></i>Item 3</a>
    </div>
    <br />
    <br />
</div>
{% endsnippet %}
<br />

## Loading Indicator
Used while waiting for system response<br />

{% snippet html %}
<br /><br /><br />
<div class="daptiv-loading">
    <span></span><span></span><span></span>
</div>
{% endsnippet %}
