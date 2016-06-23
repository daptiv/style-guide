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

## Card

Card for use in card lists

{% snippet html %}
<div class="card">
    <section class="flex-row">
        <section class="flex-column">
            <div class="item-title block-component">
                <span class="item-number">1.2.3.4.5</span>
                <span class="name">A really long title here will wrap to the next line with an  indent so it is easier to read</span>
            </div>

            <div class="related-title block-component">Related Thing</div>
        </section>
        <flag class="flag">
            <!-- IE11 fix for issue: https://github.com/angular/angular/issues/6327
                Operating on classes doesn't work with SVG elements in IE 11 #6327 -->
            <span class="on" onclick="this.classList.toggle('on'); this.classList.toggle('off')">
                <svg class="image" viewBox="0 0 46 32">
                    <path d="M2.5,.5 L45.5,0.5 L45.5,27.5 L2.5,27.5 L12,14 L2.5,0.5 M0,32"></path>
                </svg>
            </span>
        </flag>
    </section>
    <footer class="small block-component status">Card Status</footer>
</div>
{% endsnippet %}

### Status

{% snippet html %}
<div class="card">
    <footer class="small block-component status">Unknown/No Status</footer><br>
    <footer class="small block-component status notstarted">Not Started</footer><br>
    <footer class="small block-component status inprogress">In Progress</footer><br>
    <footer class="small block-component status onhold">On Hold</footer><br>
    <footer class="small block-component status overdue">Overdue</footer><br>
    <footer class="small block-component status complete">Complete</footer>
</div>
{% endsnippet %}

## Drop-down list
Used for drop-down lists<br />

### Closed

{% snippet html %}
<div class="daptiv-drop-down-list">
    <a class="item current" href="#" onclick="return false;"><i class="icon list"></i>
    <span class="title">Item 1</span><i class="icon menu"></i></a>
</div>
{% endsnippet %}

### Open

{% snippet html %}
<div class="daptiv-drop-down-list docs-open-dropdown open">
    <a class="item current" href="#" onclick="return false;"><i class="icon list"></i><span class="title">Item 1</span><i class="icon menu"></i></a>
    <div class="content">
        <a class="item selected" href="#" onclick="return false;"><i class="icon list"></i><span class="title">Item 1</span></a>
        <a class="item" href="#" onclick="return false;"><i class="icon calendar"></i><span class="title">Item 2</span></a>
        <a class="item" href="#" onclick="return false;"><i class="icon flag"></i><span class="title">Item 3</span></a>
    </div>
    <br />
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


## Side-Bar
Used for side bars
{% snippet html %}
<div class="example-flex-column-container daptiv-slider initial">
    <div class="example-left-column"><button onclick="var sidebar = this.parentNode.parentNode.parentNode.querySelector('.daptiv-slider'); sidebar.classList.toggle('closed', !sidebar.classList.toggle('open'))">Toggle Side-Bar</button>
    <br/>
    Aliqua stumptown accusamus trust fund swag kogi. Lomo artisan normcore shabby chic ugh irure sriracha. Whatever consequat cillum id 8-bit. Four dollar toast meh qui, meditation adipisicing occaecat deserunt elit gastropub messenger bag echo park twee exercitation roof party offal. Direct trade hammock mlkshk YOLO, asymmetrical iPhone tousled VHS swag normcore. Chicharrones gastropub waistcoat, elit disrupt heirloom magna. Occaecat four loko fashion axe non hoodie, qui elit chia microdosing roof party.
    </div>
    <div class="daptiv-side-bar initial">
        <nav class="daptiv-side-menu">
            <a class="item" href="#" onclick="return false;">Home</a>
            <a class="selected item" href="#" onclick="return false;">Selected</a>
            <a class="item" href="#" onclick="return false;">About</a>
            <a class="item" href="#" onclick="return false;">Contact</a>
        </nav>
    </div>
</div>
{% endsnippet %}
<br />

## Side-Menu
Used for right side menu
{% snippet html %}
<nav class="daptiv-side-bar daptiv-side-menu">
    <a class="readonly" href="#" onclick="return false;" tabIndex="-1">Read Only</a>
    <hr class="divider" />
    <a class="item" href="#" onclick="return false;">Home</a>
    <a class="selected item" href="#" onclick="return false;">Selected</a>
    <a class="item" href="#" onclick="return false;">About</a>
    <a class="item" href="#" onclick="return false;">Contact</a>
</nav>
{% endsnippet %}
<br />
