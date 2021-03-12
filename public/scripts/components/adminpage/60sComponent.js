export default {
    name: "SixtiesMovies",

    props: ["Sixties"],

    template: `
    
    <div class="moviehero-thumb">
    <img :src='"images/" + Sixties.movies_cover' alt="movie thumb">
    </div>
    `
}