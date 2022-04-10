import axios from 'axios'

function fetchMovies(){
    axios.get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then((response)=>{
        console.log(response)
        const title = document.querySelector('h1')
        const poster = document.querySelector('img')
        title.textContent = response.data.Search[0].Title
        poster.src = response.data.Search[0].Poster
    })
}
fetchMovies()