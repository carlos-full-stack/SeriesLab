<script>
import { Star, Edit, Trash2 } from 'lucide-vue-next'
import { getFirestore, doc, collection, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

// credenciales del Firestore:
import { app } from '../../../../firebase/firebase'

async function fetchReviews() {
            try {
                const db = getFirestore(app);
                const querySnapshot = await getDocs(collection(db, 'all-reviews-series'));
                const reviews = querySnapshot.docs.map(doc => ({

                    id: doc.id,
                    ...doc.data()

                }));

                return reviews
                     
            } catch (error) {
                this.error = 'Error al cargar las reseñas';
                this.isLoading = false;
                console.error('Error:', error);
            }
        }

export default {
    

    data() {
      return {
            firestoreAllReviews: [], 
            id: null,
            isEditing: false,
            isDeleting: false,
            isLoading: true,
            error: null
        }
      },
    //Aquí van los componentes importados
    components:{
        Star,
        Edit,
        Trash2
    },

    created() {
        fetchReviews().then(reviews => {
            this.firestoreAllReviews = reviews;
            console.log(this.firestoreAllReviews);
            
            
        });
    },
   
    methods: {
        
    }
}
</script>

<template>
    <div v-for="review in firestoreAllReviews" :key="review.id" class="pt-4 h-auto lg:px-20">
        <div class="rounded-2xl bg-secondaryBackground h-full flex flex-col p-6">
            <div class="flex flex-row justify-between w-full items-center mb-4">
                <div class="flex flex-row items-center gap-2">
                    <button>
                        <Star color="#dcd62e" strokeWidth={3} fill="#dcd62e"/>
                    </button>
                    <span class="font-medium">3/10</span>
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
                {{ review.comment }}
            </div>
        </div>
    </div>
</template>