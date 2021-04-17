export default {
    name: "TheMovieThumb",

    props: ["movie"],

    template: `
    <div class="movie_thumb">
        <div @click="openMovie(movie)" class="movie_thumb">
            <img @click="openMovie(movie)" :src='"images/" + movie.movies_cover' alt="movie thumb">
        </div> 
    </div>
    `,

methods: {
    openMovie(movie){
        window.localStorage.setItem('selectedMovie', movie.movies_id);
        this.$router.push({ name: "fullmovie"});
    }
}
}