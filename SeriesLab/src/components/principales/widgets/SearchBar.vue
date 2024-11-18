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

<style scoped>

.search-icon {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%239a9a9a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>');
  background-repeat: no-repeat;
  background-position-x: right 15px;
  background-position-y: center;

}

</style>

<template>
  <!-- <div class="my-5 font-poppinsLight h-96 text-white flex flex-col bg-secondaryBackground">
   
     <h2>Top rated series</h2>
     <div>Aquí va la lista v-for</div>

  </div> -->

  <form action="" class="w-full">
    <input class="w-full h-10 rounded-2xl bg-white lg:bg-opacity-5 bg-opacity-20 pl-5 mt-8 search-icon" placeholder="Search" type="text" name="" id="" >
  </form>
</template>
