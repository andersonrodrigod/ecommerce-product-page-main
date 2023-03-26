const cartBtn = document.querySelector(".cart-btn")
const cartFull = document.querySelector(".cart-full")
const cartEmpty = document.querySelector(".cart-empty")
const menos = document.querySelector(".menos")
const mais = document.querySelector(".mais")
const addCart = document.querySelector(".add-cart")
const trashBtn = document.querySelector(".trash-btn")
let number = document.querySelector(".number")

let count = 0

function cardVazio() {
    cartEmpty.classList.toggle("active-cart-empty")
    
}

function returnCardVazio() {
    cartBtn.addEventListener("click", cardVazio)
}

function cardFull() {
    cartFull.classList.toggle("active-cart-full")
}

function removeCartFull() {
    cartFull.classList.add("active-cart-full");
    cartBtn.removeEventListener("click", cardFull);
  }

function oneProduct() {
    const turn = document.querySelector(".turn-amount")
    const amount = document.querySelector(".amount")
    const price = document.querySelector(".price-total")
    cartBtn.addEventListener("click", cardFull)
        turn.style.display = "none"
        amount.style.display = "none"
        price.style.display = "none"
}



cartBtn.addEventListener("click", cardVazio)

trashBtn.addEventListener("click", () => {
    count = 0;
    number.textContent = count;
    removeCartFull()
    returnCardVazio()
})

addCart.addEventListener("click", (e) => {
    e.preventDefault()
    if(count == 1) {
        cartEmpty.classList.add("active-cart-empty")
        cartBtn.removeEventListener("click", cardVazio)
        oneProduct()
        cardFull()
    } 
    number.textContent = count
})

mais.addEventListener("click", (e) => {
    e.preventDefault()  
    count++
    number.textContent = count
})

menos.addEventListener("click", (e) => {
    e.preventDefault()
    if (count <= 0) {
        count = 0
    } else {
        count-- 
    } 
    number.textContent = count            
})








