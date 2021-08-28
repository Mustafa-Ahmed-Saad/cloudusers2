// import React from 'react';
import axios from 'axios';

async function GetUsers() {
   const response = await axios.get('https://612537b63c91fb0017e729e6.mockapi.io/users');
   // console.log(response);
   return response;
}
// or you can use then
// function GetUsers() {
//    let response = axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
//       return response;
//    });
//    return response;
// }

// get
async function GetUser(userId) {
   const response = await axios.get('https://612537b63c91fb0017e729e6.mockapi.io/users/' + userId);
   // console.log(response);
   return response;
}

// delete
async function DeleteUser(id) {
   const response = await axios.delete('https://612537b63c91fb0017e729e6.mockapi.io/users/' + id);
   // console.log(response);
   return response;
}
// or you can use then
// function DeleteUser(id) {
//    let response = axios.get('https://jsonplaceholder.typicode.com/users/' + id).then((response) => {
//       return response;
//    });
//    return response;
// }

// edit
async function updateUser(id, values) {
   const response = await axios.put('https://612537b63c91fb0017e729e6.mockapi.io/users/' + id, values);
   // console.log(response);
   return response;
}

// add
async function addUser(values) {
   const response = await axios.post('https://612537b63c91fb0017e729e6.mockapi.io/users/', values);
   // console.log(response);
   return response;
}

export { GetUsers, GetUser, DeleteUser, updateUser, addUser };
