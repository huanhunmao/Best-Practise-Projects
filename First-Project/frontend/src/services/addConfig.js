const BASE_URL = 'http://localhost:3000';

export async function getUsersById(userId) {
  try {
    const response = await fetch(`${BASE_URL}/api/users/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
