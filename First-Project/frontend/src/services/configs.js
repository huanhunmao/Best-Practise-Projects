const BASE_URL = 'http://localhost:3001';

export async function getAllConfigs() {
    try {
      const response = await fetch(`${BASE_URL}/api/configs/getConfigs`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

export async function createNewConfig({ type, content }) {
    try {
      const response = await fetch(`${BASE_URL}/api/configs/createConfig`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type, content }),
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
