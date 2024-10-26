<script >

export default {
    props:{
        titleText:{
            type: String,
            required:true,
        },
        
    },
}
</script>
<template>
   <h1>{{ titleText }}</h1>
    <!-- <h1>kkkkk</h1> -->
</template>

