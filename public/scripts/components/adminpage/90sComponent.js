export default {
    name: "NinetiesMovies",

    props: ["Nineties"],

    template: `
    
    <div class="moviehero-thumb">
    <img :src='"images/" + Nineties.movies_cover' alt="movie thumb">
    </div>
    `
}