import { defineStore } from "pinia";
import {app} from '../firebase/firebase.js';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

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
            console.log(this.reviewsFirestore);
            
            
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
        deleteReview(){

            //filter email usuario
            return
        }
    }
})


