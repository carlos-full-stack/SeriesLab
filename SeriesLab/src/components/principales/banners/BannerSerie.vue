<script>

import LogoSeriesLab from '../widgets/LogoSeriesLab.vue'

export default {
    //Estos son los parámetros que se le pasan al componente
    props:{

        // titleText:{
        //     type: String,
        //     required:true,
        // },
        
    },
    components:{
        LogoSeriesLab
    }
}
</script>
<template>
    
   <div class="px-20 h-56 bg-green-200 py-3 flex flex-col">
    <LogoSeriesLab/>
    <div class="py-5">Este es el banner</div>
    </div>
  
</template>
