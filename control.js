const passwordFields = document.querySelectorAll("input[type=password]");

function comparePasswords(e) {
    const isCorrectPwd = passwordFields[0].value === passwordFields[1].value
    const errorElement = passwordFields[1].parentElement.querySelector('p');
    if (!isCorrectPwd) {
        if (errorElement === null) {
            const newErrorElement = document.createElement("p");
            newErrorElement.textContent = "Passwords must be identical";
            newErrorElement.style.position = "absolute";
            newErrorElement.style.left = "7px";
            newErrorElement.style.bottom = "-20px";
            newErrorElement.style.fontSize = "12px";
            newErrorElement.style.color = "coral";
            passwordFields[1].parentElement.appendChild(newErrorElement);
        }
    } else {
        if (errorElement !== null)
            errorElement.remove();
    }
}

function assignEventListeners() {
    for (let field of passwordFields) {
        field.addEventListener('change', comparePasswords);
    }
}

assignEventListeners();