const API_KEY = '983cdc39';

const btn = document.getElementById('search-btn');

btn.onclick = function(){
  const search = document.getElementById('search').value;
  if(search !== ''){
    searchMovies(search)
  }
}
async function searchMovies(search){
  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&S=${search}&type=movie`)
const json = await response.json();

  if(json.Response === 'True' ){
  let list = ''
  json.Search.forEach(item => {
      list+= movieHTML(item);     
  });
  document.getElementById('movies-list').innerHTML = list;
  } else{
      alert(json.Error)
  }
}

document.addEventListener('click', function(event){
    if(event.target.classList.contains('btn-detail')){
    getDetailMovie(event.target.dataset.id)
}
if(event.target.classList.contains('btn-fav')){
  addToFav(event.target.dataset.info)
}
});

function addToFav(info) {
    const filmData = JSON.parse(info);
    // const rez = localStorage.getItem('fav_list');
    // let favList = [];
    // if (rez) {
    //   favList = JSON.parse(rez);
    // }
    const favList = JSON.parse(localStorage.getItem('fav_list')) || [];
    const issetIndex = favList.findIndex((el) => el.imdbID === filmData.imdbID);
    if (issetIndex !== -1) {
      favList.splice(issetIndex, 1);
    } else {
      favList.push(filmData);
    }
    localStorage.setItem('fav_list', JSON.stringify(favList));
    showFavMovies();
  }

async function getDetailMovie(id){
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
    const json = await response.json();
    console.log(json);
}

function movieHTML(item) {
    return `
    <div class="card" style="width: 18rem;">
  <img src="${item.Poster}" class="card-img-top" alt="${item.Title}">
  <div class="card-body">
  <h5 class="card-title">${item.Title}</h5>
  <p class="card-text"><b>Year:</b> ${item.Year}</p>
  <button class="btn btn-primary btn-detail" data-id="${item.imdbID}">Detail</button>
  <button class="btn btn-warning btn-fav" data-info='${JSON.stringify(item)}'>Add to fav</button>
  </div>
  </div>
    `
  }
  
  function showFavMovies() {
    const favList = JSON.parse(localStorage.getItem('fav_list')) || [];
    let list = '';
    favList.forEach((item) => {
      list += movieHTML(item);
    });
    document.getElementById('fav-movies-list').innerHTML = list;
  }
  
  showFavMovies();