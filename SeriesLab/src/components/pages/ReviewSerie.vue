<script >
import { onMounted } from 'vue'; 
import { useRoute } from 'vue-router'; 
import AllReviews from '../principales/reviews/AllReviews.vue';
import FormReviews from '../principales/reviews/FormReviews.vue';
import TopReview from '../principales/reviews/TopReview.vue';
import LoadingSpinner from '../principales/widgets/LoadingSpinner.vue'


export default {

 data(){
    return{
        reviewId: null, // Almacena el ID recibido por URL
        reviewData: null, // Almacena los datos de la API
        loading: true, // Estado de carga
        error: null,
        pathBaseSrcImg:'https://image.tmdb.org/t/p/w200/',
        
    }

},
    //Estos son los parámetros que se le pasan al componente
    props:{
        
    },
    //Aquí van los componentes importados
    components:{

        AllReviews,
        TopReview,
        FormReviews,
        LoadingSpinner,
      
    //   Footer,
    },
    methods:{
        async fetchReviewDetails() {
            try {

                //Credenciales API:
                const API_KEY = 'de4b6461e071a300a503b91fb095113d'
                const LANGUAGE = 'es-ES'; // Idioma español de España
                const DB_ENDPOINT = `https://api.themoviedb.org/3/tv/${this.reviewId}?api_key=${API_KEY}&language=${LANGUAGE}`

                const res = await fetch(DB_ENDPOINT)
                if(!res){throw new Error("Error al obtener los datos");}

                this.reviewData = await res.json();

            } catch (err) {
                this.error = err.message;
                console.error("Error en la API:", err);
            } finally {
                // Cambiar estado de carga en 1 segundo
                setTimeout (()=>{
                     
                    this.loading = false;
                },1000)
                
            }
        },
    },
    mounted() {

        // Obtener el parámetro de la URL
        const route = useRoute(); 
        this.reviewId = route.params.id; 
       
        // Asignar el ID recibido a la propiedad `reviewId`
        this.fetchReviewDetails(); // Llamar a la API
    },
    
}
</script>
<template>
    
    <div class=" min-h-[calc(100vh-14rem)] flex flex-col gap-4 justify-center align-middle w-full">
<div class="flex flex-col">
    <div v-if="loading !=true">
        <TopReview 
        :idSerie="reviewId" 
        :nombreSerie="reviewData.name" 
        :srcImg="pathBaseSrcImg+reviewData.poster_path"
        :popularidad="reviewData.popularity"
        :fechaEmision="reviewData.first_air_date"
        :descripcionSerie="reviewData.overview"
        />
    </div>
    <!-- Contenedor LOADING -->
    <div v-else class="flex flex-row justify-center h-96 items-center ">
        <div class="flex flex-col justify-center  h-32 ">
            <LoadingSpinner/>
        </div>
        
    </div>
    
    <FormReviews />
    <AllReviews 
   :serieId="String(reviewId)"
    />
</div>
    </div>
  
</template>