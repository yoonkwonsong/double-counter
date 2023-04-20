let firstCounter = 0
let secondCounter = 0

const firstBtns = document.querySelectorAll(".top > .btn-con > .btn")

firstBtns.forEach((btn) =>
    btn.addEventListener("click", (e) => {
        e.target.textContent == "decrease" && firstCounter--
        e.target.textContent == "reset" && (firstCounter = 0)
        e.target.textContent == "increase" && firstCounter++

        document.querySelector(".top > h3").textContent = firstCounter
    })
)

const secondBtns = document.querySelectorAll(".bot > .btn-con > .btn")

secondBtns.forEach((btn) =>
    btn.addEventListener("click", (e) => {
        e.target.textContent == "decrease" && secondCounter--
        e.target.textContent == "reset" && (secondCounter = 0)
        e.target.textContent == "increase" && secondCounter++

        document.querySelector(".bot > h3").textContent = secondCounter
    })
)
