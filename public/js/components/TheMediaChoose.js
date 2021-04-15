export default {
    name: "theMediaChoose",

    props: ['liveuser','currentuser'],
    

	template: `
        <section>
                <div @click="gohome">
                <img src="images/beauty.jpg" alt="media thumb">
                    <h1>TV</h1>
                </div>

                <div @click="gohome">
                    <img src="images/arrival.jpg" alt="media thumb">
                    <h1>MOVIES</h1>
                </div>

                <div @click="gohome">
                <img src="images/donjon.jpg" alt="media thumb">
                    <h1>MUSIC</h1>
                </div>
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

        //this.loadMedia(null, 'movies' );
       // debugger;
        this.$emit('setuser', this.currentuser);
    
    },

methods: {
    gohome() {
        this.$router.push({ name: "home", params: { currentuser: this.liveuser}});
        window.localStorage.setItem('cacheduser', JSON.stringify(this.liveuser));
        
    },

    loadMedia(filter, mediaType) {
        // fetch data here
        let url = (filter == null) ? `/api/${mediaType}` : `/api/${mediaType}/${filter}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.retrievedMedia = data;

                // pick a random media object from the array
                this.currentMediaDetails = data[Math.floor(Math.random() * data.length)];
                //console.log("LA COGISTE")
    
            })
        .catch((err) => console.error(err));
    }
}

	
}