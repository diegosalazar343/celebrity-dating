//Business logic
function determineResults(input1, input2, input3, input4, input5) {
  const valTotal = input1 + input2 + input3 + input4 + input5;

  if(valTotal <= 8) {
    celebrity = "Mario";
  } else if (valTotal <= 12) {
    celebrity = "Remy";
  } else if (valTotal <=16) {
    celebrity = "Edward Cullen";
  } else {
    celebrity = "Santa Clause";
  }
  return celebrity;
}



//User logic
$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const travel = parseInt($("#travel").val());
    const food = parseInt($("#food").val());
    const holiday = parseInt($("#holiday").val());
    const christmas = parseInt($("#christmas").val());
    const animal = parseInt($("#animal").val());
    let celebrity = determineResults(travel, food, holiday, christmas, animal);


    if (celebrity === "Mario") {
      $('#answer').hide();
      $('#answer').show();
      $('#celebrity').text("Mario");
      $(".image").hide();
      $("#Mario").show();
    } else if (celebrity === "Remy") {
      $('#answer').hide();
      $('#answer').show();
      $('#celebrity').text("Remy");
      $(".image").hide();
      $("#Remy").show();
    } else if (celebrity === "Edward Cullen") {
      $('#answer').hide();
      $('#answer').show();
      $('#celebrity').text("Edward Cullen");
      $(".image").hide();
      $("#EdwardCullen").show();
    } else {
      $('#answer').hide();
      $('#answer').show();
      $('#celebrity').text("Santa Clause");
      $(".image").hide();
      $("#SantaClause").show();
    }
  });
});
