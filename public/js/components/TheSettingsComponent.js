export default {
    name: "TheSettingsComponent",

	template: `

    <section>
        <h1>Settings</h1>
        <hr>

        <div>
            <h2>Account</h2>
            <p>Billing information</p>
            <p>Recent Device Activity</p>
            <p @click="goToAddProfile">Add Profile</p>
            <p>Sign out of This Device</p>
            <p>Sign out of All Devices</p>
        </div>

        <div>
            <h1>Profiles</h1>
            <div>
                <img src="" alt="Parent 1">
                <h1>Parent 1</h1>
            </div>

            <div>
                <img src="" alt="Parent 2">
                <h1>Parent 2</h1>
            </div>

            <div>
                <img src="" alt="Kids 1">
                <h1>Kids 1</h1>
            </div>

            <div>
                <img src="" alt="Kids 2">
                <h1>Kids 2</h1>
            </div>
        </div>
        
    </section>
        `,

    methods: {

        goToAddProfile(){
            this.$router.push({ name: "addprofile"});
        }
    }
}