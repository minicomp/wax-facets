// Facet input

let facets = {

} 

let numberFacets = $('fieldset').length;

var = i;

for (i = 0; i < numberFacets; i++) {
	facets[i] = new Array();
}



$('#facets :checkbox').change(function() {
    // this will contain a reference to the checkbox   
    if (this.checked) {
        console.log("yay") 
    } else {
        console.log("boo")
    }
});


$( document ).ready(function() {



}