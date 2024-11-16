<script >
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

        Button

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
                        <button class="p-2 hover:bg-gray-700/30 rounded-full transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#dcd62e" stroke="#dcd62e" stroke-width="{3}" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></button>
                    </div>
                <span class="text-center">vanesa.silva@online.org</span>
                <span class="text-center">{{ date }}</span>
            </div>
            <textarea class="col-span-3 mt-10 mb-5 mx-10 rounded bg-mainBackground h-40 text-gray-100 pt-3 pl-3" name="" id="" placeholder="Escribe tu review"></textarea>
            <div class="col-span-3 flex justify-center mb-5"><Button buttonText="Enviar"></Button></div>
        </div>
    </div>
  
</template>
