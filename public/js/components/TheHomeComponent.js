export default {
    name: "TheHomeComponent",

    props: ['currentuser'],

    template: `
    
    <section class="main_body">
    <!-- render the dynamic data here -->

    <div class="hero_wrapper">
        <video width="100vw" height="100vh" autoplay muted loop :src="'./video/' + currentMediaDetails.movies_trailer"></video>
    </div>

    <div class="gradient_wrapper"></div>
    <div class="gradient_reverse_wrapper"></div>

    <section class="category_gallery_wrapper">
        <h2>90's</h2>
        <div class="category_gallery_container">
            <div class="btn_container">
                <button class="btn_back"> <p> < </p> </button>
            </div>
            <div class="movie_thumb">
                <img @click="switchCurrentMedia(media)" v-for="media in retrievedMedia" :src="'images/' + media.movies_cover" alt="media thumb">
            </div>
            <div class="btn_container">
            <button class="btn_forward"> <p> > </p> </button>
            </div>
        </div>
    </section>

    <section class="category_gallery_wrapper">
        <h2>80's</h2>
        <div class="category_gallery_container">
            <div class="btn_container">
                <button class="btn_back"> <p> < </p> </button>
            </div>
            <div class="movie_thumb">
                <img @click="switchCurrentMedia(media)" v-for="media in retrievedMedia" :src="'images/' + media.movies_cover" alt="media thumb">
            </div>
            <div class="btn_container">
            <button class="btn_forward"> <p> > </p> </button>
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
    }
},

created: function() {

    this.loadMedia(null, 'movies');
    // debugger;
    this.$emit('setuser', this.currentuser);

},

methods: {
    loadMedia(filter, mediaType) {
        // fetch data here
        let url = (filter == null) ? `/api/${mediaType}` : `/api/${mediaType}/${filter}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.retrievedMedia = data;

                // pick a random media object from the array
                this.currentMediaDetails = data[Math.floor(Math.random() * data.length)];
    
            })
        .catch((err) => console.error(err));
    },

    switchCurrentMedia(media) {
        this.currentMediaDetails = media;
    }

}
}