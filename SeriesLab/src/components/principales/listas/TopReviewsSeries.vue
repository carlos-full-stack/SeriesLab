<script >
import { RouterLink,RouterView } from 'vue-router';


export default {
  props:{
    arrayFromFirestore:{type:Array}

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
  <div class=" font-poppinsLight  text-white flex flex-col ">
   
     <h2 class="text-xl">Top Reviews </h2>
     
     <div class="flex flex-row gap-4 w-full h-auto justify-between ">
      

        <RouterLink v-if="arrayFromFirestore.length > 0"  v-for="serie in arrayFromFirestore" :to="pathUrl+serie.serieId" :key="serie.serieId" class=" mt-4 h-auto overflow-hidden shadow-lg shadow-black rounded-2xl">
        <img :src="serie.srcImage" :alt="serie.serieName" class=" w-48 h-full object-cover rounded-2xl">
      <!-- {{ console.log(serie.serieId)
       }} -->
      </RouterLink>

        <div v-else>
          <div class="bg-red-400">NO DATA</div>
        </div>
      </div>
    


  </div>
</template>
