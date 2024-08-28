import fetch from 'node-fetch';
import { getServerURL } from './task1.js';

// Función para agregar un nuevo usuario
export async function addUser(first_name, last_name, email) {
    // URL del servidor JSON
    const url = 'http://localhost:3000/users';  // Cambia esto a la URL de tu servidor JSON
    // Hace la solicitud a la URL y espera a que se complete
    const response2 = await fetch(url);
    
    // Convierte la respuesta de la solicitud a formato JSON
    let data = await response2.json();
    let length = `${data.length+1}`;

    // Datos del nuevo usuario
    const newUser = {
        id: length,
        first_name: first_name,
        last_name: last_name,
        email: email
    };


    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    });

        // Verificar si la solicitud fue exitosa
    
}



