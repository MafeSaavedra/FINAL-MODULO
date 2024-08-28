// Task 2: listUsers()
// Importa la función `fetch` desde el paquete 'node-fetch' para hacer solicitudes a la web
import fetch from 'node-fetch';
// Importa una función llamada `getServerURL` desde otro archivo llamado 'task1.js'
import { getServerURL } from './task1.js';

// Exporta una función llamada `listUsers` que obtendrá y mostrará usuarios
export async function listUsers() {
    // Crea la URL para hacer una solicitud a la API de usuarios usando la función importada
    let url = `${getServerURL()}/users`;
    
    // Hace la solicitud a la URL y espera a que se complete
    let response = await fetch(url);
    
    // Convierte la respuesta de la solicitud a formato JSON
    let data = await response.json();
    
    // Toma cada usuario del JSON y lo convierte en una cadena formateada
    // Cada usuario se convierte en un bloque de texto con sus detalles
    let formattedUsers = data.map(user => 
        `{\n  id: ${user.id},\n  first_name: '${user.first_name}',\n  last_name: '${user.last_name}',\n  email: '${user.email}'\n}`
    ).join(',\n'); // Une todos los bloques de texto con una coma y un salto de línea
    
    // Crea una cadena final que envuelve todos los usuarios en corchetes
    // Añade saltos de línea al principio y al final para que se vea mejor en la consola
    let customString = `[\n${formattedUsers}\n]`;
    
    // Muestra la cadena final en la consola
    console.log(customString);
}

// Verifica si este archivo se está ejecutando directamente desde la línea de comandos
// Si es así, llama a la función `listUsers` para que se ejecute
if (import.meta.url === `file://${process.argv[1]}`) {
    listUsers();
}
