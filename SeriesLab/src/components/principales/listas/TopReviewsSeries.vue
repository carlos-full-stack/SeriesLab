<script >
import { RouterLink,RouterView } from 'vue-router';


export default {

  //Aquí llamamos a todos los componentes
    components:{
     
    },
    data(){
        return{
          topReviews:
          [
            {
              idReview:1,
              imageSerie: 'https://es.web.img3.acsta.net/c_310_420/pictures/18/04/04/22/52/3191575.jpg',
        
            },
            {
              idReview:2,
              imageSerie: 'https://postercinema.eu/cdn/shop/files/better-call-saul_eigg6itp.jpg?v=1706690442',
        
            },
            {
              idReview:3,
              imageSerie: 'https://image.tmdb.org/t/p/original/hpB5jvpDo2imeF5BFfdmEmXdu7I.jpg',
        
            },
            {
              idReview:4,
              imageSerie: 'https://www.tallengestore.com/cdn/shop/products/HouseOfTheDragon_GoT_-TVShowPoster2_54b826ad-541c-41f3-91d3-8bae735750a3.jpg?v=1664546356',
        
            },
           
          ]
            
        }
        
    },
}
</script>

<template>
  <div class=" font-poppinsLight h-72  text-white flex flex-col">
   
     <h2>Top Reviews </h2>
     <div class="flex flex-row gap-4 w-full h-auto justify-between ">
        <a v-for="image in topReviews" :key="image.idReview" class=" mt-4 h-auto overflow-hidden ">
        <img :src="image.imageSerie" alt="Portada de la serie" class=" w-48 h-full object-cover rounded-xl">
        </a>
     </div>

  </div>
</template>
