$(document).ready(function() {
  let myArray = [];
	//on click function
	$('form').submit(function(event) {
    event.preventDefault();
    let input1 = $("#input-1").val();
    let input2 = $("#input-2").val();
    let input3 = $("#input-3").val();

    myArray.push(input1, input2, input3)
    console.log(myArray);
    

	});
});
