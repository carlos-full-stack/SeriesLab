import { createRouter, createWebHistory } from "vue-router";
import Movies from "../components/Movies.vue";
import Reviews from "../components/principales/reviews/Reviews.vue";
import HomePage from "../components/pages/HomePage.vue";
import ReviewSerie from "../components/pages/ReviewSerie.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/movies',
            name: 'movies',
            component: Movies
        },
        {
            path: '/reviews',
            name: 'reviews',
            component: Reviews
        },
        {
            path: '/review-serie',
            name: 'reviewSerie',
            component: ReviewSerie
        },
    ]
})


export default router
