
$("button").click( () => {

   let name = $("#input1").val();
   $("p").append(`Once there was a ${name} named `);



});




$("#make").click( () => {

   let name = $("#input1").val();
   $("p").append(` ${name} is `);



});

$("#make").click( () => {

   let name = $("#input2").val();
   $("p").append(`${name} years old. `);
