import React from 'react'
import '../../../styles/layout/Header.css'

export default function Header() {
  return (
    <div className='header'>
        <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/">My fav</a>
            </li>
            <li>
              <a href="/">Search</a>
            </li>
            <li>
              <a href="/">Logout</a>
            </li>
            <li>
              <a href="/">Profil</a>
            </li>
        </ul>
    </div>
  )
}
