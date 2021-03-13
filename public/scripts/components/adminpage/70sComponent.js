export default {
    name: "SeventiesMovies",

    props: ["Seventies"],

    template: `
    
    <div class="moviehero-thumb">
    <img :src='"images/" + Seventies.movies_cover' alt="movie thumb">
    </div>
    `
}