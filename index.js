// Add your code here
//CRUD GET POST PATCH DELETE (cards, forms, buttons, update/delete json server)
// patch 
    // // updateDOnation(animalObj){
    //     fetch(`https..`${animalObj.id}), {
    //         method: 'PATCH', 
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(animalObj)
    //     })
    //     .then(res => res.json())
    //     .then(animal => console.log(animal))
    // }
// DELETE (event listner when creating card)
    // card.querySelector('#set_free).addEventListener('click, () => {
     //   card.innerHTML = '' //empty string or card.remove()
    //})
    // function deleteAnimal(id){
    //     fetch(`html..${id }`){
    //         method:'DELETE', 
    //         headers: {
    //             'COntent0-Type':'application/json'
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(animal => console.log(animal))
    // }
// fetch(destinationURL, configurationObject); //3 core componenets needed for standard POST requests
// const formData = {
//          dogName: "Byron",
//         dogBreed: "Poodle",
//     }) 
// const confirgurationObject = {
//     method: "POST"
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//     },
//     body: JSON.stringify({          ///must be a string
// };
// ////////OR
// fetch("http://localhost:3000/dogs") {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle",
// }

// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     });
// }
function submitData(name, email) {
  
    const obj =  {
    method: "POST", 
    headers: { 
       
    "Content-Type": "application/json",
        Accept: "application/json" 
    },//A body with the name and email passed in as arguments to submitData. These should be assigned to name and email keys within an object. 
        body: JSON.stringify({
            name: name,
            email: email       }),
}

return fetch("http://localhost:3000/users", obj)
    .then(function (resp) {
        return resp.json();
    })
    .then(function (object) {
        document.body.innerHTML = object.id
    })
    .catch(function (error) {
        document.body.innerHTML = error["message"]
        alert("ERROR!");
        console.log(error.message);
    })
}