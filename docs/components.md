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

Card for use in card lists. The below is an example card with titles and flag. 

<script>
var cardClassId = 0;
var statusClasses = ['', 'notstarted', 'inprogress', 'onhold', 'overdue', 'complete'];
function cycleStatusClasses(el) {
    var classname = "small block-component status ";
    cardClassId = (cardClassId + 1) % statusClasses.length;
    var nextStatus = statusClasses[cardClassId];
    el.className = classname + nextStatus;
    el.innerHTML = 'Click To Cycle Card Status: ' + nextStatus;
}
</script>

{% snippet html %}
<div class="card daptiv-padded">
    <section class="flex-row">
        <section class="flex-column">
            <div class="item-title block-component">
                <span class="item-number">1.2.3.4.5</span>
                <span class="name">A really long title here will wrap to the next line with an  indent so it is easier to read</span>
            </div>

            <div class="related-title block-component">This is a secondary title which could be used to indicate a related item or some additional context which is not part of the title.</div>
        </section>
        <flag class="flag on">
        </flag>
    </section>

    <footer class="small block-component status" onclick="cycleStatusClasses(this)">Click To Cycle Card Status:</footer>
</div>

{% endsnippet %}

### Status Bar

{% snippet html %}
<div class="card">
    <footer class="small block-component status bar">Unknown/No Status</footer>
    <footer class="small block-component status bar notstarted">Not Started</footer>
    <footer class="small block-component status bar inprogress">In Progress</footer>
    <footer class="small block-component status bar onhold">On Hold</footer>
    <footer class="small block-component status bar overdue">Overdue</footer>
    <footer class="small block-component status bar complete">Complete</footer>
</div>
{% endsnippet %}

### Status Circle

{% snippet html %}
<div class="card">
    <div class="status-row">
        <span class="small status circle"></span><span>Unknown/No Status</span>
    </div>
    <div class="status-row">
        <span class="small status circle notstarted"></span><span>Not Started</span>
    </div>
    <div class="status-row">
        <span class="small status circle inprogress"></span><span>In Progress</span>
    </div>
    <div class="status-row">
        <span class="small status circle onhold"></span></span>On Hold</span>
    </div>
    <div class="status-row">
        <span class="small status circle overdue"></span></span>Overdue</span>
    </div>
    <div class="status-row">
        <span class="small status circle complete"></span></span>Complete</span>
    </div>
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

## Tooltip
Used for custom tooltips  
{% snippet html %}
<div class="daptiv-tooltip-container">Hover to see tooltip<span class='tooltip'>Lorem ipsum dolor sit amet</span></div>
{% endsnippet %}
<br />
