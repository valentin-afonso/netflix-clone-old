import React from 'react'
import Item from './Item'

export default function ListItems() {
  return (
    <div>
        <h2>Title list</h2>
        <ul>
            <li>
                <Item />
            </li>
            <li>
                <Item />
            </li>
        </ul>
    </div>
  )
}
