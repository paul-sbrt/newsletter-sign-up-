let btnSubmit = document.getElementById("submit");
let signUp = document.querySelector(".container");
let succeed = document.querySelector(".container2");
let btnDismiss = document.querySelector(".container2 button");
let inputEmail = document.getElementById("email");
let form = document.querySelector("form");
let currentEmail = document.querySelector(".succeed p strong");
let errorText = document.querySelector(".errorContainer");

function dismiss() {
  btnDismiss.addEventListener("click", () => {
    succeed.style.display = "none";
    signUp.style.display = "flex";
    inputEmail.value = "";
  });
}

function popUp() {
  succeed.style.display = "flex";
  signUp.style.display = "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
  let email = inputEmail.value;
  currentEmail.textContent = `${email}`;
}

function error() {
  errorText.style.display = "inline-flex";
  inputEmail.style.backgroundColor = " #f4bebe ";
  inputEmail.style.borderColor = "hsl(4, 100%, 67%)";
}

function verifEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if (emailRegExp.test(email)) {
    errorText.style.display = "none";
    inputEmail.style.backgroundColor = "";
    inputEmail.style.borderColor = "#ccc";
    popUp();
  } else {
    error();
  }
}

function formClick() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let email = inputEmail.value;
    verifEmail(email);
  });
}

formClick();
dismiss();
