<script >
import TopReviewsSeries from './listas/TopReviewsSeries.vue';
import TopRatedSeries from './listas/TopRatedSeries.vue';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { app } from '../../../firebase/firebase.js';

//API
//Conexión con la API de TMDB al recurso de las Top series
const DB_TMDB_TOP_RATED= 'https://api.themoviedb.org/3/tv/top_rated?api_key='
const API_KEY = 'de4b6461e071a300a503b91fb095113d'
const LANGUAGE = 'es-ES'; // Idioma español de España
const DB_TOP_RATED = `${DB_TMDB_TOP_RATED}${API_KEY}&language=${LANGUAGE}`


//FIREBASE:
 //Conexión con la app de Firestore que se encuentra en el firebase.js
 const db = getFirestore(app);
 //Entrega un array con todos los objetos de la colección usuario de Firebase OK
 async function getTodos() {
    const todosCollectionRef = collection(db, 'all-reviews-series');
    const todosSnapshot = await getDocs(todosCollectionRef);
    const todasLasReviewsArray = todosSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return todasLasReviewsArray;
  }


export default {
    data(){
        return{

            arrayTopRated: [],
            allReviewsFirestore: [],
            

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

        //Llamada a la API:
            fetch(DB_TOP_RATED)
            .then(res=>res.json())
            .then(data=>{
                this.arrayTopRated = data.results.slice(0,6)
                
            })

        //Llamada al Firestore:
            setTimeout(()=>{

                getTodos().then(todosData => {
                this.allReviewsFirestore = todosData.slice(0,4)
                //Comprobando el array de objetos que son todas las reviews:
                
                });
                },1000)


        },
}
</script>
<template>
    
    <div class="px-20 min-h-[calc(100vh-14rem)] flex flex-col gap-20 justify-center pb-16 align-middle w-full ">
        <!-- Xavi -->
        <TopReviewsSeries
        :arrayFromFirestore="allReviewsFirestore"
        />

        <!-- Mary -->
        <TopRatedSeries 
        :arrayFromData="arrayTopRated"
        />
    </div>
  
</template>
