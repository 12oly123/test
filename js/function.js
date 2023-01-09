// News letter
function newsLetter() {
  window.alert("Subscribe made successfully!");
}
// Rating star
var count = 0;

function startRating(item) {
  count = item.id[0];
  sessionStorage.star = count;
  for (var i = 0; i < 5; i++) {
    if (i < count) {
      document.getElementById(i + 1).classList.add("fa-solid");
    } else {
      document.getElementById(i + 1).classList.remove("fa-solid");
    }
  }
}

// Year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Contact
function getMessage() {
  let firstName = document.getElementById("name").value;
  let lastName = document.getElementById("surname").value;

  if (!isNaN(firstName)) {
    document.getElementById("message").textContent = "Something went wrong";
    document.getElementsByClassName("alert-success")[0].style.display = "block";
    document
      .getElementsByClassName("alert-success")[0]
      .classList.add("alert-danger");
    return false;
  } else {
    document.getElementById("message").textContent =
      "Thank you " + firstName + " " + lastName + ". We got your message!";
    document.getElementsByClassName("alert-success")[0].style.display = "block";
  }
}
