fetch('https://it-its.id/api/movies')
.then(res => res.json())
.then((data) => {
    console.log(data);
}).catch(err => console.error(err))

// const text = require('./movies.json')
const obj = JSON.parse(data)
document.getElementById("judul-film-1").innerHTML = obj[0].title