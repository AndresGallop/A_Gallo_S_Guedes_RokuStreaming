export default {
    name: "TheSignUpComponent",

	template: `
    

    <section>

    <h1>Subscription</h1>
    <hr>
    
    <p id="hola">Please fill out the form below to complete the subscription process and become a member of our ever-growing community of retro entertainment lovers.</p><hr>
    <p>The first week is completely free, no strings attached. At the end of the 7th day, however, you'll be prompted to fill out a billing information form to continue accessing out catalogues.</p>

    <div>
            <input class="login_input" type="text" placeholder="Email">
            <input class="login_input" type="password" placeholder="password">
            <input class="login_input" type="password" placeholder="Confirm Password">
    </div>

    <a>
            <input v-on:click.prevent="login()" type="submit" class="login_button"  value="Sign Up">
    </a>
    <section>
	`,

methods: {
    navToHome() {
        this.$router.push({ name: "home", params: { currentuser: this.liveuser }});
       // window.localStorage.setItem('cacheduser', JSON.stringify(this.liveuser));
        
    }
}

	
}