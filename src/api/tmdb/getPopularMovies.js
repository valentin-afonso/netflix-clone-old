export async  function getPopularMovies() {
    var api_key = '8733418fe694d5bbac12c7a9de6b0457'
    try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${api_key}`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let movies = await response.json();
        return movies
      } catch(err) {
        var arrayPopularMovies = [];
        const response = await fetch(`${process.env.PUBLIC_URL}/data/popularMovies.json`)
        const respoonseJson = await response.json();
        respoonseJson.forEach(function(item){
          arrayPopularMovies.push(item);
        });
        return arrayPopularMovies
      }
}
