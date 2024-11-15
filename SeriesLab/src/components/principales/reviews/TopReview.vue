<script >
import { RouterLink } from 'vue-router';
import LogoSeriesLab from '../widgets/LogoSeriesLab.vue';


export default {
    //Estos son los parámetros que se le pasan al componente
    props:{

        idSerie:{type:String},
        nombreSerie:{type:String},
        srcImg:{type: String},
        popularidad:{type: Number},
        fechaEmision:{type: String},
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


    <div class="h-96  flex flex-col pb-5 ">
        <div class="lg:px-20 h-1/5 flex flex-row justify-between items-center bg-gradient-to-b from-gray-700 to-transparent ">
            <RouterLink to="/">
                <LogoSeriesLab class="pt-1"/>
            </RouterLink>
            
            <div class="text-3xl font-poppinsBold tracking-widest">{{ nombreSerie }}
            </div>

        </div>
        <div class=" lg:px-20 h-4/5 flex flex-row w-full  ">

            <!-- IMAGEN -->
            <div class="w-1/5 shadow-md shadow-black rounded-3xl">
                <img class="rounded-3xl object-cover h-full" :src="srcImg" alt="">
            </div>
            <!-- DESCRIPCIÓN -->
            <div class="flex flex-col  w-4/5 justify-start pl-6">
                <div class="">

                    <!-- Nombre -->
                    <div class="flex flex-row gap-5 items-center align-middle">
                        <div>Nombre original:</div>
                        <div class="font-poppinsThin text-md text-start ">{{ nombreSerie }}</div>
                    </div>

                    <!-- Fecha emisión -->
                    <div class="flex flex-row gap-5 items-center align-middle">
                        <div>Fecha emisión:</div>
                        <div class="font-poppinsThin text-md text-start ">{{`${fechaEmision.slice(8,10)}/${fechaEmision.slice(5,7)}/${fechaEmision.slice(0,4)}`}}</div>
                    </div>

                    <!-- POpularidad -->
                    <div class="flex flex-row gap-5 items-center align-middle">
                        <div>Popularidad IMDB:</div>
                        <div class="font-poppinsThin text-md text-start ">{{ popularidad }} votos</div>
                    </div>
                   
          
                    
                </div>

                <div class="border-gray-600 border-t my-3"></div>

                <div class=" ">

                    <div class="pb-3">Sinópsis</div>
                    <div class=" font-poppinsThin text-sm ">
                       {{descripcionSerie }} 
                    </div>
                </div>
            </div>

            </div>
            
    </div>
  
</template>
