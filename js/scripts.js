//back End


//front End
$(document).ready(function() {
  $("form#surveyForm").submit(function() {
    var nameInput = $("input#name").val();
    var genderInput = $("input#gender").val();
    var birthdayInput = $("input#birthday").val();
    var cuisineInput = $("input#cuisine").val();
    var musicInput = $("input#music").val();
    var colorInput = $("input#color").val();

    // $("#confirmation").show();

    event.preventDefault();
  });
});
