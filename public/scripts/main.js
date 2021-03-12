// import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
// import VueRouter from "https://unpkg.com/vue-router@3.5.1/dist/vue-router.js";
import TheMovieThumb from './components/TheMovieThumbnailComponent.js';
import ProfileImage from './components/ImageProfileComponent.js';
import TheLoginComponent from './components/TheLoginComponent.js';

//IMPORTING COMPONENTS FOR THE ADMIN (NO RESTRICTED) PAGE
import HeroImage from './components/adminpage/HeroImageAdultsComponent.js';
import NinetiesMovies from './components/adminpage/90sComponent.js';
import EightiesMovies from './components/adminpage/80sComponent.js';
import SeventiesMovies from './components/adminpage/70sComponent.js';
import SixtiesMovies from './components/adminpage/60sComponent.js';
import FivetiesMovies from './components/adminpage/50sComponent.js';

(() => {

    console.log('fired!');

    // add our VueRouter here
    const router = new VueRouter({
        routes: [
           // { path: "/", component: HomePage}, ****
           { path: "/", component: TheLoginComponent,
        
        },

            // only access route or section if you're logged in / authenticate

            {
                 path: "/adminpage", 
                 component: HeroImage,

                 beforeEnter: (to, from, next) => {
                     // if you're NOT authenticated, then go to the login page
                     if(!vm.authenticated) {
                         next("/login");
                     } else {
                         // you're logged in, you can go to the protected section
                         next();
                     }
                 }
            
            }
        ]
    })

    const vm = new Vue({
        data: {
            allMovies: [],
            allProfiles: [],
            allHeroImgs: [],
            Nineties: [],
            Eighties: [],
            Seventies: [],
            Sixties: [],
            Fiveties: [],
            authenticated: false,
            user: ""
        },

        created: function() {

            if (window.localStorage.getItem("creds")) {
                this.authenticated = true;
                this.user = JSON.parse(window.localStorage.getItem("creds")).name;
            }

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
            fivetiesmovies: FivetiesMovies,
            logincomp: TheLoginComponent
        },

        router
    }).$mount("#app");
})();