import React from 'react'
import Header from '../templates/header/Header'
import Filters from '../templates/filters/Filters'
import ListItems from '../templates/listItems/ListItems'

export default function Home() {
  return (
    <div>
        <Header />
        <Filters />
        <ListItems />
    </div>
  )
}
