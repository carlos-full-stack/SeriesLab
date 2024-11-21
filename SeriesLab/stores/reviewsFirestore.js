import { defineStore } from "pinia";
import {app} from '../firebase/firebase.js';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import UpdateReview from "../src/components/principales/reviews/UpdateReview.vue";

//Conexión con la app de Firestore que se encuentra en el firebase.js
const db = getFirestore(app);

//Traer todas las reviews de Firestore:
async function getAllReviewsFirestore(){
    const todasLasColecciones = collection(db,'all-reviews-series');
    const todasSnapshot = await getDocs(todasLasColecciones);
    const todasLasReviewsArray = todasSnapshot.docs.map(doc=>({
        id:doc.id,
        ...doc.data()
    }));
    return todasLasReviewsArray //Aquí devuelve un array de objetos (reviews) - es el "R"EAD del CRUD
}

export const useReviewsFirestore = defineStore('reviews',{

    state:()=>({
        //Todas las reviews de firestore (50 objetos):
        reviewsFirestore:[]
    }),
    actions:{
        //Read reviews:
        async readReviews(){
            this.reviewsFirestore = await getAllReviewsFirestore();
            console.log('Reviews actualizadas:', this.reviewsFirestore);
        },
    
        //Crear review
        createReview(reviewObjeto){
            return 
        },
        
        //Actualizar review
        updateReview(){
            //filter contacto
            return
        },
        
        //Borrar review
        async deleteReview(reviewId){
            try {
                const reviewRef = doc(db, 'all-reviews-series', reviewId);
                await deleteDoc(reviewRef);
                // Actualizar el estado local después de borrar
                await this.readReviews();
                return true;
            } catch (error) {
                console.error('Error al eliminar la review:', error);
                return false;
            }
        },
        // Editar review
        async UpdateReview(reviewId, updatedReview) {
            try {
              const reviewRef = doc(db, 'all-reviews-series', reviewId);
              await updateDoc(reviewRef, updatedReview);
          
              // Actualizar el estado local después de la actualización
              await this.readReviews();
              return true;
            } catch (error) {
              console.error('Error al actualizar la review:', error);
              return false;
            }
          }
    }
})
