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
          currentIndex: 0 //Índice carrousel
          
            
        }
        
    },
    methods:{

      nextSlide(){
        if (this.currentIndex < this.arrayFromFirestore.length - 1) {
        this.currentIndex++;
        } else {
          this.currentIndex = 0; // Vuelve al inicio
        }
      },

      prevSlide() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        } else {
          this.currentIndex = this.arrayFromFirestore.length - 1; // Vuelve al final
        }
      },
    }
}
</script>

<template>
  <div class=" font-poppinsLight  text-white flex flex-col   ">
   
     <h2 v-if="arrayFromFirestore.length > 0" class="text-xl pl-20">Top Reviews </h2>
     
     <div class="flex flex-row gap-4 w-full h-auto justify-between ">
      
          <!-- Carrusel -->
    <div v-if="arrayFromFirestore.length > 0" class="relative  " >

      <div  class="relative overflow-hidden w-full h-auto ">
        <div
          class="flex transition-transform duration-500 ease-in-out pl-20   py-7 relative"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <!-- Elementos del carrusel -->
          <RouterLink
            v-for="(serie, index) in arrayFromFirestore"
            :key="serie.serieId"
            :to="pathUrl + serie.serieId"
            class="flex-shrink-0  mr-3 shadow-lg shadow-black rounded-2xl"
          >
            <img
              :src="serie.srcImage"
              :alt="serie.serieName"
              class="  w-48 h-full object-cover rounded-2xl"
            />
          </RouterLink>
        </div>
      </div>
       <!-- Controles -->
       <button
        class="absolute top-44 left-0 h-[300px] hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out  flex justify-center items-center transform -translate-y-1/2 bg-gradient-to-r  from-gray-900 to-transparent bg-opacity-50 text-white text-5xl  px-4 "
        @click="prevSlide"
      >
        ‹
      </button>
      <button
        class="absolute top-44 right-0 transform hover:opacity-100 opacity-0 h-[300px] -translate-y-1/2 transition-all duration-500 ease-in-out   text-white p-2 text-5xl px-4 bg-gradient-to-l  from-gray-800  to-transparent bg-opacity-50 "
        @click="nextSlide"
      >
        ›
      </button>
    </div>       
        <!-- <RouterLink v-if="arrayFromFirestore.length > 0"  v-for="serie in arrayFromFirestore" :to="pathUrl+serie.serieId" :key="serie.serieId" class=" mt-4 h-auto overflow-hidden shadow-lg shadow-black rounded-2xl">
        <img :src="serie.srcImage" :alt="serie.serieName" class=" w-48 h-full object-cover rounded-2xl">
      
        </RouterLink> -->

        <!-- Spinner si no hay datos -->
        <div v-else  class="flex h-80 flex-col justify-center items-center w-full">
          <LoadingSpinner/>
        </div>

      </div>
    


  </div>
</template>
