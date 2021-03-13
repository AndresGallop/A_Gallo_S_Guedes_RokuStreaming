export default {
    name: "ProfileImage",

    props: ["profile"],

    template: `
    <div class="profile-thumb">
    <a href="adminpage"><img :src='"User_images/" + profile.user_picture' :alt='"profile"'></a>

    <!-- the LINK ABOVE is temporary, just for the purpuses of having some navigation going on for the CHECKPOINT -->

       <h1 class="profilenames">{{ profile.user_fname }}</h1>
    </div>
    `
}