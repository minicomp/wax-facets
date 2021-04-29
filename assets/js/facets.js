// Facet input

let facets = {

}

let setIds = $.each( $('fieldset'), function( key, value ) {
  value.id
});


let numberFacets = setIds.length;

var i;

for (i = 0; i < numberFacets; i++) {
	facets[setIds[i]] = new Array();
}




$('#facets :checkbox').change(function() {
    // this will contain a reference to the checkbox

		// FILL IN THE LOGIC TO STORE THE CHECKBOXES
		
    if (this.checked) {
        console.log("yay");

    } else {
        console.log("boo")
    }
});


$( document ).ready(function() {




}
);
