// Facet input

var facets = {

}

var setIds = [];

$('fieldset').each( function(i,e) {
    setIds.push(e.id);
});


var numberFacets = setIds.length;

var i;

for (i = 0; i < numberFacets; i++) {
	facets[setIds[i]] = new Array();
    // console.log(facets[setIds[i]])
}


$('#facets :checkbox').change(function() {
    // this will contain a reference to the checkbox

    var pinClass = this.className + '-set';
    //console.log(pinClass);
    var pinId = this.id;
    //console.log(pinId);

    if (this.checked) {
      facets[pinClass].push(pinId);
      //console.log(facets[pinClass]);
    } else {
      facets[pinClass] = facets[pinClass].filter(function(value, index, arr){
      return value != pinId ;
      });
      //console.log(facets[pinClass]);
    }
    refreshGallery();
});

function refreshGallery() {
  var listOfElements = $('.gallery-item');

  listOfElements.hide('slow');

  for (i = 0; i < numberFacets; i++) {
    var inputIds = [];
  	if (facets[setIds[i]].length == 0) {
      $(`#${setIds[i]} input`).each( function(i,e) {
          inputIds.push("." + e.id);
      });
    }
    else {
      inputIds = facets[setIds[i]].map(function(el) {
        return '.' + el;
      });
    }
    listOfClasses = inputIds.join(",");
    listOfElements = listOfElements.filter($(`${listOfClasses}`));
  }
  listOfElements.show('slow');
}

$( document ).ready(function() {
}
);
