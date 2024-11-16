<script >
import { Star } from 'lucide-vue-next';
import Button from '../buttons/Button.vue';


export default {
    //Estos son los parámetros que se le pasan al componente
    props:{

       
        
    },
    data() {
      return {
        
        date: '',
        
      }
    },
    //Aquí van los componentes importados
    components:{

        Button,
        Star

    },
   
    methods:{
       
    getCurrentData() {

        this.date = new Date().toLocaleDateString();

    }
        
    },

    mounted() {

    this.getCurrentData();
  }

}


</script>
<template>

    
    <div class="w-full flex flex-col justify-center items-center px-20 my-3">
        <div class="w-full bg-secondaryBackground grid grid-cols-3 justify-center rounded-2xl">
            <div class="header col-span-3 flex justify-between mx-10 mt-8">
                <div class="flex items-center">
                    <div class="flex gap-x-2 items-center">
                        <select name="" id="" class="bg-mainBackground px-2 py-2">
                            <option value="">Nota</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">1</option>
                            <option value="7">2</option>
                            <option value="8">3</option>
                            <option value="9">4</option>
                            <option value="10">5</option>
                        </select>
                        <span>/10</span><img src="" alt=""></div>
                        <button><Star color="#dcd62e" strokeWidth={3} fill="#dcd62e" /></button>
                    </div>
                <span class="text-center">vanesa.silva@online.org</span>
                <span class="text-center">{{ date }}</span>
            </div>
            <textarea class="col-span-3 mt-10 mb-5 mx-10 rounded bg-mainBackground h-40 text-gray-100 pt-3 pl-3" name="" id="" placeholder="Escribe tu review"></textarea>
            <div class="col-span-3 flex justify-center mb-5"><Button buttonText="Enviar"></Button></div>
        </div>
    </div>
  
</template>
