---
layout: page
title: Browse the Collection
gallery: True
permalink: /collection/
---

This site's sample collection comprises a set of objects, each of which is represented by one or more images. The collection items in this demo are from The Museum of Islamic Art, Qatar, (courtesy of [WikiMedia](https://commons.wikimedia.org/wiki/Category:Google_Art_Project_works_in_The_Museum_of_Islamic_Art,_Qatar) and [Google Art Project](https://www.google.com/culturalinstitute/about/artproject/)) and The Qatar National Library (via [World Digital Library](https://www.wdl.org/en/)).

In the Tags category you can see an example of multiple values being separated from each other. Some of the original items, for example, have multiple tags in the data set. Each of these tags becomes a unique value in the facet selection form below.

{% include gallery.html facet_by='object_type|location|tags*' collection='qatar' num_column=4 %}
