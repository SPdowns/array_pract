var months = ["jan", "feb", "mar", "apr"];

var new = months.toUpperCase;
console.log;


// var numbers = [1, 2, 3, 4, 5];

// var doubleNumbers = numbers.map(function(number) {
//   number *= 2;
//   console.log(number);
//   return number;
// });

// $(document).ready(function() {
//   let myArray = [];
//   //on click function
//   $("form").submit(function(event) {
//     event.preventDefault();
//     let input1 = $("#input-1").val();
//     let input2 = $("#input-2").val();
//     let input3 = $("#input-3").val();
//     let input4 = $("#input-4").val();

//     myArray.push(input1, input2, input3);
//     myArray.unshift(input4)

//     $(".output ul").append("<li>-------------click--------------</li>");
//     myArray.forEach(function(input) {
//       $(".output ul").append(`<li>${input}</li>`);
//     });

//     myArray = [];
//   });
// });

// $(document).ready(function() {
//   $("#blanks form").submit(function(event) {
//     event.preventDefault();
//     var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

//     blanks.forEach(function(blank) {
//       var userInput = $("input#" + blank).val();
//       $("." + blank).text(userInput);
//     });

//     $("story").show();
//     var person1Input = $("input#person1").val()
//     var person2Input = $("input#person2").val()
//     var animalInput= $("input#animal").val()
//     var exclamationInput = $("input#exclamation").val()
//     var verbInput = $("input#verb").val()
//     var nounInput = $("input#noun").val()

//     $(".person1").text(person1Input);
//     $(".person2").text(person2Input);
//     $(".animal").text(animalInput);
//     $(".exclamation").text(exclamationInput);
//     $(".verb").text(verbInput);
//     $(".noun").text(nounInput);

//     $("#story").show();

//   });
// });
