import React from 'react'
import Item from './Item'
import '../../../styles/layout/ListItems.css'

export default function ListItems() {
  return (
    <div className='list_items'>
        <h2>Title list</h2>
        <ul className='slider'>
            <li className='item'>
                <Item />
            </li>
            <li className='item'>
                <Item />
            </li>
        </ul>
    </div>
  )
}
