
function Generator(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()~";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (passwordLength <= 0) {
        return `(password length must be atleast 1)`;
    }
    if (allowedChars.length === 0) {
        return `(atleast one set of characters need to be selected)`;
    }
    for (let i = 0; i < passwordLength; i++) {
        const random = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[random];
    }
    return `Your Password : ${password}`;

    // console.log(allowedChars);
}

function passwordGenerator() {
    const length = Number(document.getElementById("length").value);
    const lower = document.getElementById("includeLowerCase");
    const upper = document.getElementById("includeUpperCase");
    const numbers = document.getElementById("includeNumbers");
    const symbol = document.getElementById("includeSymbols");
    const pass = document.getElementById("password");

    const includeLowerCase = lower.checked ? true : false;
    const includeUpperCase = upper.checked ? true : false;
    const includeNumbers = numbers.checked ? true : false;
    const includeSymbols = symbol.checked ? true : false;
    const Password = Generator(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

    pass.textContent = Password;

}

// const passwordLength = 6;
// const includeLowerCase = true;
// const includeUpperCase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const Password = passwordGenerator(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

// console.log(`Your Password : ${Password}`);