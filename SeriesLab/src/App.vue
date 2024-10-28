<script >
//Aquí importamos el componente Title
import Title from './components/principales/texto/Title.vue'
import Main from './components/principales/Main.vue'

export default {

  //Aquí llamamos a todos los componentes
    components:{
      Title,
      Main,
    },
    data(){
        return{
            
        }
    },
}
</script>

<template>
  <div class=" font-poppinsLight min-h-screen text-white bg-mainBackground ">
    
    <Main/>
    <Title titleText='TITULO'/>
     

  </div>
</template>


