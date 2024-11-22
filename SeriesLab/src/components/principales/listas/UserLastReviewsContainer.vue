<script>
import { useReviewsFirestore } from '../../../../stores/reviewsFirestore';
import { useUserStore } from '../../../../stores/userStore';
import CardUserLastReviews from '../Cards/CardUserLastReviews.vue';

export default {
  components: {
    CardUserLastReviews,
  },
  setup() {
    const useReviews = useReviewsFirestore();
    const useUser = useUserStore();
    return {
      useReviews,
      useUser,
    };
  },
  data() {
    return {
      allreviews: [], // Almacena las reviews obtenidas del store
      userEmail: '', // Almacena el correo del usuario
      dummyReviews: [
        {
          titulo: 'BoJack Horseman 2',
          parrafo: "Conoce al caballo más querido de los 90's",
          imgUrl: 'https://f4.bcbits.com/img/a2983687285_10.jpg',
        },
        {
          titulo: 'Fargo 2',
          parrafo: 'Serie de televisión antológica estadounidense',
          imgUrl:
            'https://www.lanacion.com.ar/resizer/v2/jon-hamm-como-el-malevolo-roy-tillman-en-la-7HN26MYSSVGYNETPK35466BZD4.JPG?auth=2b6473fefb00b2a38f746a4f7f7b992456a263440cb807a6b140a45704af24e6&width=880&height=586&quality=70&smart=false&focal=916,406',
        },
      ],
    };
  },
  async mounted() {
    // Obtiene el usuario actual
    this.getUSer();

    if (!this.userEmail) {
    console.warn('El usuario no está definido');
    return;
  }

    // Carga las reviews desde el store y las asigna a `allreviews`
    try {
      const reviews = await this.useReviews.reviewsFirestore;
      this.allreviews = reviews || [];
    } catch (error) {
      console.error('Error al cargar las reviews:', error);
    }

    // Debug
    console.log('TESTING REVIEWS');
    console.log(this.allreviews);
    console.log(this.user);
  },
  methods:{
    async getUSer(){
      this.userEmail = this.useUser.userEmail
      console.log(`USUARIO: ${this.userEmail}`);
      
    },
    // Filtrar objetos por el parámetro 'email'
  filterObjectsByEmail(arrayPadre, getUSer) {
    return this.allreviews.filter(obj => obj.userEmail && obj.email.toLowerCase() === email.toLowerCase());
  }
  }
};
</script>

<template>
  <div class="last-reviews-container flex flex-col w-full">
    <h3 class="pb-2">User last reviews</h3>
    <div class="flex flex-col gap-y-5 rounded-2xl">
      <CardUserLastReviews v-for="r in allreviews" :key="r.idReview" :review="r" />
    </div>
  </div>
</template>
