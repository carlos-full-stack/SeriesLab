<script>

import LogoSeriesLab from '../widgets/LogoSeriesLab.vue';
// import LogoSeriesLab from '../widgets/LogoSeriesLab.vue'

export default {
    data() {
    return {
     
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
    <div class="z-50 w-full flex flex-col justify-center px-5 md:px-40   gap-2 h-screen ">

        <div class="flex flex-col justify-center items-center lg:px-60 xl:px-[200px] gap-2  pb-5">
            <div class="py-5">

                <LogoSeriesLab/>
            </div>

            <input 
            class="py-5 rounded-2xl pl-5 lg:w-96 xl:max-w-96 w-full"
            type="email" placeholder="Email"/>
            <input 
            class="py-5 rounded-2xl pl-5 xl:max-w-96 lg:w-96 w-full"
            type="text" placeholder="Password"/>
            <button 
            class="py-5 rounded-2xl pl-5 bg-purple-500 flex justify-center lg:w-96 xl:max-w-96 w-full transition-all duration-500 ease-in-out hover:bg-purple-700"
            type="text" placeholder="Email">Login</button>
        </div>
        
    </div>
  
   
</template>
