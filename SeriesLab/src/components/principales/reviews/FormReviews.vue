<script>
import { Star } from 'lucide-vue-next';
import Button from '../buttons/Button.vue';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useUserStore } from '../../../../stores/userStore.js';

export default {
  components: {
    Button,
    Star
  },
  props: {
    serieId:{
        type: String,
        required:true,
        },
    nombreSerie: {
        type: String,
        required:true,
    },
    srcImg: {
        type: String,
        required:true,
    }
  },
  data() {
    return {
      userStore: useUserStore(),
      date: '',
      review: '',
      rating: '',
      userEmail: '',
      username: ''
    };
  },
  methods: {
    getCurrentData() {
      this.date = new Date().toLocaleDateString();
    },
    async submitReview() {
      try {
        await addDoc(collection(getFirestore(), 'reviews'), {
          creationDate: this.date,
          comment: this.review,
          rating: this.rating,
          serieId: this.serieId,
          userEmail: this.userStore.userEmail,
        });
        alert('Review almacenada con éxito');
      } catch (e) {
        console.error('Error al almacenar la review: ', e);
      }
    },
  },


  mounted() {
    this.getCurrentData();
  }
};
</script>

<template>
  <div class="w-full flex flex-col justify-center items-center px-20 my-3">
    <div class="w-full bg-secondaryBackground grid grid-cols-3 justify-center rounded-2xl">
      <div class="header col-span-3 flex justify-between mx-10 mt-8">
        <div class="flex items-center">
          <div class="flex gap-x-2 items-center">
            <select v-model="rating" name="" id="" class="bg-mainBackground px-2 py-2">
              <option value="">Nota</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <span>/10</span><img src="" alt="">
          </div>
          <button><Star color="#dcd62e" strokeWidth={3} fill="#dcd62e" /></button>
        </div>
        <span v-if="userStore.isLoggedIn" class="text-primary">{{userStore.userEmail}} </span>
        <span v-else class="text-purple-300" >invitad@</span>
        <span class="text-center">{{ date }}</span>
      </div>
      <textarea v-model="review" class="col-span-3 mt-10 mb-5 mx-10 rounded bg-mainBackground h-40 text-gray-100 pt-3 pl-3" name="" id="" placeholder="Escribe tu review"></textarea>
      <div class="col-span-3 flex justify-center mb-5"><Button @click="submitReview" buttonText="Enviar"></Button></div>
    </div>
  </div>
</template>

<style scoped>
/* tus estilos aquí */
</style>