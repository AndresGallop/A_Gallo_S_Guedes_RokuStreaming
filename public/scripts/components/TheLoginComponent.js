export default {
    name: "TheLoginComponent",
    
    template:
        `
        <section class="login_body">
        <div class="login_logo_wrapper">
            <div class="login_logo">
                <img class="logo_web" src="./images/0_LOGO.svg">
                <img class="logo_mob" src="./images/0_LOGO_MOB.svg">
            </div>
        </div>
        <!-- render the dynamic data here -->
        <input class="login_input" type="text" placeholder="username" v-model="username">
        <input class="login_input" type="password" placeholder="password" v-model="password">
    
        <input class="login_button" @click="storeCreds" type="submit" value="Sign In">
    
        <div class="login_text">
            <h4>{{ notmemberyet }}</h4>
            <h5> {{forgotpass}} </h5>
        </div>
    
    </section>
    `,

    data: function() {
        return {
            username: "",
            password: ""
        }
    },

    methods: {
        storeCreds() {
            window.localStorage.setItem("creds", JSON.stringify({name: this.username, pword: this.password}));
        }
    }
}