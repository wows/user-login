// javascript code 
document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
// if sloution
if (user === "admin" && pass === "1234") {
  alert("login succesful");
} else if (user === "admin") {
  alert("wrong password");
} else{
  alert("wrong username")
}

}