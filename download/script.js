// Download Page Only
const movie = document.querySelector(".movieType")
const tvShow = document.querySelector(".tvShowType")
const anime = document.querySelector(".animeType")

const movieBtn = document.querySelector(".movieBtn")
const tvShowBtn = document.querySelector(".tvShowBtn")
const animeBtn = document.querySelector(".animeBtn")

movieBtn.addEventListener("click", () => {
    movie.classList.remove('none')
    tvShowBtn.classList.remove("text-bg-dark")
    animeBtn.classList.remove("text-bg-dark")
    movieBtn.classList.add('text-bg-dark')
    tvShow.classList.add('none')
    anime.classList.add('none')
})

tvShowBtn.addEventListener("click", () => {
    tvShow.classList.remove('none')
    movieBtn.classList.remove("text-bg-dark")
    animeBtn.classList.remove("text-bg-dark")
    tvShowBtn.classList.add('text-bg-dark')

    movie.classList.add('none')
    anime.classList.add('none')
})

animeBtn.addEventListener("click", () => {
    anime.classList.remove('none')
    tvShowBtn.classList.remove("text-bg-dark")
    movieBtn.classList.remove("text-bg-dark")
    animeBtn.classList.add('text-bg-dark')
    tvShow.classList.add('none')
    movie.classList.add('none')
})