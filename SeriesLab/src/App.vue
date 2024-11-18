<script >
//Aquí importamos el componente Title
import Title from './components/principales/texto/Title.vue'
import Main from './components/principales/Main.vue'
import SideBarRight from './components/principales/SideBarRight.vue'
import BannerSerie from './components/principales/banners/BannerSerie.vue'
import Footer from './components/principales/Footer.vue'
import { RouterLink,RouterView } from 'vue-router'
import { useReviewsFirestore } from '../stores/reviewsFirestore.js'
import SearchBar from './components/principales/widgets/SearchBar.vue'
import LogInAuth from './components/principales/auth/LogInAuth.vue'


export default {

    setup(){
      const reviewsStore = useReviewsFirestore()
      return {
        reviewsStore
      }
    },

  //Aquí llamamos a todos los componentes
    components:{
      Title,
      Main,
      SideBarRight,
      BannerSerie,
      Footer,
      SearchBar,
      LogInAuth,
      
     
    },
    data(){
        return{
            showLogIn : true,
            showSignup: false,
        }
    },
    created(){
      this.reviewsStore.readReviews()
    }
}
</script>

<template>
  <div class=" font-poppinsLight min-h-screen text-white bg-mainBackground flex lg:flex-row ">

    <div class="fixed z-30 h-screen bg-backgroundColor bg-opacity-90 w-full hidden">
      
      <LogInAuth/>
    </div>
    <div class="fixed  left-1/3 right-5 lg:hidden">
      <SearchBar/>
    </div>

    <div id='lef-side'class="lg:w-3/4 w-full   ">
      
      <RouterView/> 
    </div>

    <div class="lg:w-1/4 lg:fixed  lg:top-0 lg:right-0 h-full w-0 ">
      <SideBarRight/>
    </div>
    


  </div>
</template>


