const eps = document.querySelectorAll(".eps")

for (let i = 0; i < eps.length; i++) {
    const element = eps[i];

    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "rgba(2, 128, 120, 1)"
    })

    element.addEventListener("mouseleave", () => {
        element.style.backgroundColor = "rgba(22, 24, 30, 1)"
    })
}



