import React, { useState, useEffect } from 'react';
// import Filters from '../templates/Filters/Filters'
import ListItems from '../templates/ListItems/ListItems'
import '../../styles/pages/Home.css'
import { useAuth } from "../contexts/AuthProvider";
import { getFavouriteMovies } from "../../api/supabase/getFavouriteMovies"

export default function Home() {
  const arrayId = []
  const [favouritesMovies, setFavouritesMovies] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      getFavouriteMovies(user.id)
        .then(data => {
          if (data) {
            data.map(movie => (
              arrayId.push(movie.id_movie)
            ))
            setFavouritesMovies(arrayId);
          }
        })
        .catch(error => {
          console.error("Erreur lors de la récupération des données de l'API :", error);
        });
    }
  }, [user]);
  return (
    <div className='homepage'>
        {favouritesMovies.length > 0 && (
          <ListItems 
            title = 'Favourites'
            typeData = 'fav'
            moviesIds = {favouritesMovies}
          />
        )}
        <ListItems 
          title = 'Popular'
          typeData = 'popular'
        />
        <ListItems 
          title = 'Now playing'
          typeData = 'now'
        />
        <ListItems 
          title = 'Top rated'
          typeData = 'top'
        />
        <ListItems 
          title = 'Upcoming'
          typeData = 'upcoming'
        />
    </div>
  )
}
