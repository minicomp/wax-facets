---
layout: page
title: About
permalink: /about/
---

*Facets* is a theme for Wax sites that allows users to browse through a collection using facets, or filters. Often enough, when we are browsing through a collection of cultural artifacts we want to reduce the number of objects in front of us to a small collection that fits a very specific criteria. Faceted browsing is a form of browsing that allow you to do just that using filters you select. In *Facets* this can be achieved using drop-down menus where you can select the categories you want to browse by.

Besides the ability to do faceted browsing, *Facets* also allows creators to extract any subcollection that can be filtered by category and use it on any page of the site. We hope this will be useful in the creation of exhibits that focus on selections.

[Wax](https://minicomp.github.io/wax/) is a minimal computing toolkit for the creation of digital collections and exhibits. Wax depends on Jekyll, the static site generator. 

## How to use Wax

To learn more about setting up Wax visit [our documentation wiki](https://minicomp.github.io/wiki/wax/).

## How to define facets

As other Wax sites, *Facets* depends on the metadata you create. Let's assume you are using a CSV to record data for your collection. In order for *Facets* to work, that CSV must have separate columns for each large category you want to filter by, or *facet headers*. These become the drop-down menus above the gallery. Each of these columns then accepts a small range of sub-categories, or *facet values*. These are the check boxes.


<img src="{{site.baseurl}}/assets/figures/fig1.png" height="100%" width="100%" alt="Figure 1. Illustration of Facet Headers and Facet Values"/>



The collection_gallery include requires a "collection" variable and has the following option variables: "only", "facet_by", and "num_column"

It can be added to a page using code like this:

{% raw %}
  {% include collection_gallery.html collection='qatar'
      facet_by='object_type|location' num_column=4 %}
{% endraw %}

If a field name is passed to the include variable "only", the collection
will be filtered to items that have a truthy value for that field name. (See  https://shopify.github.io/liquid/filters/where/).

For the "facet_by" include variable, specify one or more field names in a
pipe-separated list.For the "num_column" include variable, specify a number that is a divisor of 12 (i.e, 1, 2, 3, 4, or 6). The default is 2 columns.



