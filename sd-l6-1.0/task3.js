import fetch from 'node-fetch';
import { getServerURL } from './task1.js';


export async function addUser(first_name, last_name, email) {
    // URL del servidor JSON
    const url = 'http://localhost:3000/users';  
    const response2 = await fetch(url);
    

    let data = await response2.json();
    let length = `${data.length+1}`;

  
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

        
}



