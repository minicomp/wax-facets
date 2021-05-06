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
    console.log(pinClass);
    var pinId = this.id;
    console.log(pinId);

    // CREATE A NEW FUNCTION THAT GETS CALLED THAT IS GOING 
    // TO REPOPULATE THE GALLERY. FIRST HIDE EVERYTHING WITH
    // A CLASS OF GALLERY ITEMS. THEN WE NEED TO SHOW ONLY ITEMS
    // THAT MATCH CHECKBOXES. WE START WITH FULL ONE.
		
    if (this.checked) {
      facets[pinClass].push(pinId);
      console.log(facets[pinClass]);


    } else {
      facets[pinClass] = facets[pinClass].filter(function(value, index, arr){ 
      return value != pinId ;
      });
      console.log(facets[pinClass]);
    }
});


$( document ).ready(function() {




}
);
