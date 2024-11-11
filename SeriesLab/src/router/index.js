import { createRouter,createWebHistory } from "vue-router";
import Movies from "../components/Movies.vue";
import Reviews from "../components/principales/reviews/Reviews.vue";
import HomePage from "../components/principales/HomePage.vue";


const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component:HomePage
        },
        {
            path:'/movies',
            name:'movies',
            component:Movies
        },
        {
            path:'/reviews',
            name:'reviews',
            component:Reviews
        },
    ]
})


export default router
