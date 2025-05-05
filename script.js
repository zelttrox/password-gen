const letters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const specials = "-=?!./%_*"


// Return a random number between 0 and x
function Random(x) {
    return Math.round(Math.random() * x)
}

// Generate the password with a given length
function GeneratePassword(length) {
    var password = []
    for (let i = 0; i < length; i++) {

        let chars = Random(2)
        console.log(chars)
        switch (chars) {
            case 0:
                chars = letters
                break
            case 1:
                chars = numbers
                break
            case 2:
                chars = specials
        }
        let output = chars[Random(chars.length)]
        password.push(output)
    }
    password = password.join("")
    PushPassword(password)
}

// Display the password on the page
function PushPassword(passwd) {
    const output_field = document.getElementById("password-output")
    output_field.innerText = passwd
}
