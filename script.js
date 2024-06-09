const formElm = document.getElementById("formular")

const mailElm = document.getElementById("mail")

formElm.addEventListener("submit", (e) => {
    e.preventDefault()
    const mailInputElm = document.querySelector("#mail")
    const mailInput = mailInputElm.value
    formElm.innerHTML = 
    `Děkujeme za váš zájem. 
    Těšte se na novinky ze světa frontendu a UX na vaší adrese ${mailInput}.
    `
})

const boxElm = document.getElementById("mail")
boxElm.addEventListener("input", (e) => {
    if (Number(e.target.value.length) === 0) {
        boxElm.classList.add("border")
//prvni if by tam nemuselo byt, ale podle zadani to tam nechavam
    } else if (!e.target.value.includes("@")) {
        boxElm.classList.add("border")
    } else {
        boxElm.classList.remove("border")
    }
})