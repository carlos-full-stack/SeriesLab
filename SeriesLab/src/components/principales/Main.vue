<script >
import TopReviewsSeries from './listas/TopReviewsSeries.vue';
import TopRatedSeries from './listas/TopRatedSeries.vue';



export default {
    //Estos son los parámetros que se le pasan al componente
    props:{

        // titleText:{
        //     type: String,
        //     required:true,
        // },
        
    },
    //Aquí van los componentes importados
    components:{
        TopReviewsSeries,
        TopRatedSeries,

    }
}
</script>
<template>
    
    <div class="px-20 min-h-[calc(100vh-14rem)] flex flex-col gap-14 justify-center align-middle w-full">
        <!-- Xavi -->
        <TopReviewsSeries/>

        <!-- Mary -->
        <TopRatedSeries/>
    </div>
  
</template>
