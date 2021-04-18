export default {
    name: "TheMusicComponent",

    props: ['currentuser'],

    template: `
    
    <section class="main_body">
        <div class="hero_wrapper">
            <div class="music_title">
                <h1>Now Playing:</h1>
            </div>
            <div class="music_wrapper">
                <div class="music_align">
                    <img :src="'./images/' + currentMediaDetails.music_cover" alt="">
                    <audio id="thisaudio" controls autoplay loop :src="'./music/' + currentMediaDetails.music_trailer"></audio>
                </div>
            </div>
        </div>
        <br>
        <section class="category_gallery_wrapper">
            <div class="category_filter_select">
                <h2 @click.prevent="filtermusic('0')">All</h2>
                <h2 @click.prevent="filtermusic('90s')">90s</h2>
                <h2 @click.prevent="filtermusic('80s')">80s</h2>
                <h2 @click.prevent="filtermusic('70s')">70s</h2>
                <h2 @click.prevent="filtermusic('60s')">60s</h2>
                <h2 @click.prevent="filtermusic('50s')">50s</h2>
            </div>
            <hr>
        </section>
        <section class="category_gallery_wrapper">
            <div class="category_gallery_container">
                <div class="movie_thumb">
                    <img @click="switchCurrentMedia(media)" v-for="media in filteredMedia" :src="'images/' + media.music_cover" :alt="media.music_cover">
                </div>
            </div>
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

    this.loadMedia(null, 'music');
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

                this.filtermusic(era);
    
            })
        .catch((err) => console.error(err));

        
    },

    switchCurrentMedia(media) {
        this.currentMediaDetails = media;
    },

    filtermusic(era){
        this.filteredMedia = this.retrievedMedia.filter(music => music.music_era === (era));
    },

    filtermusic(era){
        this.filteredMedia = this.retrievedMedia.filter(music => music.music_era.includes(era));
    }

}
}