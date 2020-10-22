//Business logic
function determineResults(input1, input2, input3, input4, input5) {
  const valTotal = input1 + input2 + input3 + input4 + input5;

  if(valTotal <= 8) {
    celebrity = "Mario";
  } else if (valTotal <= 12) {
    celebrity = "Ratioullie";
  } else if (valTotal <=16) {
    celebrity = "Edward";
  } else {
    character="Santa Clause";
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
    } else if (celebrity === "Ratatouille") {
      $('#answer').hide();
      $('#answer').show();
      $('#celebrity').text("Ratatouille");
      $(".image").hide();
      $("#Ratatouille").show();
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
