//Defining function with a name validate
function validate() {  
  //Accessing form elements via form attribute
  var ucustomerid = document.customerreg.customerid;
  var ufnameid = document.customerreg.first_name;
  var ulnameid = document.customerreg.last_name;
  var uemail = document.customerreg.email;
  var uphonenumber = document.customerreg.phone_number;
  var unin = document.customerreg.nin;
  //Validating different form elements from line 23 to 65
  if (validate_customerid(ucustomerid)) {
    if (firstname_validation(ufnameid)) {
      if (lastname_validation(ulnameid)) {
        if (email_validation(uemail)) {
          if (validatephonenumber(uphonenumber)) {
            if (validatenin(unin, 3, 13)) {
            }
          }
        }
      }
    }
  }
  return false;
}

function validate_customerid(ucustomerid) {
  //Declaring a variable numbers that stores the regular expression that will be matched against
  var ltrs = /^[A-Za-z0-9 ]+$/;
  //Statement to check whether the value input matches letters
  if (ucustomerid.value.match(ltrs)) {
    return true;
  } else {
    ucustomerid.style.border = "2px solid red";
    alert("Create customer ID");
    ucustomerid.focus();
    return false;
  }
}

function firstname_validation(ufnameid) {
  //Declaring a variable numbers that stores the regular expression that will be matched against
  var letters = /^[A-Za-z]+$/;
  //Statement to check whether the value input matches letters
  if (ufnameid.value.match(letters)) {
    return true;
  } else {
    ufnameid.style.border = "2px solid red";
    alert("Firstname must have alphabet characters only");
    // ufnameid.focus();
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
    // ulnameid.focus();
    return false;
  }
}
//Defining a method to access the value of the object validateEmail and parameter
function email_validation(uemail) {
  //Declaring a variable numbers that stores the regular expression that will be matched against
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //Statement to check whether the value input matches mailformat
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    //Make an alert when  the condition is not fulfilled with a popup
    alert("You have entered an invalid email address!");
    // uemail.focus();
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
    // uphonenumber.focus();
    return false;
  }
}

//Defining a method to access the value of the object  and 3 parameters
function validatenin(unin, x, y) {
  //Declaring a variable ufnameid_len to store nin length
  var unin_len = unin.value.length;
  //A statement to check whether ufnameid_len between mx &n length i my or == 0
  if (unin_len == 0 || unin_len >= y || unin_len < x) {
    //Make an alert when  the condition is not fulfilled with a popup
    unin.style.border = "2px solid red";
    alert("NIN should not be empty / length be between " + x + " to " + y);
    // unin.focus();
    return false;
  }
  return true;
}


function reset() {
  alert("working");
  let reset = document.getElementById("reset");
  reset.style.display = "none";
}
