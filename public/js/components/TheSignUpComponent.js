export default {
    name: "TheSignUpComponent",

	template: `
    

    <section class="options_wrapper">

        <div class="options_title">
            <h1>New User</h1>
            <hr>
        </div>

        <p id="hola">Please fill out the form below to complete the subscription process and become a member of our ever-growing community of retro entertainment lovers.</p>

        <p>The first week is completely free, no strings attached. At the end of the 7th day, however, you'll be prompted to fill out a billing information form to continue accessing out catalogues.</p>
        
        <div class="options_form">
            <form @submit.prevent="addUser()">
                <div class="otions_form_row">
                    <input id="user_email" name="user_email" class="login_input" type="text" placeholder="Email" v-model="userData.email">
                </div>
                <div class="otions_form_row">
                    <input id="user_name" name="user_name" class="login_input" type="text" placeholder="Name" v-model="userData.username">
                </div>
                <div class="otions_form_row">
                    <input id="user_pass" name="user_pass" class="login_input" type="password" placeholder="Password" v-model="userData.password">
                </div>
                <br>
                <div class="otions_form_row">
                    <label>Is this a KIDS account? If not, leave this field empty.</label>
                </div>
                <div class="otions_form_row">
                    <input id="kids" name="kids" class="login_input" type="text" placeholder="Kids field" v-model="userData.kid">
                </div>

                <!-- THIS IS HERE!!!!!!! -->
                <div class="messagerror">
                <span   v-if="errormessage" >{{errormessage}}</span>
                </div>

                <div class="otions_form_row">
                    <a>
                        <input @click.prevent="addUser()" type="submit" class="login_button"  value="Sign Up">
                    </a>
                </div>
            </form>
        </div>
    </section>
	`,

data() {
    return {
        userData: {
            username: "",
            password: "",
            email: "",
            kid:""
        },

        errormessage: ""

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
                    userData = JSON.stringify({username: this.userData.username, password: this.userData.password, email: this.userData.email , kid: this.userData.kid});

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
                            this.errormessage = data.message;
                            console.warn("coudln't add user");
                        } else {
                            
                            data.user_name = this.input.user_name;
                            console.warn("u did it!");
                        }
                    })
                    .catch(err => console.log(err));
    
                } 
                else {

               
                    this.errormessage = "Please fill in required fields";
                    
                    console.log("A username password needs to be input");
                }}
}

	
}