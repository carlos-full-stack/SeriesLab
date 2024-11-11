<script >
// métodos de Firebase:
import { getFirestore, doc, collection, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

// credenciales del Firestore:
import { app } from '../../../../firebase/firebase'

export default {
    
    props:{
        usuario:{
            type: String,
            required:true,
        },
        nombreSerie:{
            type: String,
            required:true,
        },
        comentario:{
            type: String,
            required:true,
        },
        rating:{
            type: Number,
            required:true,
        },
    },
    data(){
        return{
            modificar: false,
            comentarioModificado:'',
            usuarioModificado:'',
            ratingModificado:'',
        };
    },
    methods:{
        modificarDatos(){
            console.log('Modificando datos');
            this.modificar = true
            console.log(this.modificar);
        },
        async guardarDatos(){
            //Conexión con la app de Firestore que se encuentra en el firebase.js
            const db = getFirestore(app);
            console.log(this.nombreSerie); //OK
            
            try{
                //Encuentro el documento con el email
                const userDocRef = doc(db, 'all-reviews-series');
                   
                await updateDoc(userDocRef,{
                    //importante: el email no debe ser modificado
                    firstName:this.nuevoNombre,
                    lastName:this.nuevoApellido,
                })
               
                this.modificar = false;
                console.log('Datos del usuario actualizados');
                
            }catch(e){
                console.error(`ERROR AQUÍ: ${e}`);
                
            }
        },
        async eliminarDatos(){
             //Conexión con la app de Firestore que se encuentra en el firebase.js
            const db = getFirestore(app);
            console.log(this.email); //OK

            try{
                const userDocRef = doc(db, 'db-usuarios-3', this.email);
                await deleteDoc(userDocRef);
                console.log('Eliminar datos');
                
            }catch(e){
                console.error(`ERROR AL ELIMINAR: ${e}`);
            }
        }
    }
}


</script>
<template>

    <div v-if= "modificar == false">
    
        <div class="bg-secondaryBackground rounded-xl py-5 px-5 mt-5">

            <div class="datos">Serie: {{ nombreSerie }}</div>
            <div class="datos">Usuario: {{ usuario }}</div>
            <div class="datos">Comentario: {{ comentario }}</div>
            <div class="datos">Rating: {{ rating }}</div>
            <div class="botones-update">
    
                <!-- <button 
                @click="modificarDatos()"
                type="submit">Modificar</button>
                <button 
                @click="eliminarDatos()"
                type="submit">Eliminar</button> -->
            </div>
            
        </div>
    </div>
    <div v-else = "modificar == true">
    
        <div class="card">
            <input type="text" v-model="nuevoNombre" :placeholder="nombre" >
            <input type="text" v-model="nuevoApellido" :placeholder="apellido"  >
            <!-- <input type="text" v-model="nuevoEmail" :placeholder="email"> -->
            
            <div class="botones-update">
    
                <button 
                 @click="guardarDatos()"
                type="submit">Grabar</button>
                
            </div>
            
        </div>
    </div>
</template>
