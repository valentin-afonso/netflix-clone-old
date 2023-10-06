import React from 'react'
import Item from './Item'
import '../../../styles/layout/ListItems.css'
import { useEffect, useState } from "react";
import { getPopularMovies } from "../../../api/tmdb/getPopularMovies"
import { getNowPlayingMovies } from "../../../api/tmdb/getNowPlayingMovies"
import { getTopRatedMovies } from "../../../api/tmdb/getTopRatedMovies"
import { getUpcomingMovies } from "../../../api/tmdb/getUpcomingMovies"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function ListItems(props) {

  const [listItems, setListItems] = useState([])
  const [isCurrentData, setIsCurrentData] = useState(true)
  
  useEffect(() => {
    if (props.typeData === 'popular') {
      getPopularMovies()
        .then(items => {
          console.log(items)
          if (typeof items === 'object' && !Array.isArray(items)) {
            const dataArray = Object.values(items.results);
            setListItems(dataArray);
          } else {
            setListItems(items);
            setIsCurrentData(false);
          }
        })
        .catch(error => {
          console.error("Erreur lors de la récupération des données de l'API :", error);
        });
    }
    if (props.typeData === 'now') {
      getNowPlayingMovies()
        .then(items => {
          console.log(items)
          if (typeof items === 'object' && !Array.isArray(items)) {
            const dataArray = Object.values(items.results);
            setListItems(dataArray);
          } else {
            setListItems(items);
            setIsCurrentData(false);
          }
        })
        .catch(error => {
          console.error("Erreur lors de la récupération des données de l'API :", error);
        });
    }
    if (props.typeData === 'top') {
      getTopRatedMovies()
        .then(items => {
          console.log(items)
          if (typeof items === 'object' && !Array.isArray(items)) {
            const dataArray = Object.values(items);
            setListItems(dataArray);
          } else {
            setListItems(items);
            setIsCurrentData(false);
          }
        })
        .catch(error => {
          console.error("Erreur lors de la récupération des données de l'API :", error);
        });
    }
    if (props.typeData === 'upcoming') {
      getUpcomingMovies()
        .then(items => {
          console.log(items)
          if (typeof items === 'object' && !Array.isArray(items)) {
            const dataArray = Object.values(items.results);
            setListItems(dataArray);
          } else {
            setListItems(items);
            setIsCurrentData(false);
          }
        })
        .catch(error => {
          console.error("Erreur lors de la récupération des données de l'API :", error);
        });
    }
  }, [props.typeData])

  return (
    <div className={'list_items ' + props.typeData }>
        <h2>{props.title}</h2>
        {!isCurrentData &&
          <span className='info_data'><InfoOutlinedIcon /> this is fictive data</span>
        }
        <ul className='slider'>
          {listItems.map((item, index) => (
              <li className='item' key={item.id} data-num={index + 1}>
                <Item 
                  id={item.id}
                  title={item.title}
                  genre_ids={item.genre_ids}
                  overview={item.overview}
                  release_date={item.release_date}
                  vote_average={item.vote_average}
                  vote_count={item.vote_count}
                  adult={item.adult}
                  poster_path={props.typeData === 'top' ? item.poster_path : item.backdrop_path}
                />
              </li>
            ))
          }
        </ul>
    </div>
  )
}
