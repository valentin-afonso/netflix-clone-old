export async  function getMoviesWithIds(movies_ids) {
    const moviePromises = movies_ids.map(movieId => getMovieDetails(movieId));
    return Promise.all(moviePromises);
}

function getMovieDetails(movies_ids) {
    var api_key = '8733418fe694d5bbac12c7a9de6b0457'
    const url = `https://api.themoviedb.org/3/movie/${movies_ids}?api_key=${api_key}`;
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP! Statut : ${response.status}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des détails du film :', error);
      });
  }