import { createRouter,createWebHistory } from "vue-router";
import Movies from "../components/Movies.vue";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/movies',
            name:'movies',
            component:Movies
        }
    ]
})


export default router
