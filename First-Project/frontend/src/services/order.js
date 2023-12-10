
const BASE_URL = 'http://localhost:3001';

export async function getAllOrder() {
    try {
      const response = await fetch(`${BASE_URL}/api/orders/getAllOrder`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
