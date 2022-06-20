$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});
/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function ValidateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}

function ValidatePassword(password) {
  if (password.length >= 10) {
    return true;
  }
  alert("Password must be atleast 10 characters long!");
  return false;
}

let messageData = {};
let loginData = {};
let sentData = {};

if (localStorage) {
  $(document).ready(function () {
    $(".save").click(function () {
      // Get input name
      var Name = $("#loginName").val();
      var Email = $("#loginEmail").val();
      var Password = $("#loginPassword").val();

      loginData = { Name, Email, Password };

      if (ValidateEmail(Email) && ValidatePassword(Password)) {
        // Store data
        localStorage.setItem("loginData", JSON.stringify(loginData));
        document.getElementById("Username").innerHTML = Name;
        document.getElementById("loginBtn").disabled = true;
        alert("Login successful!!");
      }
    });
  });
} else {
  alert("Sorry, your browser do not support local storage.");
}

function findString() {
  var searchText = $("#searchBar").val();
  console.log(searchText);
  window.find(searchText);
}

function findmyLocation() {
  console.log("Location");
  const locationMap = document.getElementById("google-map-container");

  const new_style = {
    height: "500px",
    display: "block",
    visibility: "visible",
  };
  Object.assign(locationMap.style, new_style);

  document.location.href = "#google-map-container";
}


$(".send").click(function () {
  // Get input name

  var Name = $("#contactName").val();
  var Email = $("#contactEmail").val();
  var Subject = $("#contactSubject").val();
  var Message = $("#contactMessage").val();
  messageData = { Name, Email, Subject, Message };

  localStorage.setItem("messageData", JSON.stringify(messageData));

  alert("Your Message is sent.");
});
$(".retrieve").click(function () {
  // sentData.push(localStorage.getItem("messageData")[0]);
  sentData = JSON.parse(localStorage.getItem("messageData"));

  document.getElementById("sentName").value = sentData["Name"];
  document.getElementById("sentEmail").value = sentData["Email"];
  document.getElementById("sentSubject").value = sentData["Subject"];
  document.getElementById("sentMessage").innerHTML = sentData["Message"];
});