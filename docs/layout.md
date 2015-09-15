---
layout: simple
title: Layout
section: Guide
---

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Grid
Grid is composed of columns. Columns are vertically align on the top as a default. Columns that don't fit within the grid size will automatically wrap into new rows.

{% snippet html %}
<div class="grid full-width">
    <div class="column box-column">Column 1</div><!--
--><div class="column box-column">Column 2</div><!--
--></div>
{% endsnippet %}

### Column widths
Set a width on the column in order to restrict its size.
{% snippet html %}
<div class="grid full-width">
    <div class="column one-fourth box-column">Column 1 </div><!--
--><div class="column three-fourths box-column">Column 2</div><!--
--></div>
{% endsnippet %}
