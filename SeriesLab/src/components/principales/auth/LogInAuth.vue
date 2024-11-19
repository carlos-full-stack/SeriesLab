<script>

import LogoSeriesLab from '../widgets/LogoSeriesLab.vue';
import { CircleX, Edit, Trash2 } from 'lucide-vue-next'
import { useLoginState } from '../../../../stores/stateWidgetsStore';

export default {

    setup(){
      
      const showLogIn = useLoginState()
      return {
        
        showLogIn,
      }
    },

    data() {
    return {
     
    };
},

    props:{
        // serie: Object,
    },
    components:{
        LogoSeriesLab,
        CircleX,
    },
}
</script>
<template>
    <div class="z-50 w-full flex flex-col justify-center px-5 items-center  gap-2 h-screen ">

        <div class="flex flex-col justify-center items-center md:max-w-96 w-full  gap-2  pb-5">
            <div class=" w-full flex flex-row justify-end">
                <button>
                    <CircleX 
                    @click="showLogIn.toggleMenuLogin()"
                    class="hover:scale-110 transition-all duration-500 ease-in-out hover:text-primary" /></button>
            </div>
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
