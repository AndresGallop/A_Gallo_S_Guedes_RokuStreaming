export default {
    name: "ProfileImage",

    props: ["profile"],

    template: `
    <div class="profile-thumb">
       <img :src='"images/" + profile.user_picture' alt="movie thumb">
    </div>
    `
}