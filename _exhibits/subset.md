---
layout: exhibit
title: "Exhibit with Subset Collection"
gallery: True
author: Mihr 'Ali
publish_date: 2018-11-15
permalink: /exhibits/subset/
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu dui vivamus arcu felis. Aenean pharetra magna ac placerat vestibulum lectus mauris. Vel orci porta non pulvinar neque laoreet. Augue interdum velit euismod in pellentesque. Id aliquet lectus proin nibh nisl. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. In pellentesque massa placerat duis ultricies lacus sed. Purus sit amet volutpat consequat. Morbi tempus iaculis urna id volutpat lacus laoreet. Quam id leo in vitae turpis massa. Aliquam vestibulum morbi blandit cursus risus at. Blandit turpis cursus in hac. Lacinia quis vel eros donec ac odio tempor orci dapibus. Amet mattis vulputate enim nulla aliquet porttitor. Amet purus gravida quis blandit turpis cursus.


## Subset Collection without Facets

The gallery below includes the subset of all portraits in the larger qatar collection. In this example there is no facet menu. The item cards are mostly static. 

{% include gallery.html collection='qatar' field='object_type' value='portrait' num_column=4 %}


## Subset Collection with Facets

The gallery below includes the subset of all manuscripts in the larger qatar collection. Just as you with the larger collection, you can facet the collection by other criteria. The gallery will dynamically change to reflect your selections.

{% include gallery.html collection='qatar' field='object_type' value='manuscript' facet_by='location|current_location' num_column=4 %}




