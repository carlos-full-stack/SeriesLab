<script >
//Aquí importamos el componente Title


export default {

  //Aquí llamamos a todos los componentes
    components:{
     
    },
    data(){
        return{
            
        }
    },
}
</script>

<template>
<div class="grid grid-cols-2 gap-y-2 w-[410px]">
  <div class="flex col-span-2 justify-between">
    <div class="flex gap-x-3">
      <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="rounded-full w-8 h-8" alt="">
      <span>Patricia Pérez</span>
    </div>
    <img src="" alt="">
  </div>
  <span>Total reviews</span>
  <span class="text-right">8</span>
  <span>Votos</span>
  <span class="text-right">4</span>
</div>
</template>
