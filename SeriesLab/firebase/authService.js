// src/services/authService.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase.js";

// Registro de usuario
export const signup = async (email, password, additionalData = {}) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Guardar datos adicionales en Firestore
  await setDoc(doc(db, "usuarios-seriesLab", user.uid), {
    email: user.email,
    ...additionalData,
  });

  return user;
};

// Inicio de sesión
export const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};
