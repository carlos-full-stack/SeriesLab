<script >
import TopReviewsSeries from './listas/TopReviewsSeries.vue';
import TopRatedSeries from './listas/TopRatedSeries.vue';

//Conexión con la API de TMDB al recurso de las Top series
const DB_TMDB_TOP_RATED= 'https://api.themoviedb.org/3/tv/top_rated?api_key='
// const API_KEY = 'f1a529d2a0fbae65199fc5360a807700'
const API_KEY = 'de4b6461e071a300a503b91fb095113d'
const LANGUAGE = 'es-ES'; // Idioma español de España
const DB_TOP_RATED = `${DB_TMDB_TOP_RATED}${API_KEY}&language=${LANGUAGE}`
//  token xpilasidev: de4b6461e071a300a503b91fb095113d
//  token acceso de lectura a la API: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTRiNjQ2MWUwNzFhMzAwYTUwM2I5MWZiMDk1MTEzZCIsIm5iZiI6MTczMTY1MDA4OS4wMDI0MzQ3LCJzdWIiOiI2NzM2ZTBhN2ZmZTM4NzhlOWU5ZmIxZGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.t6Loa4DIT20E-RzR-0sTsG3BmjlQWqOOFJLupCqjO_Y


export default {
    data(){
        return{

            arrayTopRated: []
        }
    },
    //Estos son los parámetros que se le pasan al componente
    props:{

        // titleText:{
        //     type: String,
        //     required:true,
        // },
        
    },
    //Aquí van los componentes importados
    components:{
        TopReviewsSeries,
        TopRatedSeries,

    },
    methods:{
      
    },
    created() {
            fetch(DB_TOP_RATED)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                this.arrayTopRated = data.results.slice(0,6)
                
            })
        },
}
</script>
<template>
    
    <div class="px-20 min-h-[calc(100vh-14rem)] flex flex-col gap-20 justify-center align-middle w-full ">
        <!-- Xavi -->
        <TopReviewsSeries/>

        <!-- Mary -->
        <TopRatedSeries 
        :arrayFromData="arrayTopRated"
        />
    </div>
  
</template>
