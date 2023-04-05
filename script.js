// DOM
const turn = document.querySelector(".turn-amount")
const price = document.querySelector(".price-total")
const body = document.querySelector(".body-color")
const header = document.querySelector("header")
const main = document.querySelector("main")
const amount = document.querySelector(".amount")
const cartFull = document.querySelector(".cart-full")
const cartEmpty = document.querySelector(".cart-empty")

// BTN
const menos = document.querySelector(".menos")
const mais = document.querySelector(".mais")
const cartBtn = document.querySelector(".cart-btn")
const addCart = document.querySelector(".add-cart")
const trashBtn = document.querySelector(".trash-btn")
const btnRight = document.querySelector(".btn-right")
const btnLeft = document.querySelector(".btn-left")
const btnQuit = document.querySelector(".btn-quit")
const imgBigIndex = document.querySelectorAll(".imgBig-index")
const btnRightCl = document.querySelector(".btn-right-cl")
const btnLeftCl = document.querySelector(".btn-left-cl")

// IMG DOM
const srcIndex = document.querySelectorAll(".src-index")
const imgBig = document.querySelectorAll(".imgBig")
const src = document.querySelectorAll(".src")
const clickImage = document.querySelector(".img-preview-show-click")

// INFO
let priceShoes = 125
let number = document.querySelector(".number")
let count = 0
let valores = []
let idcActual = 0
let idcPrev = 0


// ACTIVE EMPTY CART
function toggleEmptyCart() {
    cartEmpty.classList.toggle("active-cart-empty")  
}

// REMOVE EMPTY CART
function removeEmptyCart() {
    cartEmpty.classList.add("active-cart-empty")  
}

// RETURN EMPTY CART
function returnEmptyCart() {
    cartBtn.addEventListener("click", toggleEmptyCart)
}


// CTIVE CART FULL
function activeCartFull() {  
    cartFull.classList.toggle("active-cart-full")  
}

// REMOVE CART FULL
function removeCartFull() {
    cartFull.classList.add("active-cart-full");
    cartBtn.removeEventListener("click", activeCartFull);
}

// IF IT IS A PRODUCT
function oneProduct() {
    turn.style.display = "none"
    amount.style.display = "none"
    price.style.display = "none"
}


// CLICK IMAGE Z-INDEX
imgBig.forEach((img) => {
    img.addEventListener("click", () => { 
        body.classList.add("dark-screen")
        clickImage.classList.remove("hidden")
        main.classList.add("event-off")
        header.classList.add("event-off")
    })
})

// TO CHANGE THE Z-INDEX IMAGE
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

// TO CHANGE THE IMAGE
const classesMap = {
  "src1": "big-1",
  "src2": "big-2",
  "src3": "big-3",
  "src4": "big-4",
}

src.forEach((img, idc) => {
    img.addEventListener("click", (e) => {
        console.log(imgBtn)
        const item = e.currentTarget;
        imgBig.forEach((big) => {
            big.classList.remove("active");
            big.classList.add("hidden");
        });

        idcPrev = idc

        const bigImgClass = classesMap[item.classList[1]];
        const bigImg = document.querySelector(`.${bigImgClass}`);
        if (bigImg) {
            bigImg.classList.add("active");
            bigImg.classList.remove("hidden");
        }
        
    })   
});


// EVENT BTNS

// SHOW EMPTY CART
cartBtn.addEventListener("click", toggleEmptyCart)

// REMOVE PRODUCT FROM CART
trashBtn.addEventListener("click", () => {
    count = 0;
    number.textContent = count;
    removeCartFull()
    returnEmptyCart()
    valores = []
})

// CLOSE CONTENT Z-INDEX
btnQuit.addEventListener("click", () => {
    clickImage.classList.add("hidden")
    body.classList.remove("dark-screen")
    main.classList.remove("event-off")
    header.classList.remove("event-off")
})

// BTN RIGHT FROM PHONE
btnRightCl.addEventListener("click", () => {
    imgBig[idcPrev].classList.remove("active")
    imgBig[idcPrev].classList.add("hidden")

    idcPrev++

    console.log(idcPrev)

    if(idcPrev >= imgBig.length) {
        idcPrev = 0
    }
    imgBig[idcPrev].classList.remove("hidden")
    imgBig[idcPrev].classList.add("active")
})

// BTN LEFT FROM PHONE
btnLeftCl.addEventListener("click", () => {
    imgBig[idcPrev].classList.remove("active")
    imgBig[idcPrev].classList.add("hidden")

    idcPrev--

    console.log(idcPrev)

    if(idcPrev < 0) {
        idcPrev = imgBig.length -1
    }
    imgBig[idcPrev].classList.remove("hidden")
    imgBig[idcPrev].classList.add("active")
})

// BTN RIGHT FROM DESKTOP
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

// BTN LEFT FROM DESKTOP
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

// BTN ADD PRODUCT FROM CART
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

// BTN PLUS
mais.addEventListener("click", (e) => {
    e.preventDefault()  
    count++
    number.textContent = count
})

// BTN MINUS
menos.addEventListener("click", (e) => {
    e.preventDefault()
    if (count <= 0) {
        count = 0
    } else {
        count-- 
    } 
    number.textContent = count            
})







