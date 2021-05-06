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
		
    if (this.checked) {
      facets[pinClass].push(pinId);
      console.log(facets[pinClass]);


    } else {
        console.log("boo")
    }
});


$( document ).ready(function() {




}
);
