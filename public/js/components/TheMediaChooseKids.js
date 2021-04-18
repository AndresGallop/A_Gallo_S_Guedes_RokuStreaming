export default {
    name: "theMediaChoose",

    props: ['liveuser','currentuser'],
    

	template: `
        <section class="media_selector_wrapper">
            <div class="media_selector_item adl_tv" @click="gotvshows">
                <div class="media_selector_item_content">
                    <h1>TV</h1>

                </div>
            </div>
            <div class="media_selector_item adl_movies" @click="gohome">
                <div class="media_selector_item_content">
                    <h1>MOVIES</h1>
                </div>
            </div>
            <div class="media_selector_item adl_music" @click="gomusic">
                <div class="media_selector_item_content">
                    <h1>MUSIC</h1>
                </div>
            </div>
        </section>
        <img src="../../images/0_MediaSelector_Web_Adlt_TV.png" alt="selector_bg">
	`,


created: function() {

    // this.loadMedia(null, 'movies' );
    // debugger;
    this.$emit('setuser', this.currentuser);

},

methods: {
gohome() {
    this.$router.push({ name: "homekids"});
   // window.localStorage.setItem('cacheduser', JSON.stringify(this.liveuser));
    
},

gomusic() {
    this.$router.push({ name: "musickids"});
   // window.localStorage.setItem('cacheduser', JSON.stringify(this.liveuser));
    
},

gotvshows() {
    this.$router.push({ name: "tvshowskids"});
   // window.localStorage.setItem('cacheduser', JSON.stringify(this.liveuser));
    
},


}
}