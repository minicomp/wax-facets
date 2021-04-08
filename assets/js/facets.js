// Facet input

let facets = {

};


var setIds = $('fieldset').attr('id');

let numberFacets = setIds.length;

var i;

for (i = 0; i < numberFacets; i++) {
	facets[setIds[i]] = new Array();
}




$('#facets :checkbox').change(function() {
	let setId = $(this).attr('class') + "-set";
	console.log(setId);

    // this will contain a reference to the checkbox   
    if (this.checked) {
        console.log("yay");


    } else {
        console.log("boo")
    }
});


// $( document ).ready(function() {



// }