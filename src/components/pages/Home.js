import React from 'react'
import Filters from '../templates/Filters/Filters'
import ListItems from '../templates/ListItems/ListItems'
import '../../styles/pages/Home.css'
import { useAuth } from "../contexts/AuthProvider";

export default function Home() {
  return (
    <div>
        <Filters />
        <ListItems />
        <ListItems />
        <ListItems />
        <ListItems />
    </div>
  )
}
