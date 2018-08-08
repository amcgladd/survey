//back End


//front End
$(document).ready(function() {
  $("form#appointmentForm").submit(function() {
    var nameInput = $("input#name").val();
    var dateInput = $("input#date").val();
    var startInput = $("input#start-time").val();
    var endInput = $("input#end-time").val();
    var descriptionInput = $("input#description").val();

    $("#confirmation").show();

    event.preventDefault();
  });
});
