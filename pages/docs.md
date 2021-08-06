---
layout: page
title: Learning
permalink: /docs/
---

## ... how to use Wax

To learn more about setting up and using Wax visit [the Wax wiki](https://minicomp.github.io/wiki/wax/).

## ... how to define facets

As other Wax sites, *Facets* depends on the metadata you create. Let's assume you are using a CSV to record data for your collection. In order for *Facets* to work, that CSV must have separate columns for each large category you want to filter by, or *facet headers*. These become the drop-down menus above the gallery. Each of these columns then accepts a small range of sub-categories, or *facet values*. These are the check boxes.


<img src="{{site.baseurl}}/assets/figures/fig1.png" height="100%" width="100%" alt="Figure 1. Illustration of Facet Headers and Facet Values"/>

The collection_gallery include requires a "`collection`" variable and has the following option variables: "`only`", "`facet_by`", and "`num_column`". It can be added to a page by inserting the following snippet where you want it to appear, and replacing the sample values with your own:

<code>{% raw %}
  {% include collection_gallery.html collection='qatar'
      facet_by='object_type|location' num_column=4 %}
{% endraw %}</code>

If a field name is passed to the include variable "`only`", the collection
will be filtered to items that have a truthy value for that field name. (See  https://shopify.github.io/liquid/filters/where/).

For the "facet_by" include variable, specify one or more field names in a
pipe-separated list.For the "num_column" include variable, specify a number that is a divisor of 12 (i.e, 1, 2, 3, 4, or 6). The default is 2 columns.