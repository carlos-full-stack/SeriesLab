<script >
import { LogOut,UserRound } from 'lucide-vue-next';
import {useUserStore} from '../../../../stores/userStore.js'
import { useLoginState } from '../../../../stores/stateWidgetsStore.js';
import {auth} from '../../../../firebase/firebase.js';
import { signOut } from 'firebase/auth';

export default {

  //Para llamar al nombre del usuario
  setup() {
    const userStore = useUserStore();
    const showLogIn = useLoginState();

    return {
      userStore, // Accediendo al store completo
      showLogIn,
    };
  },
  
  //Aquí llamamos a todos los componentes
    components:{
      LogOut,
      UserRound,
    },
    data(){
        return{
            
        }
    },
    methods:{
      async logout(){

        try{
          //Cierro sesión usuario de Firestore
          await signOut(auth)

          //Limpio el estado de Pinia
          this.userStore.clearUser();
          console.log('Usuario deslogueado');
        }catch(e){
          console.error(`Error cerrando la sesión: ${e}`);
        }
      }
    
    }
}
</script>

<template>
<div class="grid grid-cols-2 gap-y-2 w-full text-sm">
  <div v-if="showLogIn.showLoginMenu" class="fixed z-30 h-screen bg-backgroundColor bg-opacity-90 w-full ">
      
      <LogInAuth/>
    </div>

  <div class="flex col-span-2 justify-between mb-2  text-sm">
    <div class="flex flex-row items-center justify-center gap-x-3 ">
      <!-- <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="rounded-full w-8 h-8" alt=""> -->
      <div class="flex flex-row gap-2">
        <span >Hola </span>
        <span v-if="userStore.isLoggedIn" class="text-primary">{{userStore.userEmail}} </span>
        <span v-else class="text-purple-300" >invitad@</span>
      </div>
      
      
      
    </div>
    <button v-if="userStore.isLoggedIn" @click="logout" class="hover:text-purple-300 transition-all duration-500" >
      <LogOut />
    </button>
    <button v-else @click="showLogIn.toggleMenuLogin()" class="text-sm text-purple-300  hover:text-primary transition-all duration-500">
      Log In
    </button>
  </div>
  <span class="">Total reviews</span>
  <span class="text-right">8</span>
  <span class="text-sm">Votos</span>
  <span class="text-right">4</span>
</div>
</template>
