<script >
//Aquí importamos el componente Title
import Title from './components/principales/texto/Title.vue'
import Main from './components/principales/Main.vue'
import BannerSerie from './components/principales/banners/BannerSerie.vue'
import Footer from './components/principales/Footer.vue'

export default {

  //Aquí llamamos a todos los componentes
    components:{
      Title,
      Main,
      BannerSerie,
      Footer,
    },
    data(){
        return{
            
        }
    },
}
</script>

<template>
  <div class=" font-poppinsLight min-h-screen text-white bg-mainBackground ">
    
    <BannerSerie/>
    <Main/>
    <Footer/>

    
    <!-- Ejemplo de componente que le pasamos un prop (componente) -->
    <!-- <Title titleText='TITULO'/> -->
     

  </div>
</template>


