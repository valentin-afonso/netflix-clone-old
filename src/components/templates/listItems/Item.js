import React, { useState } from 'react';
import '../../../styles/layout/Item.css'
import ImgTest from '../../../images/img-dune.jpg'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Item() {
  const [isExpanded, setIsExpanded] = useState(false);
  const expandMore = async (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };
  const itemContentClass = isExpanded ? 'item_content js-active' : 'item_content';
  return (
    <div className={itemContentClass}>
      <div className='container_image'>
        <img src={ImgTest} alt="cover" />
        <p className='title'>Dune</p>
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
          <li className='date'>2023</li>
          <li className='note'>
            <p className='note_average'>4,5</p>
            <p className='note_count'>145votes</p> 
          </li>
          <li className='adult'>+18</li>
        </ul>
        <p className='overview'>Paul Atreides, un jeune homme brillant et doué au destin plus grand que lui-même, 
        doit se rendre sur la planète la plus dangereuse de l'univers afin d'assurer 
        l'avenir de sa famille et de son peuple.</p>
        <ul className='gender_wrapper'>
          <li>Action</li>
          <li>Dystopique</li>
          <li>Aventure</li>
        </ul>
      </div>
    </div>
  )
}
