export default {
    name: "EightiesMovies",

    props: ["Eighties"],

    template: `
    
    <div class="moviehero-thumb">
    <img :src='"images/" + Eighties.movies_cover' alt="movie thumb">
    </div>
    `
}