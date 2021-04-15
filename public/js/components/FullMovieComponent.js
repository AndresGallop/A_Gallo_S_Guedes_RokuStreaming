export default {
    name: 'FullMovieComponent',

    data() {
        return ({
            selectedMovie:{}
        })
    },

    created() {

        let pushedMovie = localStorage.getItem('selectedMovie');

        fetch(`api/movies/${pushedMovie}`)
            .then(res => res.json())
            .then(data => {
                this.selectedMovie = data;
            })
            .catch(err => console.log(err));
    },

    template: `
        <div>
            <section class="details-con">
            
                <div class="details-video-con">
                    <video autoplay loop ref="preiviewPlayer" :src="'videos/'+selectedMovie.movies_trailer"></video>
                    <img v-if="volume == 0" src="images/mute.svg" @click="mute" class="mute-btn">
                    <img v-else src="images/sound.svg" @click="mute" class="mute-btn">
                </div>
                <div class="details-info-con">
                    <div class="details-play">
                        <h2>{{selectedMovie.movies_title}}</h2>
                        <a class="button">PLAY MOVIE</a>
                    </div>
                    <div class="details-info">
                        <p class="details-info-main">
                            <span>{{selectedMovie.movies_urating}} Liked</span>
                            <span>{{selectedMovie.movies_year}}</span>
                            <span>{{selectedMovie.movies_arating}}</span>
                            <span>{{selectedMovie.movies_runtime}}</span>
                        </p>
                        <p class="details-info-desc">
                            {{selectedMovie.movies_storyline}}
                        </p>
                        <p>Genres: <span v-for="genre in selectedMovie.movies_genre">{{genre}}, </span></p>
                    </div>
                    <div class="details-info-meta">
                        <p>Cast:<br> <span v-for="actor in selectedMovie.movies_cast">{{actor}}, </span></p>
                        <p>Director: <span>{{selectedMovie.movies_director}}</span></p>
                        <p>Studio: <span>{{selectedMovie.movies_studio}}</span></p>
                    </div>
                </div>
            </section>
        </div>
    `
}