<script >

import AllReviews from '../principales/reviews/AllReviews.vue';
import FormReviews from '../principales/reviews/FormReviews.vue';
import TopReview from '../principales/reviews/TopReview.vue';


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

        AllReviews,
        TopReview,
        FormReviews
      
    //   Footer,
    }
}
</script>
<template>
    
    <div class=" min-h-[calc(100vh-14rem)] flex flex-col gap-4 justify-center align-middle w-full">
<div class="flex flex-col">
    <TopReview />
    <FormReviews />
    <AllReviews />
</div>
    </div>
  
</template>