<script>
import { storeToRefs } from 'pinia'
import { Star, Edit, Trash2 } from 'lucide-vue-next'
import { useReviewsFirestore } from '../../../../stores/reviewsFirestore.js'    
import { computed } from 'vue';
import { useUserStore } from '../../../../stores/userStore.js';
export default {
    props:{
        serieId:{
            type: String,
            required:true,
        }
    },
    setup(props){
        const store = useReviewsFirestore()
        const { reviewsFirestore } = storeToRefs(store)

        const userStore = useUserStore()
        const { isLoggedIn } = storeToRefs(userStore)
        
        
        // Cargar las reviews inmediatamente
        store.readReviews()

        const filteredReviews = computed(() => {
            if (!reviewsFirestore.value || !Array.isArray(reviewsFirestore.value)) {
                return []
            }

            const searchId = Number(props.serieId) // Convertir a número para comparar con serieId            
            const filtered = reviewsFirestore.value.filter(review => {
                return review.serieId === searchId // Comparar números con números
            })

            return filtered
        })

        const editItem = (id) => {
            console.log('Editando item con ID:', id)
            userStore.setUser({email: 'rocio.valencia@oficina.biz'})
        }

        const deleteItem = (id) => {
            console.log('Eliminando item con ID:', id)
        }

        return {
            store,
            reviewsFirestore,
            filteredReviews,
            isLoggedIn,
            editItem,
            deleteItem
        }
    },   
    
    components:{
        Star,
        Edit,
        Trash2
    },
}
</script>

<template>
    <div>
        <div v-for="review in filteredReviews" :key="review.id" class="pt-4 h-auto lg:px-20">
            <div class="rounded-2xl bg-secondaryBackground h-full flex flex-col p-6">
                <div class="flex flex-row justify-between w-full items-center mb-4">
                    <div class="flex flex-row items-center gap-2">
                        <button>
                            <Star color="#dcd62e" strokeWidth={3} fill="#dcd62e"/>
                        </button>
                        <span class="font-medium">{{review.rating}}/10</span>
                        <span class="text-gray-400 px-4">
                            <data value="dateNow">{{ review.lastUpdate }}</data>
                        </span>
                        <div class="text-gray-300 text-sm">
                             {{ review.userEmail }}
                        </div>
                    </div>

                    <div class="flex flex-row gap-2">
                        <button 
                            v-if="isLoggedIn.value"
                            @click="editItem"
                            class="p-2 hover:bg-gray-700/30 rounded-full transition-colors"
                        >
                            <Edit class="w-5 h-5 stroke-white"/>
                        </button>
                        <button 
                            v-if="isLoggedIn.value"
                            @click="deleteItem"
                            class="p-2 hover:bg-gray-700/30 rounded-full transition-colors"
                        >
                            <Trash2 class="w-5 h-5 stroke-white"/>
                        </button>
                    </div>
                </div>

                <div class="text-gray-300 leading-relaxed">
                    {{ review.comment }}
                </div>
            </div>
        </div>
    </div>
</template>
