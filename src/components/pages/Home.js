import React from 'react'
import Header from '../templates/Header/Header'
import Filters from '../templates/Filters/Filters'
import ListItems from '../templates/ListItems/ListItems'

export default function Home() {
  return (
    <div>
        <Header />
        <Filters />
        <ListItems />
    </div>
  )
}
