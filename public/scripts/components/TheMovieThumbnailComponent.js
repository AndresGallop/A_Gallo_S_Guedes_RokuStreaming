export default {
    name: "TheMovieThumb",

    props: ["movie"],
 
    template: `
    <div class="movie_thumb">
       <img :src='"images/" + movie.movies_cover' alt="movie thumb">
    </div>
    `
}