const form = document.querySelector("form");
const TextInputs = form.querySelectorAll('input[type="text"]');
const EmailInput = form.querySelector("#email");
const MessageInput = form.querySelector("textarea");
const radioInput = form.querySelector("#radio");
const radioInput2 = form.querySelector("#radio2");
const checkInput = form.querySelector("#checkbox-input");

const success = document.querySelector(".success");
const errorText = form.querySelectorAll(".error-message");
let IsFormValid = false;

const validateInputs = (e) => {
  TextInputs.forEach((input) => {
    if (input.value === "") {
      setError(input);
    } else {
      setSuccess(input);
    }
  });

  if (EmailInput.value === "") {
    setError(EmailInput);
  } else {
    setSuccess(EmailInput);
  }
  const valEmail = /^\S+@\S+\.\S+$/;
  if (!valEmail.test(EmailInput.value)) {
    setError(EmailInput);
  }

  if (MessageInput.value === "") {
    setError(MessageInput);
  } else {
    setSuccess(MessageInput);
  }

  if (!radioInput.checked && !radioInput2.checked) {
    setError(radioInput.parentElement.parentElement.parentElement);
  } else {
    setSuccess(radioInput.parentElement.parentElement.parentElement);
  }

  if (checkInput.checked === false) {
    setError(checkInput.parentElement);
  } else {
    setSuccess(checkInput.parentElement);
  }
};

function setError(ele) {
  const eleParent = ele.parentElement;
  const errorText = eleParent.querySelector(".error-message");

  errorText.classList.remove("hide");
  ele.classList.add("error");
}

function setSuccess(ele) {
  const eleParent = ele.parentElement;
  const errorText = eleParent.querySelector(".error-message");
  errorText.classList.add("hide");
  ele.classList.remove("error");
}

const checkFormValidity = () => {
  for (const error of errorText) {
    if (!error.classList.contains("hide")) {
      IsFormValid = false;
      break;
    }
    IsFormValid = true;
  }
  if (IsFormValid) {
    form.reset();
  }
};

function showSuccess(params) {
  if (IsFormValid) {
    success.style.display = "flex";
  } else {
    success.style.display = "none";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  checkFormValidity()
  showSuccess()
});
