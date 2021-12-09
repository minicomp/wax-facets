// This JavaScript controls the expanding and contracting facet headers.
         

$(document).ready(function () {          
    $(".facet-bn").click(function (event) {
        $(this)
            .parent()
            .parent()
            .toggleClass("active");                  
        // this selector might return multiple elements
        $(this)
            .children("legend")
            .children(".facets-chevron")
            .toggleClass("facets-chevron-bottom facets-chevron-top");
    });
});


/*

This JavaScript code specifies the operation of the checkbox
filters in the collection_gallery.html include.

*/

// Set up empty object to store checkbox selections
var facets = {};

// Set up empty array to store the ids of each facet fieldset
var setIds = [];

$("fieldset").each(function (i, e) {
  setIds.push(e.id);
});

// Count the number of fieldsets on the page
var numberFacets = setIds.length;

// Set up a 'for' loop to run through the fieldset ids and
// use each of them as a key for the 'facets' object. Each
// key gets an empty array, which will be used to store
// currently active checkboxes in that fieldset.
var i;

for (i = 0; i < numberFacets; i++) {
  facets[setIds[i]] = new Array();
  // console.log(facets[setIds[i]])
}

// add code that runs whenever a checkbox is turned on or off
$("#facets :checkbox").change(function () {
  // find the checkboxes parent fieldset id by taking its class name
  // and adding "-set" to the end
  var pinClass = this.className + "-set";
  //console.log(pinClass);

  // find the id for this checkbox
  var pinId = this.id;
  //console.log(pinId);

  // use fieldset id as key to facets object; add or remove current checkbox id
  // from the array for that key.
  if (this.checked) {
    facets[pinClass].push(pinId);
    //console.log(facets[pinClass]);
  } else {
    facets[pinClass] = facets[pinClass].filter(function (value, index, arr) {
      return value != pinId;
    });
    //console.log(facets[pinClass]);
  }

  // after updating the facets object, rerun refreshGallery()
  refreshGallery();
});

function refreshGallery() {
  // this function shows and hides gallery items based on active checkboxes

  // grab all gallery items
  var listOfElements = $(".gallery-item-facets");

  // start by clearing the gallery of all items
  listOfElements.hide("slow");

  // starting with the full list of all elements, loop through each fieldset
  // one at a time and keep only the elements that have one or more of the
  // desired values (based on checkboxes)
  // - loop through each fieldset in facets
  // - if the array is empty (e.g., no checkboxes checked), take all possible
  //   values in that fieldset and treat them as valid by including them in the
  //   list of desired values
  // - if the array is not empty (e.g., one or more checkboxes checked),
  //   add only the items from the array to the list of desired values
  // - in both cases, add a "." before the checkbox id so it can be used as a
  //   jQuery selector
  // - take the list of checkbox values (treated as classes) and join them into
  //   a string with commas separating the class selectors. In jQuery, this will
  //   result in a selector that uses "OR" for the different classes in the list.
  // - filter the running list of elements to exclude elements that have none
  //   of the specified classes
  // - after finishing the for loop, take all remaining elements and show them
  for (i = 0; i < numberFacets; i++) {
    var inputIds = [];
    if (facets[setIds[i]].length == 0) {
      $(`#${setIds[i]} input`).each(function (i, e) {
        inputIds.push("." + e.id);
      });
    } else {
      inputIds = facets[setIds[i]].map(function (el) {
        return "." + el;
      });
    }
    listOfClasses = inputIds.join(",");
    listOfElements = listOfElements.filter($(`${listOfClasses}`));
  }
  listOfElements.show("slow");
}
