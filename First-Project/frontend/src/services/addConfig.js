const BASE_URL = 'http://localhost:3000'
export function getUsersById(id){
    fetch(`${BASE_URL}/getUsersById`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
