---
layout: simple
title: Animations
section: Guide
---

These are the different types of animations.

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Fade In

{% snippet html %}
<div>
    <script>
        function onFadeInClick() {
            var fadeInElement = document.querySelector('#fadeIn');
            fadeInElement.className = 'fade-in'; 
            setTimeout(function() {fadeInElement.className = ''}, 1000);
        }
    </script>
    <div class="margin-bottom-medium">
        <input type="button" value="Show" onclick="onFadeInClick();" />
    </div>
    <div id="fadeIn" class="">
        Lorem ipsum dolor sit amet.
    </div>
</div>
{% endsnippet %}
<br />
