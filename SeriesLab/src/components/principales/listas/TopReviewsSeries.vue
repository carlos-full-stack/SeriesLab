<script >
import { RouterLink,RouterView } from 'vue-router';
import LoadingSpinner from '../widgets/LoadingSpinner.vue';


export default {
  props:{
    arrayFromFirestore:{type:Array}

  },

  //Aquí llamamos a todos los componentes
    components:{
     LoadingSpinner,
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
  <div class=" font-poppinsLight  text-white flex flex-col ">
   
     <h2 v-if="arrayFromFirestore.length > 0" class="text-xl">Top Reviews </h2>
     
     <div class="flex flex-row gap-4 w-full h-auto justify-between ">
      

        <RouterLink v-if="arrayFromFirestore.length > 0"  v-for="serie in arrayFromFirestore" :to="pathUrl+serie.serieId" :key="serie.serieId" class=" mt-4 h-auto overflow-hidden shadow-lg shadow-black rounded-2xl">
        <img :src="serie.srcImage" :alt="serie.serieName" class=" w-48 h-full object-cover rounded-2xl">
      
      </RouterLink>
          <div v-else  class="flex h-80 flex-col justify-center items-center w-full">
            <LoadingSpinner/>
          </div>

      </div>
    


  </div>
</template>
