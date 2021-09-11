# Facets

*Facets* is a theme for [Wax sites](https://minicomp.github.io\/wax/) that allows users to browse through a collection using facets, or filters. When we are browsing through a collection of cultural artifacts, we often want to reduce the number of objects in front of us to a small collection that fits a very specific criteria. Faceted browsing is a form of browsing that allows you to do just that using filters you select. In Facets this can be achieved using drop-down menus where you can select the categories you want to browse by.

Visit [the demo site](https://minicomp.github.io/wax-facets/) to see *Facets* in action

## How to use Wax

Facets is a [Wax](https://minicomp.github.io/wax/) theme. Wax in turn relies on Jekyll. To use Facets you need to be familiar with both Jekyll and Wax. To learn more about setting up and using Wax visit [the Wax wiki](https://minicomp.github.io/wiki/wax/). You can learn more about using Jekyll on the [Jekyll docs](https://jekyllrb.com/docs/), or in [this great tutorial](https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages) by Amanda Visconti at Programming Historian.

## How to define facets

As other Wax sites, *Facets* depends on the metadata you create. Let's assume you are using a CSV to record data for your collection. In order for *Facets* to work, that CSV must have designated columns for each large category you want to "facet" by. These become the *facet headers* at the top of the drop-down menus above the gallery. Each of these columns then accepts a small range of sub-categories, or *facet values*. These become the check boxes.

<br>
<img src="https://minicomp.github.io/wax-facets/assets/figures/fig1.png" height="100%" width="100%" alt="Figure 1. Illustration of Facet Headers and Facet Values"/>
<br>
<br>

We tell *Facets* what collection gallery to insert and what columns to facet by with a Jekyll `include` command that brings in the `collection_gallery` at the desired place on the page. This `include` snippet requires a `collection` variable, but can  take three other optional variables to help you refine the results further: `only`, `facet_by`, and `num_column`. This theme already comes with the following example in the [Browse](/collection/) page. In order to use it, just replace the sample values with your own when editing the page:

<code>{% raw %}
  {% include collection_gallery.html collection='qatar'
      facet_by='object_type|location' num_column=4 %}
{% endraw %}</code>

For the `facet_by` variable, specify one or more field names in a pipe-separated list. 

For the `num_column` variable, specify a number that is a divisor of 12 (i.e, 1, 2, 3, 4, or 6). This is the number of columns you want to have. The default is 2 columns.

## How to create a subset gallery  

If you pass the `only` variable to the include instruction, the collection will be filtered to only items that have [a truthy value](https://shopify.github.io/liquid/filters/where/) for that field name. Consider the example we use in 'Exhibit with Subset Collection':

<code>{% raw %}{% include collection_gallery.html collection='qatar' facet_by='object_type' only='portrait' num_column=4 %}{% endraw %}</code>

The gallery that results from this instruction, which you can see in our "[Exhibit with Subset Collection](/exhibits/subset/)," only shows portraits. Notice also that this gallery view does not have a faceting menu.

## How to change our design

*Facets* is a prototype, just as *Wax* itself is a prototype, a tool to think with that is also immediately practical. Both of these are built on Jekyll, which allows you an enormous amount of flexibility for changing the design of your site. Feel free to play around with the code that makes our exhibit pages and our galleries tick. The more you transform our work, the more we will feel like we succeeded.

The CSS that determines the look of the site is done using a combination of SASS and the bootstrap framework. To change some common variables, like colors or fonts, you can edit the `/assets/css/style.scss` file. You can always override our own choices from this file as well. You can also add your own CSS files to the `_sass` folder, and simply import them into the main sass file above.

