import React from 'react'
import Filters from '../templates/Filters/Filters'
import ListItems from '../templates/ListItems/ListItems'
import '../../styles/pages/Home.css'
import { useAuth } from "../contexts/AuthProvider";

export default function Home() {
  const { user } = useAuth();
  return (
    <div>
       <div>You are logged in and your email address is {user.email}</div>
        <Filters />
        <ListItems />
        <ListItems />
        <ListItems />
        <ListItems />
    </div>
  )
}
