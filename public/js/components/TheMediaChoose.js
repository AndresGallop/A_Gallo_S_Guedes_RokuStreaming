export default {
    name: "theMediaChoose",

    props: ['liveuser','currentuser'],
    

	template: `
        <section class="media_selector_wrapper">
                <div class="media_selector_item adl_tv" @click="gohome">
                    <h1>TV</h1>
                </div>

                <div class="media_selector_item adl_movies" @click="gohome">
                    <h1>MOVIES</h1>
                </div>

                <div class="media_selector_item adl_music" @click="gohome">
                    <h1>MUSIC</h1>
                </div>
        </section>
	`,

    // data() {
    //     return {
    //         // push first (or random) media object here (selected / filtered on create)
    //         currentMediaDetails: {},

    //         // could add more media types here in future

    //         retrievedMedia: [],
    //     }
    // },

    created: function() {

        // this.loadMedia(null, 'movies' );
        // debugger;
        this.$emit('setuser', this.currentuser);
    
    },

methods: {
    gohome() {
        this.$router.push({ name: "home"});
       // window.localStorage.setItem('cacheduser', JSON.stringify(this.liveuser));
        
    },

    // loadMedia(filter, mediaType) {
    //     // fetch data here
    //     let url = (filter == null) ? `/api/${mediaType}` : `/api/${mediaType}/${filter}`;

    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             this.retrievedMedia = data;

    //             // pick a random media object from the array
    //             this.currentMediaDetails = data[Math.floor(Math.random() * data.length)];
    //             //console.log("LA COGISTE")
    //             mierda = Math.random() * data.length;
    //         })
    //     .catch((err) => console.error(err));
    // }
}
}