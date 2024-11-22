<script>
import { storeToRefs } from "pinia";
import { Star, Edit, Trash2 } from "lucide-vue-next";
import { useReviewsFirestore } from "../../../../stores/reviewsFirestore.js";
import { computed, ref } from "vue";
import DeleteModal from "./DeleteModal.vue";
import { useUserStore } from "../../../../stores/userStore.js";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebase/firebase.js";
import UpdateReview from "./UpdateReview.vue";
import { onMounted, } from 'vue';

export default {
  props: {
    serieId: {
      type: String,
      required: true,
    },
  },
  setup(props) {

   
   
    const store = useReviewsFirestore();
    const { reviewsFirestore } = storeToRefs(store);

    const userStore = useUserStore();
    const { isLoggedIn, userEmail } = storeToRefs(userStore);

    const isDeleting = ref(false);
    const showDeleteModal = ref(false);
    const reviewToDelete = ref(null);

    const isUpdating = ref(false);
    const showEditModal = ref(false);
    const reviewToUpdate = ref(null);
    const selectedReview = ref(null);

    const confirmDelete = async (id) => {
      reviewToDelete.value = id;
      showDeleteModal.value = true;
    };

    const updateReview = async (review) => {
      reviewToUpdate.value = review.id;
      selectedReview.value = review;
      showEditModal.value = true;
    };

    const handleDelete = async () => {
      if (!reviewToDelete.value) {
        console.log("No hay ID para eliminar");
        return;
      }

      isDeleting.value = true;

      try {
        console.log("Intentando eliminar review:", reviewToDelete.value);
        const reviewRef = doc(db, "all-reviews-series", reviewToDelete.value);
        await deleteDoc(reviewRef);
        console.log("Review eliminada correctamente");

        // Actualizar el estado local después de eliminar
        await store.readReviews();
        showDeleteModal.value = false;
      } catch (error) {
        console.error("Error al borrar:", error);
      } finally {
        isDeleting.value = false;
        reviewToDelete.value = null;
      }
    };

    const handleUpdate = async (updatedData) => {
      if (!reviewToUpdate.value) {
        console.log("No hay ID para actualizar");
        return;
      }

      isUpdating.value = true;

      try {
        await store.UpdateReview(reviewToUpdate.value, {
          comment: updatedData.comment,
          rating: updatedData.rating,
          lastUpdate: formattedDate,
          userEmail: userEmail.value,
        });
        showEditModal.value = false;
      } catch (error) {
        console.error("Error al actualizar:", error);
      } finally {
        isUpdating.value = false;
        reviewToUpdate.value = null;
        selectedReview.value = null;
      }
    };
    const formattedDate = new Date().toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });

    const closeDeleteModal = () => {
      showDeleteModal.value = false;
      reviewToDelete.value = null;
    };

    const closeEditModal = () => {
      showEditModal.value = false;
      reviewToUpdate.value = null;
      selectedReview.value = null;
    };

    // Cargar las reviews inmediatamente
    store.readReviews();

    const filteredReviews = computed(() => {
      if (!reviewsFirestore.value || !Array.isArray(reviewsFirestore.value)) {
        return [];
      }

      const searchId = Number(props.serieId); // Convertir a número para comparar con serieId
      const filtered = reviewsFirestore.value.filter((review) => {
        return review.serieId === searchId; // Comparar números con números
      });

      return filtered;
    });

    return {
      store,
      reviewsFirestore,
      filteredReviews,
      isLoggedIn,
      userEmail,
      isDeleting,
      showDeleteModal,
      confirmDelete,
      handleDelete,
      closeDeleteModal,
      showEditModal,
      reviewToUpdate,
      selectedReview,
      updateReview,
      isUpdating,
      closeEditModal,
      handleUpdate,
    };
  },

  components: {
    Star,
    Edit,
    Trash2,
    DeleteModal,
    UpdateReview,
  },
  
};
</script>

<template>
  <div>
    <div
      v-for="review in filteredReviews"
      :key="review.id"
      class="pt-4 h-auto lg:px-20"
    >
      <div
        class="reviewrounded-2xl bg-secondaryBackground h-full flex flex-col p-6"
      >
        <div class="flex flex-row justify-between w-full items-center mb-4">
          <div class="flex flex-row items-center gap-2">
            <button>
              <Star color="#dcd62e" strokeWidth="{3}" fill="#dcd62e" />
            </button>
            <span class="font-medium">{{ review.rating }}/10</span>
            <span class="text-gray-400 px-4">
              <data value="dateNow">{{ review.lastUpdate }}</data>
            </span>
            <div class="text-gray-300 text-sm">
              {{ review.userEmail }}
            </div>
          </div>

          <div class="flex flex-row gap-2">
            <button
              v-if="isLoggedIn && userEmail === review.userEmail"
              @click="updateReview(review)"
              class="p-2 hover:bg-gray-700/30 rounded-full transition-colors"
            >
              <Edit class="w-5 h-5 stroke-white" />
            </button>

            <button
              v-if="isLoggedIn && userEmail === review.userEmail"
              @click="confirmDelete(review.id)"
              :disabled="isDeleting"
              class="p-2 hover:bg-gray-700/30 rounded-full transition-colors"
            >
              <Trash2 class="w-5 h-5 stroke-white" />
            </button>
          </div>
        </div>

        <div class="text-gray-300 leading-relaxed">
          {{ review.comment }}
        </div>
      </div>
    </div>
    <DeleteModal
      :is-open="showDeleteModal"
      :is-deleting="isDeleting"
      @close="closeDeleteModal"
      @confirm="handleDelete"
    />
    <UpdateReview
      :is-open="showEditModal"
      :is-updating="isUpdating"
      :review="selectedReview"
      @close="closeEditModal"
      @confirm="handleUpdate"
    />
  </div>
</template>
