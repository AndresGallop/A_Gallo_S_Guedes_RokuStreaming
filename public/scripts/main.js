import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import TheMovieThumb from './components/TheMovieThumbnailComponent.js';
import ProfileImage from './components/ImageProfileComponent.js';

(() => {
    const vm = new Vue({
        data: {
            allMovies: [],
            allProfiles: []
        },

        created: 
        function() {
            fetch('/api/movies')
            .then(res => res.json())
            .then(data => {
                console.table(data);
                this.allMovies = data;
                // show me the data in table form
            })
            .catch(err => console.error(err));
        },

        created: function() {
            fetch('/api/users')
            .then(res => res.json())
            .then(data => {
                console.table(data);
                this.allProfiles = data;
                // show me the data in table form
            })
            .catch(err => console.error(err));
        },

        methods: {

        },
        components: {
            moviethumb: TheMovieThumb,
            profilethumb: ProfileImage
        }
    }).$mount("#app");
})();