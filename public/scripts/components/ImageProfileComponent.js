export default {
    name: "ProfileImage",

    props: ["profile"],

    template: `
    
    <div class="profile-thumb">
       <img @click="taketostream" :src='"User_images/" + profile.user_picture' :alt='"profile"'>
       <h1 class="profilenames">{{ profile.user_fname }}</h1>
    </div>
    `,

    methods: {

        taketostream(){

            if (window.localStorage.getItem("creds")) {
                this.authenticated = true;
                this.user = JSON.parse(window.localStorage.getItem("creds")).name;
                location.href = "adminpage";
                alert('perro');
            }

            
        }
    }
}