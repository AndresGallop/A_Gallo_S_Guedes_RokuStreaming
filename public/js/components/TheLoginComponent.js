export default {
    name: "TheLoginComponent",
    
    template:`
        <section class="login_body">
            <div class="login_logo_wrapper">
                <div class="login_logo">
                    <img class="logo_web" src="./images/0_LOGO.svg">
                    <img class="logo_mob" src="./images/0_LOGO_MOB.svg">
                </div>
            </div>

            <!-- render the dynamic data here -->
            <input class="login_input" type="text" placeholder="username" v-model="input.username">
            <input class="login_input" type="password" placeholder="password" v-model="input.password">

            <a>
                <input v-on:click.prevent="login()" type="submit" class="login_button"  value="Sign In">
            </a>

            <p>Not a member yet? <span @click="toSignUp" class="decored">Sign up</span> to check our sweet catalogue</p>      
            <p>Forgot your password?</p>         
        </section>
    `,

data() {
    return {
        input: {
            username: "",
            password: ""
        },

    }
},

    methods: {
        login() {
            // let's check for valid input
            if (this.input.username != "" && this.input.password !="") {
                // do our login
                let loginData = JSON.stringify({username: this.input.username, password: this.input.password});

                let url = `/ums/admin/login`;

                fetch(url, {
                    method: 'POST',
                    body: loginData,
                    headers: {
                       'Accept': 'application/json, text/plain, */*','Content-type': 'application/json'
                    }   
                })
                .then(res => res.json())
                .then(data => {
                    if (data.message) {
                        console.warn("user doesn't exist, or something else broke");
                    } else {
                        data.user_name = this.input.username;
                        this.$router.replace({ name: "users"});
                    }
                })
                .catch((err) => console.error(err));
            } else {
                console.log("A username password needs to be input");
            }


        },

        toSignUp(){
            this.$router.push({ name: "signup"});
        }
    }
}