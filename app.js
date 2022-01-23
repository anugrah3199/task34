const userInput = document.getElementById("username")
const pswdInput = document.getElementById("pswd")
const btn = document.querySelector("button")

const regexpswd = "(?=.*?[A-Z])(?=.*?[@])(?=.*?[0-9])"
const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// btn.addEventListener("click", validate)

userInput.addEventListener("change", () => {
    let inputemail = userInput.value
    if (inputemail.match(emailregex)) {
        console.log("match")
    } else {
        console.log(" nto macth")
    }
})
pswdInput.addEventListener("change", () => {
    let pswdval = pswdInput.value
    if (pswdval.match(regex)) {
        console.log("match")
    } else {
        console.log(" nto macth")
    }
})

function validate() {
    console.log(
        userInput.value, pswdInput.input
    )
}