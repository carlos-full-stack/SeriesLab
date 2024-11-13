<script >
//Aquí importamos el componente Title
import Title from './components/principales/texto/Title.vue'
import Main from './components/principales/Main.vue'
import SideBarRight from './components/principales/SideBarRight.vue'
import BannerSerie from './components/principales/banners/BannerSerie.vue'
import Footer from './components/principales/Footer.vue'
import { RouterLink,RouterView } from 'vue-router'

export default {

  //Aquí llamamos a todos los componentes
    components:{
      Title,
      Main,
      SideBarRight,
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
  <div class=" font-poppinsLight min-h-screen text-white bg-mainBackground flex flex-row ">
    
    <div id='lef-side'class="w-3/4 ">
      
      <RouterView/>
    </div>

    <div class="w-1/4 fixed top-0 right-0 h-full">
      <SideBarRight/>
    </div>
    


  </div>
</template>


