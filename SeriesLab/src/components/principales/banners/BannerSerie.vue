<script>

import LogoSeriesLab from '../widgets/LogoSeriesLab.vue'

export default {
    data() {
    return {
        serie:{
            id:12,
            name: 'The Wire',
            desc:'David Simon, creador y co-guionista de la mini- serie de HBO tres veces ganadora del premio Emmy The Corner, este sencillo y extremadamente realista drama sigue una caótica y controvertida investigación de drogas ...',
            srcUrl:'https://static.hbo.com/content/dam/hbodata/series/the-wire/ka/the-wire-ka-1920.jpg',
        }
    };
},

    props:{
        // serie: Object,
    },
    components:{
        LogoSeriesLab
    },
}
</script>
<template>
    <div 
    :style="{backgroundImage: `url(${serie.srcUrl})`}" 
    class="w-full  bg-cover bg-center bg-no-repeat mb-0 ">
        <div class="px-20 h-52 bg-gradient-to-r from-backgroundColor to-transparent pt-6 flex flex-col w-2/3">
         <LogoSeriesLab/>
         <div class="py-5 flex flex-row justify-between  mt-5 ">
             <h2 class=" flex align-middle text-3xl font-poppinsBold">{{ serie.name }}</h2>
             <div class="flex flex-row gap-2">

                 <button class=" bg-primary hover:bg-secondary rounded-md px-4 py-2 text-sm transition-all duration-500 ease-in-out">Hacer Review</button>
                 <button class=" bg-primary hover:bg-secondary rounded-md px-4 py-2 text-sm transition-all duration-500 ease-in-out">Ver Reviews</button>
             </div>
             
         </div>
         <p class="text-xs">{{ serie.desc }}</p>
         </div>
    </div>
  
</template>


