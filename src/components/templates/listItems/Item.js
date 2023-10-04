import React, { useState } from 'react';
import '../../../styles/layout/Item.css'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Item(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const expandMore = async (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };
  const itemContentClass = isExpanded ? 'item_content js-active' : 'item_content';
  return (
    <div className={itemContentClass}>
      <div className='container_image'>
        <img src={'https://image.tmdb.org/t/p/w500' + props.poster_path} alt="cover" />
        <p className='title'>{props.title}</p>
      </div>
      <div className='container_bottom'>
        <ul className='action_wrapper'>
          <li>
            <a href="/"><FavoriteBorderOutlinedIcon /></a>
          </li>
          <li>
            <a href="/"><AddCircleOutlineOutlinedIcon /></a>
          </li>
          <li>
            <a href="/" onClick={expandMore}><ExpandMoreIcon /></a>
          </li>
        </ul>
        <ul className='info_wrapper'>
          <li className='date'>{props.release_date}</li>
          <li className='note'>
            <p className='note_average'>{props.vote_average}</p>
            <p className='note_count'>{props.vote_count} votes</p> 
          </li>
          <li className='adult'>+18</li>
        </ul>
        <p className='overview'>{props.overview}</p>
        <ul className='gender_wrapper'>
          <li>Action</li>
          <li>Dystopique</li>
          <li>Aventure</li>
        </ul>
      </div>
    </div>
  )
}
