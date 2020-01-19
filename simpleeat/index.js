function SendMenu(){
  window.location.href = "file:///D:/e175169/Bureau/simpleeat/Menu.html";
}

function SendMenu0() {
  window.location.href = "file:///D:/e175169/Bureau/simpleeat/Menu0.html";
}
function goDiner(){
  window.location.href = "file:///D:/e175169/Bureau/simpleeat/DinerSouper.html";
}
function GoLogIn(){
  window.location.href = "file:///D:/e175169/Bureau/simpleeat/LogIn.html";
}

function SendLogInfo() {
  window.location.href = "file:///D:/e175169/Bureau/simpleeat/CreateNew.html";
}
function goToGroceryList(){
  window.location.href = "file:///D:/e175169/Bureau/simpleeat/GroceryList.html";
}
function CreateNewAccount() {
  var firstInput = document.getElementById("password").value;
  var secondInput = document.getElementById("password2").value;

  if (firstInput === secondInput) {
    window.location.href = "file:///D:/e175169/Bureau/simpleeat/Menu.html";
  } else {
    alert('Noooo');
  }
}
