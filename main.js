//input
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let username1 = document.getElementById("username").value.toLowerCase();
  let password2 = document.getElementById("password").value.toLowerCase();
  console.log(username1);
  if (username1 === "Admin") {
    if (password2 === "1234") {
      alert("login successful");
    } else {
      alert("invalid password");
    }
  } else {
    alert("invalid username");
  }
}
