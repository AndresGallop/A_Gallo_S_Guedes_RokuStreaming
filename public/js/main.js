//import TheMovieThumb from './components/TheMovieThumbnailComponent.js';
//import ImageProfileComponent from './components/ImageProfileComponent.js';

import TheLoginComponent from './components/TheLoginComponent.js';
import AllUsers from './components/TheAllUsersComponent.js';
import HomeComponent from './components/TheHomeComponent.js';
import HomeComponentKids from './components/TheHomeComponentKids.js';
import MusicComponent from './components/TheMusicComponent.js';
import MusicComponentKids from './components/TheMusicComponentKids.js';
import TVShowsComponent from './components/TheTVShowComponent.js';

import TVShowsComponentKids from './components/TheTVShowComponentKids.js';

import SettingsComponent from './components/TheSettingsComponent.js';
import MediaChoose from './components/TheMediaChoose.js';

import MediaChooseKids from './components/TheMediaChooseKids.js';

import SignUpComponent from './components/TheSignUpComponent.js';
import AddProfileComponent from './components/AddProfileComponent.js';

    console.log('fired!');

    // add our VueRouter here
    const router = new VueRouter({
        routes: [
           // { path: "/", component: HomePage}, ****
            { path: "/", name: 'root', component: TheLoginComponent},
            { path: "/users", name: 'users', component: AllUsers},
            { path: '/home', name: 'home', component: HomeComponent, props: true },
            { path: '/homekids', name: 'homekids', component: HomeComponentKids, props: true },
            { path: '/music', name: 'music', component: MusicComponent, props: true },
            { path: '/musickids', name: 'musickids', component: MusicComponentKids, props: true },
            { path: '/tvshows', name: 'tvshows', component: TVShowsComponent, props: true },

            { path: '/tvshowskids', name: 'tvshowskids', component: TVShowsComponentKids, props: true },

            { path: '/settings', name: 'settings', component: SettingsComponent },
            { path: '/mediaoptions', name: 'mediaoptions', component: MediaChoose, props: true },

            { path: '/mediaoptionskids', name: 'mediaoptionskids', component: MediaChooseKids, props: true },

            { path: '/signup', name: 'signup', component: SignUpComponent },
            { path: '/addprofile', name: 'addprofile', component: AddProfileComponent }

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