import React from 'react'
// import Filters from '../templates/Filters/Filters'
import ListItems from '../templates/ListItems/ListItems'
import '../../styles/pages/Home.css'

export default function Home() {
  return (
    <div className='homepage'>
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
