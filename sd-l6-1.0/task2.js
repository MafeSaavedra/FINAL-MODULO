// Task 2: listUsers()
import fetch from 'node-fetch';
import { getServerURL } from './task1.js';

export async function listUsers() {
    let url = `${getServerURL()}/users`;
    
    let response = await fetch(url);
    
    let data = await response.json();
    
    let formattedUsers = data.map(user => 
        `{\n  id: ${user.id},\n  first_name: '${user.first_name}',\n  last_name: '${user.last_name}',\n  email: '${user.email}'\n}`
    ).join(',\n'); // Une todos los bloques de texto con una coma y un salto de línea
    
   
    let customString = `[\n${formattedUsers}\n]`;
    
    console.log(customString);
}

if (import.meta.url === `file://${process.argv[1]}`) {
    listUsers();
}
