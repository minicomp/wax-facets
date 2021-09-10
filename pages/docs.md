---
layout: page
title: Learning
permalink: /learning/
---

## ... how to use Wax

To learn more about setting up and using Wax visit [the Wax wiki](https://minicomp.github.io/wiki/wax/).

## ... how to define facets

As other Wax sites, *Facets* depends on the metadata you create. Let's assume you are using a CSV to record data for your collection. In order for *Facets* to work, that CSV must have designated columns for each large category you want to "facet" by. These become the *facet headers* at the top of the drop-down menus above the gallery. Each of these columns then accepts a small range of sub-categories, or *facet values*. These become the check boxes.

<br>
<img src="{{site.baseurl}}/assets/figures/fig1.png" height="100%" width="100%" alt="Figure 1. Illustration of Facet Headers and Facet Values"/>
<br>
<br>

We tell *Facets* what collection gallery to insert and what columns to facet by with a Jekyll `include` command that brings in the `collection_gallery` at the desired place on the page. This `include` snippet requires a `collection` variable, but can  take three other optional variables to help you refine the results further: `only`, `facet_by`, and `num_column`. This theme already comes with the following example in the [Browse](/collection/) page. In order to use it, just replace the sample values with your own when editing the page:

<code>{% raw %}
  {% include collection_gallery.html collection='qatar'
      facet_by='object_type|location' num_column=4 %}
{% endraw %}</code>

If a field name is passed to the `only` variable, the collection will be filtered to items that have [a truthy value](https://shopify.github.io/liquid/filters/where/) for that field name.

For the `facet_by` variable, specify one or more field names in a pipe-separated list. 

For the `num_column` variable, specify a number that is a divisor of 12 (i.e, 1, 2, 3, 4, or 6). This is the number of columns you want to have. The default is 2 columns.