// $document.ready(function(){
//     $.ajax({
//         url: 'https://it-its.id/api/movies',
//         method: 'GET',
//         success: function(data){
//             displayMovies(data);
//         },
//         error: function(error){
//             console.error("Error fetching data : ", error);
//         }
//     });

//     function displayMovies(movies){
//         let output = '';

//         $.each(movies, function(key, movie){
//             output += `
//             <div class="col-lg-6 col-12 mb-4">
//                 <div class="card shadow p-3 bg-white rounded">
//                     <div class="card-body ">
//                         <h5 class="card-title">${movie.Title}</h5>
//                         <p class="card-text">${movie.Plot}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         $('#moviesList').html(output);
//     }
// });

fetch('https://it-its.id/api/movies')
.then(res => res.json())
.then((data) => {
    for(let i = 0; i < data.length; i++){
        document.getElementById(`judul-film-${i+1}`).innerHTML = data[i].Title
        document.getElementById(`plot-film-${i+1}`).innerHTML = data[i].Plot
    }
}).catch(err => console.error(err))

// const text = require('./movies.json')
// const obj = JSON.parse(text)
// document.getElementById("judul-film-1").innerHTML = obj[0].title