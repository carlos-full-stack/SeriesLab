<script >
//Aquí importamos el componente Title


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
              imageSerie: 'https://i.pinimg.com/236x/e4/0d/03/e40d03dd49aacd361bd69f030b915749.jpg',
        
            },
            {
              idReview:3,
              imageSerie: 'https://es.web.img3.acsta.net/c_310_420/pictures/20/03/09/16/09/0521918.jpg',
        
            },
            {
              idReview:4,
              imageSerie: 'https://www.ecartelera.com/carteles-series/700/788/003_p.jpg',
        
            },
            {
              idReview:4,
              imageSerie: 'https://www.tuposter.com/pub/media/catalog/product/cache/71d04d62b2100522587d43c930e8a36b/b/r/breaking_bad_walter_white_poster_1.png',
        
            },
          ]
            
        }
        
    },
}
</script>

<template>
  <div class=" font-poppinsLight h-72 bg-secondaryBackground text-white flex flex-col">
   
     <h2>Top Rated series</h2>
     <div>Aquí va la lista v-for</div>

  </div>
</template>
