const BASE_URL = 'http://localhost:3000';

export async function getAllUsers() {
    try {
      const response = await fetch(`${BASE_URL}/api/users/getUsers`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

export async function getUsersById(userId) {
  try {
    const response = await fetch(`${BASE_URL}/api/users/${userId}/getUserById`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function addNewUser({ id, name, email,tags }) {
    try {
      const response = await fetch(`${BASE_URL}/api/users/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, name, email,tags }),
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  export async function deleteUser(id) {
    try {
      const response = await fetch(`${BASE_URL}/api/users/${id}/delete`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

export async function updateUser({ _id, id, name, email,tags }) {
    // console.log('_id',_id);
    try {
      const response = await fetch(`${BASE_URL}/api/users/${id}/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, name, email,tags }),
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }