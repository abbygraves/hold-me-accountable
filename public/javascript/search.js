// const User = require("../../models/");

// const { User } = require("../../models/User");

async function searchBarHandler(event) {
  event.preventDefault();

  const username = document.querySelector('input[name="search-field"]').value.trim();
  const id = username; 

  console.log(username)
  const response = await fetch(`/api/users/` + id, {
  method: 'GET'
  });

  if (response.ok) {
    document.location.replace('/api/users/' + username);
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.search-form').addEventListener('submit', searchBarHandler);








// const getUsers = (formData = {}) => {
//   let queryUrl = '/api/users?';

//   Object.entries(formData).forEach(([key, value]) => {
//     queryUrl += `${key}=${value}&`;
//   });

//   fetch(queryUrl)
//     .then(response => {
//       if (!response.ok) {
//         return alert(`Error: ${response.statusText}`);
//       }
//       return document.location.replace(username);
//     });
// }



// document.querySelector('.search-form').addEventListener('submit', getUsers);



// const handleGetZookeepersSubmit = event => {
//   event.preventDefault();
//   const nameHTML = $zookeeperForm.querySelector('[name="name"]');
//   const name = nameHTML.value;

//   const ageHTML = $zookeeperForm.querySelector('[name="age"]');
//   const age = ageHTML.value;

//   const zookeeperObject = { name, age };

//   getZookeepers(zookeeperObject);
// };


// $zookeeperForm.addEventListener('submit', handleGetZookeepersSubmit);

