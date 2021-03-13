export default {
    name: "FivetiesMovies",

    props: ["Fiveties"],

    template: `
    <div class="moviehero-thumb">
    <img :src='"images/" + Fiveties.movies_cover' alt="movie thumb">
    </div>
    `
}