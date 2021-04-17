//import TheMovieThumb from './components/TheMovieThumbnailComponent.js';
//import ImageProfileComponent from './components/ImageProfileComponent.js';

import TheLoginComponent from './components/TheLoginComponent.js';
import AllUsers from './components/TheAllUsersComponent.js';
import HomeComponent from './components/TheHomeComponent.js';
import MusicComponent from './components/TheMusicComponent.js';
import TVShowsComponent from './components/TheTVShowComponent.js';
import SettingsComponent from './components/TheSettingsComponent.js';
import MediaChoose from './components/TheMediaChoose.js';
import SignUpComponent from './components/TheSignUpComponent.js';
import AddProfileComponent from './components/AddProfileComponent.js';
import TheFullMovie from './components/FullMovieComponent.js';

    console.log('fired!');

    // add our VueRouter here
    const router = new VueRouter({
        routes: [
           // { path: "/", component: HomePage}, ****
            { path: "/", name: 'root', component: TheLoginComponent},
            { path: "/users", name: 'users', component: AllUsers},
            { path: '/home', name: 'home', component: HomeComponent, props: true },
            { path: '/music', name: 'music', component: MusicComponent, props: true },
            { path: '/tvshows', name: 'tvshows', component: TVShowsComponent, props: true },
            { path: '/settings', name: 'settings', component: SettingsComponent },
            { path: '/mediaoptions', name: 'mediaoptions', component: MediaChoose, props: true },
            { path: '/signup', name: 'signup', component: SignUpComponent },
            { path: '/addprofile', name: 'addprofile', component: AddProfileComponent },
            { path: '/fullmovie', name: 'fullmovie', component: TheFullMovie, props: true }

        ]
    });

    (() => {
        const vm = new Vue({
            data: {
                authetincated: false,
                isAdmin: false,
                currentUser: undefined
            },
    
            created: function() {
                // use this if you want
    
            },
    
            methods: {
                logout() {
                    // remove the cached user from localStorage, if it exists
                    if (localStorage.getItem('cacheduser')) {
                        localStorage.removeItem('cacheduser');
                    }
    
                    this.$router.push({ name: "root"});
                    this.currentUser = undefined;
                },

                authenticateuser(user){
                    this.currentUser = user;
                },

                goSettings(){
                    this.$router.push({ name: "settings"});
                },

                toSignUp(){
                    this.$router.push({ name: "signup"});
                },

                gohome(){
                    this.$router.push({ name: "home"});
                    
                    //SE DESAPARECE EL HEADER INCLUSO CUANDO PONGO ESTO AQUI!!!
                }
            },
    
    
            router
        }).$mount("#app");
    })();