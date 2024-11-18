<script >
//Aquí importamos el componente Title

import { RouterLink } from 'vue-router';

export default {
    props:{
      arrayFromData:{
        type: Array
      }


    },

  //Aquí llamamos a todos los componentes
    components:{
     
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
  
  <div class="pl-20 font-poppinsLight  text-white flex flex-col pb-8 ">
   
   
     <h2 class=" text-xl ">Top Rated series</h2>
     <div class="flex flex-row w-full h-auto justify-between pr-5">
    
        <RouterLink v-if="arrayFromData.length > 0"  v-for="serie in arrayFromData" :to="pathUrl+serie.id" :key="serie.id" class=" mt-4 h-36 w-28 overflow-hidden shadow-lg shadow-black rounded-2xl">
        <img :src="pathBaseSrcImg+serie.poster_path" :alt="serie.name" class="w-full h-full object-cover rounded-2xl">
        </RouterLink>

        <div v-else>
          <div class="bg-red-400">NO DATA</div>
        </div>
     </div>

  </div>
</template>
