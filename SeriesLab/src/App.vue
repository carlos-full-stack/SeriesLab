<script >
//Aquí importamos el componente Title
import Title from './components/principales/texto/Title.vue'
import Main from './components/principales/Main.vue'
import BannerSerie from './components/principales/banners/BannerSerie.vue'
import Footer from './components/principales/Footer.vue'
import SideBarRight from './components/principales/SideBarRight.vue'

export default {

  //Aquí llamamos a todos los componentes
    components:{
      Title,
      Main,
      BannerSerie,
      Footer,
      SideBarRight,
    },
    data(){
        return{
            
        }
    },
}
</script>

<template>
  <div class=" font-poppinsLight min-h-screen text-white bg-mainBackground flex flex-row ">
    
    <div class="w-3/4">
     
    <BannerSerie/>
    <Main/>
    <!-- <Footer/> -->
    </div>
    <div class="w-1/4">
      <SideBarRight/>
    </div>
    


  </div>
</template>


