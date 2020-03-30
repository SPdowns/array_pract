// $(document).ready(function() {
//   let myArray = [];
// 	//on click function
// 	$('form').submit(function(event) {
//     event.preventDefault();
//     let input1 = $("#input-1").val();
//     let input2 = $("#input-2").val();
//     let input3 = $("#input-3").val();

//     myArray.push(input1, input2, input3)
//     console.log(myArray);
//     $(".output").replaceWith(`<div class="output"><ul><li>${input1}</li><li>${input2}</li><li>${input3}</li></ul></div>`)

//   });
//   var total = 0;
//   var summands = [1, 2, 3, 4, 5];
//   summands.forEach(function(summand) {
//     total += summand;
//     console.log(total);
// });
// console.log(total);
// });

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val()
    var person2Input = $("input#person2").val()
    var animalInput= $("input#animal").val()
    var exclamationInput = $("input#exclamation").val()
    var verbInput = $("input#verb").val()
    var nounInput = $("input#noun").val()

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});