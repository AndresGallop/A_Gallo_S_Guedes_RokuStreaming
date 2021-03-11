import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import TheMovieThumb from './components/TheMovieThumbnailComponent.js';
import ProfileImage from './components/ImageProfileComponent.js';

//IMPORTING COMPONENTS FOR THE ADMIN (NO RESTRICTED) PAGE
import HeroImage from './components/adminpage/HeroImageAdultsComponent.js';
import NinetiesMovies from './components/adminpage/90sComponent.js';
import EightiesMovies from './components/adminpage/80sComponent.js';
import SeventiesMovies from './components/adminpage/70sComponent.js';
import SixtiesMovies from './components/adminpage/60sComponent.js';
import FivetiesMovies from './components/adminpage/50sComponent.js';

(() => {
    const vm = new Vue({
        data: {
            allMovies: [],
            allProfiles: [],
            allHeroImgs: [],
            Nineties: [],
            Eighties: [],
            Seventies: [],
            Sixties: [],
            Fiveties: []
        },

        created: function() {
            fetch('/api/movies')
            .then(res => res.json())
            .then(data => {
                console.table(data);
                this.allMovies = data;
                // show me the data in table form
            })
            .catch(err => console.error(err));
        // },

        // mounted: function() {
            fetch('/api/users')
            .then(res => res.json())
            .then(data => {
                console.table(data);
                this.allProfiles = data;
                // show me the data in table form
            })
            .catch(err => console.error(err));

            fetch('/api/moviesHeroImg')
            .then(res => res.json())
            .then(data => {
                console.table(data);
                this.allHeroImgs = data;
                // show me the data in table form
            })
            .catch(err => console.error(err));

            fetch('/api/moviesnineties')
            .then(res => res.json())
            .then(data => {
                console.table(data);
                this.Nineties = data;
                // show me the data in table form
            })
            .catch(err => console.error(err));

            fetch('/api/movieseighties')
            .then(res => res.json())
            .then(data => {
                console.table(data);
                this.Eighties = data;
                // show me the data in table form
            })
            .catch(err => console.error(err));

            fetch('/api/moviesseventies')
            .then(res => res.json())
            .then(data => {
                console.table(data);
                this.Seventies = data;
                // show me the data in table form
            })
            .catch(err => console.error(err));

            fetch('/api/moviessixties')
            .then(res => res.json())
            .then(data => {
                console.table(data);
                this.Sixties = data;
                // show me the data in table form
            })
            .catch(err => console.error(err));

            fetch('/api/moviesfiveties')
            .then(res => res.json())
            .then(data => {
                console.table(data);
                this.Fiveties = data;
                // show me the data in table form
            })
            .catch(err => console.error(err));
        },

        methods: {

        },

        components: {
            moviethumb: TheMovieThumb,
            profilethumb: ProfileImage,
            heroimage: HeroImage,
            ninetiesmovies: NinetiesMovies,
            eightiesmovies: EightiesMovies,
            seventiesmovies: SeventiesMovies,
            sixtiesmovies: SixtiesMovies,
            fivetiesmovies: FivetiesMovies
        }
    }).$mount("#app");
})();