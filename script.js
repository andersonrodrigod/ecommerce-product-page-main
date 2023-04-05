const cartFull = document.querySelector(".cart-full")
const cartEmpty = document.querySelector(".cart-empty")
const turn = document.querySelector(".turn-amount")
const price = document.querySelector(".price-total")
const body = document.querySelector(".body-color")
const header = document.querySelector("header")
const main = document.querySelector("main")
const amount = document.querySelector(".amount")

const menos = document.querySelector(".menos")
const mais = document.querySelector(".mais")
const cartBtn = document.querySelector(".cart-btn")
const addCart = document.querySelector(".add-cart")
const trashBtn = document.querySelector(".trash-btn")
const btnRight = document.querySelector(".btn-right")
const btnLeft = document.querySelector(".btn-left")
const btnQuit = document.querySelector(".btn-quit")
const imgBigIndex = document.querySelectorAll(".imgBig-index")

const srcIndex = document.querySelectorAll(".src-index")
const imgBig = document.querySelectorAll(".imgBig")
const src = document.querySelectorAll(".src")
const clickImage = document.querySelector(".img-preview-show-click")

let priceShoes = 125
let number = document.querySelector(".number")
let count = 0
let valores = []
let idcActual = 0





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



imgBig.forEach((img) => {
    img.addEventListener("click", () => { 
        contSob = true
        body.classList.add("dark-screen")
        clickImage.classList.remove("hidden")
        main.classList.add("event-off")
        header.classList.add("event-off")
        
        
    })
})

const classesMapIndex = {
    "src1-index": "big-1-index",
    "src2-index": "big-2-index",
    "src3-index": "big-3-index",
    "src4-index": "big-4-index",
}

srcIndex.forEach((img, idc) => {  
    img.addEventListener("click", (e) => {
        let item = e.currentTarget
        imgBigIndex.forEach((big) => { 
            big.classList.remove("active")
            big.classList.add("hidden")
            
        })
     
        idcActual = idc
    
        const bigImgClass = classesMapIndex[item.classList[1]]
        let bigImg = document.querySelector(`.${bigImgClass}`)
        if (bigImg) {
            
            bigImg.classList.add("active")
            bigImg.classList.remove("hidden")
        } 
    })
})


const classesMap = {
  "src1": "big-1",
  "src2": "big-2",
  "src3": "big-3",
  "src4": "big-4",
}

let imgBtn = false

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    imgBtn = true
} else {
    
}

console.log(imgBtn)

if (imgBtn == false) {
    src.forEach((img) => {
        img.addEventListener("click", (e) => {
            console.log(imgBtn)
            const item = e.currentTarget;
            imgBig.forEach((big) => {
                big.classList.remove("active");
                big.classList.add("hidden");
            });
            const bigImgClass = classesMap[item.classList[1]];
            const bigImg = document.querySelector(`.${bigImgClass}`);
            if (bigImg) {
                bigImg.classList.add("active");
                bigImg.classList.remove("hidden");
            }
        
        })   
    }); 
}




cartBtn.addEventListener("click", toggleEmptyCart)

trashBtn.addEventListener("click", () => {
    count = 0;
    number.textContent = count;
    removeCartFull()
    returnEmptyCart()
    valores = []
})

btnQuit.addEventListener("click", () => {
    contSob = false
    clickImage.classList.add("hidden")
    body.classList.remove("dark-screen")
    main.classList.remove("event-off")
    header.classList.remove("event-off")
})

btnRight.addEventListener("click", () => {
    imgBigIndex[idcActual].classList.remove("active");
    imgBigIndex[idcActual].classList.add("hidden");
    
    idcActual++

    if (idcActual >= imgBigIndex.length) {
        idcActual = 0
    }

    imgBigIndex[idcActual].classList.remove("hidden");
    imgBigIndex[idcActual].classList.add("active"); 
})

btnLeft.addEventListener("click", () => {
    imgBigIndex[idcActual].classList.remove("active");
    imgBigIndex[idcActual].classList.add("hidden");

    idcActual--

    if (idcActual < 0) {
        idcActual = imgBigIndex.length - 1
    }
    imgBigIndex[idcActual].classList.remove("hidden");
    imgBigIndex[idcActual].classList.add("active");
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







