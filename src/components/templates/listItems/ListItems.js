import React from 'react'
import Item from './Item'
import '../../../styles/layout/ListItems.css'
import { useEffect, useState } from "react";
import { getPopularMovies } from "../../../api/tmdb/getPopularMovies"

export default function ListItems(props) {

  const [listItems, setListItems] = useState([])
  
  useEffect(() => {
    if (props.typeData === 'popular') {
      getPopularMovies()
        .then(items => {
          if (typeof items === 'object' && !Array.isArray(items)) {
            const dataArray = Object.values(items.results);
            setListItems(dataArray);
          } else {
            console.error("Les données de l'API ne sont pas au format de tableau.");
          }
        })
        .catch(error => {
          console.error("Erreur lors de la récupération des données de l'API :", error);
        });
        console.log(listItems)
   
    }
  }, [props.typeData])

  return (
    <div className='list_items'>
        <h2>{props.title}</h2>
        <ul className='slider'>
          {listItems.map(item => (
              <li className='item' key={item.id}>
                <Item 
                  id={item.id}
                  title={item.title}
                  genre_ids={item.genre_ids}
                  overview={item.overview}
                  release_date={item.release_date}
                  vote_average={item.vote_average}
                  vote_count={item.vote_count}
                  adult={item.adult}
                  poster_path={item.poster_path}
                />
              </li>
            ))
          }
        </ul>
    </div>
  )
}
