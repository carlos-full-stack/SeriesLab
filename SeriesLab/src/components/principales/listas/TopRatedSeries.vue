<script >
//Aquí importamos el componente Title

import { RouterLink } from 'vue-router';
import CardResults from '../cards/CardResults.vue';

export default {
    props:{
      arrayFromData:{
        type: Array
      }


    },

  //Aquí llamamos a todos los componentes
    components:{
      CardResults
     
    },
    data(){
        return{
          pathBaseSrcImg:'https://image.tmdb.org/t/p/w200/',
          pathUrl: '/review-serie/',

        }
        
    },
}
</script>

<template>
  
  <div class="lg:px-20  px-5 font-poppinsLight  text-white flex flex-col pb-8 ">
   
   
     <h2 class=" text-xl pb-4">Top Rated series</h2>
     <!-- <div class="flex lg:flex-row flex-shrink lg:w-full lg:h-auto lg:justify-between pr-5">
    
        <RouterLink v-if="arrayFromData.length > 0"  v-for="serie in arrayFromData" :to="pathUrl+serie.id" :key="serie.id" class=" mt-4 h-36 w-28 overflow-hidden shadow-lg shadow-black rounded-2xl hover:scale-105 transition-all ease-in-out duration-100">
        <img :src="pathBaseSrcImg+serie.poster_path" :alt="serie.name" class="w-full h-full object-cover rounded-2xl ">
        </RouterLink>

        <div v-else>
          <div class="bg-red-400">NO DATA</div>
        </div>
     </div> -->
     <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6  gap-10 ">
     <div v-for="result in arrayFromData" :key="result.id">
                <RouterLink :to="pathUrl+result.id" class="">
                <CardResults
                :idSerie="result.id"
                :nombreSerie="result.name"
                :srcImg="pathBaseSrcImg+result.poster_path"
                :rating="result.vote_average"
                :anyoEmision="result.first_air_date.slice(0,4)"
                :descripcionSerie="result.overview"
            />
                   
                </RouterLink>
            </div>
          </div>


  </div>
</template>
