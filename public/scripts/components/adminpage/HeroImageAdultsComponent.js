export default {
    name: "HeroImage",

    props: ["heroimage"],

    template: `
    <div class="moviehero-thumb">
    <img :src='"Hero_images/" + heroimage.movies_heroimg' alt="movie thumb">
       <h5 class="profilenames">{{ heroimage.movies_title }}</h5>
    </div>
    `
}