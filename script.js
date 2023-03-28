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
let valores = []
 

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
    
}

cartBtn.addEventListener("click", toggleEmptyCart)

trashBtn.addEventListener("click", () => {
    count = 0;
    number.textContent = count;
    removeCartFull()
    returnEmptyCart()
})

function actualCount() {
    console.log(lastClicked)
}

const src = document.querySelectorAll(".src")
const imgPreviewBig = document.querySelectorAll(".img-preview-big")

src.forEach((img) => {
    img.addEventListener("click", (e) => {
        let item = e.currentTarget
        imgPreviewBig.forEach((imgBig, idc) => {
            console.log(idc)
        }) 
    })
})

addCart.addEventListener("click", (e) => {
    e.preventDefault()

    if (count > 0){
        valores.push(count);
        const soma = valores.reduce((acumulado, valorAtual) => {
            return acumulado + valorAtual  
        })
        amount.textContent = soma
        const total = `${priceShoes * soma}`
        price.textContent = `${total},00`
    } 
     
    removeEmptyCart()
    cartBtn.removeEventListener("click",toggleEmptyCart)
    cartBtn.addEventListener("click", activeCartFull)
    moreValues()
    
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








