<script >
import { LogOut } from 'lucide-vue-next';

//Aquí importamos el componente Title


export default {

  //Aquí llamamos a todos los componentes
    components:{
      LogOut,
    },
    data(){
        return{
            
        }
    },
}
</script>

<template>
<div class="grid grid-cols-2 gap-y-2 w-full">
  <div class="flex col-span-2 justify-between mb-2">
    <div class="flex gap-x-3">
      <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="rounded-full w-8 h-8" alt="">
      <span>Patricia Pérez</span>
    </div>
    <button>
      <LogOut />
    </button>
  </div>
  <span class="text-sm">Total reviews</span>
  <span class="text-right">8</span>
  <span class="text-sm">Votos</span>
  <span class="text-right">4</span>
</div>
</template>
