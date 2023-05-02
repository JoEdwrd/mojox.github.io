const watchList = document.querySelector(".watchListBtn")
const watchNow = document.querySelector(".watchNowBtn")
const seeAllKOW = document.querySelector(".seeAllBtnKOW")
const seeAllPop = document.querySelector(".seeAllBtnPop")
const seeAllDoc = document.querySelector(".seeAllBtnDoc")
const seeAllTS = document.querySelector(".seeAllBtnTS")
const seeAllMYL = document.querySelector(".seeAllBtnMYL")
const seeAllFY = document.querySelector(".seeAllBtnFY")
const seeAllFO = document.querySelector(".seeAllBtnFO")
const seeAllCS = document.querySelector(".seeAllBtnCS")
const seeAllScary = document.querySelector(".seeAllBtnScary")


watchList.addEventListener("mouseover", () => {
    
    watchList.src = "../assets/watchListBtnHover.png"
})

watchList.addEventListener("click", () => {
    watchList.src = "../assets/watchListBtnOnClick.png"
    
})



watchList.addEventListener("mouseleave", () => {
    
    watchList.src = "../assets/watchListBtn.png"
})


watchNow.addEventListener("mouseover", () => {
    
    watchNow.src = "../assets/watchNowBtnHover.png"
})

watchNow.addEventListener("mouseleave", () => {
    watchNow.src = "../assets/watchNowBtn.png"
})

seeAllKOW.addEventListener("mouseover", () => {
    seeAllKOW.classList.remove("text-light")
    seeAllKOW.style.color = "rgba(0, 185, 174, 1)"
})

seeAllKOW.addEventListener("mouseleave", () => {
    seeAllKOW.classList.add("text-light")
})

seeAllPop.addEventListener("mouseover", () => {
    seeAllPop.classList.remove("text-light")
    seeAllPop.style.color = "rgba(0, 185, 174, 1)"
})

seeAllPop.addEventListener("mouseleave", () => {
    seeAllPop.classList.add("text-light")
})

seeAllTS.addEventListener("mouseover", () => {
    seeAllTS.classList.remove("text-light")
    seeAllTS.style.color = "rgba(0, 185, 174, 1)"
})

seeAllTS.addEventListener("mouseleave", () => {
    seeAllTS.classList.add("text-light")
})

seeAllFO.addEventListener("mouseover", () => {
    seeAllFO.classList.remove("text-light")
    seeAllFO.style.color = "rgba(0, 185, 174, 1)"
})

seeAllFO.addEventListener("mouseleave", () => {
    seeAllFO.classList.add("text-light")
})

seeAllDoc.addEventListener("mouseover", () => {
    seeAllDoc.classList.remove("text-light")
    seeAllDoc.style.color = "rgba(0, 185, 174, 1)"
})

seeAllDoc.addEventListener("mouseleave", () => {
    seeAllDoc.classList.add("text-light")
})

seeAllCS.addEventListener("mouseover", () => {
    seeAllCS.classList.remove("text-light")
    seeAllCS.style.color = "rgba(0, 185, 174, 1)"
})

seeAllCS.addEventListener("mouseleave", () => {
    seeAllCS.classList.add("text-light")
})

seeAllFY.addEventListener("mouseover", () => {
    seeAllFY.classList.remove("text-light")
    seeAllFY.style.color = "rgba(0, 185, 174, 1)"
})

seeAllFY.addEventListener("mouseleave", () => {
    seeAllFY.classList.add("text-light")
})

seeAllKOW.addEventListener("mouseover", () => {
    seeAllKOW.classList.remove("text-light")
    seeAllKOW.style.color = "rgba(0, 185, 174, 1)"
})

seeAllKOW.addEventListener("mouseleave", () => {
    seeAllKOW.classList.add("text-light")
})

seeAllMYL.addEventListener("mouseover", () => {
    seeAllMYL.classList.remove("text-light")
    seeAllMYL.style.color = "rgba(0, 185, 174, 1)"
})

seeAllMYL.addEventListener("mouseleave", () => {
    seeAllMYL.classList.add("text-light")
})

seeAllScary.addEventListener("mouseover", () => {
    seeAllScary.classList.remove("text-light")
    seeAllScary.style.color = "rgba(0, 185, 174, 1)"
})

seeAllScary.addEventListener("mouseleave", () => {
    seeAllScary.classList.add("text-light")
})



