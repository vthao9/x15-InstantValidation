function validateUsername(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
//  var passEntered = document.getElementById("pass").value;
if (userEntered.length < 6) {
  //Show message that there is an error with the username...
  document.getElementById("usernameError").innerHTML="Bad username.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.remove("has-success");
  document.getElementById("usernameGroup").classList.add("has-error");
}
else if (userEntered.includes(" ")) {
  document.getElementById("usernameError").innerHTML="cant have space";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.remove("has-success");
  document.getElementById("usernameGroup").classList.add("has-error");
}
  else {
    document.getElementById("usernameError").innerHTML="";
    document.getElementById("usernameGroup").classList.remove("has-error");
    document.getElementById("usernameGroup").classList.add("has-success");
}
}
function register() {
  var userName = document.getElementById("user").value;
  var userPass = document.getElementById("pass").value;
  window.alert(userName + " " + userPass);
}
/*
if (passEntered == "password" || passEntered == "PASSWORD" || passEntered == userEntered) {
  //Show message that there is an error with the password...
  document.getElementById("passwordError").innerHTML="Bad password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.remove("has-success");
  document.getElementById("passwordGroup").classList.add("has-error");
}
else if (passEntered.length < 6) {
  document.getElementById("passwordError").innerHTML="password cant be less than 6 characters";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.remove("has-success");
  document.getElementById("passwordGroup").classList.add("has-error");
}
else if (passEntered.length > 20) {
  document.getElementById("passwordError").innerHTML="password cant be more than 20 characters";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.remove("has-success");
  document.getElementById("passwordGroup").classList.add("has-error");
}
else {
  document.getElementById("passwordGroup").classList.remove("has-error");
  document.getElementById("passwordGroup").classList.add("has-success");
}
*/
