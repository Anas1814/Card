const cardNumber = document.getElementById("number");
const numberInput = document.getElementById("card-number");
const cardName = document.getElementById("name");
const nameInput = document.getElementById("card-name");
const cardMonth = document.getElementById("month");
const monthInput = document.getElementById("card-month");
const cardYear = document.getElementById("year");
const yearInput = document.getElementById("card-year");
const cardCvc = document.getElementById("cvc");
const cvcInput = document.getElementById("card-cvc");
const submitBtn = document.getElementById("submit-btn");
const completed = document.querySelector(".thank");
const form = document.querySelector("form");

function setCardNumber(e) {
    cardNumber.innerText = format(e.target.value);
}
function setCardName(e) {
    cardName.innerText = e.target.value;
}
function setCardMonth(e) {
    cardMonth.innerText = e.target.value;
}
function setCardYear(e) {
    cardYear.innerText = e.target.value;
}
function setCardCvc(e) {
    cardCvc.innerText = e.target.value;
}
function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}
function handlesubmit(e) {
    e.preventDefault();
    if (!nameInput.value) {
        nameInput.classList.add("error");
        nameInput.parentElement.classList.add("error-message"); 
    } else {
        nameInput.classList.remove("error");
        nameInput.parentElement.classList.remove("error-message");
    }
    if (!numberInput.value) {
        numberInput.classList.add("error");
        numberInput.parentElement.classList.add("error-message"); 
    } else {
        numberInput.classList.remove("error");
        numberInput.parentElement.classList.remove("error-message");
    }
    if (!monthInput.value) {
        monthInput.classList.add("error");
        monthInput.parentElement.classList.add("error-message"); 
    } else {
        monthInput.classList.remove("error");
        monthInput.parentElement.classList.remove("error-message");
    }
    if (!yearInput.value) {
        yearInput.classList.add("error");
        yearInput.parentElement.classList.add("error-message"); 
    } else {
        yearInput.classList.remove("error");
        yearInput.parentElement.classList.remove("error-message")
    }
    if (!cvcInput.value) {
        cvcInput.classList.add("error");
        cvcInput.parentElement.classList.add("error-message"); 
    } else {
        cvcInput.classList.remove("error");
        cvcInput.parentElement.classList.remove("error-message")
    }
    if (
        nameInput.value &&
        numberInput.value &&
        monthInput.value &&
        yearInput.value &&
        cvcInput.value &&
        numberInput.value.length == 16
      ) {
        completed.classList.remove("hidden");
        form.classList.add("hidden");
      }
}

numberInput.addEventListener("keyup", setCardNumber);
nameInput.addEventListener("keyup", setCardName);
monthInput.addEventListener("keyup", setCardMonth);
yearInput.addEventListener("keyup", setCardYear);
cvcInput.addEventListener("keyup", setCardCvc);
submitBtn.addEventListener("click",handlesubmit)



