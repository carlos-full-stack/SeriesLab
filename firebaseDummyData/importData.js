import fs from 'fs';
import admin from 'firebase-admin';
const serviceAccount = JSON.parse(fs.readFileSync('./serviceAccountKey2.json', 'utf8'));

// Inicializa Firebase solo si no se ha inicializado antes
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

// Cargar el archivo JSON
const rawData = fs.readFileSync('./dummyDataSeriesLab28102024.json');
const data = JSON.parse(rawData);

const importData = async () => {
  const batch = db.batch();

  // Verificar si la clave existe en el JSON y si es una lista
  if (Array.isArray(data['reviews-serieslab'])) {
    data['reviews-serieslab'].forEach((usuario, index) => {
      // Crea una referencia de documento única para cada usuario (puedes usar `index` o un ID específico)
      const docRef = db.collection('all-reviews-series').doc();
      
      // Asegurarse de que cada usuario es un objeto plano
      if (typeof usuario === 'object') {
        batch.set(docRef, usuario);
      } else {
        console.error(`El usuario en la posición ${index + 1} no es un objeto válido para Firestore`);
      }
    });

    // Ejecutar el batch
    await batch.commit();
    console.log('Datos importados exitosamente a Firestore');
  } else {
    console.error('El archivo JSON no contiene una lista de usuarios en "Nuevos-usuarios"');
  }
};

importData().catch(console.error);

//Ejecutar el siguiente código en la terminal para cargar el json en Firebase:
// node importData.js


