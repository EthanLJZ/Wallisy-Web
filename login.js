const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const password = form.password.value

    const authenticated = authentication(password)

    if(authenticated) {
        alert("Access Granted! Welcome to the Wallisy Web!")
        window.location.href = "home.html"
    } else {
        alert("Access Denied! Wrong Password!")
    }
})

function authentication(password) {
    if(password === "17wallisy!42") {
        return true
    } else {
        return false
    }
}