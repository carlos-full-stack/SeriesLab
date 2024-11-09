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
    class="w-full  bg-cover bg-center bg-no-repeat">
        <div class="px-20 h-56 bg-gradient-to-r from-backgroundColor to-transparent py-3 flex flex-col w-2/3">
         <LogoSeriesLab/>
         <div class="py-5 flex flex-row justify-between  mt-5">
             <h2 class=" flex align-middle text-3xl font-poppinsBold">{{ serie.name }}</h2>
             <button class=" bg-primary hover:bg-secondary rounded-md px-4 py-2 text-sm">Hacer Review</button>
             <button class=" bg-primary hover:bg-secondary rounded-md px-4 py-2 text-sm">Ver Reviews</button>
             
         </div>
         <p class="text-xs">{{ serie.desc }}</p>
         </div>
    </div>
  
</template>


