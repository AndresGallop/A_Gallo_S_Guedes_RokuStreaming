export default {
    name: "ProfileImage",

    props: ["profile"],

    template: `
    <div class="profile-thumb">
       <img :src='"User_images/" + profile.user_picture' :alt='"profile"'>
       <h1 class="profilenames">{{ profile.user_fname }}</h1>
    </div>
    `
}