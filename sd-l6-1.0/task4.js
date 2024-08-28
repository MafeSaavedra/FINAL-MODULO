// Task 4: delUser(number)
import { getServerURL } from './task1.js';
import fetch from 'node-fetch';

// Función para eliminar un usuario
export async function delUser(id) {
    // URL del servidor JSON
    const url = `http://localhost:3000/users/${id}`; // Cambia esto a la URL de tu servidor JSON

    // Realiza la solicitud DELETE para eliminar el usuario con el ID dado
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

}



