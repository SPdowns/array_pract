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
    $(".output").replaceWith(`<div class="output"><ul><li>${input1}</li><li>${input2}</li><li>${input3}</li></ul></div>`)

  });
  var total = 0;
  var summands = [1, 2, 3, 4, 5];
  summands.forEach(function(summand) {
    total += summand;
    console.log(total);
});
console.log(total);
});
