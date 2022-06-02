// import React from 'react';
import axios from 'axios';

async function GetUsers() {
  const response = await axios.get('https://612537b63c91fb0017e729e6.mockapi.io/users');
  return response;
}

// get
async function GetUser(userId) {
  const response = await axios.get('https://612537b63c91fb0017e729e6.mockapi.io/users/' + userId);
  return response;
}

// delete
async function DeleteUser(id) {
  const response = await axios.delete('https://612537b63c91fb0017e729e6.mockapi.io/users/' + id);
  return response;
}

// edit
async function updateUser(id, values) {
  const response = await axios.put('https://612537b63c91fb0017e729e6.mockapi.io/users/' + id, values);
  return response;
}

// add
async function addUser(values) {
  const response = await axios.post('https://612537b63c91fb0017e729e6.mockapi.io/users/', values);
  return response;
}

export { GetUsers, GetUser, DeleteUser, updateUser, addUser };
