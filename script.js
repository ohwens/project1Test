// fetch('https://www.foodrepo.org/api/v3/products?barcodes=2840051779', {
//     headers: new Headers({
//        'Authorization': 'Token token="eeb031e9c0741a8db4db1ae993d37c72"'
//     })
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });


// fetch('https://wger.de/api/v2/workout/', {
//     headers: new Headers({
//       'Authorization': 'Token f466f7e0fd9044453c8dd1d2ca30db8de4298425'})
//     })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

var nutrients = fetch('https://api.edamam.com/api/food-database/v2/parser?upc=051000012616&app_id=e5a14e07&app_key=6caa294ca6183b8a7cad61a11140987b')
.then(function(response){
  return response.json()
})
.then(function(data){
  console.log(data.hints[0].food.nutrients)
})

