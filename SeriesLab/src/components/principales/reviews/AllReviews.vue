<script>
import { Star, Edit, Trash2 } from 'lucide-vue-next'

export default {
    //Estos son los parámetros que se le pasan al componente
    props:{
        
    },
    data() {
      return {
      }
    },
    //Aquí van los componentes importados
    components:{
        Star,
        Edit,
        Trash2
    },
   
    methods:{
        toggleFavorite() {
        },
        editItem() {
            // Lógica para editar
        },
        deleteItem() {
            // Lógica para eliminar
        }
    },
}
</script>

<template>
    <div class="pt-4 h-auto lg:px-20">
        <div class="rounded-2xl bg-secondaryBackground h-full flex flex-col p-6">
            <div class="flex flex-row justify-between w-full items-center mb-4">
                <div class="flex flex-row items-center gap-2">
                    <button 
                        @click="toggleFavorite"
                        class="p-2 hover:bg-gray-700/30 rounded-full transition-colors"
                    >
                        <Star color="#dcd62e" strokeWidth={3} fill="#dcd62e"/>
                    </button>
                    <span class="font-medium">3/5</span>
                    <span class="text-gray-400 px-4">
                        <data value="dateNow">21/10/2024</data>
                    </span>
                    <div class="text-gray-300 text-sm">
                        Pedro {{ author }}
                    </div>
                </div>

                <div class="flex flex-row gap-2">
                    <button 
                        @click="editItem"
                        class="p-2 hover:bg-gray-700/30 rounded-full transition-colors"
                    >
                        <Edit class="w-5 h-5 stroke-white"/>
                    </button>
                    <button 
                        @click="deleteItem"
                        class="p-2 hover:bg-gray-700/30 rounded-full transition-colors"
                    >
                        <Trash2 class="w-5 h-5 stroke-white"/>
                    </button>
                </div>
            </div>

            <div class="text-gray-300 leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam inventore quae voluptatibus minima minus hic eaque illo aut vero animi error ratione, impedit quia libero doloremque voluptatem mollitia vitae.
            </div>
        </div>
    </div>
</template>