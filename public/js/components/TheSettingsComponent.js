export default {
    name: "TheSettingsComponent",

	template: `

    <section class="options_wrapper">
        <div class="options_title">
            <h1>Settings</h1>
            <hr>
        </div>
        <div class="options_wrapper">
            <div class="options_subtitle">
                <h1>Account</h1>
            </div>
            <div class="options_items">
                <p>Billing information</p>
                <p>Recent Device Activity</p>
                <p @click="goToAddProfile">Add Profile</p>
                <p @click="logout">Sign out of This Device</p>
                <p>Sign out of All Devices</p>
            </div>
        </div>
        <div class="options_wrapper">
            <div class="options_subtitle">
                <h1>Profiles</h1>
            </div>
            <div class="options_profiles">
                <div class="option_profile_item">
                    <img src="" alt="Parent 1">
                    <h1>Parent 1</h1>
                </div>
                <div class="option_profile_item">
                    <img src="" alt="Parent 2">
                    <h1>Parent 2</h1>
                </div>
                <div class="option_profile_item">
                    <img src="" alt="Kids 1">
                    <h1>Kids 1</h1>
                </div>
                <div class="option_profile_item">
                    <img src="" alt="Kids 2">
                    <h1>Kids 2</h1>
                </div>
            </div>
        </div>
    </section>
        `,

    methods: {

        goToAddProfile(){
            this.$router.push({ name: "addprofile"});
        },

        logout() {
            // remove the cached user from localStorage, if it exists
            if (localStorage.getItem('cacheduser')) {
                localStorage.removeItem('cacheduser');
            }

            this.$router.push({ name: "root"});
            this.currentUser = undefined;
        }

        
    }
}