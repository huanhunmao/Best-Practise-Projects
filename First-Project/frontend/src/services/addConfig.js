const BASE_URL = 'http://localhost:3000'
export function getUsersById(userId){
    fetch(`${BASE_URL}/api/users/${userId}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
