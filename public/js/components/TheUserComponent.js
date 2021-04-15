export default {
    name: "TheUserComponent",

    props: ['liveuser'],

    template: `
    <section class="col-xs-12 col-sm-6 col-md-4 mx-auto">
        <div class="card rounded" @click="navToHome()">
            <div class="card-body text-center">
                <img :src="'images/' + liveuser.user_picture" class="rounded-circle img-fluid">
                <p>{{ liveuser.user_name }}</p>
            </div>
        </div>
    </section>`,

    created: function() {
        // check if there's an avatar
       // this.liveuser.user_picture = (this.liveuser.user_picture) ? this.liveuser.user_picture : "temp_avatar.jpg";
       if (this.liveuser.user_picture == null) {
        this.liveuser.user_picture = "temp_avatar.jpg";
       }
    },

    methods: {
        navToHome() {
            this.$router.push({ name: "mediaoptions", params: { currentuser: this.liveuser }});
            window.localStorage.setItem('cacheduser', JSON.stringify(this.liveuser));
            
        },

        // navToOptions() {
        //     this.$router.push({ name: "mediaoptions", params: { currentuser: this.liveuser }});
        //     window.localStorage.setItem('cacheduser', JSON.stringify(this.liveuser));
            
        // }
    }
}