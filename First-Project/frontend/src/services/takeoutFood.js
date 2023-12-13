
const BASE_URL = 'http://localhost:3001';

export async function getAllOrderData() {
    try {
      const response = await fetch(`${BASE_URL}/api/order/getOrderItem`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  export async function getOrderById(id) {
    try {
      const response = await fetch(`${BASE_URL}/api/order/${id}/getOrderById`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
