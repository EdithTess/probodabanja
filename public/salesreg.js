//Defining function with a name validate
function validate() {
  //Accessing form elements via form attribute
  var ufnameid = document.salesr.first_name;
  var ulnameid = document.salesr.last_name;
  var usernameid = document.salesr.username;
  var uphonenumber = document.salesr.phone_number;
  var uspid = document.salesr.spid;
  var upassword = document.salesr.password;
  var usupervisor = document.salesr.rsupervisor;
  var unone = document.salesr.rnone;
  //Validating different form elements from line 23 to 65
  if (firstname_validation(ufnameid)) {
    if (lastname_validation(ulnameid)) {
      if (username_validation(usernameid)) {
        if (validatephonenumber(uphonenumber)) {
          if (validateid(uspid, 15, 35)) {
            if (validatepassword(upassword, 6, 12)) {
              if (alphanumeric(usupervisor, unone)) {
              }
            }
          }
        }
      }
    }
  }
  return false;
}

function firstname_validation(ufnameid) {
  //Declaring a variable numbers that stores the regular expression that will be matched against
  var letters = /^[A-Za-z]+$/;
  //Statement to check whether the value input matches letters
  if (ufnameid.value.match(letters)) {
    ufnameid.style.border = "";
    return true;
  } else {
    ufnameid.style.border = "2px solid red";
    alert("Firstname must have alphabet characters only");
    ufnameid.focus();
    return false;
  }
}

function lastname_validation(ulnameid) {
  //Declaring a variable numbers that stores the regular expression that will be matched against
  var letters = /^[A-Za-z]+$/;
  //Statement to check whether the value input matches letters
  if (ulnameid.value.match(letters)) {
    return true;
  } else {
    ulnameid.style.border = "2px solid red";
    alert("Lastname must have alphabet characters only");
    ulnameid.focus();
    return false;
  }
}
function username_validation(usernameid) {
  //Declaring a variable numbers that stores the regular expression that will be matched against
  var letters = /^[A-Za-z]+$/;
  //Statement to check whether the value input matches letters
  if (usernameid.value.match(letters)) {
    return true;
  } else {
    usernameid.style.border = "2px solid red";
    alert("Username must have alphabet characters only");
    usernameid.focus();
    return false;
  }
}

//Defining a method to access the value of the object allnumeric and a parameter
function validatephonenumber(uphonenumber) {
  //Declaring a variable numbers that stores the regular expression that will be matched against
  var numbers = /^[0-9 :]+$/;
  //Statement to check whether the value input matches numbers
  if (uphonenumber.value.match(numbers)) {
    return true;
  } else {
    //Make an alert when  the condition is not fulfilled with a popup
    uphonenumber.style.border = "2px solid red";
    alert("Phone number must have numeric characters only");
    uphonenumber.focus();
    return false;
  }
}
//Defining a method to access the value of the object firstname_validation and 3 parameters
function validateid(uspid, maxlength, minlength) {
  //Declaring a variable ufnameid_len to store firstname length
  var uspid_len = uspid.value.length;
  //A statement to check whether ufnameid_len between mx &n length i my or == 0
  if (uspid_len == 0 || uspid_len >= minlength || uspid_len < maxlength) {
    //Make an alert when  the condition is not fulfilled with a popup
    uspid.style.border = "2px solid red";
    alert(
      "Sales Person ID should not be empty / length be between " +
        maxlength +
        " to " +
        minlength
    );
    uspid.focus();
    return false;
  }
  return true;
}

//Defining a method to access the value of the object lastname_validation and 3 parameters
function validatepassword(upassword, max, min) {
  //Declaring a variable ulnameid_len to store lastname length
  var upassword_len = upassword.value.length;
  //A statement to check whether ulnameid_len between max &n length i min or == 0
  if (upassword_len == 0 || upassword_len >= min || upassword_len < max) {
    //Make an alert when  the condition is not fulfilled with a popup
    upassword.style.border = "2px solid red";
    alert(
      "Password should not be empty / length be between " + max + " to " + min
    );
    upassword.focus();
    return false;
  }
  return true;
}
//Defining a method passing different parameters
function alphanumeric(usupervisor, unone) {
  x = 0;
  /* From line 300 to 310, Statements to check if the option male/female has been checked 
but not both with increaments of 1 */
  if (usupervisor.checked) {
    x++;
  }
  if (unone.checked) {
    x++;
  }
  if (x == 0) {
    //Make an alert when  the condition is not fulfilled with a popup
    alert("Select Supervisor/None");
    usupervisor.focus();
    return false;
  } else {
    return true;
  }
}
function reset() {
  alert("working");
  let reset = document.getElementById("reset");
  reset.style.display = "none";
}
