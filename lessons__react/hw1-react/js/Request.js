<div id="films">
  <div class="container">
     <h2 class="text-center mt-4">Heroku Films</h2>
     <div class="row">
     </div>	
  </div>
</div>
<script>
const fetchPromise = fetch("https://ghibliapi.herokuapp.com/films");
let mainContent = '',
   main = document.querySelector('#films .row');

fetchPromise.then(response => {
   return response.json();
}).then(films => {
films.forEach(film => {
  mainContent+=`
  <div class="col-md-6 film-heroku my-3">
    <div class="card border-primary">
  	<div class="card-header bg-primary text-light">
  	  <div class="card-title">
  	    <h2>${film.title}</h2>
  	    <h4>Director: ${film.director}</h4>
  	    <h4>Producer: ${film.producer}</h4>
  	    <h4>Release Date: ${film.release_date}</h4>
  	  </div>
  	</div>
  	<div class="card-body" data-id="${film.id}">
  	  <div class="card-text">${film.description}</div>
     </div>
    </div>
  </div>`;
  });
  console.log(films);
  main.innerHTML = mainContent;
});
</script>