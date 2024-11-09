<script >
//Aquí importamos el componente Title


export default {

  //Aquí llamamos a todos los componentes
    components:{
     
    },
    data(){
        return{
          topRatedSeries:
          [
            {
              idSerie:1,
              imageSerie: 'https://es.web.img3.acsta.net/c_310_420/pictures/18/04/04/22/52/3191575.jpg',
        
            },
            {
              idSerie:2,
              imageSerie: 'https://i.pinimg.com/236x/e4/0d/03/e40d03dd49aacd361bd69f030b915749.jpg',
        
            },
            {
              idSerie:3,
              imageSerie: 'https://es.web.img3.acsta.net/c_310_420/pictures/20/03/09/16/09/0521918.jpg',
        
            },
            {
              idSerie:4,
              imageSerie: 'https://www.ecartelera.com/carteles-series/700/788/003_p.jpg',
        
            },
            {
              idSerie:5,
              imageSerie: 'https://www.tuposter.com/pub/media/catalog/product/cache/71d04d62b2100522587d43c930e8a36b/b/r/breaking_bad_walter_white_poster_1.png',
        
            },
            {
              idSerie:6,
              imageSerie: 'https://m.media-amazon.com/images/M/MV5BM2ZiNThlNzItNmY3Ny00NjA2LWJlMjItNTk1NDI3MDMyMTk4XkEyXkFqcGc@._V1_.jpg',
        
            },
          ]
            
        }
        
    },
}
</script>

<template>
  <div class=" font-poppinsLight h-72 bg-secondaryBackground text-white flex flex-col">
   
     <h2>Top Rated series</h2>
     <div class="flex flex-row gap-4 w-full h-auto">
        <a v-for="image in topRatedSeries" :key="idSerie" class=" mt-4 w-full h-auto overflow-hidden">
        <img :src="image.imageSerie" alt="Portada de la serie" class="w-full h-full object-cover rounded-xl">
        </a>
     </div>

  </div>
</template>
