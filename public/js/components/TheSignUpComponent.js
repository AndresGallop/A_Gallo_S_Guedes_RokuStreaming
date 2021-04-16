export default {
    name: "TheSignUpComponent",

	template: `
    

    <section>

    <h1>Subscription</h1>
    <hr>
    
    <p id="hola">Please fill out the form below to complete the subscription process and become a member of our ever-growing community of retro entertainment lovers.</p><hr>
    <p>The first week is completely free, no strings attached. At the end of the 7th day, however, you'll be prompted to fill out a billing information form to continue accessing out catalogues.</p>

    <div>
        <form @submit.prevent="addUser()">
                <input id="user_email" name="user_email" class="login_input" type="text" placeholder="Email" v-model="userData.email">
                <input id="user_name" name="user_name" class="login_input" type="text" placeholder="Name" v-model="userData.username">
                <input id="user_pass" name="user_pass" class="login_input" type="password" placeholder="Password" v-model="userData.password">
        </form>
    </div>

    <a>
            <input @click.prevent="addUser()" type="submit" class="login_button"  value="Sign Up">
    </a>
    </section>
	`,

data() {
    return {
        userData: {
            username: "",
            password: "",
            email: ""
        },

    }
},

methods: {
    navToHome() {
        this.$router.push({ name: "home", params: { currentuser: this.liveuser }});
       // window.localStorage.setItem('cacheduser', JSON.stringify(this.liveuser));
        
    },

    addUser(){
        //debugger;
        if (this.userData.username !=""){

                    let url = `/ums/admin/signup`,
                    //userData = new FormData(document.querySelector("form"));
                    userData = JSON.stringify({username: this.userData.username, password: this.userData.password, email: this.userData.email});

                    fetch(url, {
                        method: 'POST',
                        body: userData,
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Content-type': 'application/json'
                         }
                        
                    })
                    .then(res => res.json())
                    .then(data => {
                        if(data.message) {
                            console.warn("coudln't add user");
                        } else {
                            data.user_name = this.input.user_name;
                            console.warn("u did it!");
                        }
                    })
                    .catch(err => console.log(err));
    
                } }
}

	
}