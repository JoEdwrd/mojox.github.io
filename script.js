// All Page
const profile = document.querySelector('.PP');
const clickedNavbar =  document.querySelector('.clickedNavbar');
const exit = document.querySelector('.exitNavbarBTN')

profile.addEventListener("click", () => {
    clickedNavbar.style.display = "flex"
    clickedNavbar.classList.remove("none")
})

exit.addEventListener("click", () => {
    clickedNavbar.classList.add("none")
    clickedNavbar.style.display = 'none'
})



