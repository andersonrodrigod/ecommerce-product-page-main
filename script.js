const cartBtn = document.querySelector(".cart-btn")
const cartFull = document.querySelector(".cart-full")
const cartEmpty = document.querySelector(".cart-empty")
const menos = document.querySelector(".menos")
const mais = document.querySelector(".mais")
const addCart = document.querySelector(".add-cart")
const trashBtn = document.querySelector(".trash-btn")
const turn = document.querySelector(".turn-amount")
const amount = document.querySelector(".amount")
const price = document.querySelector(".price-total")

let priceShoes = 125
let number = document.querySelector(".number")
let count = 0
let cartWithProduct = false

 

function toggleEmptyCart() {
    cartEmpty.classList.toggle("active-cart-empty")  
}

function removeEmptyCart() {
    cartEmpty.classList.add("active-cart-empty")  
}

function returnEmptyCart() {
    cartBtn.addEventListener("click", toggleEmptyCart)
}

function activeCartFull() {  
    cartFull.classList.toggle("active-cart-full")  
}

function removeCartFull() {
    cartFull.classList.add("active-cart-full");
    cartBtn.removeEventListener("click", activeCartFull);
}

function oneProduct() {
    turn.style.display = "none"
    amount.style.display = "none"
    price.style.display = "none"
}

function moreValues() {
    let total = priceShoes * count
    if (count == 1) {
        price.textContent = `${priceShoes},00`
        amount.textContent = count
    } else {
        amount.textContent = count
        price.textContent = `${total},00`
        
    }
    
}



cartBtn.addEventListener("click", toggleEmptyCart)

trashBtn.addEventListener("click", () => {
    count = 0;
    number.textContent = count;
    removeCartFull()
    returnEmptyCart()
})


let countHistory = [];


addCart.addEventListener("click", (e) => {
    e.preventDefault()
    if(count >= 1) {
        let newCount = parseInt(count)
        countHistory.push(newCount)
        count = countHistory.reduce((total, num) => total + num)
        console.log(count) 
        removeEmptyCart()
        cartBtn.removeEventListener("click",toggleEmptyCart)
        cartBtn.addEventListener("click", activeCartFull)
    } 
    
       
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








