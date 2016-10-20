// BUSINESS LOGICS
var isVoter = function(age) {
  if (age >= 18) {
    return "#voters";
  } else {
    return "#minors";
  }
}


// INTERFACE LOGICS
$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));
  var result = isVoter(age);
  $(result).show();
});
