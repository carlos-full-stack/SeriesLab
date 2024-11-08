<script >
import SearchBar from './widgets/SearchBar.vue';
import CardUserAllLastReviews from './Cards/CardUserAllLastReviews.vue';
import CardTopReviews from './Cards/CardTopReviews.vue';

export default {
    //Estos son los parámetros que se le pasan al componente
    props:{

        // titleText:{
        //     type: String,
        //     required:true,
        // },
        
    },
    //Aquí van los componentes importados
    components:{
        SearchBar,
        CardUserAllLastReviews,
        CardTopReviews

    }
}
</script>
<template>

    <!-- 

    Pendiente:
    - Ancho sidebar
    - Separacion elementos con gap o mt/mb

    -->
    
    <div class="h-100 w-[300px] flex justify-center items-center bg-secondaryBackground gap-5">


        <SearchBar/>

        <!-- login (crear nuevo widget?) -->

        <div class="w-full">
            <div>
                <img class="w-10 rounded" src="" alt="icono usuario">
                <span>Nombre de usuario</span>
            </div>
            <div>
                <!-- icono entrar o salir -->
            </div>
        </div>

        <CardUserAllLastReviews/>
        <CardTopReviews/>


    </div>


  
</template>
