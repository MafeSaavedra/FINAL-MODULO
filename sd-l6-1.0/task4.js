// Task 4: delUser(number)
import { getServerURL } from './task1.js';
import fetch from 'node-fetch';


export async function delUser(id) {
    
    const url = `http://localhost:3000/users/${id}`; 
    
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

}



