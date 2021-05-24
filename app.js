function formValidation(event) {
  event.preventDefault();
  var fname = document.getElementById("firstName").value;
  var lname = document.getElementById("lastName").value;
  var pnumber = document.getElementById("phoneNumber").value;
  var salary = document.getElementById("salary").value;
  var text = "";

  if (
    FirstName(fname) &&
    LastName(lname) &&
    PhoneNumber(pnumber) &&
    Salary(salary)
  ) {
    document.getElementById("signupForm").reset();
    alert('You are registered');
    notifyMe("You are registered");
  }
  return false;
}
/*first name input validation*/
function FirstName(fname) {
  var message = document.getElementsByClassName("error-message");
  var letters = /^[A-Za-z]+$/;
  if (fname == "" || fname.match(letters)) {
    text = "";
    message[0].innerHTML = text;
    return true;
  } else {
    text = "First name should contain only letters";
    message[0].innerHTML = text;
    return false;
  }
}

/*last name input validation*/
function LastName(lname) {
  var message = document.getElementsByClassName("error-message");
  var letters = /^[A-Za-z]+$/;
  if (lname == "" || lname.match(letters)) {
    text = "";
    message[1].innerHTML = text;
    return true;
  } else {
    text = "Last name should contain only letters";
    message[1].innerHTML = text;
    return false;
  }
}
/*phone number validation*/
function PhoneNumber(pnumber) {
  var message = document.getElementsByClassName("error-message");
  var numbers = /^[0-9]+$/;
  const isvalidLen = pnumber.length === 10 ? true : false;
  console.log(isvalidLen);
  if (pnumber == "" || (pnumber.match(numbers) && isvalidLen)) {
    text = "";
    message[2].innerHTML = text;
    return true;
  } else {
    text = !isvalidLen
      ? "Length of Phone number should be 10"
      : "Phone Number should contain only numbers";
    message[2].innerHTML = text;
    return false;
  }
}
/*Salary validation*/
function Salary(salary) {
  var message = document.getElementsByClassName("error-message");
  var numbers = /^[0-9]+$/;
  if (salary == "" || salary.match(numbers)) {
    text = "";
    message[3].innerHTML = text;
    return true;
  } else {
    text = "Salary should contain only numbers";
    message[3].innerHTML = text;
    return false;
  }
}
// Notify on Successfull Submit
function notifyMe(text) {
  navigator.serviceWorker.register("sw.js");
  Notification.requestPermission(function (result) {
    if (result === "granted") {
      navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification("Notification with ServiceWorker");
      });
          var notification = new Notification("Haasyl Notification", {
      body: text,
      requireInteraction: true,
    });
    notification.onclick = function (event) {
      alert("Form Submitted Successfully");
      event.preventDefault();
    };
    }
  });

  if (Notification.permission !== "granted") Notification.requestPermission();
}
