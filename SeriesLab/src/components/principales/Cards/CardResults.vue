<script >
import LogoSeriesLab from '../widgets/LogoSeriesLab.vue';


export default {
    //Estos son los parámetros que se le pasan al componente
    props:{

        idSerie:{type:Number},
        nombreSerie:{type:String},
        srcImg:{type: String},
        popularidad:{type: Number},
        anyoEmision:{type: String},
        descripcionSerie:{type:String}
        
        
    },
    data() {
      return {
        
      }
    },
    //Aquí van los componentes importados
    components:{
        LogoSeriesLab,
    },
   
    methods:{
       
    
        
    },

}



</script>

<template>


    <div class=" h-96 bg-secondaryBackground   flex flex-col pb-5 rounded-2xl">
        <img :src="srcImg" alt="" class=" overflow-hidden rounded-t-2xl">
        <div class="flex flex-col px-5 ">
            <div class="w-full  text-md font-poppinsBold  pt-2  ">{{ nombreSerie }}</div>
            <div class="w-full text-primary text-md font-poppinsBold pb-2  ">{{ anyoEmision }}</div>
            <div class="w-full  text-xs font-poppinsThin">{{ descripcionSerie.slice(0,80)+'...' }}</div>
            
        </div>
    </div>
  
</template>
