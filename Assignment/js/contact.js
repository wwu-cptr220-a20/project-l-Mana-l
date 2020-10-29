var form = document.querySelector('form');

function checkValidity() {
    if (document.getElementById("emailInput").value == "" || document.getElementById("passwordInput").value == "" ||
        document.getElementById("passwordConfirmInput").value == "" || document.getElementById("dobInput").value == "") {
        return false;
    }
    return true;
}

function onClickcallBack(event) {
    event.preventDefault();
    if (!checkValidity()) {
        document.querySelector('form').classList.add('was-validated');
        document.querySelector('button').disabled = true;
    } else {
        document.querySelector('form').classList.add('d-none');
        document.querySelector('p').classList.remove('d-none');
    }
}
form.addEventListener('submit', onClickcallBack);

function getYearsSince(aDate) {

    moment.suppressDeprecationWarnings = true;
    return moment().diff(moment(aDate), 'years');
}

function callbackFunction() {
    let dateInput = document.getElementById("dobInput").value;
    dateInput = getYearsSince(dateInput);
    if (dateInput < 13 || dateInput > 200) {
        dobInput.setCustomValidity("You need to be at least 13 years old.");
        document.getElementById("dobFeedback").textContent = "You need to be at least 13 years old.";
    } else {
        dobInput.setCustomValidity("");
    }
}
var dobInput = document.querySelector('#dobInput');
dobInput.addEventListener('input', callbackFunction);

function validatePasswordMatch() {
    let password = document.getElementById("passwordInput");
    let confirmPW = document.getElementById("passwordConfirmInput");
    if (password.value != confirmPW.value) {
        document.querySelector('#passwordConfirmInput').setCustomValidity("Passwords do not match");
        document.getElementById("passwordConfirmFeedback").textContent = "Passwords do not match";
    } else {
        document.querySelector('#passwordConfirmInput').setCustomValidity("");
        document.getElementById("passwordConfirmFeedback").textContent = "";
    }
}

var passInput = document.querySelector("#passwordInput");
var passCI = document.querySelector("#passwordConfirmInput");
passInput.addEventListener('input', validatePasswordMatch);
passCI.addEventListener('input', validatePasswordMatch);


var allEle = document.querySelectorAll('input');


allEle.forEach(eachEle => {
    eachEle.addEventListener('input', () => {
        if (document.querySelector('form').classList.contains('was-validated') == false) {
            document.querySelector('button').disabled = false;
        } else {
            document.querySelector('button').disabled = true;
        }
    })
})