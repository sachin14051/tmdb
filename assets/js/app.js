// alert("hii");
let cl=console.log;
cl(movieArray);

const movieContainer = document.getElementById("movieContainer");

result= "";


movieArray.forEach(function(movie){
result +=  `
<div class="col-md-3 mb-4">
<div class="card">
<figure class="movieContainer" >
 <img src="https://image.tmdb.org/t/p/w1280/${movie.poster_path}" alt="poster" title="poster" class="img-fluid">


  <figCaption>
    <div class="heading">
    <div class="row">
      <div class="col-md-9">
          <p> ${movie.original_title}</p>
      </div>
      <div class="rating">
      <div class="col-md-3 d-flex align-items-center">
         <span class="badge badge-warning"> ${movie.vote_average} </span>
      </div>
    </div>
    </div>
  </div>
  <div class="overview">
    <h3>
      <em>overview</em>
    </h3>
    <p>
    ${movie.overview}
    </p>
  </div>
  </figCaption>
</div>
</figure>
</div>




        `
})

movieContainer.innerHTML = result;


