<script >
import MainTopRated from './listas/MainTopRated.vue'
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
        MainTopRated,
        TopRatedSeries,

    }
}
</script>
<template>
    
    <div class="px-20 min-h-[calc(100vh-14rem)]">
        <MainTopRated/>
        <TopRatedSeries/>
    </div>
  
</template>
