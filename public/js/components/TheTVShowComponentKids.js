export default {
    name: "TheTVShowsComponent",

    props: ['thismovie'],

    template: `
    
    <section class="main_body body_kids_tv">
        <div class="hero_wrapper">
            <video width="100vw" height="100vh" autoplay loop :src="'./video/' + currentMediaDetails.tvshows_trailer"></video>

            <div>
                <!-- <h2>{{ liveuser.user_name }}</h2> -->
            </div>
        </div>

        <div class="kids_tv_gradient_wrapper"></div>
        <div class="kids_tv_gradient_reverse_wrapper"></div>

        <section class="category_gallery_wrapper">

            <div class="category_filter_select">
            <h2 @click.prevent="filtertvshows('0')">All</h2>
                <h2 @click.prevent="filtertvshows('90s')">90s</h2>
                <h2 @click.prevent="filtertvshows('80s')">80s</h2>
                <h2 @click.prevent="filtertvshows('70s')">70s</h2>
                <h2 @click.prevent="filtertvshows('60s')">60s</h2>
                <h2 @click.prevent="filtertvshows('50s')">50s</h2>
            </div>
            <hr>
            <section class="category_gallery_wrapper">

                <div class="category_gallery_container">
                    
                    <div class="movie_thumb">
                        <img @click="switchCurrentMedia(media)" v-for="media in filteredMedia" :src="'images/' + media.tvshows_cover" :alt="media.tvshows_cover">
                    </div>
                    
                </div>
            </section>
        </section>

    </section>
`,

data() {
    return {
        // push first (or random) media object here (selected / filtered on create)
        currentMediaDetails: {},
        // could add more media types here in future

        retrievedMedia: [],
        filteredMedia: []
    }
},

created: function() {

    this.loadMedia( null , 'tvshows');
    //debugger;
    //this.$emit('setuser', this.currentuser);
    
},

methods: {
    
    loadMedia(filter, mediaType) {
        // fetch data here
        let url = (filter == null) ? `/api/${mediaType}` : `/api/${mediaType}/${filter}`;

        fetch(url)
            .then(res => res.json())
            .then(data => { this.retrievedMedia = this.filteredMedia = data;

                // pick a random media object from the array
                this.currentMediaDetails = data[Math.floor(Math.random() * data.length)];
                

                //this.filtertvshows(era);
    
            })
        .catch((err) => console.error(err));

        
    },

    switchCurrentMedia(media) {
        this.currentMediaDetails = media;
    },

    filtertvshows(era){
        this.filteredMedia = this.retrievedMedia.filter(tvshow => tvshow.tvshows_era === (era) && tvshow.Kids !== null);
    },
    
    filtertvshows(era){
        this.filteredMedia = this.retrievedMedia.filter(tvshow => tvshow.tvshows_era.includes(era) && tvshow.Kids !== null);
    }
}
}